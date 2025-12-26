import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { AlertTriangle, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface SafetyThreatFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SafetyThreatForm({ open, onOpenChange }: SafetyThreatFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    threatType: '',
    urgencyLevel: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // 👈 додали стан відправки

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      threatType: '',
      urgencyLevel: '',
      description: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валідація обов'язкових полів
    if (
      !formData.name ||
      !formData.phone ||
      !formData.location ||
      !formData.threatType ||
      !formData.urgencyLevel ||
      !formData.description
    ) {
      toast.error("Будь ласка, заповніть всі обов'язкові поля");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xreznyng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          formType: 'safety_threat_report',
          source: 'SafetyThreatForm (Електробезпека)',
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success('Повідомлення успішно відправлено');
        resetForm();
        onOpenChange(false);
      } else {
        console.error('Formspree error:', await response.text());
        toast.error('Сталася помилка при відправці. Спробуйте, будь ласка, пізніше.');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      toast.error('Сталася помилка при відправці. Перевірте підключення до інтернету.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <DialogTitle className="text-2xl mb-2">
                  Повідомити про загрозу електробезпеці
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Негайно повідомте нас про будь-яку ситуацію, що може становити загрозу електробезпеці. 
                  Ваша пильність допомагає запобігти аваріям та захистити життя людей.
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Emergency Contacts */}
        <div className="px-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <div className="flex items-start space-x-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <h3 className="font-bold text-red-900">Екстрені контакти</h3>
            </div>
            <div className="space-y-2 ml-8">
              <div className="flex items-center space-x-2 text-red-700">
                <Phone className="w-4 h-4" />
                <span className="text-sm">
                  Гаряча лінія: <span className="font-semibold">+38(067) 493 37 73</span>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-red-700">
                <Mail className="w-4 h-4" />
                <span className="text-sm">
                  Email: <span className="font-semibold">sales@enerzap.org</span>
                </span>
              </div>
              <div className="flex items-center space-x-2 text-red-700">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">Цілодобово, без вихідних</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-5">
          {/* Name and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-600">
                Ім'я та прізвище <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Іван Іваненко"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-50 border-gray-200 focus:bg-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-600">
                Телефон <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+38 (0XX) XXX-XX-XX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-gray-50 border-gray-200 focus:bg-white"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-600">
              Електронна пошта (опціонально)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="ivan@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-600">
              Місце розташування загрози <span className="text-red-500">*</span>
            </Label>
            <Input
              id="location"
              placeholder="Вкажіть точну адресу або опис місцевості"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="bg-gray-50 border-gray-200 focus:bg-white"
              required
            />
          </div>

          {/* Threat Type and Urgency Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="threatType" className="text-gray-600">
                Тип загрози <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.threatType}
                onValueChange={(value) => setFormData({ ...formData, threatType: value })}
                required
              >
                <SelectTrigger
                  id="threatType"
                  className="bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                >
                  <SelectValue placeholder="Оберіть тип загрози" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="damaged-lines">Пошкоджені лінії електропередач</SelectItem>
                  <SelectItem value="fallen-wires">Обірвані дроти</SelectItem>
                  <SelectItem value="sparking">Іскріння обладнання</SelectItem>
                  <SelectItem value="fire">Загорання електрообладнання</SelectItem>
                  <SelectItem value="vandalism">Вандалізм / крадіжка</SelectItem>
                  <SelectItem value="other">Інше</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgencyLevel" className="text-gray-600">
                Рівень терміновості <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.urgencyLevel}
                onValueChange={(value) => setFormData({ ...formData, urgencyLevel: value })}
                required
              >
                <SelectTrigger
                  id="urgencyLevel"
                  className="bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                >
                  <SelectValue placeholder="Оберіть рівень терміновості" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">Критичний (негайна загроза життю)</SelectItem>
                  <SelectItem value="high">Високий (потребує негайного реагування)</SelectItem>
                  <SelectItem value="medium">Середній (потребує уваги протягом доби)</SelectItem>
                  <SelectItem value="low">Низький (планове усунення)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-600">
              Детальний опис загрози <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Детально опишіть ситуацію: що саме ви побачили, які ознаки небезпеки, чи є постраждалі тощо..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-gray-50 border-gray-200 focus:bg-white min-h-[120px] resize-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="w-full sm:w-auto px-8 border-gray-300 text-gray-700 hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Скасувати
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto px-8 text-white hover:opacity-90"
              style={{ background: '#3B82F6' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Надсилаємо...' : 'Відправити повідомлення'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
