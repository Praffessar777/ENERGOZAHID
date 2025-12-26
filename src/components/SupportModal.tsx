import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MessageCircle, Phone, AlertCircle, CheckCircle } from 'lucide-react';

interface SupportModalProps {
  trigger: React.ReactNode;
}

export function SupportModal({ trigger }: SupportModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    urgency: '',
    issue: '',
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
          formType: 'support_request',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          urgency: formData.urgency,
          issueType: formData.issue,
          description: formData.description
        })
      });

      if (!response.ok) {
        console.error('Помилка при надсиланні звернення:', await response.text());
        alert('Сталася помилка при надсиланні звернення. Спробуйте, будь ласка, пізніше.');
        setIsSubmitting(false);
        return;
      }

      const newTicketId = Math.random().toString(36).substr(2, 9).toUpperCase();
      setTicketId(newTicketId);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Скидаємо форму та закриваємо модалку через 3 секунди
      setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          urgency: '',
          issue: '',
          description: ''
        });
        setTicketId(null);
      }, 3000);
    } catch (error) {
      console.error('Помилка мережі при надсиланні звернення:', error);
      alert('Не вдалося відправити звернення. Перевірте інтернет і спробуйте ще раз.');
      setIsSubmitting(false);
    }
  };

  const urgencyOptions = [
    { value: 'low', label: 'Низька - загальні питання' },
    { value: 'medium', label: 'Середня - технічні проблеми' },
    { value: 'high', label: 'Висока - аварійні ситуації' },
    { value: 'critical', label: 'Критична - повне відключення' }
  ];

  const issueTypes = [
    { value: 'billing', label: 'Питання по рахунках' },
    { value: 'technical', label: 'Технічні проблеми' },
    { value: 'connection', label: 'Підключення/відключення' },
    { value: 'contract', label: 'Договірні питання' },
    { value: 'complaint', label: 'Скарга на обслуговування' },
    { value: 'other', label: 'Інше питання' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-2xl" style={{ color: 'var(--energy-blue)' }}>
            <MessageCircle className="w-6 h-6" />
            <span>Зв'язатися з підтримкою</span>
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Заповніть форму нижче, і наш фахівець зв'яжеться з вами найближчим часом для вирішення вашого питання
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-100">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-green-600">
                Звернення прийнято!
              </h4>
              <p className="text-gray-600 mb-4">
                Ваше звернення отримано та передано до відповідного відділу. 
                Ми зв'яжемося з Вами якнайшвидше.
              </p>
              <div className="text-sm text-gray-500">
                Номер звернення: #{ticketId || '—'}
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="support-name">Ім'я та прізвище *</Label>
                  <Input
                    id="support-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Іван Іваненко"
                  />
                </div>
                <div>
                  <Label htmlFor="support-phone">Телефон *</Label>
                  <Input
                    id="support-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+38 (0XX) XXX-XX-XX"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="support-email">Електронна пошта *</Label>
                <Input
                  id="support-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="ivan@example.com"
                />
              </div>

              {/* Issue Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="urgency">Терміновість звернення *</Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => handleSelectChange('urgency', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть рівень терміновості" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="issue">Тип звернення *</Label>
                  <Select
                    value={formData.issue}
                    onValueChange={(value) => handleSelectChange('issue', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Оберіть тип питання" />
                    </SelectTrigger>
                    <SelectContent>
                      {issueTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="support-description">Детальний опис проблеми *</Label>
                <Textarea
                  id="support-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Детально опишіть вашу проблему або питання. Включіть будь-яку релевантну інформацію, яка може допомогти нам вирішити ваше питання швидше..."
                />
              </div>

              {/* Emergency Contact Info */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-red-800 mb-1">Аварійна ситуація?</h4>
                    <p className="text-red-700 text-sm mb-2">
                      У випадку аварії або повного відключення електроенергії телефонуйте негайно:
                    </p>
                    <p className="font-semibold text-red-800">
                      📞 +38 (044) 239-27-53 (цілодобово)
                    </p>
                  </div>
                </div>
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
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.phone ||
                    !formData.email ||
                    !formData.urgency ||
                    !formData.issue ||
                    !formData.description
                  }
                  className="flex-1 energy-gradient text-white hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <MessageCircle className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Надсилаємо...' : 'Надіслати звернення'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
