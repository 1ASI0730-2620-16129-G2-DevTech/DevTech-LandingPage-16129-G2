
const btn = document.querySelector(".menu-toggle");

const navCollapse = document.querySelector(".nav-collapse");


btn.addEventListener("click", () => {
  const isOpen = navCollapse.classList.toggle("active");

  btn.setAttribute("aria-expanded", isOpen);
});


// ---------- Selector de idioma EN/ES ----------
const translations = {
  "Abrir menú": "Open menu",
  "Características": "Features",
  "Sobre nosotros": "About us",
  "Para quién": "Who it is for",
  "Planes": "Plans",
  "Comenzar ahora": "Get started now",
  "Pedidos · Seguimiento en vivo · Monitoreo IoT · Pagos": "Orders · Live tracking · IoT monitoring · Payments",
  "Tu lavandería, bajo control.": "Your laundry business, under control.",
  "En tiempo real.": "In real time.",
  "WashTrack conecta pedidos, sensores IoT y pagos en una sola plataforma — con alertas automáticas, seguimiento en vivo y control total de tu operación.":
    "WashTrack connects orders, IoT sensors, and payments in a single platform — with automatic alerts, live tracking, and full control of your operation.",
  "Ver características": "View features",
  "Etapas de tu pedido, visibles en tiempo real": "Stages of your order, visible in real time",
  "Monitoreo IoT de tus lavadoras, sin pausas": "IoT monitoring of your washers, around the clock",

  "Panel · Hoy": "Dashboard · Today",
  "En línea": "Online",
  "Pedidos": "Orders",
  "Entregados": "Delivered",
  "Alertas IoT": "IoT alerts",
  "↑ 18% vs ayer": "↑ 18% vs yesterday",
  "Hoy": "Today",
  "Revisar": "Review",
  "Pedidos por hora": "Orders by hour",
  "Alerta: Lavadora 3 cerca del límite de uso": "Alert: Washer 3 is near its usage limit",

  "Problema / Solución": "Problem / Solution",
  "El problema no es lavar la ropa.": "The problem is not washing clothes.",
  "Es todo lo demás.": "It is everything else.",
  "Con WashTrack": "With WashTrack",
  "Cuadernos, mensajes sueltos y prendas que se pierden en el camino.":
    "Notebooks, scattered messages, and clothes that get lost along the way.",
  "Gestión integral de pedidos y prendas: clientes, órdenes y entregas en un solo panel.":
    "Complete order and garment management: customers, orders, and deliveries in one panel.",
  "El cliente pierde tiempo trasladándose solo para preguntar \"¿cómo va mi ropa?\".":
    "Customers waste time traveling just to ask \"how is my laundry going?\".",
  "Seguimiento en tiempo real: el estado del pedido, siempre a un tap de distancia.":
    "Real-time tracking: order status, always one tap away.",
  "Incertidumbre para el cliente y el teléfono saturado de llamadas para el negocio.":
    "Uncertainty for the customer and a phone line jammed with calls for the business.",
  "Un canal digital claro reemplaza las llamadas: notificaciones automáticas de cada etapa.":
    "A clear digital channel replaces phone calls: automatic notifications for every stage.",
  "Quiero ordenar mi lavandería": "I want to organize my laundry business",

  "Todo lo que tu lavandería necesita,": "Everything your laundry business needs,",
  "en un solo lugar": "in one place",
  "Gestión integral de pedidos": "Complete order management",
  "Clientes, órdenes y entregas centralizados. Sin errores de transcripción ni papeles sueltos.":
    "Customers, orders, and deliveries centralized. No transcription errors, no loose papers.",
  "Seguimiento en tiempo real": "Real-time tracking",
  "Tus clientes consultan el estado de su ropa desde el celular, sin llamar ni escribir.":
    "Your customers check their laundry status from their phone, no calls or messages needed.",
  "Monitoreo IoT predictivo": "Predictive IoT monitoring",
  "Sensores en tus lavadoras anticipan fallas y avisan cuándo un equipo llega al fin de su vida útil.":
    "Sensors in your washers anticipate failures and warn you when a machine reaches the end of its useful life.",
  "Logística y pagos": "Logistics and payments",
  "Recojo y entrega a domicilio, con pagos digitales integrados de principio a fin.":
    "Pickup and home delivery, with digital payments integrated from start to finish.",
  "Así funciona WashTrack": "How WashTrack works",
  "El cliente crea su solicitud indicando el tipo de prendas, notas de cuidado especial y modalidad de entrega. La lavandería recibe la orden y la organiza dentro de su flujo de producción: recepción, clasificación, lavado, secado o planchado, empaquetado y listo para entregar.":
    "The customer creates a request specifying the type of garments, special care notes, and delivery method. The laundry receives the order and organizes it within its production flow: reception, sorting, washing, drying or ironing, packaging, and ready for delivery.",
  "Seguimiento en tiempo real, en acción": "Real-time tracking in action",
  "Con WashTrack puedes conocer el estado exacto de tu ropa sin necesidad de llamar a la lavandería. Cada cambio de estado se actualiza en la plataforma y el cliente recibe notificaciones automáticas sobre el avance de su pedido.":
    "With WashTrack you can know the exact status of your laundry without calling the shop. Every status change updates on the platform, and the customer gets automatic notifications on their order's progress.",
  "Pedido #WT-001": "Order #WT-001",
  "Recepción": "Received",
  "Pedido recibido": "Order received",
  "Clasificación": "Sorting",
  "Prendas clasificadas": "Clothes sorted",
  "Lavado": "Washing",
  "Lavado en proceso": "Washing in progress",
  "Secado / Planchado": "Drying / Ironing",
  "Pendiente": "Pending",
  "Empaquetado": "Packaging",
  "Listo": "Ready",
  "Pendiente de entrega": "Pending delivery",

  "Hecho para dos lados": "Made for both sides",
  "de la misma lavandería": "of the same laundry business",
  "Dueños de lavandería": "Laundry business owners",
  "Digitaliza tu negocio sin complicarte": "Digitize your business without the hassle",
  "Centraliza pedidos, reduce errores de registro manual y recupera el control operativo total de tu lavandería.":
    "Centralize orders, reduce manual record-keeping errors, and regain full operational control of your laundry business.",
  "Quiero digitalizar mi lavandería": "I want to digitize my laundry business",
  "Clientes finales": "End customers",
  "Sin tiempo, sin lavadora, sin problema": "No time, no washer, no problem",
  "Pide, rastrea, paga y coordina tu delivery desde el celular, sin salir de casa.":
    "Order, track, pay, and arrange delivery from your phone, without leaving home.",
  "Quiero lavar sin complicaciones": "I want hassle-free laundry",

  "Somos": "We are",
  "Un equipo de estudiantes de la UPC construyendo tecnología para negocios reales. Creemos que la transformación digital no debería ser un privilegio de las grandes empresas — por eso creamos WashTrack: la puerta de entrada de los negocios tradicionales de Latinoamérica a la gestión digital, empezando por las lavanderías.":
    "A team of UPC students building technology for real businesses. We believe digital transformation shouldn't be a privilege of big companies — that's why we created WashTrack: the entry point for traditional Latin American businesses into digital management, starting with laundries.",
  "Conoce más sobre DevTech": "Learn more about DevTech",
  "Innovación": "Innovation",
  "Resolver con tecnología, no con más papel": "Solving with technology, not more paperwork",
  "Compromiso": "Commitment",
  "Con cada lavandería que confía en nosotros": "To every laundry business that trusts us",
  "Accesibilidad": "Accessibility",
  "Digitalización al alcance de negocios pequeños": "Digitalization within reach of small businesses",
  "Transparencia": "Transparency",
  "Estado real del pedido, sin letra chica": "Real order status, no fine print",
  "Eficiencia": "Efficiency",
  "Menos pasos manuales, menos errores": "Fewer manual steps, fewer errors",
  "Calidad": "Quality",
  "Construido y probado por su propio equipo": "Built and tested by its own team",

  "Un plan para cada tamaño": "A plan for every size",
  "de lavandería": "of laundry business",
  "Estamos definiendo los planes de WashTrack junto a las primeras lavanderías que se suman. Escríbenos y te contamos las opciones disponibles para tu negocio.":
    "We're defining WashTrack's plans together with the first laundries joining us. Write to us and we'll walk you through the options for your business.",
  "Contáctanos": "Contact us",

  "Formulario de Atención": "Contact Form",
  "Complete todos los campos": "Please complete all fields",
  "Nombres completos:": "Full name:",
  "Correo electrónico:": "Email:",
  "Tipo de usuario:": "User type:",
  "Seleccione una opción": "Select an option",
  "Cliente": "Customer",
  "Dueño de lavandería": "Laundry business owner",
  "Servicio de interés:": "Service of interest:",
  "Servicio de lavado": "Laundry service",
  "Entrega": "Delivery",
  "Membresía Wash VIP": "Wash VIP membership",
  "Otro": "Other",
  "Mensaje:": "Message:",
  "Enviar": "Send",

  "Legal": "Legal",
  "Política de Privacidad": "Privacy Policy",
  "Términos y Condiciones": "Terms and Conditions",
  "Protección de Datos": "Data Protection",
  "Síguenos": "Follow us",
  "Lavanderías organizadas. Clientes tranquilos.": "Organized laundries. Happy customers.",
  "© 2026 Todos los derechos reservados": "© 2026 All rights reserved",
};


function normalize(text) {
  return text.replace(/\s+/g, " ").trim();
}

const translatableElements = document.querySelectorAll(
  "body *:not(script):not(style):not(.lang-option)"
);
const originalTexts = new Map();

translatableElements.forEach((element) => {
  if (element.children.length === 0 && translations[normalize(element.textContent)]) {
    originalTexts.set(element, element.textContent);
  }
});

const translatableAttrs = ["placeholder", "aria-label"];

function applyAttrTranslations(isEnglish) {
  translatableAttrs.forEach((attr) => {
    document.querySelectorAll(`[data-en-${attr}]`).forEach((element) => {
      const esAttr = `data-es-${attr}`;
      if (!element.hasAttribute(esAttr)) {
        element.setAttribute(esAttr, element.getAttribute(attr));
      }
      element.setAttribute(
        attr,
        isEnglish ? element.getAttribute(`data-en-${attr}`) : element.getAttribute(esAttr)
      );
    });
  });
}

function setLanguage(language) {
  const isEnglish = language === "en";

  originalTexts.forEach((originalText, element) => {
    const key = normalize(originalText);
    element.textContent = isEnglish ? translations[key] : originalText;
  });

  applyAttrTranslations(isEnglish);

  document.documentElement.lang = language;

  document.querySelectorAll(".lang-option").forEach((option) => {
    const isActive = option.dataset.lang === language;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll(".lang-option").forEach((option) => {
  option.addEventListener("click", () => setLanguage(option.dataset.lang));
});