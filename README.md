# DevTech-LandingPage-16129-G2
# WashTrack
> Tu ropa, lista en menos tiempo.

## Equipo

**DevTech - Grupo 2** · Curso 1ASI0730 Aplicaciones Web · UPC

| Integrante | Rol en el proyecto |
|---|---|
| Ariana Pérez Vásquez | Diseño UX/UI, arquitectura de información y landing page |
| Gabriel Ramirez Gutierrez | Diseño de funcionalidades y desarrollo de la aplicación web |
| Sebastián Sayago Vidal | Arquitectura de software, modelado y documentación técnica |
| Adriana Ramos Fuentes Rivera | Desarrollo backend con Domain-Driven Design |
| Luis Angel Tufiño Argüelles | Diseño de interfaces y experiencia de usuario |

WashTrack es una plataforma digital para la gestión y monitoreo de lavanderías. El proyecto busca facilitar el manejo de pedidos, el seguimiento de las prendas, los pagos y el monitoreo de las máquinas mediante tecnología IoT.

## Enlaces

* **Landing Page:** https://1asi0730-2620-16129-g2-devtech.github.io/DevTech-LandingPage-16129-G2/
* **Web Application:** https://washtrack-eb717.web.app

## Características

* **Gestión de pedidos:** Permite organizar clientes, pedidos y entregas desde un mismo lugar.
* **Seguimiento de pedidos:** Los clientes pueden consultar el estado de sus prendas durante el proceso de lavado.
* **Monitoreo IoT:** Permite monitorear el estado de las máquinas y detectar posibles problemas para prevenir fallas.
* **Recojo y entrega:** Facilita la gestión de pedidos que incluyen recojo y entrega a domicilio.
* **Pagos digitales:** Permite integrar los pagos dentro del proceso de compra.
* **Planes de suscripción:** Gratuito (S/ 0), Básico (S/ 49/mes) y Premium (S/ 99/mes).

## Cumplimiento del enunciado (Landing Page)

* **Call-to-action por segmento:** cada CTA redirige a la vista correspondiente de la Web Application:
  * Dueños de lavandería → `/register?role=shift-manager` (los planes agregan `&plan=free|basic|premium`).
  * Clientes finales → `/register?role=customer`.
  * Usuarios registrados → `/login`.
* **Internacionalización (i18n):** inglés (`en-US`, idioma por defecto) y español latinoamericano (`es-419`). El idioma elegido se recuerda en el navegador.
* **Accesibilidad (a11y):** enlace "saltar al contenido", landmarks (`header`, `nav`, `main`, `footer`), atributos ARIA (`aria-expanded`, `aria-controls`, `aria-pressed`, `aria-current`, `aria-invalid`, `aria-describedby`, `aria-live`), textos alternativos traducidos, foco visible y soporte para `prefers-reduced-motion`.
* **SEO:** `title`, `description`, `keywords`, `author`, `robots`, `canonical`, Open Graph y datos estructurados (JSON-LD), según la sección 4.2.3 del informe.
* **Ética y responsabilidad:** Términos y Condiciones y Política de Privacidad en `terms.html`, enlazados desde el footer, basados en el Código de Ética ACM/IEEE-CS, el Código de Ética del CIP y la Ley N.° 29733.
* **Videos:** About-the-Product y About-the-Team incrustados (modo de privacidad mejorada de YouTube).
* **Equipo:** sección con foto, nombre, carrera y rol de cada integrante.
* **Consistencia con la Web Application:** misma paleta de colores y tipografías (Poppins y Playfair Display) del Style Guide; iconos de Material Symbols.

## Tecnologías utilizadas

**HTML5:** Estructura semántica y contenido de la página.

**CSS3:** Diseño, estilos y adaptación de la página a diferentes dispositivos (responsive).

**JavaScript:** Menú responsive, cambio de idioma, navegación activa y validación del formulario.

## Estructura del proyecto

`index.html`   # Página principal (Landing Page)

`terms.html`   # Términos y Condiciones y Política de Privacidad

`styles.css`   # Estilos generales y tokens de diseño

`menu_toggle.css`   # Estilos del menú de navegación para tablets y celulares

`Pie.css`   # Estilos del pie de página

`i18n.js`   # Traducciones en-US / es-419 y cambio de idioma

`menu_toggle.js`   # Menú hamburguesa y navegación activa (aria-current)

`contact_form.js`   # Validación accesible del formulario de atención

`img/`   # Imágenes del proyecto (`img/team/` contiene las fotos del equipo)

`Documentos/`   # Documentos legales de referencia

## Diseño

WashTrack cuenta con un diseño pensado para que la navegación sea sencilla y clara. La interfaz se adapta a diferentes tamaños de pantalla y utiliza elementos visuales para organizar la información de los pedidos, servicios y demás funcionalidades.
