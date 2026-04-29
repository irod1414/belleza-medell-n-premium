import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppFloat, whatsappLink } from "@/components/WhatsAppFloat";
import heroImg from "@/assets/hero-skin.jpg";
import specialistImg from "@/assets/specialist.jpg";
import cleansingImg from "@/assets/service-cleansing.jpg";
import botoxImg from "@/assets/service-botox.jpg";
import rejuvenationImg from "@/assets/service-rejuvenation.jpg";
import clinicImg from "@/assets/gallery-clinic.jpg";
import hydrationImg from "@/assets/gallery-hydration.jpg";
import productsImg from "@/assets/gallery-products.jpg";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centro Estético Daniela Ortiz — Tratamientos faciales premium en Medellín" },
      {
        name: "description",
        content:
          "Realza tu belleza natural con limpiezas faciales profundas, botox, rejuvenecimiento e hidratación facial. Atención personalizada en Medellín. Agenda tu cita por WhatsApp.",
      },
      { property: "og:title", content: "Centro Estético Daniela Ortiz — Belleza natural en Medellín" },
      {
        property: "og:description",
        content: "Tratamientos faciales profesionales con resultados visibles. Cupos limitados.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "Limpieza Facial Profunda",
    img: cleansingImg,
    description:
      "Una experiencia que purifica tu piel desde adentro. Eliminamos impurezas, puntos negros y células muertas con técnicas suaves y productos de alta calidad.",
    benefits: ["Piel renovada y luminosa", "Poros visiblemente reducidos", "Sensación de frescura inmediata"],
  },
  {
    title: "Aplicación de Botox",
    img: botoxImg,
    description:
      "Tratamiento profesional para suavizar líneas de expresión y devolverle a tu rostro una apariencia descansada, sin perder naturalidad.",
    benefits: ["Resultados sutiles y elegantes", "Procedimiento seguro y certificado", "Efecto visible desde la primera semana"],
  },
  {
    title: "Rejuvenecimiento Facial",
    img: rejuvenationImg,
    description:
      "Un protocolo avanzado que combina hidratación profunda, estímulo de colágeno y técnicas anti-edad para revelar una piel firme y radiante.",
    benefits: ["Firmeza y elasticidad", "Tono uniforme", "Brillo natural duradero"],
  },
];

const benefits = [
  { title: "Atención Personalizada", text: "Cada tratamiento se diseña para tu tipo de piel y tus objetivos." },
  { title: "Productos Premium", text: "Trabajamos con marcas reconocidas y dermatológicamente probadas." },
  { title: "Resultados Visibles", text: "Notarás la diferencia desde la primera sesión." },
  { title: "Espacio Seguro", text: "Ambiente higiénico, cálido y diseñado para tu bienestar." },
];

const testimonials = [
  {
    name: "Valentina M.",
    text: "Llevo 3 meses con Daniela y mi piel cambió por completo. Se nota el amor y profesionalismo en cada cita.",
  },
  {
    name: "Carolina R.",
    text: "El mejor lugar de Medellín para cuidar tu rostro. Las limpiezas faciales son una experiencia espectacular.",
  },
  {
    name: "Manuela T.",
    text: "Me apliqué botox y el resultado es natural y elegante. Total confianza en su trabajo.",
  },
  {
    name: "Daniela A.",
    text: "Salí con la piel hidratada, luminosa y muy relajada. Volveré sin duda alguna.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Testimonials />
        <Gallery />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Centro Estético Daniela Ortiz">
          <img src={logoImg} alt="Logo Daniela Ortiz · Centro Estético" className="h-12 w-auto md:h-14 object-contain" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-base tracking-wide text-foreground">Daniela Ortiz</span>
            <span className="text-[10px] font-sans uppercase tracking-[0.32em] text-muted-foreground">Centro Estético</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#nosotros" className="text-muted-foreground hover:text-foreground transition">Nosotros</a>
          <a href="#servicios" className="text-muted-foreground hover:text-foreground transition">Servicios</a>
          <a href="#testimonios" className="text-muted-foreground hover:text-foreground transition">Testimonios</a>
          <a href="#contacto" className="text-muted-foreground hover:text-foreground transition">Contacto</a>
        </nav>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Sala de procedimientos estéticos en Centro Estético Daniela Ortiz, Medellín"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16">
        <div className="max-w-2xl animate-fade-up">
          {/* Medical credential badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/70 backdrop-blur px-4 py-2 mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-accent">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-foreground">
              Cosmetóloga certificada · Reg. Sanitario
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Medicina <em className="text-accent not-italic">estética facial</em> con resultados clínicamente visibles
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground font-light leading-relaxed">
            Toxina botulínica tipo A, mesoterapia facial, peelings químicos
            controlados y protocolos antiedad personalizados. Procedimientos
            ambulatorios, bioseguros y respaldados por evidencia científica.
          </p>

          {/* Medical bullets */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-sm">
            {[
              "Insumos de uso médico y trazabilidad",
              "Protocolos de bioseguridad nivel clínico",
              "Diagnóstico facial con análisis de piel",
              "Seguimiento post-procedimiento incluido",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-foreground/80">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-elegant transition hover:scale-[1.02]"
            >
              Agenda tu valoración por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur px-8 py-4 text-sm font-medium transition hover:bg-secondary"
            >
              Ver procedimientos
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-border/60 pt-6">
            <div>
              <div className="font-serif text-2xl text-accent">+5</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Años de práctica</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-accent">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Procedimientos</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-accent">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Insumos certificados</div>
            </div>
          </div>

          <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            ✦ Cupos limitados · Valoración inicial sin costo
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-28 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant">
            <img src={specialistImg} alt="Especialista de Centro Estético Daniela Ortiz" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-gradient-gold text-center text-sm font-serif text-white shadow-gold animate-float">
            +5 años<br/>de experiencia
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Sobre nosotros</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            Una experiencia íntima, profesional y hecha para ti
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Daniela Ortiz nace del amor por la piel sana y la belleza auténtica. Cada cita es un espacio
            dedicado solo a ti: te escuchamos, analizamos tu piel y diseñamos un protocolo único
            que respeta tu esencia y potencia tu mejor versión.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabajamos con técnicas de vanguardia, productos de alta gama y un compromiso real con
            tus resultados. Porque cuidarte es un acto de amor propio.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="500+" label="Clientas felices" />
            <Stat n="98%" label="Recomendación" />
            <Stat n="5★" label="Calificación" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl text-accent">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Tratamientos</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            Servicios pensados para realzar tu piel
          </h2>
          <p className="mt-4 text-muted-foreground">
            Protocolos personalizados con tecnología y productos premium.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Agendar
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          También ofrecemos <strong className="text-foreground">hidratación facial</strong>,{" "}
          <strong className="text-foreground">tratamientos para acné y manchas</strong> y{" "}
          <strong className="text-foreground">cuidado de la piel personalizado</strong>.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Por qué Daniela Ortiz</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            La diferencia está en los detalles
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div key={b.title} className="bg-card p-8 transition hover:bg-secondary/40">
              <div className="font-serif text-3xl text-accent">0{i + 1}</div>
              <h3 className="mt-4 font-serif text-xl">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="py-28 bg-gradient-rose">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Testimonios</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            Historias reales, pieles renovadas
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="relative rounded-2xl bg-background/80 backdrop-blur p-8 shadow-soft"
            >
              <div className="text-accent text-2xl">★★★★★</div>
              <p className="mt-4 font-serif text-lg italic leading-relaxed">"{t.text}"</p>
              <footer className="mt-6 text-sm uppercase tracking-wider text-muted-foreground">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: clinicImg, alt: "Espacio Centro Estético Daniela Ortiz", span: "md:col-span-2 md:row-span-2" },
    { src: hydrationImg, alt: "Tratamiento de hidratación facial", span: "" },
    { src: productsImg, alt: "Productos premium de skincare", span: "" },
  ];
  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Nuestro espacio</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            Un refugio diseñado para tu bienestar
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {items.map((i) => (
            <div key={i.alt} className={`overflow-hidden rounded-2xl ${i.span}`}>
              <img src={i.src} alt={i.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-28 bg-gradient-gold text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-balance">
          Tu mejor versión te está esperando
        </h2>
        <p className="mt-6 text-white/90 text-lg font-light">
          Agenda hoy mismo tu valoración personalizada. Cupos limitados esta semana.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-background px-10 py-5 text-sm font-medium text-foreground shadow-elegant transition hover:scale-[1.02]"
        >
          Agenda tu cita hoy
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-28 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Contacto</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            Hablemos de tu piel
          </h2>
          <p className="mt-4 text-muted-foreground">
            Resolvemos tus dudas y te ayudamos a elegir el tratamiento ideal.
          </p>

          <ul className="mt-10 space-y-6 text-sm">
            <ContactItem label="WhatsApp" value="+57 300 000 0000" href={whatsappLink} />
            <ContactItem label="Instagram" value="@dainela.cosmetologia" href="https://instagram.com" />
            <ContactItem label="Dirección" value="El Poblado, Medellín, Colombia" />
            <ContactItem label="Horarios" value="Lun – Sáb · 9:00 a.m. – 7:00 p.m." />
          </ul>
        </div>

        <div className="rounded-2xl bg-gradient-soft p-10 shadow-soft">
          <h3 className="font-serif text-2xl">Reserva en menos de 1 minuto</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Escríbenos por WhatsApp, te responderemos personalmente para confirmar tu cita.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Escribir por WhatsApp
          </a>
          <p className="mt-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Respuesta inmediata · Cupos limitados
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="border-l-2 border-accent pl-4">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 font-serif text-lg">{value}</div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className="block transition hover:opacity-70">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="font-serif text-lg text-foreground">
          Centro Estético Daniela Ortiz
        </div>
        <div>© {new Date().getFullYear()} · Hecho con amor en Medellín</div>
      </div>
    </footer>
  );
}
