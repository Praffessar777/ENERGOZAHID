import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { SupportModal } from '../SupportModal';
import { ConsultationModal } from '../ConsultationModal';
import { BrandedEnergyHero } from '../animations/BrandedEnergyHero';
import { Download, Search, FileText, Scale, Award, Users, Folder, Info, MessageSquare, PieChart, FileBarChart, ExternalLink } from 'lucide-react';

export function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documents = [
    {
      id: 1,
      category: 'licenses',
      name: 'Ліцензія на постачання електричної енергії споживачам',
      description: 'Постанова НКРЕКП про видачу ліцензії №980 від 11.09.2018 року',
      size: '2.4 MB',
      date: '15.01.2024',
      type: 'Офіційний документ',
      format: 'PDF',
      viewLink: '/pdf/Постанова про видачу ліцензії від 11.09.18.pdf',
      downloadLink: '/pdf/Постанова про видачу ліцензії від 11.09.18.pdf'
    },
    {
      id: 2,
      category: 'tariffs',
      name: 'Структура тарифу на послуги з передачі електричної енергії',
      description: 'Офіційні тарифи на електричну енергію для непобутових споживачів',
      size: '3.2 MB',
      date: '01.01.2025',
      type: 'Нормативний акт',
      format: 'PDF',
      viewLink: '/pdf/Struktura_taryfu_na_poslugy_z_rozpodilu_ee.pdf',
      downloadLink: '/pdf/Struktura_taryfu_na_poslugy_z_rozpodilu_ee.pdf'
    },
    {
      id: 3,
      category: 'tariffs',
      name: 'Тарифи на послуги з розподілу електричної енергії, що діють з 01 січня 2025 року',
      description: 'Ціни на технічне обслуговування, консультації та додаткові послуги',
      size: '1.8 MB',
      date: '01.01.2025',
      type: 'Нормативний акт',
      format: 'PDF',
      viewLink: '/pdf/Tarifi_na_poslugi_z_rozpodilu_elektrichnoi_energii_shho_dijut_z_01 (1).pdf',
      downloadLink: '/pdf/Tarifi_na_poslugi_z_rozpodilu_elektrichnoi_energii_shho_dijut_z_01 (1).pdf'
    },
    {
      id: 4,
      category: 'tariffs',
      name: 'Ціна',
      description: 'Актуальна інформація про ціни на електричну енергію для споживачів',
      size: '1.5 MB',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/7000.pdf',
      downloadLink: '/pdf/7000.pdf'
    },
    {
      id: 5,
      category: 'tariffs',
      name: 'Роз\'яснення до рахунку за електричну енергію',
      description: 'Детальне пояснення складових рахунку та методики нарахування платежів',
      size: '2.1 MB',
      date: '01.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Приклад_роз\'яснення_рахунку_за_електричну_енергію.pdf',
      downloadLink: '/pdf/Приклад_роз\'яснення_рахунку_за_електричну_енергію.pdf'
    },
    {
      id: 6,
      category: 'tariffs',
      name: 'Ціни на електроенергію для побутових і непобутових споживачів в Україні - дані Держстат',
      description: 'Статистичні дані Державної служби статистики України щодо цін на електричну енергію',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      externalLink: 'https://www.oree.com.ua/index.php/eu_prices'
    },
    {
      id: 7,
      category: 'tariffs',
      name: 'Порівняння цін/тарифів на товари, послуги в Україні та інших державах',
      description: 'Порівняльний аналіз цін та тарифів на електроенергію в Україні та європейських країнах',
      date: '01.01.2025',
      type: 'Аналітичний звіт',
      viewLink: '/pdf/Порівняння_цін_на_електричну_енергію_в_Україні_та_інших_країнах.pdf',
      downloadLink: '/pdf/Порівняння_цін_на_електричну_енергію_в_Україні_та_інших_країнах.pdf'
    },
    {
      id: 8,
      category: 'legal',
      name: 'Закон України "Про ринок електричної енергії"',
      description: 'Основний законодавчий акт, що регулює функціонування ринку електричної енергії',
      date: '13.04.2017',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/2019-19#Text'
    },
    {
      id: 9,
      category: 'legal',
      name: 'Закон України "Про захист економічної конкуренції"',
      description: 'Правові засади підтримки та захисту економічної конкуренції',
      date: '11.01.2001',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/2210-14#Text'
    },
    {
      id: 10,
      category: 'legal',
      name: 'Закон України "Про захист персональних даних"',
      description: 'Правові засади захисту персональних даних споживачів',
      date: '01.06.2010',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/2297-17#Text'
    },
    {
      id: 11,
      category: 'legal',
      name: 'Закон України "Про Національну комісію, що здійснює державне регулювання у сферах енергетики та комунальних послуг"',
      description: 'Визначає правовий статус, повноваження та функції НКРЕКП',
      date: '22.09.2016',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/1540-19#Text'
    },
    {
      id: 12,
      category: 'legal',
      name: 'Закон України "Про особливості доступу до інформації у сферах постачання електричної енергії, природного газу, теплопостачання, централізованого постачання гарячої води, централізованого питного водопостачання та водовідведення"',
      description: 'Регулює особливості доступу до інформації у сферах енергопостачання та комунальних послуг',
      date: '10.12.2015',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/887-19#Text'
    },
    {
      id: 13,
      category: 'legal',
      name: 'Постанова НКРЕКП № 307 від 14.03.2018 "Про затвердження Правил ринку"',
      description: 'Встановлює правила функціонування оптового ринку електричної енергії',
      date: '14.03.2018',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v0307874-18#Text'
    },
    {
      id: 14,
      category: 'legal',
      name: 'Постанова НКРЕКП № 308 від 14.03.2018 "Про затвердження Правил ринку «на добу наперед» та внутрішньодобового ринку"',
      description: 'Регулює функціонування ринку електричної енергії на добу наперед та внутрішньодобового ринку',
      date: '14.03.2018',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v0308874-18#Text'
    },
    {
      id: 15,
      category: 'legal',
      name: 'Постанова НКРЕКП № 309 від 14.03.2018 "Про затвердження Кодексу системи передачі"',
      description: 'Встановлює правила передачі електричної енергії магістральними електромережами',
      date: '14.03.2018',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v0309874-18#Text'
    },
    {
      id: 16,
      category: 'legal',
      name: 'Постанова НКРЕКП № 310 від 14.03.2018 "Про затвердження Кодексу систем розподілу"',
      description: 'Встановлює правила розподілу електричної енергії та приєднання споживачів',
      date: '14.03.2018',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v0310874-18#Text'
    },
    {
      id: 17,
      category: 'legal',
      name: 'Постанова НКРЕКП № 311 від 14.03.2018 "Про затвердження Кодексу комерційного обліку електричної енергії"',
      description: 'Регулює порядок комерційного обліку виробництва, передачі, розподілу та постачання електричної енергії',
      date: '14.03.2018',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v0311874-18#Text'
    },
    {
      id: 18,
      category: 'legal',
      name: 'Постанова НКРЕКП № 312 від 14.03.2018 "Про затвердження Правил роздрібного ринку електричної енергії"',
      description: 'Встановлює правила функціонування роздрібного ринку електричної енергії',
      date: '14.03.2018',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v0312874-18#Text'
    },
    {
      id: 19,
      category: 'legal',
      name: 'Постанова НКРЕКП № 375 від 12.06.2018 "Про порядок забезпечення стандартів якості електропостачання та надання компенсацій споживачам за їх недотримання"',
      description: 'Визначає стандарти якості електропостачання та порядок компенсацій споживачам',
      date: '12.06.2018',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v0375874-18#Text'
    },
    {
      id: 20,
      category: 'legal',
      name: 'Постанова НКРЕКП № 1468 від 27.12.2017 "Про затвердження Ліцензійних умов провадження господарської діяльності з перепродажу електричної енергії (трейдерської діяльності)"',
      description: 'Встановлює вимоги для отримання та дії ліцензій на трейдерську діяльність',
      date: '27.12.2017',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v1468874-17#Text'
    },
    {
      id: 21,
      category: 'legal',
      name: 'Постанова НКРЕКП № 1469 від 27.12.2017 "Про затвердження Ліцензійних умов провадження господарської діяльності з постачання електричної енергії споживачу"',
      description: 'Встановлює вимоги для отримання та дії ліцензій на постачання електроенергії споживачам',
      date: '27.12.2017',
      type: 'Нормативний акт',
      externalLink: 'https://zakon.rada.gov.ua/laws/show/v1469874-17#Text'
    },
    {
      id: 22,
      category: 'contracts',
      name: 'Договір постачання електроенергії споживачу',
      description: 'Типова форма договору про постачання електричної енергії для непобутових споживачів',
      size: '856 KB',
      date: '05.01.2025',
      type: 'Зразок документу',
      format: 'PDF',
      viewLink: '/pdf/Договір на постачання електричної енергії.pdf',
      downloadLink: '/pdf/Договір на постачання електричної енергії.pdf'
    },
    {
      id: 23,
      category: 'contracts',
      name: 'Додаток №1 "Заява-приєднання до умов договору про постачання електричної енергії споживачу ознайомитись та завантажити"',
      description: 'Заява споживача про приєднання до типових умов договору постачання електричної енергії',
      size: '1.2 MB',
      date: '05.01.2025',
      type: 'Зразок документу',
      format: 'PDF',
      viewLink: '/pdf/Заява приєднання до договору.pdf',
      downloadLink: '/pdf/Заява приєднання до договору.pdf'
    },
    {
      id: 24,
      category: 'contracts',
      name: 'Додаток №2 "Комерційна пропозиція до Договору про постачання електричної енергії споживачу"',
      description: 'Комерційна пропозиція з деталізацією тарифів та умов постачання електричної енергії',
      size: '745 KB',
      date: '05.01.2025',
      type: 'Зразок документу',
      format: 'PDF',
      viewLink: '/pdf/Публічна комерційна пропозиція 1.pdf',
      downloadLink: '/pdf/Публічна комерційна пропозиція 1.pdf'
    },
    {
      id: 25,
      category: 'contracts',
      name: 'Додаток №2 "Комерційна пропозиція до Договору про постачання електричної енергії споживачу (варіант 2)"',
      description: 'Альтернативний варіант комерційної пропозиції з іншими умовами тарифікації',
      size: '768 KB',
      date: '05.01.2025',
      type: 'Зразок документу',
      format: 'PDF',
      viewLink: '/pdf/Публічна комерційна пропозиція 2.pdf',
      downloadLink: '/pdf/Публічна комерційна пропозиція 2.pdf'
    },
    {
      id: 26,
      category: 'contracts',
      name: 'Додаток №3.1 "Договір купівлі - продажу електричної енергії за механізмом самовиробництва"',
      description: 'Договір для споживачів з власними джерелами виробництва електричної енергії',
      size: '912 KB',
      date: '05.01.2025',
      type: 'Зразок документу',
      format: 'PDF',
      viewLink: '/pdf/Договір_купівлі_продажу_електричної_енергії_за_механізмом_самовиробництва.pdf',
      downloadLink: '/pdf/Договір_купівлі_продажу_електричної_енергії_за_механізмом_самовиробництва.pdf'
    },
    {
      id: 27,
      category: 'contracts',
      name: 'Додаток №3.2 "Комерційна пропозиція до Договору про постачання електричної енергії споживачу(активний споживач)"',
      description: 'Комерційна пропозиція для активних споживачів, які виробляють та споживають електроенергію',
      size: '823 KB',
      date: '05.01.2025',
      type: 'Зразок документу',
      format: 'PDF',
      viewLink: '/pdf/Публічна комерційна пропозиція 3 Активний споживач.pdf',
      downloadLink: '/pdf/Публічна комерційна пропозиція 3 Активний споживач.pdf'
    },
    {
      id: 28,
      category: 'consumer-info',
      name: 'Інструкція зі зняття показань лічильника',
      description: 'Детальна інструкція для споживачів щодо правильного зняття показань',
      size: '2.1 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Instrukciya_pokazniky_lichylnyka (2).pdf',
      downloadLink: '/pdf/Instrukciya_pokazniky_lichylnyka (2).pdf'
    },
    {
      id: 29,
      category: 'consumer-info',
      name: 'Правила безпечної експлуатації електроприладів',
      description: 'Рекомендації щодо безпечного використання електричних приладів',
      size: '1.9 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Pravyla_bezpechnoi_ekspluataciyi_elektropryladiv.pdf',
      downloadLink: '/pdf/Pravyla_bezpechnoi_ekspluataciyi_elektropryladiv.pdf'
    },
    {
      id: 30,
      category: 'consumer-info',
      name: 'Порядок подання показань лічильника',
      description: 'Способи та терміни передачі показань електролічильників',
      size: '1.5 MB',
      date: '10.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Poriadok_podannia_pokazan_lichylnyka.pdf',
      downloadLink: '/pdf/Poriadok_podannia_pokazan_lichylnyka.pdf'
    },
    {
      id: 31,
      category: 'consumer-info',
      name: 'Поради щодо економії електроенергії',
      description: 'Практичні рекомендації для зменшення споживання електричної енергії',
      size: '2.8 MB',
      date: '10.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Porady_shchodo_ekonomiyi_elektroenergiyi.pdf',
      downloadLink: '/pdf/Porady_shchodo_ekonomiyi_elektroenergiyi.pdf'
    },
    {
      id: 32,
      category: 'consumer-info',
      name: 'Контактні дані для подання повідомлень про загрозу електробезпеці, контактні дані операторів системи, інформаційно-консультаційних центрів та кол-центрів учасників роздрібного ринку',
      description: 'Повний перелік контактів служб безпеки та підтримки споживачів на ринку електроенергії',
      size: '1.2 MB',
      date: '10.01.2025',
      type: 'Довідник',
      format: 'PDF',
      viewLink: '/pdf/Контактні дані для подання повідомлень про загрозу електробезпеці, контактні дані операторів системи, інформаційно-консультаційних центрів та кол-центрів учасників роздрібного ринку.pdf',
      downloadLink: '/pdf/Контактні дані для подання повідомлень про загрозу електробезпеці, контактні дані операторів системи, інформаційно-консультаційних центрів та кол-центрів учасників роздрібного ринку.pdf'
    },
    {
      id: 33,
      category: 'consumer-info',
      name: 'Порядок забезпечення стандартів якості Електропостачання та компенсації за їх невиконання',
      description: 'Детальний опис стандартів якості послуг та механізму отримання компенсацій',
      size: '2.3 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Poryadok-zabezpechennya-standartiv-yakosti-Elektropostachannya-ta-kompensacii-za-ih-nevikonannya_compressed.pdf',
      downloadLink: '/pdf/Poryadok-zabezpechennya-standartiv-yakosti-Elektropostachannya-ta-kompensacii-za-ih-nevikonannya_compressed.pdf'
    },
    {
      id: 34,
      category: 'consumer-info',
      name: 'Посилання на веб-сторінки Регулятора, Держенергонагляду, Міненерго, операторів системи, адміністратора ринку, адміністратора комерційного обліку, Антимонопольного комітету України.',
      description: 'Корисні посилання на офіційні сайти НКРЕКП, операторів та інших учасників ринку',
      size: '850 KB',
      date: '10.01.2025',
      type: 'Довідник',
      format: 'PDF',
      viewLink: '/pdf/Посилання_на_вебсторінки_регулятора_центральнів_органів_влади_ОСР.pdf',
      downloadLink: '/pdf/Посилання_на_вебсторінки_регулятора_центральнів_органів_влади_ОСР.pdf'
    },
    {
      id: 35,
      category: 'consumer-info',
      name: 'Права споживачів передбачені законодавством',
      description: 'Повний перелік прав споживачів електричної енергії згідно з чинним законодавством',
      size: '1.9 MB',
      date: '10.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Права споживача.pdf',
      downloadLink: '/pdf/Права споживача.pdf'
    },
    {
      id: 36,
      category: 'consumer-info',
      name: 'Відключення та відновлення електроживлення',
      description: 'Порядок планових та аварійних відключень, процедура відновлення електропостачання',
      size: '1.7 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Vidkljuchennya-ta-vidnovlennya-elektrozhivlennya.pdf',
      downloadLink: '/pdf/Vidkljuchennya-ta-vidnovlennya-elektrozhivlennya.pdf'
    },
    {
      id: 37,
      category: 'consumer-info',
      name: 'Інформація щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг',
      description: 'Публічна інформація про дотримання компанією стандартів якості та виплачені компенсації',
      size: '3.1 MB',
      date: '10.01.2025',
      type: 'Інформаційний матеріал',
      externalLink: 'https://www.nerc.gov.ua/sferi-diyalnosti/elektroenergiya/yakist-elektropostachannya/standarti-yakosti-elektropostachannya-ta-nadannya-kompensacij'
    },
    {
      id: 38,
      category: 'consumer-info',
      name: 'Інформація щодо порядку укладення та приєднання споживача до договору про постачання електричної енергії',
      description: 'Покрокова інструкція для нових споживачів щодо укладення договору електропостачання',
      size: '2.0 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Informaciya_pro_poriadok_ukladennia_dogovoru_postachannya.pdf',
      downloadLink: '/pdf/Informaciya_pro_poriadok_ukladennia_dogovoru_postachannya.pdf'
    },
    {
      id: 39,
      category: 'consumer-info',
      name: 'Загальні умови електропостачання',
      description: 'Базові правила та умови надання послуг електропостачання для всіх категорій споживачів',
      size: '2.5 MB',
      date: '10.01.2025',
      type: 'Нормативний документ',
      format: 'PDF',
      viewLink: '/pdf/Zagalni-umovi-elektropostachannya.pdf',
      downloadLink: '/pdf/Zagalni-umovi-elektropostachannya.pdf'
    },
    {
      id: 40,
      category: 'consumer-info',
      name: 'Переваги ефективного кінцевого використання енергії споживачами та поради щодо підвищення енергоефективності при споживанні електроенергії',
      description: 'Рекомендації з енергоефективності та економії електроенергії для різних типів споживачів',
      size: '3.2 MB',
      date: '10.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Perevagi-efektivnogo-kincevogo-vikoristannya-energii-spozhivachami-ta-poradi-shhodo-pidvishhennya-energoefektivnosti.pdf',
      downloadLink: '/pdf/Perevagi-efektivnogo-kincevogo-vikoristannya-energii-spozhivachami-ta-poradi-shhodo-pidvishhennya-energoefektivnosti.pdf'
    },
    {
      id: 41,
      category: 'consumer-info',
      name: 'Порядок укладання договорів про постачання електричної енергії споживачу за «вільними цінами»',
      description: 'Особливості укладення договорів за вільними (ринковими) цінами на електроенергію',
      size: '1.8 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Poryadok-ukladannya-dogovriv-pro-postachannya-elektrychnoyi-energiyi-spozhyvachu-za-vilnymy-tsinamy.pdf',
      downloadLink: '/pdf/Poryadok-ukladannya-dogovriv-pro-postachannya-elektrychnoyi-energiyi-spozhyvachu-za-vilnymy-tsinamy.pdf'
    },
    {
      id: 42,
      category: 'consumer-info',
      name: 'Інформація щодо порядку подання споживачами звернень, скарг, претензій, надання повідомлень про загрозу електробезпеці та їх розгляду',
      description: 'Детальна процедура подання та розгляду звернень, скарг та повідомлень про аварійні ситуації',
      size: '2.2 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Procedura_rozghliadu_skarh_spozhyvachiv.pdf',
      downloadLink: '/pdf/Procedura_rozghliadu_skarh_spozhyvachiv.pdf'
    },
    {
      id: 43,
      category: 'consumer-info',
      name: 'Загальний порядок зняття показів засобів вимірювання та оплати спожитої електричної енергії',
      description: 'Правила зняття показань лічильників та порядок розрахунків за електроенергію',
      size: '1.6 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Zagalnyi_poryadok_znyattya_pokaziv.pdf',
      downloadLink: '/pdf/Zagalnyi_poryadok_znyattya_pokaziv.pdf'
    },
    {
      id: 44,
      category: 'consumer-info',
      name: 'Порядок зміни електропостачальника за ініціативою споживача',
      description: 'Покрокова інструкція для споживачів, які бажають змінити постачальника електроенергії',
      size: '1.4 MB',
      date: '10.01.2025',
      type: 'Інструкція',
      format: 'PDF',
      viewLink: '/pdf/Poryadok-zmini-elektropostachalnika-za-iniciativoju-spozhivacha.pdf',
      downloadLink: '/pdf/Poryadok-zmini-elektropostachalnika-za-iniciativoju-spozhivacha.pdf'
    },
    {
      id: 45,
      category: 'consumer-info',
      name: 'Порядок роботи та контактні дані інформаційно-консультаційного центру',
      description: 'Графік роботи, контакти та перелік послуг інформаційно-консультаційного центру компанії',
      size: '1.1 MB',
      date: '10.01.2025',
      type: 'Довідник',
      format: 'PDF',
      viewLink: '/pdf/Poryadok-roboti-kontakt.pdf',
      downloadLink: '/pdf/Poryadok-roboti-kontakt.pdf'
    },
    {
      id: 46,
      category: 'consumer-info',
      name: 'Перелiк послуг кол-центру ТОВ ЕНЕРГОЗАХІД',
      description: 'Повний каталог послуг та консультацій, які надає інформаційний відділ компанії',
      size: '1.3 MB',
      date: '10.01.2025',
      type: 'Довідник',
      format: 'PDF',
      viewLink: '/pdf/Perelik_poslug_info_viddilu.pdf',
      downloadLink: '/pdf/Perelik_poslug_info_viddilu.pdf'
    },
    {
      id: 47,
      category: 'complaints',
      name: 'Форма скарги/звернення споживача',
      description: 'Типова форма для подання скарги або звернення від споживача',
      size: '850 KB',
      date: '05.01.2025',
      type: 'Форма',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-1-Zrazok-zvernennya_KEM-2.pdf',
      downloadLink: '/pdf/Dodatok-1-Zrazok-zvernennya_KEM-2.pdf'
    },
    {
      id: 48,
      category: 'complaints',
      name: 'Регламент розгляду скарг споживачів',
      description: 'Порядок та терміни розгляду звернень та скарг споживачів',
      size: '1.7 MB',
      date: '05.01.2025',
      type: 'Регламент',
      format: 'PDF',
      viewLink: '/pdf/Procedura_rozghliadu_skarh_spozhyvachiv.pdf',
      downloadLink: '/pdf/Procedura_rozghliadu_skarh_spozhyvachiv.pdf'
    },
    {
      id: 49,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії за 2019 рік',
      description: 'Інформація про структуру та частки джерел виробництва електроенергії компанії у 2019 році',
      size: '3.4 MB',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Dzherela-EE-za-2019r.-EZ.pdf',
      downloadLink: '/pdf/Dzherela-EE-za-2019r.-EZ.pdf'
    },
    {
      id: 50,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії за 2020 рік',
      description: 'Інформація про структуру та частки джерел виробництва електроенергії компанії у 2020 році',
      size: '2.6 MB',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Dzherela-EE-za-2020r.-EZ.pdf',
      downloadLink: '/pdf/Dzherela-EE-za-2020r.-EZ.pdf'
    },
    {
      id: 51,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії за 2021 рік',
      description: 'Інформація про структуру та частки джерел виробництва електроенергії компанії у 2021 році',
      size: '2.7 MB',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Dzherela-EE-za-2021r.-EZ.pdf',
      downloadLink: '/pdf/Dzherela-EE-za-2021r.-EZ.pdf'
    },
    {
      id: 52,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії за 2022 рік',
      description: 'Інформація про структуру та частки джерел виробництва електроенергії компанії у 2022 році',
      size: '2.8 MB',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Dzherela-EE-za-2022r.-EZ.pdf',
      downloadLink: '/pdf/Dzherela-EE-za-2022r.-EZ.pdf'
    },
    {
      id: 53,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії за 2023 рік',
      description: 'Інформація про структуру та частки джерел виробництва електроенергії компанії у 2023 році',
      size: '2.9 MB',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Dzherela-EE-za-2023r.-EZ.pdf',
      downloadLink: '/pdf/Dzherela-EE-za-2023r.-EZ.pdf'
    },
    {
      id: 54,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії за 2024 рік',
      description: 'Інформація про структуру та частки джерел виробництва електроенергії компанії у 2024 році',
      size: '3.0 MB',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      format: 'PDF',
      viewLink: '/pdf/Dzherela-EE-za-2024r.-EZ.pdf',
      downloadLink: '/pdf/Dzherela-EE-za-2024r.-EZ.pdf'
    },
    {
      id: 55,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії по місяцях за 2019 рік',
      description: 'Детальна помісячна статистика структури джерел виробництва електроенергії за 2019 рік',
      size: '4.2 MB',
      date: '01.01.2025',
      type: 'Статистичний звіт',
      format: 'PDF',
      viewLink: '/pdf/Chastki_dzherel_pomisyachno_za_2019_rik.pdf',
      downloadLink: '/pdf/Chastki_dzherel_pomisyachno_za_2019_rik.pdf'
    },
    {
      id: 56,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії по місяцях за 2020 рік',
      description: 'Детальна помісячна статистика структури джерел виробництва електроенергії за 2020 рік',
      size: '4.3 MB',
      date: '01.01.2025',
      type: 'Статистичний звіт',
      format: 'PDF',
      viewLink: '/pdf/Chastki_dzherel_pomisyachno_za_2020_rik (1).pdf',
      downloadLink: '/pdf/Chastki_dzherel_pomisyachno_za_2020_rik (1).pdf'
    },
    {
      id: 57,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії по місяцях за 2021 рік',
      description: 'Детальна помісячна статистика структури джерел виробництва електроенергії за 2021 рік',
      size: '4.4 MB',
      date: '01.01.2025',
      type: 'Статистичний звіт',
      format: 'PDF',
      viewLink: '/pdf/Chastki_dzherel_pomisyachno_za_2021_rik.pdf',
      downloadLink: '/pdf/Chastki_dzherel_pomisyachno_za_2021_rik.pdf'
    },
    {
      id: 58,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії по місяцях за 2022 рік',
      description: 'Детальна помісячна статистика структури джерел виробництва електроенергії за 2022 рік',
      size: '4.5 MB',
      date: '01.01.2025',
      type: 'Статистичний звіт',
      format: 'PDF',
      viewLink: '/pdf/Chastki_dzherel_pomisyachno_za_2022_rik.pdf',
      downloadLink: '/pdf/Chastki_dzherel_pomisyachno_za_2022_rik.pdf'
    },
    {
      id: 59,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії по місяцях за 2023 рік',
      description: 'Детальна помісячна статистика структури джерел виробництва електроенергії за 2023 рік',
      size: '4.6 MB',
      date: '01.01.2025',
      type: 'Статистичний звіт',
      format: 'PDF',
      viewLink: '/pdf/Chastki_dzherel_pomisyachno_za_2023_rik.pdf',
      downloadLink: '/pdf/Chastki_dzherel_pomisyachno_za_2023_rik.pdf'
    },
    {
      id: 60,
      category: 'energy-sources',
      name: 'Частки джерел електроенергії по місяцях за 2024 рік',
      description: 'Детальна помісячна статистика структури джерел виробництва електроенергії за 2024 рік',
      size: '4.7 MB',
      date: '01.01.2025',
      type: 'Статистичний звіт',
      format: 'PDF',
      viewLink: '/pdf/Chastki_dzherel_pomisyachno_za_2024_rik.pdf',
      downloadLink: '/pdf/Chastki_dzherel_pomisyachno_za_2024_rik.pdf'
    },
    {
      id: 61,
      category: 'energy-sources',
      name: 'Інформація про вплив на довкілля, спричинений виробництвом електричної енергії усіма джерелами енергії',
      description: 'Комплексний аналіз екологічного впливу різних джерел виробництва електроенергії',
      date: '01.01.2025',
      type: 'Екологічний звіт',
      externalLink: 'https://necu.org.ua/energy/'
    },
    {
      id: 62,
      category: 'energy-sources',
      name: 'ВІДНОВЛЮВАЛЬНА ЕНЕРГЕТИКА ТА ВПЛИВ НА НАВКОЛИШНЄ СЕРЕДОВИЩЕ',
      description: 'Дослідження використання відновлюваних джерел енергії та їх екологічних переваг',
      date: '01.01.2025',
      type: 'Інформаційний матеріал',
      externalLink: 'https://www.gpee.com.ua/news_item/727'
    },
    {
      id: 63,
      category: 'energy-sources',
      name: 'Вплив на довкілля при виробництві електроенергії',
      description: 'Оцінка екологічних наслідків виробництва електричної енергії різними методами',
      date: '01.01.2025',
      type: 'Екологічний звіт',
      externalLink: 'https://energo.km.ua/page/vpliv-na-dovkillja-pri-virobnitstvi-elektroenergiji'
    },
    {
      id: 64,
      category: 'reports',
      name: 'Звіт щодо розгляду звернень, скарг, претензій за 2018 рік',
      description: 'Підсумкові звіти про розгляд звернень та скарг споживачів компанії',
      size: '63.4 KB',
      date: '31.12.2018',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2018.pdf',
      downloadLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2018.pdf'
    },
    {
      id: 65,
      category: 'reports',
      name: 'Звіт щодо розгляду звернень, скарг, претензій за 2019 рік',
      description: 'Підсумкові звіти про розгляд звернень та скарг споживачів компанії',
      size: '64.1 KB',
      date: '31.12.2019',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2019.pdf',
      downloadLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2019.pdf'
    },
    {
      id: 66,
      category: 'reports',
      name: 'Звіт щодо розгляду звернень, скарг, претензій за 2020 рік',
      description: 'Підсумкові звіти про розгляд звернень та скарг споживачів компанії',
      size: '63.8 KB',
      date: '31.12.2020',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2020.pdf',
      downloadLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2020.pdf'
    },
    {
      id: 67,
      category: 'reports',
      name: 'Звіт щодо розгляду звернень, скарг, претензій за 2021 рік',
      description: 'Підсумкові звіти про розгляд звернень та скарг споживачів компанії',
      size: '63.6 KB',
      date: '31.12.2021',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2021.pdf',
      downloadLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2021.pdf'
    },
    {
      id: 68,
      category: 'reports',
      name: 'Звіт щодо розгляду звернень, скарг, претензій за 2022 рік',
      description: 'Підсумкові звіти про розгляд звернень та скарг споживачів компанії',
      size: '63.3 KB',
      date: '31.12.2022',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2022.pdf',
      downloadLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2022.pdf'
    },
    {
      id: 69,
      category: 'reports',
      name: 'Звіт щодо розгляду звернень, скарг, претензій за 2023 рік',
      description: 'Підсумкові звіти про розгляд звернень та скарг споживачів компанії',
      size: '63.8 KB',
      date: '31.12.2023',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2023.pdf',
      downloadLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen 2023.pdf'
    },
    {
      id: 70,
      category: 'reports',
      name: 'Звіт щодо розгляду звернень, скарг, претензій за 2024 рік',
      description: 'Підсумкові звіти про розгляд звернень та скарг споживачів компанії',
      size: '63.8 KB',
      date: '31.12.2024',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen.pdf',
      downloadLink: '/pdf/Richnij-zvit-shhodo-rozglyadu-zvernen.pdf'
    },
    {
      id: 71,
      category: 'reports',
      name: 'Звіт щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг за 2018 рік',
      description: 'Детальний звіт про якість послуг електропостачання та компенсації споживачам за 2018 рік',
      size: '4.5 MB',
      date: '31.12.2018',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-8_2018_EZ.pdf',
      downloadLink: '/pdf/Dodatok-8_2018_EZ.pdf'
    },
    {
      id: 72,
      category: 'reports',
      name: 'Звіт щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг за 2019 рік',
      description: 'Детальний звіт про якість послуг електропостачання та компенсації споживачам за 2019 рік',
      size: '4.6 MB',
      date: '31.12.2019',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-8_2019_EZ.pdf',
      downloadLink: '/pdf/Dodatok-8_2019_EZ.pdf'
    },
    {
      id: 73,
      category: 'reports',
      name: 'Звіт щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг за 2020 рік',
      description: 'Детальний звіт про якість послуг електропостачання та компенсації споживачам за 2020 рік',
      size: '4.7 MB',
      date: '31.12.2020',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-8_2020_EZ.pdf',
      downloadLink: '/pdf/Dodatok-8_2020_EZ.pdf'
    },
    {
      id: 74,
      category: 'reports',
      name: 'Звіт щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг за 2021 рік',
      description: 'Детальний звіт про якість послуг електропостачання та компенсації споживачам за 2021 рік',
      size: '4.8 MB',
      date: '31.12.2021',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-8_2021_EZ.pdf',
      downloadLink: '/pdf/Dodatok-8_2021_EZ.pdf'
    },
    {
      id: 75,
      category: 'reports',
      name: 'Звіт щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг за 2022 рік',
      description: 'Детальний звіт про якість послуг електропостачання та компенсації споживачам за 2022 рік',
      size: '4.9 MB',
      date: '31.12.2022',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-8_2022_EZ.pdf',
      downloadLink: '/pdf/Dodatok-8_2022_EZ.pdf'
    },
    {
      id: 76,
      category: 'reports',
      name: 'Звіт щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг за 2023 рік',
      description: 'Детальний звіт про якість послуг електропостачання та компенсації споживачам за 2023 рік',
      size: '5.0 MB',
      date: '31.12.2023',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-8_2023_EZ.pdf',
      downloadLink: '/pdf/Dodatok-8_2023_EZ.pdf'
    },
    {
      id: 77,
      category: 'reports',
      name: 'Звіт щодо дотримання загальних та гарантованих стандартів якості надання послуг електропостачальника та сум наданих компенсацій за недотримання гарантованих стандартів якості надання послуг за 2024 рік',
      description: 'Детальний звіт про якість послуг електропостачання та компенсації споживачам за 2024 рік',
      size: '4.8 MB',
      date: '31.12.2024',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Dodatok-8_2024_EZ.pdf',
      downloadLink: '/pdf/Dodatok-8_2024_EZ.pdf'
    },
    {
      id: 78,
      category: 'reports',
      name: 'Річна звітність 2018',
      description: 'Консолідована річна фінансова та операційна звітність компанії за 2018 рік',
      size: '6.2 MB',
      date: '31.03.2019',
      type: 'Фінансовий звіт',
      format: 'PDF',
      viewLink: '/pdf/FinZvit-EZ-2019-01-01.pdf',
      downloadLink: '/pdf/FinZvit-EZ-2019-01-01.pdf'
    },
    {
      id: 79,
      category: 'reports',
      name: 'Річна звітність 2019',
      description: 'Консолідована річна фінансова та операційна звітність компанії за 2019 рік',
      size: '6.3 MB',
      date: '31.03.2020',
      type: 'Фінансовий звіт',
      format: 'PDF',
      viewLink: '/pdf/FinZvit-EZ-2020-01-01.pdf',
      downloadLink: '/pdf/FinZvit-EZ-2020-01-01.pdf'
    },
    {
      id: 80,
      category: 'reports',
      name: 'Річна звітність 2020',
      description: 'Консолідована річна фінансова та операційна звітність компанії за 2020 рік',
      size: '6.4 MB',
      date: '31.03.2021',
      type: 'Фінансовий звіт',
      format: 'PDF',
      viewLink: '/pdf/FinZvit-EZ-2021-01-01.pdf',
      downloadLink: '/pdf/FinZvit-EZ-2021-01-01.pdf'
    },
    {
      id: 81,
      category: 'reports',
      name: 'Річна звітність 2021',
      description: 'Консолідована річна фінансова та операційна звітність компанії за 2021 рік',
      size: '6.5 MB',
      date: '31.03.2022',
      type: 'Фінансовий звіт',
      format: 'PDF',
      viewLink: '/pdf/FinZvit-EZ-2022-01-01.pdf',
      downloadLink: '/pdf/FinZvit-EZ-2022-01-01.pdf'
    },
    {
      id: 82,
      category: 'reports',
      name: 'Річна звітність 2022',
      description: 'Консолідована річна фінансова та операційна звітність компанії за 2022 рік',
      size: '6.6 MB',
      date: '31.03.2023',
      type: 'Фінансовий звіт',
      format: 'PDF',
      viewLink: '/pdf/FinZvit-EZ-2023-01-01.pdf',
      downloadLink: '/pdf/FinZvit-EZ-2023-01-01.pdf'
    },
    {
      id: 83,
      category: 'reports',
      name: 'Річна звітність 2023',
      description: 'Консолідована річна фінансова та операційна звітність компанії за 2023 рік',
      size: '6.7 MB',
      date: '31.03.2024',
      type: 'Фінансовий звіт',
      format: 'PDF',
      viewLink: '/pdf/FinZvit-EZ-2024-01-01.pdf',
      downloadLink: '/pdf/FinZvit-EZ-2024-01-01.pdf'
    },
    {
      id: 84,
      category: 'reports',
      name: 'Річна звітність 2024',
      description: 'Консолідована річна фінансова та операційна звітність компанії за 2024 рік',
      size: '6.7 MB',
      date: '31.03.2025',
      type: 'Фінансовий звіт',
      format: 'PDF',
      viewLink: '/pdf/FinZvit-EZ-2025-01-01.pdf',
      downloadLink: '/pdf/FinZvit-EZ-2025-01-01.pdf'
    },
    {
      id: 85,
      category: 'reports',
      name: 'Звіт незалежного аудитора',
      description: 'Аудиторський висновок незалежної аудиторської компанії щодо фінансової звітності',
      size: '3.2 MB',
      date: '31.03.2024',
      type: 'Аудиторський звіт',
      format: 'PDF',
      viewLink: '/pdf/2024_Звіт аудитора Енергозахід full.pdf',
      downloadLink: '/pdf/2024_Звіт аудитора Енергозахід full.pdf'
    },
    {
      id: 86,
      category: 'reports',
      name: 'Звітність про звернення та скарги споживачів електропостачальника 2018 рік',
      description: 'Статистика та аналіз звернень і скарг споживачів за 2018 рік',
      size: '2.8 MB',
      date: '31.12.2018',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/32110446_11S_18.pdf',
      downloadLink: '/pdf/32110446_11S_18.pdf'
    },
    {
      id: 87,
      category: 'reports',
      name: 'Звітність про звернення та скарги споживачів електропостачальника 2019 рік',
      description: 'Статистика та аналіз звернень і скарг споживачів за 2019 рік',
      size: '2.8 MB',
      date: '31.12.2019',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/32110446_11S_19.pdf',
      downloadLink: '/pdf/32110446_11S_19.pdf'
    },
    {
      id: 88,
      category: 'reports',
      name: 'Звітність про звернення та скарги споживачів електропостачальника 2020 рік',
      description: 'Статистика та аналіз звернень і скарг споживачів за 2020 рік',
      size: '2.9 MB',
      date: '31.12.2020',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/32110446_11S_20.pdf',
      downloadLink: '/pdf/32110446_11S_20.pdf'
    },
    {
      id: 89,
      category: 'reports',
      name: 'Звітність про звернення та скарги споживачів електропостачальника 2021 рік',
      description: 'Статистика та аналіз звернень і скарг споживачів за 2021 рік',
      size: '3.0 MB',
      date: '31.12.2021',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/32110446_11S_21.pdf',
      downloadLink: '/pdf/32110446_11S_21.pdf'
    },
    {
      id: 90,
      category: 'reports',
      name: 'Звітність про звернення та скарги споживачів електропостачальника 2022 рік',
      description: 'Статистика та аналіз звернень і скарг споживачів за 2022 рік',
      size: '3.1 MB',
      date: '31.12.2022',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/32110446_11S_22.pdf',
      downloadLink: '/pdf/32110446_11S_22.pdf'
    },
    {
      id: 91,
      category: 'reports',
      name: 'Звітність про звернення та скарги споживачів електропостачальника 2023 рік',
      description: 'Статистика та аналіз звернень і скарг споживачів за 2023 рік',
      size: '3.2 MB',
      date: '31.12.2023',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/32110446_11S_23.pdf',
      downloadLink: '/pdf/32110446_11S_23.pdf'
    },
    {
      id: 92,
      category: 'reports',
      name: 'Звітність про звернення та скарги споживачів електропостачальника 2024 рік',
      description: 'Статистика та аналіз звернень і скарг споживачів за 2024 рік',
      size: '3.2 MB',
      date: '31.12.2024',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/32110446_11S_24.pdf',
      downloadLink: '/pdf/32110446_11S_24.pdf'
    },
    {
      id: 93,
      category: 'reports',
      name: 'Звіти щодо показників якості послуг з постачання електричної енергії 2018',
      description: 'Показники якості електропостачання та дотримання стандартів обслуговування за 2018 рік',
      size: '4.2 MB',
      date: '31.12.2018',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Zvitnist-2018.pdf',
      downloadLink: '/pdf/Zvitnist-2018.pdf'
    },
    {
      id: 94,
      category: 'reports',
      name: 'Звіти щодо показників якості послуг з постачання електричної енергії 2019',
      description: 'Показники якості електропостачання та дотримання стандартів обслуговування за 2019 рік',
      size: '4.2 MB',
      date: '31.12.2019',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Zvitnist-2019.pdf',
      downloadLink: '/pdf/Zvitnist-2019.pdf'
    },
    {
      id: 95,
      category: 'reports',
      name: 'Звіти щодо показників якості послуг з постачання електричної енергії 2020',
      description: 'Показники якості електропостачання та дотримання стандартів обслуговування за 2020 рік',
      size: '4.2 MB',
      date: '31.12.2020',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Zvitnist-2020.pdf',
      downloadLink: '/pdf/Zvitnist-2020.pdf'
    },
    {
      id: 96,
      category: 'reports',
      name: 'Звіти щодо показників якості послуг з постачання електричної енергії 2021',
      description: 'Показники якості електропостачання та дотримання стандартів обслуговування за 2021 рік',
      size: '4.2 MB',
      date: '31.12.2021',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Zvitnist-2021.pdf',
      downloadLink: '/pdf/Zvitnist-2021.pdf'
    },
    {
      id: 97,
      category: 'reports',
      name: 'Звіти щодо показників якості послуг з постачання електричної енергії 2022',
      description: 'Показники якості електропостачання та дотримання стандартів обслуговування за 2022 рік',
      size: '4.3 MB',
      date: '31.12.2022',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Zvitnist-2022.pdf',
      downloadLink: '/pdf/Zvitnist-2022.pdf'
    },
    {
      id: 98,
      category: 'reports',
      name: 'Звіти щодо показників якості послуг з постачання електричної енергії 2023',
      description: 'Показники якості електропостачання та дотримання стандартів обслуговування за 2023 рік',
      size: '4.4 MB',
      date: '31.12.2023',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Zvitnist-2023.pdf',
      downloadLink: '/pdf/Zvitnist-2023.pdf'
    },
    {
      id: 99,
      category: 'reports',
      name: 'Звіти щодо показників якості послуг з постачання електричної енергії 2024',
      description: 'Показники якості електропостачання та дотримання стандартів обслуговування за 2024 рік',
      size: '4.5 MB',
      date: '31.12.2024',
      type: 'Звіт',
      format: 'PDF',
      viewLink: '/pdf/Zvitnist-2024.pdf',
      downloadLink: '/pdf/Zvitnist-2024.pdf'
    }
  ];

  // Динамічний розрахунок кількості документів у кожній категорії
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return documents.length;
    return documents.filter(doc => doc.category === categoryId).length;
  };

  const categories = [
    { id: 'all', name: 'Всі документи', icon: Folder, count: getCategoryCount('all') },
    { id: 'licenses', name: 'Ліцензія на право провадження господарської діяльності з постачання електричної енергії споживачу', icon: Award, count: getCategoryCount('licenses') },
    { id: 'tariffs', name: 'Тарифи та ціноутворення', icon: FileText, count: getCategoryCount('tariffs') },
    { id: 'legal', name: 'Нормативно - правові акти', icon: Scale, count: getCategoryCount('legal') },
    { id: 'contracts', name: 'Договір та додатки до нього', icon: Users, count: getCategoryCount('contracts') },
    { id: 'consumer-info', name: 'Інформація для споживачів', icon: Info, count: getCategoryCount('consumer-info') },
    { id: 'complaints', name: 'Порядок розгляду скарг/звернень спожвачів', icon: MessageSquare, count: getCategoryCount('complaints') },
    { id: 'energy-sources', name: 'Джерела енергії', icon: PieChart, count: getCategoryCount('energy-sources') },
    { id: 'reports', name: 'Звіти', icon: FileBarChart, count: getCategoryCount('reports') }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Офіційний документ':
      case 'Нормативний акт':
        return 'bg-blue-100 text-blue-800';
      case 'Сертифікат':
        return 'bg-green-100 text-green-800';
      case 'Зразок документу':
      case 'Зразок':
        return 'bg-purple-100 text-purple-800';
      case 'Правила':
      case 'Кодекс':
        return 'bg-red-100 text-red-800';
      case 'Інформаційний матеріал':
      case 'Інструкція':
        return 'bg-yellow-100 text-yellow-800';
      case 'Методичні матеріали':
        return 'bg-indigo-100 text-indigo-800';
      case 'Політика':
        return 'bg-pink-100 text-pink-800';
      case 'Форма':
        return 'bg-gray-100 text-gray-800';
      case 'Регламент':
        return 'bg-gray-100 text-gray-800';
      case 'Звіт':
      case 'Фінансовий звіт':
      case 'Статистичний звіт':
      case 'Аналітичний звіт':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const downloadFile = (url?: string, fileName?: string) => {
  if (!url) return;

  const a = document.createElement('a');
  a.href = url;

  if (fileName) {
    a.download = fileName;
  } else {
    a.download = url.split('/').pop() || 'document.pdf';
  }

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

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
                Документи
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                <span className="block">та регламенти</span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Офіційні документи, ліцензії та нормативні акти
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

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Пошук документів..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-base"
              />
            </motion.div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all hover:shadow-md h-full min-h-[140px] ${
                      selectedCategory === category.id
                        ? 'ring-2 ring-blue-500 bg-blue-50'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="text-center flex flex-col items-center justify-center h-full">
                      <div className="flex justify-center mb-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          <category.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="text-sm font-medium mb-1 min-h-[40px] flex items-center">
                        {category.name}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--energy-blue)' }}>
                  Знайдено документів: {filteredDocuments.length}
                </h2>
                <p className="text-gray-600">
                  {selectedCategory === 'all' 
                    ? 'Всі категорії' 
                    : categories.find(c => c.id === selectedCategory)?.name
                  }
                </p>
              </div>
            </motion.div>

            {/* Documents Grid */}
            <div className="space-y-4">
              {filteredDocuments.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                      {/* Document Icon */}
                      <div className="lg:col-span-1">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--energy-blue)' }}>
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Document Info */}
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg" style={{ color: 'var(--energy-blue)' }}>
                            {doc.name}
                          </h3>
                          <Badge className={getTypeColor(doc.type)}>
                            {doc.type}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">
                          {doc.description}
                        </p>
                        {!doc.externalLink && (
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            {doc.format && <span>Формат: {doc.format}</span>}
                            {doc.size && <span>Розмір: {doc.size}</span>}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="lg:col-span-4 flex justify-end space-x-2">
                        {doc.externalLink ? (
                          <Button
                            size="sm"
                            className="energy-gradient text-white hover:opacity-90 flex items-center space-x-2"
                            onClick={() => window.open(doc.externalLink, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Переглянути</span>
                          </Button>
                        ) : doc.viewLink && doc.downloadLink ? (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center space-x-2"
                              onClick={() => window.open(doc.viewLink, '_blank')}
                            >
                              <FileText className="w-4 h-4" />
                              <span>Переглянути</span>
                            </Button>
                            <Button
                              size="sm"
                              className="energy-gradient text-white hover:opacity-90 flex items-center space-x-2"
                              onClick={() => downloadFile(doc.downloadLink, doc.fileName)}
                            >
                              <Download className="w-4 h-4" />
                              <span>Завантажити</span>
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex items-center space-x-2"
                            >
                              <FileText className="w-4 h-4" />
                              <span>Переглянути</span>
                            </Button>
                            <Button
                              size="sm"
                              className="energy-gradient text-white hover:opacity-90 flex items-center space-x-2"
                            >
                              <Download className="w-4 h-4" />
                              <span>Завантажити</span>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredDocuments.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Документи не знайдено
                </h3>
                <p className="text-gray-500">
                  Спробуйте змінити критерії пошуку або оберіть іншу категорію
                </p>
              </motion.div>
            )}
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