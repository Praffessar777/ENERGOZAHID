import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LogIn, UserPlus, ChevronLeft, ChevronRight, Check, User, Lock, Mail, Phone, MapPin, Zap } from 'lucide-react';
import { consumerTypes } from './data/constants';

interface UserAccountModalProps {
  trigger: React.ReactNode;
}

interface RegistrationFormData {
  // Personal Info
  firstName: string;
  lastName: string;
  companyName: string;
  taxId: string;
  phone: string;
  email: string;
  address: string;
  
  // Connection Details
  connectionAddress: string;
  estimatedConsumption: string;
  connectionType: string;
  hasExistingConnection: boolean;
  
  // Confirmation
  agreesToTerms: boolean;
  agreesToProcessing: boolean;
  wantsNewsletter: boolean;
}

interface LoginFormData {
  login: string;
  password: string;
}

export function UserAccountModal({ trigger }: UserAccountModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [registrationStep, setRegistrationStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState<LoginFormData>({
    login: '',
    password: ''
  });

  // Registration form state
  const [registrationData, setRegistrationData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    taxId: '',
    phone: '',
    email: '',
    address: '',
    connectionAddress: '',
    estimatedConsumption: '',
    connectionType: 'new',
    hasExistingConnection: false,
    agreesToTerms: false,
    agreesToProcessing: false,
    wantsNewsletter: false
  });

  // Assume commercial type for simplified registration
  const consumerType = 'commercial';

  const handleLoginChange = (field: keyof LoginFormData, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegistrationChange = (field: keyof RegistrationFormData, value: string | boolean) => {
    setRegistrationData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setLoginData({ login: '', password: '' });
    }, 2000);
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setRegistrationStep(1);
      setRegistrationData({
        firstName: '',
        lastName: '',
        companyName: '',
        taxId: '',
        phone: '',
        email: '',
        address: '',
        connectionAddress: '',
        estimatedConsumption: '',
        connectionType: 'new',
        hasExistingConnection: false,
        agreesToTerms: false,
        agreesToProcessing: false,
        wantsNewsletter: false
      });
    }, 2000);
  };

  const canProceedToNextStep = () => {
    switch (registrationStep) {
      case 1: // Personal Info
        return registrationData.companyName && registrationData.taxId && 
               registrationData.phone && registrationData.email && registrationData.address;
      case 2: // Connection Details
        return registrationData.connectionAddress && registrationData.connectionType;
      case 3: // Confirmation
        return registrationData.agreesToTerms && registrationData.agreesToProcessing;
      default:
        return false;
    }
  };

  const renderRegistrationStep = () => {
    switch (registrationStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                ОСОБИСТІ ДАНІ
              </h3>
              <p className="text-sm text-gray-600">Крок 1 з 3</p>
            </div>

            <div>
              <Label htmlFor="companyName">Назва організації *</Label>
              <Input
                id="companyName"
                value={registrationData.companyName}
                onChange={(e) => handleRegistrationChange('companyName', e.target.value)}
                placeholder="ТОВ «Назва компанії»"
                required
              />
            </div>

            <div>
              <Label htmlFor="taxId">Код ЄДРПОУ *</Label>
              <Input
                id="taxId"
                value={registrationData.taxId}
                onChange={(e) => handleRegistrationChange('taxId', e.target.value)}
                placeholder="12345678"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={registrationData.phone}
                  onChange={(e) => handleRegistrationChange('phone', e.target.value)}
                  placeholder="+38 (0XX) XXX-XX-XX"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={registrationData.email}
                  onChange={(e) => handleRegistrationChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Юридична адреса *</Label>
              <Textarea
                id="address"
                value={registrationData.address}
                onChange={(e) => handleRegistrationChange('address', e.target.value)}
                placeholder="Область, місто, вулиця, будинок"
                required
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                ДЕТАЛІ ПІДКЛЮЧЕННЯ
              </h3>
              <p className="text-sm text-gray-600">Крок 2 з 3</p>
            </div>

            <div>
              <Label htmlFor="connectionAddress">Адреса підключення *</Label>
              <Textarea
                id="connectionAddress"
                value={registrationData.connectionAddress}
                onChange={(e) => handleRegistrationChange('connectionAddress', e.target.value)}
                placeholder="Вкажіть точну адресу об'єкта, який потрібно підключити"
                required
              />
            </div>

            <div>
              <Label htmlFor="estimatedConsumption">Орієнтовне споживання (кВт·год/міс)</Label>
              <Input
                id="estimatedConsumption"
                type="number"
                value={registrationData.estimatedConsumption}
                onChange={(e) => handleRegistrationChange('estimatedConsumption', e.target.value)}
                placeholder="Наприклад: 1500"
              />
            </div>

            <div>
              <Label>Тип підключення *</Label>
              <RadioGroup
                value={registrationData.connectionType}
                onValueChange={(value) => handleRegistrationChange('connectionType', value)}
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
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasExistingConnection"
                checked={registrationData.hasExistingConnection}
                onCheckedChange={(checked) => handleRegistrationChange('hasExistingConnection', checked as boolean)}
              />
              <Label htmlFor="hasExistingConnection">
                На об'єкті вже є лічильник електроенергії
              </Label>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                ПІДТВЕРДЖЕННЯ
              </h3>
              <p className="text-sm text-gray-600">Крок 3 з 3</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Перевірте введені дані:</h4>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Організація:</span> {registrationData.companyName}</div>
                <div><span className="font-medium">ЄДРПОУ:</span> {registrationData.taxId}</div>
                <div><span className="font-medium">Телефон:</span> {registrationData.phone}</div>
                <div><span className="font-medium">Email:</span> {registrationData.email}</div>
                <div><span className="font-medium">Адреса підключення:</span> {registrationData.connectionAddress}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreesToTerms"
                  checked={registrationData.agreesToTerms}
                  onCheckedChange={(checked) => handleRegistrationChange('agreesToTerms', checked as boolean)}
                  required
                />
                <Label htmlFor="agreesToTerms" className="text-sm">
                  Я погоджуюся з <button className="underline text-blue-600">умовами надання послуг</button> та 
                  <button className="underline text-blue-600 ml-1">правилами електропостачання</button> *
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreesToProcessing"
                  checked={registrationData.agreesToProcessing}
                  onCheckedChange={(checked) => handleRegistrationChange('agreesToProcessing', checked as boolean)}
                  required
                />
                <Label htmlFor="agreesToProcessing" className="text-sm">
                  Я даю згоду на обробку персональних даних відповідно до 
                  <button className="underline text-blue-600 ml-1">політики конфіденційності</button> *
                </Label>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const resetModal = () => {
    setActiveTab('login');
    setRegistrationStep(1);
    setIsSubmitted(false);
    setLoginData({ login: '', password: '' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        setTimeout(resetModal, 300);
      }
    }}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-2xl" style={{ color: 'var(--energy-blue)' }}>
            <div className="w-8 h-8 rounded-lg energy-gradient flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span>КАБІНЕТ СПОЖИВАЧА</span>
          </DialogTitle>
          <DialogDescription>
            Увійдіть до свого кабінету або зареєструйтеся як новий споживач
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 energy-gradient">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-green-600">
              {activeTab === 'login' ? 'Успішний вхід!' : 'Заявку надіслано!'}
            </h4>
            <p className="text-gray-600">
              {activeTab === 'login' 
                ? 'Ви увійшли до свого кабінету споживача'
                : 'Дякуємо за реєстрацію. Ми зв\'яжемося з вами найближчим часом.'
              }
            </p>
          </motion.div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>Ввійти</span>
              </TabsTrigger>
              <TabsTrigger value="register" className="flex items-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>Зареєструватись</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="login">Логін *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="login"
                      type="text"
                      value={loginData.login}
                      onChange={(e) => handleLoginChange('login', e.target.value)}
                      placeholder="Ваш логін або email"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Пароль *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => handleLoginChange('password', e.target.value)}
                      placeholder="Ваш пароль"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <button type="button" className="text-blue-600 hover:underline">
                    Забули пароль?
                  </button>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !loginData.login || !loginData.password}
                  className="w-full energy-gradient text-white hover:opacity-90 disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <LogIn className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Входимо...' : 'Увійти до кабінету'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-6">
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {renderRegistrationStep()}
                </AnimatePresence>

                <div className="flex items-center justify-between pt-4">
                  {registrationStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setRegistrationStep(prev => prev - 1)}
                      className="flex items-center space-x-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Назад</span>
                    </Button>
                  )}

                  <div className="flex-1" />

                  {registrationStep < 3 ? (
                    <Button
                      type="button"
                      onClick={() => setRegistrationStep(prev => prev + 1)}
                      disabled={!canProceedToNextStep()}
                      className="energy-gradient text-white hover:opacity-90 disabled:opacity-50 flex items-center space-x-2"
                    >
                      <span>Далі</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleRegistrationSubmit}
                      disabled={isSubmitting || !canProceedToNextStep()}
                      className="energy-gradient text-white hover:opacity-90 disabled:opacity-50"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <UserPlus className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Реєструємо...' : 'Подати заявку'}
                    </Button>
                  )}
                </div>

                {/* Progress indicator */}
                <div className="flex items-center justify-center space-x-2 pt-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        step <= registrationStep 
                          ? 'bg-energy-blue' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
}