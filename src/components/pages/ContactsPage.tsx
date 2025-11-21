import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Headphones, UserCircle } from 'lucide-react';
import { SupportModal } from '../SupportModal';
import { ConsultationModal } from '../ConsultationModal';
import { BrandedEnergyHero } from '../animations/BrandedEnergyHero';

export function ContactsPage() {

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адреса головного офісу',
      details: [
        '04052, м. Київ',
        'вул. Нижній Вал, 7-9',
        '3-й поверх, офіс 9'
      ]
    },
    {
      icon: Phone,
      title: 'Телефони',
      details: [
        'Приймальня: +38 (044) 239-27-53',
        'Гаряча лінія: +38(067) 493-37-73'
      ]
    },
    {
      icon: Mail,
      title: 'Електронна пошта',
      details: [
        'sales@enerzap.org'
      ]
    },
    {
      icon: Clock,
      title: 'Режим роботи',
      details: [
        'Понеділок - П\'ятниця: 9:00 - 18:00',
        'Субота - Неділя: вихідний'
      ]
    },
    {
      icon: UserCircle,
      title: 'Відповідальна особа для контакту зі споживачами',
      details: [
        'Директор',
        'Яремов Юрій Олександрович'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Video Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <BrandedEnergyHero />
        
        <div className="relative z-10 container mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-left"
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
              <div className="text-3xl md:text-4xl lg:text-5xl mb-3" style={{ fontWeight: 300 }}>
                Наші
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                <span className="block">контакти</span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ми завжди готові відповісти на ваші запитання
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

      {/* Need Help Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
              ПОТРІБНА ДОПОМОГА?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Оберіть найзручніший спосіб отримати професійну підтримку
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full text-center hover:shadow-xl transition-all duration-300 border-0 energy-shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center energy-gradient">
                    <Headphones className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
                  ТЕХНІЧНА ПІДТРИМКА
                </h3>
                <p className="text-gray-600 mb-6">
                  Негайна допомога з технічними питаннями, проблемами з обладнанням, 
                  аварійними ситуаціями та загальними запитаннями.
                </p>
                <ul className="text-left space-y-2 mb-8 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Цілодобова підтримка з аварійних питань
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Технічні консультації з обладнанням
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Допомога з особистим кабінетом
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Вирішення проблем з рахунками
                  </li>
                </ul>
                
                <SupportModal 
                  trigger={
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full energy-gradient text-white hover:opacity-90 transition-opacity energy-button"
                        size="lg"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        ЗВ'ЯЗАТИСЯ З ПІДТРИМКОЮ
                      </Button>
                    </motion.div>
                  } 
                />
              </Card>
            </motion.div>

            {/* Consultation Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full text-center hover:shadow-xl transition-all duration-300 border-0 energy-shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" 
                       style={{ background: 'linear-gradient(135deg, var(--energy-yellow) 0%, var(--energy-blue) 100%)' }}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
                  ЕКСПЕРТНА КОНСУЛЬТАЦІЯ
                </h3>
                <p className="text-gray-600 mb-6">
                  Персональні консультації з питань енергоспоживання, 
                  тарифікації, оптимізації витрат та стратегічного планування.
                </p>
                <ul className="text-left space-y-2 mb-8 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">★</span>
                    Індивідуальний підхід до кожного клієнта
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">★</span>
                    Консультації з досвідченими фахівцями
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">★</span>
                    Телефонні, відео та особисті зустрічі
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">★</span>
                    Рекомендації з оптимізації витрат
                  </li>
                </ul>
                
                <ConsultationModal 
                  trigger={
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full text-white hover:opacity-90 transition-opacity energy-button"
                        style={{ background: 'linear-gradient(135deg, var(--energy-yellow) 0%, var(--energy-blue) 100%)' }}
                        size="lg"
                      >
                        <Users className="w-5 h-5 mr-2" />
                        ЗАМОВИТИ КОНСУЛЬТАЦІЮ
                      </Button>
                    </motion.div>
                  } 
                />
              </Card>
            </motion.div>
          </div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <Card className="p-6 bg-red-50 border border-red-200">
              <div className="text-center">
                <h3 className="text-xl font-bold text-red-800 mb-2">🚨 Аварійний випадок</h3>
                <p className="text-red-700 mb-3">
                  У випадку аварії або повного відключення електроенергії
                </p>
                <div className="text-2xl font-bold text-red-800">
                  📞 +38 (044) 239-27-53
                </div>
                <p className="text-sm text-red-600 mt-2">Цілодобово, без вихідних</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
              КОНТАКТНА ІНФОРМАЦІЯ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Оберіть зручний для вас спосіб зв'язку
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--energy-blue)' }}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--energy-blue)' }}>
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
              ЧАСТІ ЗАПИТАННЯ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Можливо, ваше питання вже має відповідь
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Як стати споживачем ЕНЕРГОЗАХІД?',
                answer: 'Для підключення зверніться до нашого офісу з пакетом документів або подайте заявку онлайн.'
              },
              {
                question: 'Які документи потрібні для укладення договору?',
                answer: 'Заповнений зразок Заяви - приєднання, що є Додатком №1 до Договору постачання електричної енергії споживачу та статутні документи, що додаються до неї.'
              },
              {
                question: 'Як розраховується вартість електроенергії?',
                answer: 'Вартість розраховується згідно з діючими тарифами Національної комісії, що здійснює державне регулювання у сферах енергетики та комунальних послуг плюс вартість передачі. Якщо споживач бажає сплачувати за розподіл через постачальника, то до розрахунку додається вартість розподілу.'
              },
              {
                question: 'Який порядок розгляду звернень/скарг споживача?',
                answer: 'Розгляд звернень/скарг споживача відбувається відповідно до п. 5.2.2., 8.3.2., 9.2.1 Правил роздрібного ринку електричної енергії'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--energy-blue)' }}>
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}