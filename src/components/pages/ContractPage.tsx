import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Check, ChevronRight, ChevronLeft, User, FileText, CreditCard, CheckCircle } from 'lucide-react';
import { HeroSection } from '../common/HeroSection';
import { Step1ConsumerType, Step2PersonalInfo, Step3ConnectionDetails, Step4Confirmation } from '../forms/ContractSteps';

interface ContractPageProps {
  onNavigate: (page: string) => void;
}

export function ContractPage({ onNavigate }: ContractPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // 👈 додано
  const [formData, setFormData] = useState({
    consumerType: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    companyName: '',
    taxId: '',
    address: '',
    connectionAddress: '',
    estimatedConsumption: '',
    connectionType: '',
    hasExistingConnection: false,
    agreesToProcessing: false,
    wantsNewsletter: false
  });

  const steps = [
    { id: 1, title: 'Тип споживача', icon: User },
    { id: 2, title: 'Особисті дані', icon: FileText },
    { id: 3, title: 'Деталі підключення', icon: CreditCard },
    { id: 4, title: 'Підтвердження', icon: CheckCircle }
  ];

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => currentStep < 4 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  // 🔗 ІНТЕГРАЦІЯ З FORMSPREE
  const handleSubmit = async () => {
    if (!formData.agreesToProcessing || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xreznyng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          formType: 'contract_request',
          source: 'ContractPage (Кабінет споживача)',
          ...formData
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Formspree error:', await response.text());
        alert('Сталася помилка при надсиланні заявки. Спробуйте, будь ласка, пізніше.');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      alert('Сталася помилка при надсиланні заявки. Перевірте інтернет або спробуйте пізніше.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / 4) * 100;

  if (isSubmitted) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center p-8"
        >
          <Card className="p-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'var(--energy-yellow)' }}
            >
              <Check className="w-8 h-8" style={{ color: 'var(--energy-blue)' }} />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
              Заявка надіслана!
            </h2>
            <p className="text-gray-600 mb-6">
              Дякуємо за звернення. Наш менеджер зв'яжеться з Вами якнайшвидше для узгодження деталей підключення.
            </p>
            <div className="space-y-3 text-sm text-gray-500">
              <p>Номер заявки: #EZ-{Date.now().toString().slice(-6)}</p>
              <p>Якщо Ви вказали email, на нього буде надіслано підтвердження.</p>
            </div>
            <Button
              onClick={() => window.location.reload()}
              className="w-full mt-6 energy-gradient text-white"
            >
              Подати нову заявку
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1ConsumerType formData={formData} onInputChange={handleInputChange} />;
      case 2:
        return <Step2PersonalInfo formData={formData} onInputChange={handleInputChange} />;
      case 3:
        return <Step3ConnectionDetails formData={formData} onInputChange={handleInputChange} />;
      case 4:
        return <Step4Confirmation formData={formData} onInputChange={handleInputChange} onNavigate={onNavigate} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <HeroSection
        title="КАБІНЕТ СПОЖИВАЧА"
        subtitle="Швидке та зручне підключення до мережі ЕНЕРГОЗАХІД"
      />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold" style={{ color: 'var(--energy-blue)' }}>
                Крок {currentStep} з 4
              </h2>
              <span className="text-sm text-gray-600">{Math.round(progress)}% завершено</span>
            </div>
            <Progress value={progress} className="mb-6" />
            
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {currentStep > step.id ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-gray-300 mx-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {renderCurrentStep()}
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1 || isSubmitting}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Назад</span>
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    isSubmitting ||
                    (currentStep === 1 && !formData.consumerType) ||
                    (currentStep === 2 && (!formData.phone || !formData.email)) ||
                    (currentStep === 3 && (!formData.connectionAddress || !formData.connectionType))
                  }
                  className="energy-gradient text-white hover:opacity-90 flex items-center space-x-2"
                >
                  <span>Далі</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.agreesToProcessing || isSubmitting}
                  className="energy-gradient text-white hover:opacity-90 energy-pulse flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{isSubmitting ? 'Надсилаємо...' : 'Підтвердити заявку'}</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
