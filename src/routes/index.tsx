import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppFloat, whatsappLink } from "@/components/WhatsAppFloat";
import heroImg from "@/assets/hero-skin.jpg";
import specialistImg from "@/assets/specialist.jpg";
import cleansingImg from "@/assets/service-cleansing.jpg";
import botoxImg from "@/assets/service-botox.jpg";
import prpImg from "@/assets/service-prp.jpg";
import hyaluronicImg from "@/assets/service-hyaluronic.jpg";
import jawlineImg from "@/assets/service-jawline.jpg";
import tirzepatideImg from "@/assets/service-tirzepatide.jpg";
import facialImg from "@/assets/service-facial.jpg";
import ivImg from "@/assets/service-iv.jpg";
import peptonesImg from "@/assets/service-peptones.jpg";
import vitcImg from "@/assets/service-vitc.jpg";
import clinicImg from "@/assets/gallery-clinic.jpg";
import hydrationImg from "@/assets/gallery-hydration.jpg";
import productsImg from "@/assets/gallery-products.jpg";
import glp1Hero from "@/assets/glp1-hero.jpg";
import glp1Pen from "@/assets/glp1-pen.jpg";
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
    title: "Toxina Botulínica",
    img: botoxImg,
    description: "Reduce líneas de expresión con resultados naturales y precisos.",
  },
  {
    title: "Plasma Rico en Plaquetas",
    img: prpImg,
    description: "Regeneración celular utilizando componentes de tu propia sangre.",
  },
  {
    title: "Ácido Hialurónico",
    img: hyaluronicImg,
    description: "Hidratación profunda y relleno facial para mejorar volumen y contorno.",
  },
  {
    title: "Perfilamiento Mandibular",
    img: jawlineImg,
    description: "Definición de la mandíbula para un rostro más estructurado y armónico.",
  },
  {
    title: "Aplicación de Tirzepatide",
    img: tirzepatideImg,
    description: "Tratamiento avanzado para control de peso y mejora metabólica.",
  },
  {
    title: "Limpiezas Faciales",
    img: cleansingImg,
    description: "Eliminación de impurezas para una piel limpia y saludable.",
  },
  {
    title: "Faciales",
    img: facialImg,
    description: "Tratamientos personalizados para mejorar la calidad de la piel.",
  },
  {
    title: "Sueroterapia",
    img: ivImg,
    description: "Vitaminas intravenosas para energía, salud y bienestar.",
  },
  {
    title: "Peptonas",
    img: peptonesImg,
    description: "Bioestimulación para rejuvenecimiento y reparación celular.",
  },
  {
    title: "Vitamina C",
    img: vitcImg,
    description: "Iluminación y antioxidantes para una piel radiante.",
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
        <GLP1 />
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
          <a href="#glp1" className="text-muted-foreground hover:text-foreground transition">GLP-1</a>
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

function AnimatedHeading({ lines, baseDelay = 0 }: { lines: { text: string; className?: string }[]; baseDelay?: number }) {
  let counter = 0;
  return (
    <>
      {lines.map((line, li) => (
        <span key={li} className={`block ${line.className ?? ""}`}>
          {Array.from(line.text).map((ch, ci) => {
            const delay = baseDelay + counter * 0.035;
            counter++;
            return (
              <span
                key={ci}
                className="animate-letter"
                style={{
                  animationDelay: `${delay}s`,
                  whiteSpace: ch === " " ? "pre" : "normal",
                  // inherit gradient text effect from parent (text-gold-shimmer)
                  color: "inherit",
                  background: "inherit",
                  WebkitBackgroundClip: "inherit",
                  backgroundClip: "inherit",
                }}
                aria-hidden="true"
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden isolate bg-gradient-soft">
      {/* Decorative blurred halos */}
      <div
        className="absolute top-[-10rem] right-[-10rem] h-[700px] w-[700px] rounded-full opacity-70 blur-3xl pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.09 85 / 0.55), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 left-[-10rem] h-[500px] w-[500px] rounded-full opacity-50 blur-3xl pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, oklch(0.92 0.03 250 / 0.5), transparent 70%)" }}
      />

      {/* Background image — full visual presence on the right */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <img
          src={heroImg}
          alt="Mujer con piel radiante tras tratamiento de botox en Centro Estético Daniela Ortiz, Medellín"
          className="h-full w-full object-cover object-right"
          width={1920}
          height={1080}
        />
        {/* Fade left side to background so text stays legible; right side stays vivid */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, var(--background) 0%, color-mix(in oklab, var(--background) 70%, transparent) 38%, transparent 65%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Subtle gold sheen */}
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-70"
          style={{ background: "linear-gradient(135deg, transparent 55%, oklch(0.78 0.12 85 / 0.55) 100%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          {/* Medical credential badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card/80 backdrop-blur px-4 py-2 mb-8 shadow-soft animate-fade-up">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-accent">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-foreground">
              Especialista en Botox · Medellín
            </span>
          </div>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance text-foreground"
            aria-label="Botox de autor. Naturalidad clínica."
            style={{ perspective: "800px" }}
          >
            <AnimatedHeading
              lines={[
                { text: "Botox de autor." },
                { text: "Naturalidad", className: "" },
                { text: "clínica.", className: "text-gold-shimmer italic" },
              ]}
            />
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground font-light leading-relaxed animate-fade-up" style={{ animationDelay: "1.2s" }}>
            Toxina botulínica tipo A aplicada con precisión milimétrica para
            suavizar líneas de expresión sin perder tu esencia. Resultados
            elegantes, frescos y absolutamente naturales.
          </p>

          {/* Botox-focused bullets */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-sm animate-fade-up" style={{ animationDelay: "1.4s" }}>
            {[
              "Toxina botulínica certificada",
              "Aplicación indolora con técnica suave",
              "Resultados visibles en 5–7 días",
              "Look natural, sin rostro congelado",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-foreground/85">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "1.6s" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-elegant transition hover:scale-[1.02] hover:shadow-gold"
            >
              Agenda tu valoración de Botox
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur px-8 py-4 text-sm font-medium transition hover:bg-secondary"
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

const glp1Benefits = [
  { icon: "📉", title: "Pérdida de peso sostenida", text: "Estudios clínicos muestran reducción promedio del 15–22% del peso corporal en 72 semanas con tirzepatida." },
  { icon: "🍽️", title: "Control del apetito", text: "Reduce el hambre y los antojos al actuar sobre los receptores GLP-1 y GIP del cerebro." },
  { icon: "🩸", title: "Mejora metabólica", text: "Optimiza la glucosa en sangre, la sensibilidad a la insulina y los niveles de colesterol." },
  { icon: "❤️", title: "Salud cardiovascular", text: "Disminuye la presión arterial y reduce el riesgo cardiovascular asociado al sobrepeso." },
  { icon: "⚡", title: "Más energía y enfoque", text: "Al estabilizar la glucosa, mejora la energía constante y la claridad mental durante el día." },
  { icon: "🛡️", title: "Acompañamiento médico", text: "Protocolo personalizado, dosis progresiva y seguimiento mensual con tu especialista." },
];

const glp1Stats = [
  { value: "−22%", label: "Peso corporal promedio*" },
  { value: "−2.4", label: "HbA1c reducción" },
  { value: "1×", label: "Aplicación semanal" },
  { value: "72", label: "Semanas de estudio" },
];

const glp1Progress = [
  { week: "Semana 4", loss: 18, kg: "−2 kg" },
  { week: "Semana 12", loss: 38, kg: "−6 kg" },
  { week: "Semana 24", loss: 62, kg: "−11 kg" },
  { week: "Semana 48", loss: 85, kg: "−17 kg" },
  { week: "Semana 72", loss: 100, kg: "−22 kg" },
];

function GLP1() {
  return (
    <section id="glp1" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={glp1Hero}
                alt="Tratamiento GLP-1 con tirzepatida en Centro Estético Daniela Ortiz, Medellín"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card border border-border rounded-2xl p-5 shadow-elegant max-w-[220px]">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Aplicación</div>
              <div className="mt-1 font-serif text-xl">1 vez por semana</div>
              <div className="mt-2 text-xs text-muted-foreground">Pluma subcutánea de uso ambulatorio</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-secondary/40 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-foreground">Nuevo · Programa GLP-1</span>
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-balance leading-tight">
              Pierde peso de forma <em className="text-accent not-italic">médica, segura y sostenida</em> con Tirzepatida
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Los análogos de GLP-1 como la <strong className="text-foreground">tirzepatida</strong> son
              tratamientos médicos de última generación que actúan sobre los receptores
              hormonales que regulan el apetito y el metabolismo. En Centro Estético
              Daniela Ortiz diseñamos un protocolo personalizado, con valoración médica,
              dosis escalonada y acompañamiento mensual.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {glp1Stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                  <div className="font-serif text-2xl text-accent">{s.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-muted-foreground">*Resultados promedio del estudio SURMOUNT-1 con tirzepatida 15 mg.</p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-elegant transition hover:scale-[1.02]"
            >
              Agenda tu valoración GLP-1
            </a>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-accent">Beneficios clínicos</span>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl text-balance">
              Por qué la tirzepatida está revolucionando el manejo del peso
            </h3>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glp1Benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:shadow-elegant hover:-translate-y-1">
                <div className="text-3xl">{b.icon}</div>
                <h4 className="mt-4 font-serif text-xl">{b.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress chart + image */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 aspect-square overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={glp1Pen}
              alt="Pluma de aplicación subcutánea de tirzepatida"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft">
            <span className="text-xs uppercase tracking-[0.4em] text-accent">Progreso esperado</span>
            <h3 className="mt-3 font-serif text-2xl md:text-3xl">Pérdida de peso promedio en el tiempo</h3>
            <p className="mt-2 text-sm text-muted-foreground">Resultados de referencia para una paciente de 80 kg con dosis máxima tolerada.</p>

            <div className="mt-8 space-y-5">
              {glp1Progress.map((p) => (
                <div key={p.week}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{p.week}</span>
                    <span className="font-serif text-accent">{p.kg}</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-gold transition-all duration-700"
                      style={{ width: `${p.loss}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
              <div>
                <div className="font-serif text-xl text-accent">Mes 1</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Adaptación</div>
              </div>
              <div>
                <div className="font-serif text-xl text-accent">Mes 3</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Resultados visibles</div>
              </div>
              <div>
                <div className="font-serif text-xl text-accent">Mes 6+</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Mantenimiento</div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-xs text-muted-foreground max-w-3xl mx-auto">
          La tirzepatida es un medicamento de prescripción médica. Los resultados varían según cada paciente.
          Toda aplicación se realiza previa valoración médica y bajo estricto seguimiento profesional.
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
            <ContactItem label="WhatsApp" value="+57 313 548 3738" href={whatsappLink} />
            <ContactItem label="Email" value="daniela@centroestetico.co" href="mailto:daniela@centroestetico.co" />
            <ContactItem label="Sitio web" value="centroestetico.co" href="https://centroestetico.co" />
            <ContactItem label="Ubicación" value="Medellín, Colombia" />
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
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Logo Daniela Ortiz · Centro Estético" className="h-14 w-auto object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg text-foreground">Daniela Ortiz</span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Centro Estético</span>
          </div>
        </div>
        <div>© 2026 Daniela Ortiz. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
