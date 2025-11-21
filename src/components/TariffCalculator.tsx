import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Calculator, Zap, Building, Factory, Info } from 'lucide-react';
import { tariffData } from './data/constants';

interface TariffCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CalculationResult {
  consumption: number;
  consumerType: 'commercial' | 'industrial';
  basePrice: number;
  transmissionPrice: number;
  distributionPrice: number;
  vat: number;
  totalPrice: number;
  pricePerKwh: number;
  breakdown: {
    category: string;
    amount: number;
    description: string;
  }[];
}

export function TariffCalculator({ isOpen, onClose }: TariffCalculatorProps) {
  const [consumption, setConsumption] = useState<string>('');
  const [consumerType, setConsumerType] = useState<'commercial' | 'industrial'>('commercial');
  const [voltageLevel, setVoltageLevel] = useState<string>('low');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateTariff = () => {
    const consumptionNum = parseFloat(consumption);
    if (!consumptionNum || consumptionNum <= 0) return;

    const tariff = tariffData[consumerType];
    let basePrice = 0;
    let pricePerKwh = 0;

    if (consumerType === 'commercial') {
      if (consumptionNum <= 500) {
        pricePerKwh = 3.47;
      } else if (consumptionNum <= 2000) {
        pricePerKwh = 3.89;
      } else {
        pricePerKwh = 4.23;
      }
      basePrice = consumptionNum * pricePerKwh;
    } else {
      // Industrial
      switch (voltageLevel) {
        case 'low':
          pricePerKwh = 4.52;
          break;
        case 'medium':
          pricePerKwh = 3.98;
          break;
        case 'high':
          pricePerKwh = 3.45;
          break;
        default:
          pricePerKwh = 4.52;
      }
      basePrice = consumptionNum * pricePerKwh;
    }

    const transmissionPrice = consumerType === 'commercial' ? 
      consumptionNum * 1.45 : 
      Math.round(basePrice * 0.15 * 100) / 100; // 15% для промислових
    
    const distributionPrice = consumerType === 'commercial' ? 
      consumptionNum * 0.98 : 
      Math.round(basePrice * 0.12 * 100) / 100; // 12% для промислових

    const subtotal = basePrice + transmissionPrice + distributionPrice;
    const vat = Math.round(subtotal * 0.2 * 100) / 100; // 20% VAT
    const totalPrice = Math.round((subtotal + vat) * 100) / 100;

    const breakdown = [
      {
        category: 'Електроенергія',
        amount: Math.round(basePrice * 100) / 100,
        description: `${consumptionNum} кВт·год × ${pricePerKwh} грн`
      },
      {
        category: 'Передача',
        amount: Math.round(transmissionPrice * 100) / 100,
        description: consumerType === 'commercial' ? 
          `${consumptionNum} кВт·год × 1.45 грн` : 
          '15% від вартості електроенергії'
      },
      {
        category: 'Розподіл',
        amount: Math.round(distributionPrice * 100) / 100,
        description: consumerType === 'commercial' ? 
          `${consumptionNum} кВт·год × 0.98 грн` : 
          '12% від вартості електроенергії'
      },
      {
        category: 'ПДВ (20%)',
        amount: vat,
        description: `20% від суми без ПДВ`
      }
    ];

    setResult({
      consumption: consumptionNum,
      consumerType,
      basePrice: Math.round(basePrice * 100) / 100,
      transmissionPrice: Math.round(transmissionPrice * 100) / 100,
      distributionPrice: Math.round(distributionPrice * 100) / 100,
      vat,
      totalPrice,
      pricePerKwh,
      breakdown
    });
  };

  const resetCalculator = () => {
    setConsumption('');
    setConsumerType('commercial');
    setVoltageLevel('low');
    setResult(null);
  };

  useEffect(() => {
    if (consumption && parseFloat(consumption) > 0) {
      calculateTariff();
    } else {
      setResult(null);
    }
  }, [consumption, consumerType, voltageLevel]);

  const getConsumerIcon = (type: string) => {
    switch (type) {
      case 'commercial':
        return Building;
      case 'industrial':
        return Factory;
      default:
        return Calculator;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-2xl" style={{ color: 'var(--energy-blue)' }}>
            <Calculator className="w-8 h-8" />
            <span>КАЛЬКУЛЯТОР ВАРТОСТІ ЕЛЕКТРОЕНЕРГІЇ</span>
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Розрахуйте орієнтовну вартість електроенергії на основі ваших параметрів споживання
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--energy-blue)' }}>
                Параметри розрахунку
              </h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="consumerType">Тип споживача</Label>
                  <Select value={consumerType} onValueChange={(value: 'commercial' | 'industrial') => setConsumerType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commercial">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span>Комерційний споживач</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="industrial">
                        <div className="flex items-center space-x-2">
                          <Factory className="w-4 h-4" />
                          <span>Промисловий споживач</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {consumerType === 'industrial' && (
                  <div>
                    <Label htmlFor="voltageLevel">Рівень напруги</Label>
                    <Select value={voltageLevel} onValueChange={setVoltageLevel}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Низька напруга (до 1 кВ)</SelectItem>
                        <SelectItem value="medium">Середня напруга (1-35 кВ)</SelectItem>
                        <SelectItem value="high">Висока напруга (понад 35 кВ)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <Label htmlFor="consumption">Планове споживання (кВт·год/міс)</Label>
                  <Input
                    id="consumption"
                    type="number"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    placeholder="Введіть обсяг споживання"
                    min="1"
                  />
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={calculateTariff}
                    disabled={!consumption || parseFloat(consumption) <= 0}
                    className="flex-1 energy-gradient text-white"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Розрахувати
                  </Button>
                  <Button
                    onClick={resetCalculator}
                    variant="outline"
                  >
                    Очистити
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tariff Info */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Примітка</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Розрахунок є орієнтовним та може відрізнятися від фактичного</li>
                    <li>• Всі ціни вказано з урахуванням ПДВ</li>
                    <li>• Тарифи діють з 1 січня 2025 року</li>
                    <li>• Для точного розрахунку зверніться до менеджера</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <AnimatePresence>
              {result ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      {React.createElement(getConsumerIcon(result.consumerType), { 
                        className: "w-6 h-6 mr-3",
                        style: { color: 'var(--energy-blue)' }
                      })}
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--energy-blue)' }}>
                        Результат розрахунку
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {/* Total Amount */}
                      <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--energy-blue)' }}>
                        <div className="text-white">
                          <p className="text-sm opacity-90">Загальна вартість на місяць</p>
                          <p className="text-3xl font-bold">{result.totalPrice.toFixed(2)} грн</p>
                          <p className="text-sm opacity-90">
                            за {result.consumption} кВт·год ({(result.totalPrice / result.consumption).toFixed(2)} грн/кВт·год)
                          </p>
                        </div>
                      </div>

                      {/* Breakdown */}
                      <div>
                        <h4 className="font-semibold mb-3">Деталізація розрахунку:</h4>
                        <div className="space-y-2">
                          {result.breakdown.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium">{item.category}</div>
                                <div className="text-sm text-gray-600">{item.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">{item.amount.toFixed(2)} грн</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-600 mb-3">
                          Хочете підключитися з такими параметрами?
                        </p>
                        <Button 
                          className="w-full energy-gradient text-white"
                          onClick={onClose}
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Подати заявку на підключення
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <Card className="p-6 text-center">
                  <div className="text-gray-400 mb-4">
                    <Calculator className="w-16 h-16 mx-auto mb-4" />
                    <p>Введіть параметри для розрахунку вартості електроенергії</p>
                  </div>
                </Card>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}