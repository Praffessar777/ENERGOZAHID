import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  Monitor,
  FileText,
  DollarSign,
  CreditCard,
  Receipt,
  FileCheck,
  Download,
  ScrollText
} from 'lucide-react';
import { BrandedEnergyHero } from '../animations/BrandedEnergyHero';
import { Section } from '../common/Section';
import { ConsumerDashboard } from '../ConsumerDashboard';
import { UserAccountModal } from '../UserAccountModal';
import { advantages, documentsPreview } from '../data/constants';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const advantageIcons = [Shield, TrendingUp, Users, Award];
const documentIcons = [FileCheck, ScrollText, FileText];

const cabinetFeatures = [
  {
    icon: Monitor,
    title: 'Моніторинг споживання',
    description: 'Відстежуйте своє енергоспоживання в режимі реального часу'
  },
  {
    icon: FileText,
    title: 'Ключові умови договору',
    description: 'Всі важливі деталі вашого договору в одному місці'
  },
  {
    icon: DollarSign,
    title: 'Інформація про вартість та ціну',
    description: 'Прозора інформація про тарифи та розрахунки'
  },
  {
    icon: CreditCard,
    title: 'Контроль за оплатами',
    description: 'Зручне управління платежами та історія транзакцій'
  },
  {
    icon: Receipt,
    title: 'Доступ до рахунків та актів',
    description: 'Завантажуйте документи та рахунки в будь-який час'
  }
];

export function HomePage({ onNavigate }: HomePageProps) {

  const handleDownload = (fileName?: string) => {
    if (!fileName) return;

    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      {/* Minimalist Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BrandedEnergyHero />
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-left"
          >
            <motion.h1 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
              }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl mb-3" style={{ fontWeight: 300 }}>
                Надійна енергія
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                <span className="block">для вашого</span>
                <span className="block">бізнесу</span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Забезпечуємо стабільне електропостачання з високою якістю обслуговування для непобутових споживачів
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
              animate={{ 
                opacity: [0.4, 1, 0.4],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Advantages Section */}
      <Section title="НАШІ ПЕРЕВАГИ" subtitle="Чому обирають ТОВ &quot;ЕНЕРГОЗАХІД&quot; для своїх енергетичних потреб" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantageIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 border-0 energy-shadow">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center energy-gradient">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--energy-blue)' }}>
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Consumer Cabinet Section */}
      <Section title="КАБІНЕТ СПОЖИВАЧА" subtitle="Ваше споживання під Вашим контролем 24/7 за допомогою онлайн Кабінету">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {cabinetFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--energy-blue)' }}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--energy-blue)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* ▶ ОНОВЛЕНА КНОПКА З onNavigate ◀ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserAccountModal
                  trigger={
                    <Button
                      className="energy-gradient text-white hover:opacity-90 transition-opacity energy-button px-8 py-3"
                      size="lg"
                    >
                      ПЕРЕЙТИ В КАБІНЕТ СПОЖИВАЧА
                    </Button>
                  }
                  onNavigate={onNavigate}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Documents Section */}
      <Section title="ВАЖЛИВІ ДОКУМЕНТИ" subtitle="Ключові документи для ознайомлення та підключення" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {documentsPreview.map((doc, index) => {
            const IconComponent = documentIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300 border-0 energy-shadow">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center energy-gradient">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--energy-blue)' }}>
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{doc.size}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <Button 
                      size="sm" 
                      className="energy-gradient text-white hover:opacity-90 transition-opacity"
                      onClick={() => {
                        if (!doc.fileName) return;
                      
                        const link = document.createElement('a');
                        link.href = doc.fileName;
                        link.download = doc.fileName.split('/').pop() || 'document.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Завантажити
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => onNavigate('documents')}
              variant="outline"
              size="lg"
              className="border-2 hover:shadow-lg transition-all duration-300"
              style={{ borderColor: 'var(--energy-blue)', color: 'var(--energy-blue)' }}
            >
              ВСІ ДОКУМЕНТИ
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

