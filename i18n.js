/*
 * WashTrack Landing Page - Internationalization (i18n)
 * Supported locales: English (en-US, default) and Latin American Spanish (es-419).
 *
 * Usage in HTML:
 *   data-i18n="key"                      -> replaces the element text
 *   data-i18n-attr="attr:key;attr2:key2" -> replaces attributes (alt, aria-label, placeholder, content...)
 *   data-lang-block="en" | "es"          -> shows the block only for that language (long legal texts)
 */
(function () {
  "use strict";

  const STORAGE_KEY = "washtrack-lang";
  const DEFAULT_LANG = "en";
  const LOCALES = { en: "en-US", es: "es-419" };
  const OG_LOCALES = { en: "en_US", es: "es_419" };

  const translations = {
    en: {
      // ---------- Meta / SEO ----------
      "meta.title": "WashTrack - Smart Management and IoT Monitoring for Laundries",
      "meta.description":
        "WashTrack connects orders, IoT sensors, and payments in a single platform. Digitize your traditional laundry with automatic alerts, live tracking, and full control of your operation.",
      "meta.keywords":
        "digital laundry, laundry management, IoT monitoring, real-time tracking, laundry software, home pickup, WashTrack",

      // ---------- Accessibility helpers ----------
      "a11y.skip": "Skip to main content",
      "a11y.newTab": "(opens in a new tab)",

      // ---------- Header / navigation ----------
      "nav.home": "WashTrack home",
      "nav.logoAlt": "WashTrack logo",
      "nav.label": "Main navigation",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "nav.language": "Select language",
      "nav.features": "Features",
      "nav.forWhom": "Who it is for",
      "nav.about": "About us",
      "nav.plans": "Plans",
      "nav.login": "Log in",
      "nav.getStarted": "Get started",

      // ---------- Hero ----------
      "hero.eyebrow": "Orders · Live tracking · IoT monitoring · Payments",
      "hero.title1": "Your laundry business, under control.",
      "hero.title2": "In real time.",
      "hero.lead":
        "WashTrack connects orders, IoT sensors, and payments in a single platform — with automatic alerts, live tracking, and full control of your operation.",
      "hero.ctaPrimary": "Start for free",
      "hero.ctaSecondary": "View features",
      "hero.stat1": "Stages of your order, visible in real time",
      "hero.stat2": "IoT monitoring of your washers, around the clock",
      "hero.dashboardLabel":
        "Preview of the WashTrack dashboard: 48 orders and 36 deliveries today, 2 IoT alerts, and a warning that washer 3 is near its usage limit.",

      "dash.title": "Dashboard · Today",
      "dash.online": "Online",
      "dash.orders": "Orders",
      "dash.ordersDelta": "↑ 18% vs yesterday",
      "dash.delivered": "Delivered",
      "dash.today": "Today",
      "dash.iotAlerts": "IoT alerts",
      "dash.review": "Review",
      "dash.ordersByHour": "Orders by hour",
      "dash.toast": "Alert: Washer 3 is near its usage limit",

      // ---------- Problem / solution ----------
      "problem.eyebrow": "Problem / Solution",
      "problem.title1": "The problem is not washing clothes.",
      "problem.title2": "It is everything else.",
      "problem.today": "Today",
      "problem.with": "With WashTrack",
      "problem.p1": "Notebooks, scattered messages, and clothes that get lost along the way.",
      "problem.s1": "Complete order and garment management: customers, orders, and deliveries in one panel.",
      "problem.p2": "Customers waste time traveling just to ask \"how is my laundry going?\".",
      "problem.s2": "Real-time tracking: order status, always one tap away.",
      "problem.p3": "Uncertainty for the customer and a phone line jammed with calls for the business.",
      "problem.s3": "A clear digital channel replaces phone calls: automatic notifications for every stage.",
      "problem.cta": "I want to organize my laundry business",

      // ---------- Features ----------
      "features.eyebrow": "Features",
      "features.title1": "Everything your laundry business needs,",
      "features.title2": "in one place",
      "features.f1Title": "Complete order management",
      "features.f1Text": "Customers, orders, and deliveries centralized. No transcription errors, no loose papers.",
      "features.f2Title": "Real-time tracking",
      "features.f2Text": "Your customers check their laundry status from their phone, no calls or messages needed.",
      "features.f3Title": "Predictive IoT monitoring",
      "features.f3Text": "Sensors in your washers anticipate failures and warn you when a machine reaches the end of its useful life.",
      "features.f4Title": "Logistics and payments",
      "features.f4Text": "Pickup and home delivery, with digital payments integrated from start to finish.",
      "features.howTitle": "How WashTrack works",
      "features.howText":
        "The customer creates a request specifying the type of garments, special care notes, and delivery method. The laundry receives the order and organizes it within its production flow: reception, sorting, washing, drying or ironing, packaging, and ready for delivery.",
      "features.videoTitle": "WashTrack - About the Product video",
      "features.trackTitle": "Real-time tracking in action",
      "features.trackText":
        "With WashTrack you can know the exact status of your laundry without calling the shop. Every status change updates on the platform, and the customer gets automatic notifications on their order's progress.",
      "track.label": "Order #WT-001 progress",
      "track.order": "Order #WT-001",
      "track.s1": "Received",
      "track.s1Status": "Order received",
      "track.s2": "Sorting",
      "track.s2Status": "Clothes sorted",
      "track.s3": "Washing",
      "track.s3Status": "Washing in progress",
      "track.s4": "Drying / Ironing",
      "track.s5": "Packaging",
      "track.s6": "Ready",
      "track.pending": "Pending",
      "track.pendingDelivery": "Pending delivery",

      // ---------- Who it is for ----------
      "whom.eyebrow": "Who it is for",
      "whom.title1": "Made for both sides",
      "whom.title2": "of the same laundry business",
      "whom.ownerTag": "Laundry business owners",
      "whom.ownerTitle": "Digitize your business without the hassle",
      "whom.ownerText":
        "Centralize orders, reduce manual record-keeping errors, and regain full operational control of your laundry business.",
      "whom.ownerCta": "I want to digitize my laundry business",
      "whom.ownerImgAlt": "Laundry staff organizing customer orders",
      "whom.customerTag": "End customers",
      "whom.customerTitle": "No time, no washer, no problem",
      "whom.customerText": "Order, track, pay, and arrange delivery from your phone, without leaving home.",
      "whom.customerCta": "I want hassle-free laundry",
      "whom.customerImgAlt": "Customer carrying a laundry basket to the laundry",
      "whom.loginPrompt": "Already have an account?",
      "whom.loginLink": "Log in to the web app",

      // ---------- About us ----------
      "about.eyebrow": "About us",
      "about.title1": "We are",
      "about.text":
        "A team of UPC students building technology for real businesses. We believe digital transformation shouldn't be a privilege of big companies — that's why we created WashTrack: the entry point for traditional Latin American businesses into digital management, starting with laundries.",
      "about.cta": "Meet the team",
      "about.v1": "Innovation",
      "about.v1Text": "Solving with technology, not more paperwork",
      "about.v2": "Commitment",
      "about.v2Text": "To every laundry business that trusts us",
      "about.v3": "Accessibility",
      "about.v3Text": "Digitalization within reach of small businesses",
      "about.v4": "Transparency",
      "about.v4Text": "Real order status, no fine print",
      "about.v5": "Efficiency",
      "about.v5Text": "Fewer manual steps, fewer errors",
      "about.v6": "Quality",
      "about.v6Text": "Built and tested by its own team",
      "about.videoTitle": "DevTech - About the Team video",

      // ---------- Team ----------
      "team.eyebrow": "Our team",
      "team.title1": "The people behind",
      "team.title2": "WashTrack",
      "team.lead": "Five Software Engineering students at UPC who design, build, and test every part of WashTrack.",
      "team.career": "Software Engineering · UPC",
      "team.ariana.role": "UX/UI design, information architecture, and landing page",
      "team.ariana.alt": "Photo of Ariana Pérez Vásquez",
      "team.gabriel.role": "Feature design and web application development",
      "team.gabriel.alt": "Photo of Gabriel Ramirez Gutierrez",
      "team.sebastian.role": "Software architecture, modeling, and technical documentation",
      "team.sebastian.alt": "Photo of Sebastián Sayago Vidal",
      "team.adriana.role": "Backend development with Domain-Driven Design",
      "team.adriana.alt": "Photo of Adriana Ramos Fuentes Rivera",
      "team.luis.role": "User interface design and user experience",
      "team.luis.alt": "Photo of Luis Angel Tufiño Argüelles",

      // ---------- Plans ----------
      "plans.eyebrow": "Plans",
      "plans.title1": "A plan for every size",
      "plans.title2": "of laundry business",
      "plans.lead":
        "Monthly subscriptions for laundries. Start for free and upgrade whenever your business grows. Your customers use WashTrack at no extra cost.",
      "plans.perMonth": "/month",
      "plans.popular": "Most popular",
      "plans.free.name": "Free",
      "plans.free.desc": "For laundries that want to start digitizing their operation.",
      "plans.free.f1": "Customer and order registration",
      "plans.free.f2": "Real-time order tracking for your customers",
      "plans.free.f3": "Garment and service catalog",
      "plans.free.cta": "Start for free",
      "plans.basic.name": "Basic",
      "plans.basic.desc": "For small businesses that need more management and tracking.",
      "plans.basic.f1": "Everything in Free",
      "plans.basic.f2": "Automatic status notifications",
      "plans.basic.f3": "Pickup and home delivery management",
      "plans.basic.f4": "Digital payments",
      "plans.basic.cta": "Choose Basic",
      "plans.premium.name": "Premium",
      "plans.premium.desc": "For laundries with a high volume of orders.",
      "plans.premium.f1": "Everything in Basic",
      "plans.premium.f2": "Predictive IoT monitoring of your washers",
      "plans.premium.f3": "VIP priority orders",
      "plans.premium.f4": "Reports and operational metrics",
      "plans.premium.cta": "Choose Premium",
      "plans.contactPrompt": "Have questions about the plans?",
      "plans.contactLink": "Contact us",

      // ---------- Contact form ----------
      "contact.title": "Contact Form",
      "contact.subtitle": "Fields marked with * are required.",
      "contact.name": "Full name",
      "contact.namePh": "Enter your name",
      "contact.email": "Email",
      "contact.emailPh": "Enter your email",
      "contact.type": "User type",
      "contact.typeSelect": "Select an option",
      "contact.typeCustomer": "Customer",
      "contact.typeOwner": "Laundry business owner",
      "contact.interest": "Service of interest",
      "contact.iWash": "Laundry service",
      "contact.iDelivery": "Delivery",
      "contact.iVip": "Wash VIP membership",
      "contact.iOther": "Other",
      "contact.message": "Message",
      "contact.messagePh": "Write your inquiry...",
      "contact.send": "Send",
      "contact.required": "required",
      "contact.err.name": "Please enter your full name.",
      "contact.err.email": "Please enter a valid email address (for example, name@mail.com).",
      "contact.err.type": "Please select a user type.",
      "contact.err.message": "Please write your message (at least 10 characters).",
      "contact.err.summary": "Please review the highlighted fields.",
      "contact.success": "Thank you! We received your message and will contact you soon.",

      // ---------- Footer ----------
      "footer.tagline": "Organized laundries. Happy customers.",
      "footer.rights": "© 2026 DevTech. All rights reserved.",
      "footer.academic": "Academic project developed at UPC.",
      "footer.product": "WashTrack",
      "footer.webApp": "Web app",
      "footer.contact": "Contact us",
      "footer.legal": "Legal",
      "footer.terms": "Terms and Conditions",
      "footer.privacy": "Privacy Policy",
      "footer.dataLaw": "Personal Data Protection Law (PDF)",
      "footer.follow": "Follow us",
      "footer.github": "GitHub",

      // ---------- Legal page ----------
      "legal.metaTitle": "Terms and Conditions - WashTrack",
      "legal.metaDescription":
        "Terms and Conditions of Service and Privacy Policy of WashTrack, the laundry management and IoT monitoring platform by DevTech.",
      "legal.back": "Back to home",
      "legal.toc": "On this page",
      "legal.termsTitle": "Terms and Conditions of Service",
      "legal.privacyTitle": "Privacy Policy",
      "legal.updated": "Last updated: November 12, 2026",
    },

    es: {
      // ---------- Meta / SEO ----------
      "meta.title": "WashTrack - Gestión Inteligente y Monitoreo IoT para Lavanderías",
      "meta.description":
        "WashTrack conecta pedidos, sensores IoT y pagos en una sola plataforma. Digitaliza tu lavandería tradicional con alertas automáticas, seguimiento en vivo y control total de la operación.",
      "meta.keywords":
        "lavandería digital, gestión de lavanderías, monitoreo IoT, seguimiento en tiempo real, software para lavanderías, recojo a domicilio, WashTrack",

      // ---------- Accessibility helpers ----------
      "a11y.skip": "Saltar al contenido principal",
      "a11y.newTab": "(se abre en una pestaña nueva)",

      // ---------- Header / navigation ----------
      "nav.home": "Inicio de WashTrack",
      "nav.logoAlt": "Logo de WashTrack",
      "nav.label": "Navegación principal",
      "nav.openMenu": "Abrir menú",
      "nav.closeMenu": "Cerrar menú",
      "nav.language": "Seleccionar idioma",
      "nav.features": "Características",
      "nav.forWhom": "Para quién",
      "nav.about": "Sobre nosotros",
      "nav.plans": "Planes",
      "nav.login": "Iniciar sesión",
      "nav.getStarted": "Comenzar ahora",

      // ---------- Hero ----------
      "hero.eyebrow": "Pedidos · Seguimiento en vivo · Monitoreo IoT · Pagos",
      "hero.title1": "Tu lavandería, bajo control.",
      "hero.title2": "En tiempo real.",
      "hero.lead":
        "WashTrack conecta pedidos, sensores IoT y pagos en una sola plataforma — con alertas automáticas, seguimiento en vivo y control total de tu operación.",
      "hero.ctaPrimary": "Comenzar gratis",
      "hero.ctaSecondary": "Ver características",
      "hero.stat1": "Etapas de tu pedido, visibles en tiempo real",
      "hero.stat2": "Monitoreo IoT de tus lavadoras, sin pausas",
      "hero.dashboardLabel":
        "Vista previa del panel de WashTrack: 48 pedidos y 36 entregas hoy, 2 alertas IoT y un aviso de que la lavadora 3 está cerca de su límite de uso.",

      "dash.title": "Panel · Hoy",
      "dash.online": "En línea",
      "dash.orders": "Pedidos",
      "dash.ordersDelta": "↑ 18% vs ayer",
      "dash.delivered": "Entregados",
      "dash.today": "Hoy",
      "dash.iotAlerts": "Alertas IoT",
      "dash.review": "Revisar",
      "dash.ordersByHour": "Pedidos por hora",
      "dash.toast": "Alerta: Lavadora 3 cerca del límite de uso",

      // ---------- Problem / solution ----------
      "problem.eyebrow": "Problema / Solución",
      "problem.title1": "El problema no es lavar la ropa.",
      "problem.title2": "Es todo lo demás.",
      "problem.today": "Hoy",
      "problem.with": "Con WashTrack",
      "problem.p1": "Cuadernos, mensajes sueltos y prendas que se pierden en el camino.",
      "problem.s1": "Gestión integral de pedidos y prendas: clientes, órdenes y entregas en un solo panel.",
      "problem.p2": "El cliente pierde tiempo trasladándose solo para preguntar \"¿cómo va mi ropa?\".",
      "problem.s2": "Seguimiento en tiempo real: el estado del pedido, siempre a un toque de distancia.",
      "problem.p3": "Incertidumbre para el cliente y el teléfono saturado de llamadas para el negocio.",
      "problem.s3": "Un canal digital claro reemplaza las llamadas: notificaciones automáticas de cada etapa.",
      "problem.cta": "Quiero ordenar mi lavandería",

      // ---------- Features ----------
      "features.eyebrow": "Características",
      "features.title1": "Todo lo que tu lavandería necesita,",
      "features.title2": "en un solo lugar",
      "features.f1Title": "Gestión integral de pedidos",
      "features.f1Text": "Clientes, órdenes y entregas centralizados. Sin errores de transcripción ni papeles sueltos.",
      "features.f2Title": "Seguimiento en tiempo real",
      "features.f2Text": "Tus clientes consultan el estado de su ropa desde el celular, sin llamar ni escribir.",
      "features.f3Title": "Monitoreo IoT predictivo",
      "features.f3Text": "Sensores en tus lavadoras anticipan fallas y avisan cuándo un equipo llega al fin de su vida útil.",
      "features.f4Title": "Logística y pagos",
      "features.f4Text": "Recojo y entrega a domicilio, con pagos digitales integrados de principio a fin.",
      "features.howTitle": "Así funciona WashTrack",
      "features.howText":
        "El cliente crea su solicitud indicando el tipo de prendas, notas de cuidado especial y modalidad de entrega. La lavandería recibe la orden y la organiza dentro de su flujo de producción: recepción, clasificación, lavado, secado o planchado, empaquetado y listo para entregar.",
      "features.videoTitle": "WashTrack - Video About the Product",
      "features.trackTitle": "Seguimiento en tiempo real, en acción",
      "features.trackText":
        "Con WashTrack puedes conocer el estado exacto de tu ropa sin necesidad de llamar a la lavandería. Cada cambio de estado se actualiza en la plataforma y el cliente recibe notificaciones automáticas sobre el avance de su pedido.",
      "track.label": "Avance del pedido #WT-001",
      "track.order": "Pedido #WT-001",
      "track.s1": "Recepción",
      "track.s1Status": "Pedido recibido",
      "track.s2": "Clasificación",
      "track.s2Status": "Prendas clasificadas",
      "track.s3": "Lavado",
      "track.s3Status": "Lavado en proceso",
      "track.s4": "Secado / Planchado",
      "track.s5": "Empaquetado",
      "track.s6": "Listo",
      "track.pending": "Pendiente",
      "track.pendingDelivery": "Pendiente de entrega",

      // ---------- Who it is for ----------
      "whom.eyebrow": "Para quién",
      "whom.title1": "Hecho para dos lados",
      "whom.title2": "de la misma lavandería",
      "whom.ownerTag": "Dueños de lavandería",
      "whom.ownerTitle": "Digitaliza tu negocio sin complicarte",
      "whom.ownerText":
        "Centraliza pedidos, reduce errores de registro manual y recupera el control operativo total de tu lavandería.",
      "whom.ownerCta": "Quiero digitalizar mi lavandería",
      "whom.ownerImgAlt": "Personal de lavandería organizando pedidos",
      "whom.customerTag": "Clientes finales",
      "whom.customerTitle": "Sin tiempo, sin lavadora, sin problema",
      "whom.customerText": "Pide, rastrea, paga y coordina tu delivery desde el celular, sin salir de casa.",
      "whom.customerCta": "Quiero lavar sin complicaciones",
      "whom.customerImgAlt": "Cliente llevando su cesta de ropa a la lavandería",
      "whom.loginPrompt": "¿Ya tienes una cuenta?",
      "whom.loginLink": "Inicia sesión en la aplicación web",

      // ---------- About us ----------
      "about.eyebrow": "Sobre nosotros",
      "about.title1": "Somos",
      "about.text":
        "Un equipo de estudiantes de la UPC construyendo tecnología para negocios reales. Creemos que la transformación digital no debería ser un privilegio de las grandes empresas — por eso creamos WashTrack: la puerta de entrada de los negocios tradicionales de Latinoamérica a la gestión digital, empezando por las lavanderías.",
      "about.cta": "Conoce al equipo",
      "about.v1": "Innovación",
      "about.v1Text": "Resolver con tecnología, no con más papel",
      "about.v2": "Compromiso",
      "about.v2Text": "Con cada lavandería que confía en nosotros",
      "about.v3": "Accesibilidad",
      "about.v3Text": "Digitalización al alcance de negocios pequeños",
      "about.v4": "Transparencia",
      "about.v4Text": "Estado real del pedido, sin letra chica",
      "about.v5": "Eficiencia",
      "about.v5Text": "Menos pasos manuales, menos errores",
      "about.v6": "Calidad",
      "about.v6Text": "Construido y probado por su propio equipo",
      "about.videoTitle": "DevTech - Video About the Team",

      // ---------- Team ----------
      "team.eyebrow": "Nuestro equipo",
      "team.title1": "Las personas detrás de",
      "team.title2": "WashTrack",
      "team.lead": "Cinco estudiantes de Ingeniería de Software de la UPC que diseñan, construyen y prueban cada parte de WashTrack.",
      "team.career": "Ingeniería de Software · UPC",
      "team.ariana.role": "Diseño UX/UI, arquitectura de información y landing page",
      "team.ariana.alt": "Foto de Ariana Pérez Vásquez",
      "team.gabriel.role": "Diseño de funcionalidades y desarrollo de la aplicación web",
      "team.gabriel.alt": "Foto de Gabriel Ramirez Gutierrez",
      "team.sebastian.role": "Arquitectura de software, modelado y documentación técnica",
      "team.sebastian.alt": "Foto de Sebastián Sayago Vidal",
      "team.adriana.role": "Desarrollo backend con Domain-Driven Design",
      "team.adriana.alt": "Foto de Adriana Ramos Fuentes Rivera",
      "team.luis.role": "Diseño de interfaces y experiencia de usuario",
      "team.luis.alt": "Foto de Luis Angel Tufiño Argüelles",

      // ---------- Plans ----------
      "plans.eyebrow": "Planes",
      "plans.title1": "Un plan para cada tamaño",
      "plans.title2": "de lavandería",
      "plans.lead":
        "Suscripciones mensuales para lavanderías. Empieza gratis y cambia de plan cuando tu negocio crezca. Tus clientes usan WashTrack sin costo adicional.",
      "plans.perMonth": "/mes",
      "plans.popular": "Más elegido",
      "plans.free.name": "Gratuito",
      "plans.free.desc": "Para lavanderías que quieren empezar a digitalizar su operación.",
      "plans.free.f1": "Registro de clientes y pedidos",
      "plans.free.f2": "Seguimiento del pedido en tiempo real para tus clientes",
      "plans.free.f3": "Catálogo de prendas y servicios",
      "plans.free.cta": "Comenzar gratis",
      "plans.basic.name": "Básico",
      "plans.basic.desc": "Para pequeños negocios que necesitan más gestión y seguimiento.",
      "plans.basic.f1": "Todo lo del plan Gratuito",
      "plans.basic.f2": "Notificaciones automáticas de estado",
      "plans.basic.f3": "Gestión de recojos y entregas a domicilio",
      "plans.basic.f4": "Pagos digitales",
      "plans.basic.cta": "Elegir Básico",
      "plans.premium.name": "Premium",
      "plans.premium.desc": "Para lavanderías con un alto volumen de pedidos.",
      "plans.premium.f1": "Todo lo del plan Básico",
      "plans.premium.f2": "Monitoreo IoT predictivo de tus lavadoras",
      "plans.premium.f3": "Pedidos VIP con prioridad",
      "plans.premium.f4": "Reportes y métricas operativas",
      "plans.premium.cta": "Elegir Premium",
      "plans.contactPrompt": "¿Tienes dudas sobre los planes?",
      "plans.contactLink": "Contáctanos",

      // ---------- Contact form ----------
      "contact.title": "Formulario de Atención",
      "contact.subtitle": "Los campos marcados con * son obligatorios.",
      "contact.name": "Nombres completos",
      "contact.namePh": "Ingrese su nombre",
      "contact.email": "Correo electrónico",
      "contact.emailPh": "Ingrese su correo",
      "contact.type": "Tipo de usuario",
      "contact.typeSelect": "Seleccione una opción",
      "contact.typeCustomer": "Cliente",
      "contact.typeOwner": "Dueño de lavandería",
      "contact.interest": "Servicio de interés",
      "contact.iWash": "Servicio de lavado",
      "contact.iDelivery": "Entrega",
      "contact.iVip": "Membresía Wash VIP",
      "contact.iOther": "Otro",
      "contact.message": "Mensaje",
      "contact.messagePh": "Escriba su consulta...",
      "contact.send": "Enviar",
      "contact.required": "obligatorio",
      "contact.err.name": "Ingrese sus nombres completos.",
      "contact.err.email": "Ingrese un correo electrónico válido (por ejemplo, nombre@correo.com).",
      "contact.err.type": "Seleccione un tipo de usuario.",
      "contact.err.message": "Escriba su mensaje (mínimo 10 caracteres).",
      "contact.err.summary": "Revise los campos marcados.",
      "contact.success": "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",

      // ---------- Footer ----------
      "footer.tagline": "Lavanderías organizadas. Clientes tranquilos.",
      "footer.rights": "© 2026 DevTech. Todos los derechos reservados.",
      "footer.academic": "Proyecto académico desarrollado en la UPC.",
      "footer.product": "WashTrack",
      "footer.webApp": "Aplicación web",
      "footer.contact": "Contáctanos",
      "footer.legal": "Legal",
      "footer.terms": "Términos y Condiciones",
      "footer.privacy": "Política de Privacidad",
      "footer.dataLaw": "Ley de Protección de Datos Personales (PDF)",
      "footer.follow": "Síguenos",
      "footer.github": "GitHub",

      // ---------- Legal page ----------
      "legal.metaTitle": "Términos y Condiciones - WashTrack",
      "legal.metaDescription":
        "Términos y Condiciones del Servicio y Política de Privacidad de WashTrack, la plataforma de gestión y monitoreo IoT para lavanderías de DevTech.",
      "legal.back": "Volver al inicio",
      "legal.toc": "En esta página",
      "legal.termsTitle": "Términos y Condiciones del Servicio",
      "legal.privacyTitle": "Política de Privacidad",
      "legal.updated": "Última actualización: 12 de noviembre de 2026",
    },
  };

  let currentLang = DEFAULT_LANG;

  function readStoredLang() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored && translations[stored] ? stored : null;
    } catch (error) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* Storage can be unavailable (private mode); the page still works. */
    }
  }

  function t(key, lang) {
    const dictionary = translations[lang || currentLang] || translations[DEFAULT_LANG];
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      return dictionary[key];
    }
    return translations[DEFAULT_LANG][key];
  }

  function applyText() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      if (typeof value === "string") {
        element.textContent = value;
      }
    });
  }

  function applyAttributes() {
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attribute, key] = pair.split(":").map((part) => part.trim());
        const value = attribute && key ? t(key) : undefined;
        if (typeof value === "string") {
          element.setAttribute(attribute, value);
        }
      });
    });
  }

  function applyLangBlocks(lang) {
    document.querySelectorAll("[data-lang-block]").forEach((block) => {
      block.hidden = block.dataset.langBlock !== lang;
    });
  }

  function updateSwitcher(lang) {
    document.querySelectorAll(".lang-option").forEach((option) => {
      const isActive = option.dataset.lang === lang;
      option.classList.toggle("active", isActive);
      option.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setLanguage(lang, options) {
    const nextLang = translations[lang] ? lang : DEFAULT_LANG;
    currentLang = nextLang;

    document.documentElement.lang = LOCALES[nextLang];

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", OG_LOCALES[nextLang]);
    }

    applyText();
    applyAttributes();
    applyLangBlocks(nextLang);
    updateSwitcher(nextLang);

    if (!options || options.persist !== false) {
      storeLang(nextLang);
    }

    document.dispatchEvent(new CustomEvent("washtrack:languagechange", { detail: { lang: nextLang } }));
  }

  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", () => setLanguage(option.dataset.lang));
  });

  window.WashTrackI18n = {
    t: (key) => t(key),
    setLanguage,
    getLanguage: () => currentLang,
  };

  // English (en-US) is the default language; a previous choice of the visitor is respected.
  setLanguage(readStoredLang() || DEFAULT_LANG, { persist: false });
})();
