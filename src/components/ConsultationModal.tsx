import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CheckCircle, Calendar as CalendarIcon, Clock, Users } from 'lucide-react';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

interface ConsultationModalProps {
  trigger: React.ReactNode;
}

export function ConsultationModal({ trigger }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    consultationType: '',
    preferredDate: undefined as Date | undefined,
    preferredTime: '',
    topic: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      preferredDate: date
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xreznyng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          formType: 'consultation_request',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          consultationType: formData.consultationType,
          preferredDate: formData.preferredDate
            ? formData.preferredDate.toISOString()
            : null,
          preferredTime: formData.preferredTime,
          topic: formData.topic,
          description: formData.description
        })
      });

      if (!response.ok) {
        console.error('Помилка при бронюванні консультації:', await response.text());
        alert('Сталася помилка при надсиланні форми. Спробуйте, будь ласка, пізніше.');
        setIsSubmitting(false);
        return;
      }

      const newTicketId = Math.random().toString(36).substr(2, 9).toUpperCase();
      setTicketId(newTicketId);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Скидаємо форму та закриваємо модалку через 4 секунди
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          consultationType: '',
          preferredDate: undefined,
          preferredTime: '',
          topic: '',
          description: ''
        });
        setTicketId(null);
      }, 4000);
    } catch (error) {
      console.error('Помилка мережі при бронюванні консультації:', error);
      alert('Не вдалося відправити форму. Перевірте інтернет і спробуйте ще раз.');
      setIsSubmitting(false);
    }
  };

  const consultationTypes = [
    { value: 'phone', label: 'Телефонна консультація' },
    { value: 'video', label: 'Відеоконференція' },
    { value: 'office', label: 'Зустріч в офісі' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const consultationTopics = [
    { value: 'connection', label: 'Підключення до мережі' },
    { value: 'tariffs', label: 'Тарифні плани та розрахунки' },
    { value: 'contracts', label: 'Укладення договору' },
    { value: 'technical', label: 'Технічні питання' },
    { value: 'optimization', label: 'Оптимізація витрат' },
    { value: 'other', label: 'Інші питання' }
  ];

  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.consultationType &&
    formData.preferredDate &&
    formData.preferredTime &&
    formData.topic;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            className="flex items-center space-x-2 text-2xl"
            style={{ color: 'var(--energy-blue)' }}
          >
            <Users className="w-6 h-6" />
            <span>Замовити консультацію</span>
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Заброньуйте безкоштовну консультацію з нашими експертами з енергопостачання
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--energy-yellow)' }}
              >
                <CheckCircle
                  className="w-8 h-8"
                  style={{ color: 'var(--energy-blue)' }}
                />
              </div>
              <h4
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--energy-blue)' }}
              >
                Консультацію заброньовано!
              </h4>
              <p className="text-gray-600 mb-4">
                Дякуємо за звернення! Наш експерт зв'яжеться з вами найближчим часом 
                для підтвердження деталей консультації.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="font-medium mb-2">Деталі вашого бронювання:</p>
                <p>
                  📅{' '}
                  {formData.preferredDate &&
                    format(formData.preferredDate, 'dd MMMM yyyy', { locale: uk })}
                </p>
                <p>🕐 {formData.preferredTime}</p>
                <p>
                  📞 Тип:{' '}
                  {consultationTypes.find(t => t.value === formData.consultationType)?.label}
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  Номер бронювання: #{ticketId || '—'}
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3
                  className="font-semibold mb-3"
                  style={{ color: 'var(--energy-blue)' }}
                >
                  Контактна інформація
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="consult-name">Ім'я та прізвище *</Label>
                    <Input
                      id="consult-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Іван Іваненко"
                    />
                  </div>
                  <div>
                    <Label htmlFor="consult-phone">Телефон *</Label>
                    <Input
                      id="consult-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+38 (0XX) XXX-XX-XX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="consult-email">Електронна пошта *</Label>
                    <Input
                      id="consult-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Назва компанії</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="ТОВ «Приклад»"
                    />
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h3
                  className="font-semibold mb-3"
                  style={{ color: 'var(--energy-blue)' }}
                >
                  Деталі консультації
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="consultationType">Тип консультації *</Label>
                    <Select
                      value={formData.consultationType}
                      onValueChange={(value) =>
                        handleSelectChange('consultationType', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Оберіть тип консультації" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="topic">Тема консультації *</Label>
                    <Select
                      value={formData.topic}
                      onValueChange={(value) => handleSelectChange('topic', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Оберіть тему" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTopics.map((topic) => (
                          <SelectItem key={topic.value} value={topic.value}>
                            {topic.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Бажана дата *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.preferredDate ? (
                            format(formData.preferredDate, 'dd MMMM yyyy', { locale: uk })
                          ) : (
                            'Оберіть дату'
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.preferredDate}
                          onSelect={handleDateChange}
                          disabled={(date) =>
                            date < new Date() ||
                            date.getDay() === 0 ||
                            date.getDay() === 6
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Бажаний час *</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) =>
                        handleSelectChange('preferredTime', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Оберіть час" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="consult-description">Додаткова інформація</Label>
                <Textarea
                  id="consult-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Опишіть детальніше ваші питання або специфічні потреби для консультації..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  Скасувати
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="flex-1 energy-gradient text-white hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Users className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Бронюємо...' : 'Заброньовати консультацію'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
