import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Calendar, Target, Heart, Award, Zap } from 'lucide-react';
import { BrandedEnergyHero } from '../animations/BrandedEnergyHero';
import { Section } from '../common/Section';
import { aboutMilestones, aboutValues, aboutStats } from '../data/constants';

const valueIcons = [Target, Heart, Award, Zap];

export function AboutPage() {
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
                Про
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                <span className="block">ТОВ &quot;ЕНЕРГОЗАХІД&quot;</span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Провідна енергопостачальна компанія України
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

      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--energy-blue)' }}>
              НАША МІСІЯ
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «ЕНЕРГОЗАХІД»  (код ЄДРПОУ 32110446) - здійснює свою діяльність  на підставі ліцензії на постачання електричної енергії споживачу, оформленої Постановою НКРЕКП №980 від 11.09.2018р
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              ТОВ &quot;ЕНЕРГОЗАХІД&quot; — це надійний партнер у сфері електропостачання, який понад 20 років 
              забезпечує стабільну подачу електроенергії для непобутових споживачів по всій Україні.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ми прагнемо до створення енергетичного майбутнього, де кожен споживач отримує 
              якісну електроенергію за справедливою ціною з найвищим рівнем сервісу.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section title="ТОВ &quot;ЕНЕРГОЗАХІД&quot; У ЦИФРАХ" background="gray">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--energy-yellow)' }}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="НАШІ ЦІННОСТІ" subtitle="Принципи, якими ми керуємося у своїй роботі" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutValues.map((value, index) => {
            const IconComponent = valueIcons[index];
            return (
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
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--energy-blue)' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}