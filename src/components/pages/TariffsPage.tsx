import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { SupportModal } from '../SupportModal';
import { ConsultationModal } from '../ConsultationModal';

export function TariffsPage() {
  const documents = [
    { name: 'Структура тарифу на послуги з передачі електричної енергії', 
      size: '2.4 MB',
      fileName: '/pdf/Struktura_taryfu_na_poslugy_z_rozpodilu_ee.pdf'
    },
    { 
      name: 'Тарифи на послуги з розподілу електричної енергії, що діють з 01 січня 2025 року', 
      size: '1.8 MB', 
      fileName: '/pdf/Tarifi_na_poslugi_z_rozpodilu_elektrichnoi_energii_shho_dijut_z_01 (1).pdf'
    },
    { name: 'Зразок рахунку за електроенергію', 
      size: '956 KB',
      fileName: '/pdf/роз\'яснення рахунку.pdf'
    },
    { name: 'Ціна', 
      size: '1.2 MB',
      fileName: '/pdf/7000.pdf'
    }
  ];

  // 🔽 ДОДАЛИ ДОПОМІЖНУ ФУНКЦІЮ ДЛЯ ЗАВАНТАЖЕННЯ
  function downloadFile(url?: string) {
    if (!url) return;

    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop() || 'document.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="w-full">
      {/* Documents Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--energy-blue)' }}>
              ДОКУМЕНТИ ПО ТАРИФАХ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Завантажте офіційні документи про тарифи та методики розрахунку
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--energy-blue)' }}
                      >
                        <Download className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-lg"
                          style={{ color: 'var(--energy-blue)' }}
                        >
                          {doc.name}
                        </h3>
                        <p className="text-sm text-gray-500">PDF • {doc.size}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="energy-gradient text-white hover:opacity-90"
                      // 🔽 ТУТ ДОДАЛИ onClick
                      onClick={() => {
                        // Якщо є шлях до файлу – завантажуємо, якщо ні – нічого не робимо
                        // @ts-ignore – якщо TS почне сваритись
                        const url = doc.fileName as string | undefined;
                        if (url) {
                          downloadFile(url);
                        }
                      }}
                    >
                      Завантажити
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--energy-blue)' }}>
              ПОТРІБНА ДОПОМОГА?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Якщо ви не знайшли потрібний документ або маєте питання щодо його змісту, 
              звертайтеся до наших фахівців
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SupportModal
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2"
                    style={{ borderColor: 'var(--energy-blue)', color: 'var(--energy-blue)' }}
                  >
                    Зв'язатися з підтримкою
                  </Button>
                }
              />
              <ConsultationModal
                trigger={
                  <Button
                    size="lg"
                    className="energy-gradient text-white hover:opacity-90"
                  >
                    Замовити консультацію
                  </Button>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
