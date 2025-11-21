import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { BrandedEnergyHero } from '../animations/BrandedEnergyHero';
import { SafetyThreatForm } from '../forms/SafetyThreatForm';
import { 
  AlertTriangle, 
  Shield, 
  Phone, 
  Users, 
  Zap,
  CheckCircle,
  FileText,
  Mail,
  Search,
  Lightbulb,
  Bell
} from 'lucide-react';

export function ElectricalSafetyPage() {
  const [isThreatFormOpen, setIsThreatFormOpen] = useState(false);

  const safetySteps = [
    {
      number: '1',
      title: 'Зберігайте безпечну відстань',
      description: 'Утримуйтесь на безпечній відстані від місця події',
      icon: Shield
    },
    {
      number: '2',
      title: 'Сповістіть оточуючих',
      description: 'Повідомте про небезпеку людей навколо та запобігайте наближенню перехожих',
      icon: Users
    },
    {
      number: '3',
      title: 'Повідомте про подію',
      description: 'Зверніться до відповідальних осіб або служб екстреної допомоги',
      icon: Phone
    },
    {
      number: '4',
      title: 'Оцініть ситуацію',
      description: 'Керуйтеся підказками повічних об\'єктів оцініть ситуацію і визначите наслідки',
      icon: Search
    }
  ];

  const dangerSigns = [
    {
      icon: Zap,
      title: 'Пошкоджені електричні лінії',
      description: 'Обірвані або провисаючі дроти електропередач'
    },
    {
      icon: AlertTriangle,
      title: 'Запах горілого',
      description: 'Характерний запах горілої ізоляції або диму'
    },
    {
      icon: Zap,
      title: 'Іскріння та спалахи',
      description: 'Видимі іскри, спалахи або світіння навколо обладнання'
    },
    {
      icon: AlertTriangle,
      title: 'Незвичні звуки',
      description: 'Гудіння, тріск або інші нехарактерні звуки від електрообладнання'
    }
  ];

  const emergencyContacts = [
    {
      service: 'Служба порятунку',
      number: '101',
      description: 'Державна служба надзвичайних ситуацій'
    },
    {
      service: 'Швидка допомога',
      number: '103',
      description: 'При нещасних випадках з ураженням струмом'
    },
    {
      service: 'Аварійна служба ЕНЕРГОЗАХІД',
      number: '+38 (032) 240-50-60',
      description: 'Цілодобова диспетчерська служба'
    },
    {
      service: 'Єдиний номер екстреної допомоги',
      number: '112',
      description: 'Всі екстрені служби'
    }
  ];

  const safetyRules = [
    {
      icon: Shield,
      title: 'Не торкайтесь електрообладнання мокрими руками',
      category: 'Базові правила'
    },
    {
      icon: AlertTriangle,
      title: 'Не підходьте до обірваних проводів ближче ніж на 8 метрів',
      category: 'Небезпека'
    },
    {
      icon: CheckCircle,
      title: 'Регулярно перевіряйте стан електропроводки',
      category: 'Профілактика'
    },
    {
      icon: Zap,
      title: 'Не перевантажуйте електромережу',
      category: 'Експлуатація'
    },
    {
      icon: Shield,
      title: 'Використовуйте справне обладнання',
      category: 'Безпека'
    },
    {
      icon: FileText,
      title: 'Проводьте навчання персоналу',
      category: 'Навчання'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <BrandedEnergyHero />
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
              }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl mb-4">
                ЕЛЕКТРОБЕЗПЕКА
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Важлива інформація щодо електробезпеки, алгоритми дій при виявленні загроз 
              та порядок повідомлення про небезпечні ситуації
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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

      {/* What is Safety Threat Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12 border-l-4" style={{ borderLeftColor: '#EF4444' }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: 'var(--energy-blue)' }}>
                Що таке повідомлення про загрозу електробезпеці?
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                Це інформація про події, які становлять загрозу електробезпеці людей, тварин або можуть 
                призвести до системних збоїв у роботі обладнання чи аварій на виробництві, що надається з 
                метою оперативного реагування і швидкої локалізації події.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Safety Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
              ПОРЯДОК ДІЙ ПРИ ВИЯВЛЕННІ ЗАГРОЗИ ЕЛЕКТРОБЕЗПЕЦІ
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                        style={{ background: 'linear-gradient(135deg, var(--energy-blue) 0%, #1e3a8a 100%)' }}
                      >
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Danger Signs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--energy-blue)' }}>
              Екстрені контакти
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow border-t-4 border-red-500">
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                      У разі загорання електроустаткування
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Спокійно, але негайно викликайте пожежну службу
                    </p>
                    <div className="text-3xl font-bold text-red-600">
                      101
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow border-t-4" style={{ borderTopColor: 'var(--energy-blue)' }}>
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' + '20' }}>
                    <Phone className="w-6 h-6" style={{ color: 'var(--energy-blue)' }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                      У разі розкрадання чи пошкодження
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      При виявленні випадків вандалізму чи інших протиправних дій
                    </p>
                    <div className="text-3xl font-bold" style={{ color: 'var(--energy-blue)' }}>
                      102
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                      Гаряча лінія ТОВ "ЕНЕРГОЗАХІД"
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      У разі виникнення ситуацій, що становлять загрозу електробезпеці
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500">Телефон:</div>
                      <div className="text-sm font-semibold text-blue-700">
                        +38(067) 493 37 73
                      </div>
                      <div className="text-xs text-gray-500 mt-2">Email:</div>
                      <div className="text-sm font-semibold text-blue-700 break-all">
                        sales@enerzap.org
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Report Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--energy-blue)' }}>
                Як повідомити про загрозу електробезпеці?
              </h2>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: '#3B82F6' }}>
                      Надіслати повідомлення
                    </h3>
                    <p className="text-gray-600">
                      Відправте повідомлення на електронну скриньку <span className="font-semibold">sales@enerzap.org</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: '#3B82F6' }}>
                      Вказати тему
                    </h3>
                    <p className="text-gray-600">
                      В темі звернення обов'язково зазначається <span className="font-semibold">"Загроза електробезпеці"</span>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-3" style={{ color: '#3B82F6' }}>
                      Надати інформацію
                    </h3>
                    <p className="text-gray-600 mb-3">Повідомлення має містити:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Найменування підприємства – споживача</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Прізвище, ім'я та по-батькові заявника</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Засоби для подальшої комунікації</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Опис подій, що несуть загрозу електробезпеці</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--energy-blue)' }}>
              Поради з <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--energy-yellow)', textDecorationThickness: '3px', textUnderlineOffset: '4px' }}>електробезпеки</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: 'var(--energy-blue)' }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                      Електрообладнання
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Використовуйте лише справне електрообладнання та регулярно перевіряйте стан проводки
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: 'var(--energy-blue)' }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                      Вода та електрика
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Не користуйтесь електроприладами поблизу води або вологими руками
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: 'var(--energy-blue)' }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                      Уникайте перевантаження
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Не перевантажуйте електромережу одночасним використанням багатьох потужних приладів
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: 'var(--energy-blue)' }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: 'var(--energy-blue)' }}>
                      Безпека дітей
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Використовуйте заглушки для розеток та тримайте електроприлади поза досягністю дітей
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#264A96] to-[#0f172a] opacity-95" />
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(249, 198, 66, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Безпека — понад усе!
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Якщо у вас є питання щодо електробезпеки або ви помітили потенційно небезпечну ситуацію, 
              негайно зв'яжіться з нами
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <Button
                size="lg"
                className="text-white hover:opacity-90 transition-opacity px-8 py-6 text-base md:text-lg"
                style={{ 
                  background: '#3B82F6',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)'
                }}
                onClick={() => setIsThreatFormOpen(true)}
              >
                ПОВІДОМИТИ ПРО ЗАГРОЗУ
              </Button>
              
              <motion.p 
                className="text-sm md:text-base opacity-80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Ваша безпека — наш пріоритет. Команда експертів готова надати допомогу 24/7
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </section>

      {/* Safety Threat Form */}
      <SafetyThreatForm 
        open={isThreatFormOpen} 
        onOpenChange={setIsThreatFormOpen} 
      />
    </div>
  );
}