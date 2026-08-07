/* ============ i18n: переключение RU / EN ============ */
(function () {
  const STORAGE_KEY = 'motosport-lang';

  const translations = {
    ru: {
      nav_home: 'Главная', nav_catalog: 'Каталог', nav_gallery: 'Галерея',
      nav_about: 'О нас', nav_contact: 'Контакты', nav_book: 'Забронировать',

      footer_desc: 'Продажа и аренда спортивных мотоциклов посуточно и понедельно. Только исправная техника, только эмоции трека.',
      footer_nav_title: 'Навигация', footer_bikes_title: 'Мотоциклы', footer_contacts_title: 'Контакты',
      footer_rights: '© 2026 MotoSport. Все права защищены.',
      footer_tagline: 'Аренда мотоциклов посуточно и понедельно',

      breadcrumb_catalog: 'Каталог', catalog_eyebrow: '9 моделей в наличии',
      catalog_title: 'Каталог мотоциклов',
      catalog_desc: 'Аренда посуточно и понедельно или выкуп в собственность. Все байки проходят техническую подготовку перед выдачей.',
      switch_day: 'За сутки', switch_week: 'За неделю', catalog_count: '9 мотоциклов',
      unit_day: 'за сутки', unit_week: 'за неделю',
      tag_available: 'В наличии', tag_turbo: 'Наддув', tag_sp: 'SP-версия', tag_hit: 'Хит проката',
      btn_book: 'Забронировать',
      cta_catalog_title: 'Не нашли нужную модель?',
      cta_catalog_desc: 'Подберём мотоцикл под ваш опыт, рост и маршрут — напишите нам, и мы предложим варианты в течение часа.',
      btn_request: 'Оставить заявку', btn_about_company: 'О компании',

      breadcrumb_gallery: 'Галерея', gallery_eyebrow: '9 фотографий',
      gallery_title: 'Галерея мотоциклов',
      gallery_desc: 'Наш парк вживую. Нажмите на фото, чтобы открыть его в полном размере.',
      cta_gallery_title: 'Понравился байк?',
      cta_gallery_desc: 'Посмотрите условия аренды и продажи в каталоге или сразу оставьте заявку.',
      btn_to_catalog: 'В каталог',

      breadcrumb_about: 'О нас', about_eyebrow: 'С 2019 года на треке',
      about_title: 'Мы делаем суперспорт доступным',
      about_desc: 'MotoSport начинался как гараж на троих механиков и один Ninja ZX-10R. Сегодня — это парк из девяти моделей и команда, которая живёт мотоциклами.',
      split1_eyebrow: 'Наша история', split1_title: 'От одного байка до полноценного парка',
      split1_p1: 'Компанию основали три друга, которых объединяла страсть к трековым дням и общее раздражение от того, как сложно было арендовать нормальный суперспорт в России. Первый Ninja ZX-10R купили в складчину и сдавали в аренду по выходным.',
      split1_p2: 'Через пять лет MotoSport — это девять актуальных моделей от Kawasaki, Ducati, BMW, Honda, Yamaha, Suzuki и Aprilia, собственный сервис и команда инструкторов, которая помогает подобрать байк под уровень райдера.',
      split2_eyebrow: 'Подход к делу', split2_title: 'Техника прежде всего',
      split2_p1: 'Каждый мотоцикл проходит диагностику перед выдачей: тормозная система, давление и износ резины, уровень масла, работа электроники. Мы не сдаём в аренду то, на чём не поехали бы сами.',
      split2_p2: 'Именно поэтому средний возраст парка — три года, а модели регулярно обновляются на актуальные версии.',
      values_eyebrow: 'Наши ценности', values_title: 'Три принципа, на которых всё держится',
      value1_index: 'Честность', value1_title: 'Прозрачные условия',
      value1_desc: 'Цена за сутки, неделю или выкуп фиксируется заранее — без скрытых доплат за пробег или «топливо».',
      value2_index: 'Безопасность', value2_title: 'Экипировка и инструктаж',
      value2_desc: 'Перед первой поездкой — короткий инструктаж по особенностям конкретной модели и её электронных систем.',
      value3_index: 'Сервис', value3_title: 'Поддержка на связи',
      value3_desc: 'Если в поездке что-то пошло не так — техподдержка и выездной механик доступны в любое время.',
      team_eyebrow: 'Команда', team_title: 'Люди, которые готовят ваш байк',
      team_desc: 'Механики, инструкторы и менеджеры проката — все с опытом трековых заездов.',
      team1_role: 'Основатель', team2_role: 'Руководитель проката',
      team3_role: 'Главный механик', team4_role: 'Инструктор',
      timeline_eyebrow: 'Путь компании', timeline_title: 'Ключевые этапы',
      tl1_title: 'Первый мотоцикл в парке',
      tl1_desc: 'Купили и подготовили первый Kawasaki Ninja ZX-10R, начали сдавать его в аренду по выходным.',
      tl2_title: 'Открытие сервисного центра',
      tl2_desc: 'Собрали собственную мастерскую и наняли постоянного механика — парк вырос до пяти моделей.',
      tl3_title: 'Запуск продажи мотоциклов',
      tl3_desc: 'Добавили направление продажи — байки из парка теперь можно выкупить после аренды.',
      tl4_title: 'Девять моделей в парке',
      tl4_desc: 'Расширили линейку до девяти актуальных суперспортов от семи производителей.',
      cta_about_title: 'Присоединяйтесь к трек-дням MotoSport',
      cta_about_desc: 'Познакомьтесь с парком лично — запишитесь на тест-драйв или сразу выберите байк в каталоге.',
      btn_open_catalog: 'Открыть каталог', btn_contact_us: 'Связаться с нами',

      breadcrumb_contact: 'Контакты', contact_eyebrow: 'Ответим в течение часа',
      contact_title: 'Свяжитесь с нами',
      contact_desc: 'Оставьте заявку на аренду или покупку — подберём мотоцикл и согласуем удобное время выдачи.',
      info_phone_title: 'Телефон', info_phone_desc: '+7 (999) 123-45-67 — ежедневно, 9:00–21:00',
      info_email_title: 'Электронная почта',
      info_address_title: 'Адрес', info_address_desc: 'Москва, Гоночный проезд, 12 — выдача байков по записи',
      info_hours_title: 'Режим работы', info_hours_desc: 'Без выходных, круглосуточная поддержка на трассе',
      form_eyebrow: 'Заявка', form_title: 'Расскажите, что вам нужно',
      label_name: 'Имя *', placeholder_name: 'Как к вам обращаться',
      label_phone: 'Телефон *', label_email: 'Электронная почта',
      label_bike: 'Интересующий мотоцикл', option_any: 'Не важно / посоветуйте',
      label_type: 'Формат', option_day: 'Аренда — сутки', option_week: 'Аренда — неделя', option_buy: 'Покупка',
      label_message: 'Комментарий', placeholder_message: 'Даты, опыт вождения, дополнительные пожелания',
      btn_send: 'Отправить заявку',

      form_error: 'Заполните обязательные поля, отмеченные звёздочкой.',
      form_success: 'Заявка отправлена. Мы свяжемся с вами в течение часа.',
      form_sending: 'Отправляем…', form_sent: 'Отправлено ✓',
    },
    en: {
      nav_home: 'Home', nav_catalog: 'Catalog', nav_gallery: 'Gallery',
      nav_about: 'About', nav_contact: 'Contact', nav_book: 'Book now',

      footer_desc: 'Sales and rental of sport motorcycles by the day or week. Only reliable machines, only track-day emotions.',
      footer_nav_title: 'Navigation', footer_bikes_title: 'Motorcycles', footer_contacts_title: 'Contacts',
      footer_rights: '© 2026 MotoSport. All rights reserved.',
      footer_tagline: 'Motorcycle rental by the day or week',

      breadcrumb_catalog: 'Catalog', catalog_eyebrow: '9 models available',
      catalog_title: 'Motorcycle Catalog',
      catalog_desc: 'Daily or weekly rental, or buy to own. Every bike is fully serviced before handover.',
      switch_day: 'Per day', switch_week: 'Per week', catalog_count: '9 motorcycles',
      unit_day: 'per day', unit_week: 'per week',
      tag_available: 'Available', tag_turbo: 'Supercharged', tag_sp: 'SP version', tag_hit: 'Rental favorite',
      btn_book: 'Book',
      cta_catalog_title: "Can't find the right model?",
      cta_catalog_desc: "We'll match a bike to your experience, height and route — message us and we'll suggest options within an hour.",
      btn_request: 'Send a request', btn_about_company: 'About the company',

      breadcrumb_gallery: 'Gallery', gallery_eyebrow: '9 photos',
      gallery_title: 'Motorcycle Gallery',
      gallery_desc: 'Our fleet up close. Click a photo to view it full-size.',
      cta_gallery_title: 'Like what you see?',
      cta_gallery_desc: 'Check rental and sale terms in the catalog or send a request right away.',
      btn_to_catalog: 'View catalog',

      breadcrumb_about: 'About', about_eyebrow: 'On track since 2019',
      about_title: 'We make superbikes accessible',
      about_desc: "MotoSport started as a garage with three mechanics and one Ninja ZX-10R. Today it's a fleet of nine models and a team that lives and breathes motorcycles.",
      split1_eyebrow: 'Our story', split1_title: 'From one bike to a full fleet',
      split1_p1: 'The company was founded by three friends united by a passion for track days and shared frustration with how hard it was to rent a proper superbike in Russia. They pooled their money for the first Ninja ZX-10R and rented it out on weekends.',
      split1_p2: "Five years on, MotoSport offers nine current-generation models from Kawasaki, Ducati, BMW, Honda, Yamaha, Suzuki and Aprilia, its own service center, and a team of instructors who help match a bike to every rider's skill level.",
      split2_eyebrow: 'Our approach', split2_title: 'The machine comes first',
      split2_p1: "Every motorcycle is inspected before handover: brakes, tire pressure and wear, oil level, electronics. We don't rent out anything we wouldn't ride ourselves.",
      split2_p2: "That's why the fleet's average age is just three years, with models regularly updated to the latest versions.",
      values_eyebrow: 'Our values', values_title: 'Three principles everything rests on',
      value1_index: 'Honesty', value1_title: 'Transparent terms',
      value1_desc: "The price for a day, a week, or a buyout is fixed upfront — no hidden fees for mileage or 'fuel'.",
      value2_index: 'Safety', value2_title: 'Gear and briefing',
      value2_desc: "Before your first ride, a short briefing covers the specific model's quirks and electronic systems.",
      value3_index: 'Service', value3_title: 'Support on call',
      value3_desc: 'If something goes wrong on the road, support and an on-call mechanic are available any time.',
      team_eyebrow: 'Team', team_title: 'The people who prep your bike',
      team_desc: 'Mechanics, instructors and rental managers — all with track racing experience.',
      team1_role: 'Founder', team2_role: 'Rental Manager', team3_role: 'Head Mechanic', team4_role: 'Instructor',
      timeline_eyebrow: 'Company timeline', timeline_title: 'Key milestones',
      tl1_title: 'The first bike in the fleet',
      tl1_desc: 'Bought and prepped the first Kawasaki Ninja ZX-10R, started renting it out on weekends.',
      tl2_title: 'Service center opens',
      tl2_desc: 'Set up our own workshop and hired a full-time mechanic — the fleet grew to five models.',
      tl3_title: 'Motorcycle sales launch',
      tl3_desc: 'Added a sales line — fleet bikes can now be bought out after renting.',
      tl4_title: 'Nine models in the fleet',
      tl4_desc: 'Expanded the lineup to nine current superbikes from seven manufacturers.',
      cta_about_title: 'Join MotoSport track days',
      cta_about_desc: 'Meet the fleet in person — book a test ride or pick a bike straight from the catalog.',
      btn_open_catalog: 'Open catalog', btn_contact_us: 'Contact us',

      breadcrumb_contact: 'Contact', contact_eyebrow: 'We reply within an hour',
      contact_title: 'Get in touch',
      contact_desc: "Send a request for rental or purchase — we'll pick a bike and arrange a convenient pickup time.",
      info_phone_title: 'Phone', info_phone_desc: '+7 (999) 123-45-67 — daily, 9:00 AM–9:00 PM',
      info_email_title: 'Email',
      info_address_title: 'Address', info_address_desc: 'Moscow, Gonochny Proezd 12 — bike pickup by appointment',
      info_hours_title: 'Working hours', info_hours_desc: 'Open every day, 24/7 support on the road',
      form_eyebrow: 'Request', form_title: 'Tell us what you need',
      label_name: 'Name *', placeholder_name: 'How should we address you',
      label_phone: 'Phone *', label_email: 'Email',
      label_bike: 'Motorcycle of interest', option_any: 'No preference / recommend one',
      label_type: 'Format', option_day: 'Rental — daily', option_week: 'Rental — weekly', option_buy: 'Purchase',
      label_message: 'Comment', placeholder_message: 'Dates, riding experience, additional requests',
      btn_send: 'Send request',

      form_error: 'Please fill in the required fields marked with an asterisk.',
      form_success: "Request sent. We'll get back to you within an hour.",
      form_sending: 'Sending…', form_sent: 'Sent ✓',
    },
  };

  // Единицы измерения в характеристиках байков (л.с. / см³ / кг) переводим
  // отдельно регуляркой, чтобы не заводить по 3 ключа на каждую из 9 моделей.
  const UNIT_MAP_RU_EN = [[/л\.с\./g, 'hp'], [/см³/g, 'cc'], [/кг/g, 'kg'], [/компрессор/g, 'supercharged']];
  const UNIT_MAP_EN_RU = [[/\bhp\b/g, 'л.с.'], [/\bcc\b/g, 'см³'], [/\bkg\b/g, 'кг'], [/supercharged/g, 'компрессор']];

  function translateUnits(text, lang) {
    const map = lang === 'en' ? UNIT_MAP_RU_EN : UNIT_MAP_EN_RU;
    return map.reduce((acc, [pattern, replacement]) => acc.replace(pattern, replacement), text);
  }

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'ru';
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.ru;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.bike-specs span').forEach((el) => {
      el.textContent = translateUnits(el.textContent, lang);
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-switch').forEach((box) => {
      box.querySelectorAll('button').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  window.MotoI18n = { translations, applyTranslations, getLang, setLang, translateUnits };

  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(getLang());

    document.querySelectorAll('.lang-switch').forEach((box) => {
      box.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
      });
    });
  });
})();
