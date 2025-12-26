import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Checkbox } from '../ui/checkbox';
import { consumerTypes } from '../data/constants';

interface StepProps {
  formData: any;
  onInputChange: (name: string, value: string | boolean) => void;
  onNavigate?: (page: string) => void;
}

export function Step1ConsumerType({ formData, onInputChange }: StepProps) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-8">
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--energy-blue)' }}>
          Оберіть тип споживача
        </h3>
        <RadioGroup
          value={formData.consumerType}
          onValueChange={(value) => onInputChange('consumerType', value)}
          className="space-y-4"
        >
          {consumerTypes.map((type) => (
            <div key={type.id} className="flex items-start space-x-3">
              <RadioGroupItem value={type.id} id={type.id} className="mt-2" />
              <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                  <div className="text-sm font-medium" style={{ color: 'var(--energy-yellow)' }}>
                    {type.tariff}
                  </div>
                </Card>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </Card>
    </motion.div>
  );
}

export function Step2PersonalInfo({ formData, onInputChange }: StepProps) {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-8">
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--energy-blue)' }}>
          {formData.consumerType === 'residential' ? 'Особисті дані' : 'Дані організації'}
        </h3>
        <div className="space-y-6">
          {formData.consumerType === 'residential' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Ім'я *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => onInputChange('firstName', e.target.value)}
                  placeholder="Ваше ім'я"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Прізвище *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => onInputChange('lastName', e.target.value)}
                  placeholder="Ваше прізвище"
                  required
                />
              </div>
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="companyName">Назва організації *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => onInputChange('companyName', e.target.value)}
                  placeholder="ТОВ «Назва компанії»"
                  required
                />
              </div>
              <div>
                <Label htmlFor="taxId">Код ЄДРПОУ *</Label>
                <Input
                  id="taxId"
                  value={formData.taxId}
                  onChange={(e) => onInputChange('taxId', e.target.value)}
                  placeholder="12345678"
                  required
                />
              </div>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => onInputChange('phone', e.target.value)}
                placeholder="+38 (0XX) XXX-XX-XX"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => onInputChange('email', e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Юридична адреса *</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => onInputChange('address', e.target.value)}
              placeholder="Область, місто, вулиця, будинок, квартира"
              required
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Step3ConnectionDetails({ formData, onInputChange }: StepProps) {
  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-8">
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--energy-blue)' }}>
          Деталі підключення
        </h3>
        <div className="space-y-6">
          <div>
            <Label htmlFor="connectionAddress">Адреса підключення *</Label>
            <Textarea
              id="connectionAddress"
              value={formData.connectionAddress}
              onChange={(e) => onInputChange('connectionAddress', e.target.value)}
              placeholder="Вкажіть точну адресу об'єкта, який потрібно підключити"
              required
            />
          </div>

          <div>
            <Label htmlFor="estimatedConsumption">Орієнтовне споживання (кВт·год/міс)</Label>
            <Input
              id="estimatedConsumption"
              type="number"
              value={formData.estimatedConsumption}
              onChange={(e) => onInputChange('estimatedConsumption', e.target.value)}
              placeholder="Наприклад: 150"
            />
          </div>

          <div>
            <Label>Тип підключення *</Label>
            <RadioGroup
              value={formData.connectionType}
              onValueChange={(value) => onInputChange('connectionType', value)}
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">Нове підключення</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="transfer" id="transfer" />
                <Label htmlFor="transfer">Зміна постачальника</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="additional" id="additional" />
                <Label htmlFor="additional">Додаткове підключення</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasExistingConnection"
              checked={formData.hasExistingConnection}
              onCheckedChange={(checked) => onInputChange('hasExistingConnection', checked as boolean)}
            />
            <Label htmlFor="hasExistingConnection">
              На об'єкті вже є лічильник електроенергії
            </Label>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Step4Confirmation({ formData, onInputChange, onNavigate }: StepProps) {
  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-8">
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--energy-blue)' }}>
          Підтвердження заявки
        </h3>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-4">Перевірте введені дані:</h4>
          <div className="space-y-2 text-sm">
            <div><span className="font-medium">Тип споживача:</span> {
              consumerTypes.find(t => t.id === formData.consumerType)?.title
            }</div>
            {formData.consumerType === 'residential' ? (
              <div><span className="font-medium">ПІБ:</span> {formData.firstName} {formData.lastName}</div>
            ) : (
              <div><span className="font-medium">Організація:</span> {formData.companyName}</div>
            )}
            <div><span className="font-medium">Телефон:</span> {formData.phone}</div>
            <div><span className="font-medium">Email:</span> {formData.email}</div>
            <div><span className="font-medium">Адреса підключення:</span> {formData.connectionAddress}</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreesToProcessing"
              checked={formData.agreesToProcessing}
              onCheckedChange={(checked) => onInputChange('agreesToProcessing', checked as boolean)}
              required
            />
            <Label htmlFor="agreesToProcessing" className="text-sm">
              Я даю згоду на обробку персональних даних відповідно до{' '}
              <button 
                type="button"
                onClick={() => onNavigate?.('privacy')}
                className="underline text-blue-600 hover:text-blue-800 transition-colors"
              >
                політики конфіденційності
              </button>{' '}
              *
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="wantsNewsletter"
              checked={formData.wantsNewsletter}
              onCheckedChange={(checked) => onInputChange('wantsNewsletter', checked as boolean)}
            />
            <Label htmlFor="wantsNewsletter" className="text-sm">
              Бажаю отримувати новини та пропозиції від ЕНЕРГОЗАХІД
            </Label>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}


