import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'about', label: 'Про нас' },
    { id: 'tariffs', label: 'Тарифи' },
    { id: 'documents', label: 'Документи' },
    { id: 'electricalSafety', label: 'Електробезпека' },
    { id: 'contacts', label: 'Контакти' },
  ];

  return (
    <footer className="bg-gray-100 text-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[28px] flex items-center"
            >
              <Logo size="lg" />
            </motion.div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Провідна енергопостачальна компанія, що забезпечує стабільне та якісне електропостачання для непобутових споживачів.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Швидкі посилання</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-600 hover:text-[#264A96] transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-[#264A96] flex-shrink-0" />
                <span className="text-gray-600">04052, Україна, місто Київ, вул. Нижній Вал(Подільський р-н), будинок, 7-9, 3-й поверх, офіс 9</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-[#264A96] flex-shrink-0" />
                <span className="text-gray-600">+38 (044) 239-27-53</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-[#264A96] flex-shrink-0" />
                <span className="text-gray-600">sales@enerzap.org</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Режим роботи</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-[#264A96] flex-shrink-0" />
                <div className="text-gray-600">
                  <div>Пн-Пт: 9:00-18:00</div>
                  <div>Сб-Нд: вихідний</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2025 ЕНЕРГОЗАХІД. Всі права захищені.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <button className="hover:text-[#264A96] transition-colors">
                Політика конфіденційності
              </button>
              <button className="hover:text-[#264A96] transition-colors">
                Умови використання
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}