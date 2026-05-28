/**
 * AnnaLaydenSite.tsx
 * ─────────────────────────────────────────────────────────────
 * Anna Layden Educational Consulting — marketing site.
 * Drop into a Next.js / Vite / CRA project. Pair with site.css
 * (in this same folder) for the visual layer.
 *
 * Default palette: "clinic" (cool bone + navy + muted gold).
 * Other palettes: "sage" | "forest" | "mono". Switch by setting
 * <html data-palette="..."> or passing the `palette` prop.
 * ─────────────────────────────────────────────────────────────
 */

"use client";

import "./site.css";
import Image from "next/image";
import { Fragment, useEffect, type FC, type ReactNode } from "react";

export type Palette = "sage" | "forest" | "clinic" | "mono";

export interface AnnaLaydenSiteProps {
  palette?: Palette;
  onConsultationRequest?: (data: ConsultationRequest) => void | Promise<void>;
}

export interface ConsultationRequest {
  name: string;
  email: string;
  phone: string;
  grade: string;
  message: string;
}

interface ServiceCardProps {
  label: string;
  title: string;
  description: string;
  price: string;
  priceNote: string;
  tone: "warm" | "sage";
  image?: string;
}

interface PricingRow {
  title: string;
  desc: string;
  price: string;
  priceSmall?: string;
}

interface PricingGroup {
  group: string;
  rows: PricingRow[];
}

interface ProcessStep {
  num: string;
  label: string;
  title: string;
  body: string;
  meta: string;
}

interface Credential {
  title: string;
  detail: string;
}

interface Testimonial {
  quote: string;
  cite?: string;
}

interface FaqItem {
  q: string;
  a: string;
}

/* ───── Content ─────────────────────────────────────────────── */

const SERVICES: ServiceCardProps[] = [
  {
    label: "Service 01",
    title: "Psychoeducational Evaluation",
    description:
      "In partnership with a licensed school psychologist, we evaluate academic, cognitive, and social-emotional areas. Diagnoses lead to IEP or 504 plan recommendations, accommodations, and modifications you can take to your school.",
    price: "from $2,300",
    priceNote: "complete package · all-inclusive",
    tone: "warm",
    image: "/assets/360_F_827708428_KycFMN9rQQTM7zOew2iqLnGAdgnY7bog.jpg",
  },
  {
    label: "Service 02",
    title: "Professional Consultation",
    description:
      "Review of evaluation findings with schools or therapists, attendance at IEP/504 meetings, and follow-up calls or emails in excess of 15 minutes. Additional consults available after the evaluation.",
    price: "$100 / hour",
    priceNote: "post-evaluation support",
    tone: "sage",
    image: "/assets/modern-classroom-desk-with-organized-school-supplies-and-notebooks-ready-for-study-photo.jpg",
  },
];

const PRICING: PricingGroup[] = [
  {
    group: "Payable to Anna Layden",
    rows: [
      {
        title: "Initial Consultation",
        desc: "1–2 hour information-gathering meeting with Anna and parents to discuss educational concerns and the evaluation process.",
        price: "$125",
        priceSmall: "/ hr",
      },
      {
        title: "Academic Evaluation",
        desc: "Records review, teacher/therapist consultation, 2.5–3 hours of academic achievement testing, scoring, and collaboration on the final report.",
        price: "$1,525",
      },
    ],
  },
  {
    group: "Payable to School Psychologist",
    rows: [
      {
        title: "Cognitive Evaluation",
        desc: "Administered by a licensed school psychologist — 1.5–2 hours of cognitive testing, scoring, and collaboration with Anna on findings.",
        price: "$750",
      },
    ],
  },
  {
    group: "Included",
    rows: [
      {
        title: "Follow-Up & Report",
        desc: "1.5-hour in-depth meeting with the family, Anna, and the school psychologist. Comprehensive report covers test results, interpretation, diagnosis, recommendations, and accommodations.",
        price: "included",
      },
    ],
  },
  {
    group: "Optional Services",
    rows: [
      {
        title: "ADHD Evaluation — Standard Conners",
        desc: "Conners Rating Scale completed by parents and teachers; older students complete a self-rating scale. Includes interview with parents, student, and teachers, plus an in-depth follow-up meeting.",
        price: "$175",
        priceSmall: "w/ eval",
      },
      {
        title: "ADHD Evaluation — Standalone / Comprehensive Conners",
        desc: "Standalone Standard Conners or Conners Comprehensive evaluation, outside of the full psychoeducational evaluation package.",
        price: "$275",
      },
      {
        title: "Professional Consultation",
        desc: "Review of evaluation with schools or therapists, meetings, phone calls, and emails in excess of 15 minutes, or additional consults following evaluation.",
        price: "$100",
        priceSmall: "/ hr",
      },
    ],
  },
];

const PROCESS: ProcessStep[] = [
  {
    num: "01",
    label: "Meet",
    title: "Consultation",
    body: "We sit down and discuss. Together we decide whether testing is the right next step.",
    meta: "1–2 hours",
  },
  {
    num: "02",
    label: "Test",
    title: "Evaluation",
    body: "Academic and cognitive testing across two sessions, with records review and teacher input woven in.",
    meta: "4–5 hours",
  },
  {
    num: "03",
    label: "Interpret",
    title: "Collaboration",
    body: "Anna and the school psychologist score results together and prepare a unified, integrated report.",
    meta: "behind the scenes",
  },
  {
    num: "04",
    label: "Plan",
    title: "Follow-up",
    body: "A 1.5-hour family meeting walks you through findings, diagnoses, recommendations, and next steps.",
    meta: "1.5 hours",
  },
];

const CREDENTIALS: Credential[] = [
  {
    title: "Colorado Department of Education",
    detail:
      "License #354584 · Elementary Education, 7-12 English Language Arts, Special Education. Expires 11/10/2030.",
  },
  { title: "BA in English", detail: "Colorado State University, 2003." },
  { title: "MS in Educational Leadership", detail: "Walden University, 2019." },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      
"Our daughter has had significant trouble learning to read since she was little. After years in various public school tiered interventions, our child continued to significantly struggle with reading. Her teachers assured us that she would catch up. When she got to 3rd grade and was still reading two grades behind, my husband and I decided to pursue an independent educational evaluation. We live in Pagosa Springs but luckily found Anna and Cara’sinformation online. When we reached out to Anna she responded right away and started asking questions and gathering information. To our surprise Anna and Cara were able to fit our child in for testing immediately. In our case, it was only 3 weeks from the first phone call to their final report was completed. Their assessment of our daughters’ situation was spot-on and very thorough. My husband and I felt they truly cared about our child and helped us navigate the public school system to determine the best path forward for her education. They were both very professional throughout the process, kind and patient with our kiddo, and we highly recommend them. To anyone who is considering an IEE with Anna and Cara: do it; it is worth every penny!",
  },
  {
    quote:
      "Anna and Rachel are exceptionally skilled, caring, and approachable professionals. Our daughter was completely at-ease during the entire psychoeducational evaluation process (and actually enjoyed it!), and the evaluation results provided the clarity and specific information we needed to set our daughter up for success in school. She is thriving in school this year, largely due to Anna and Rachel's support.",
  },
  {
    quote:
      "We have worked with Anna as well as Cara over the last year and a half with multiple evaluations.  We have a son who was struggling in school, but it was difficult to pinpoint.  She helped us navigate a better school option for him and provided us with tangible data to support the best path forward.  Her experience in the classroom is extremely helpful and she has a great depth of the real world of education.  We highly recommend Anna, Cara, and anyone in her team!",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "How long does the full evaluation take, beginning to end?",
    a: "Typically three to six weeks from initial consultation to delivered report — sometimes faster when scheduling allows. The testing sessions themselves total about 4–5 hours across two visits.",
  },
  {
    q: "Will my child's school accept an independent evaluation?",
    a: "Yes. Independent evaluations are recognized by schools for IEP and 504 processes. The comprehensive report includes diagnoses, recommendations, and accommodations written in language districts use directly.",
  },
  {
    q: "What ages and grades do you work with?",
    a: "Students ages six through twenty-four — elementary through young adult transition. Anna's classroom experience spans Montessori elementary, project-based middle, and high school.",
  },
  {
    q: "Can you diagnose ADHD?",
    a: "Yes. ADHD evaluation uses the Conners rating scales completed by parents and teachers, with older students completing a self-rating scale. Add-on cost is $175 within the full evaluation package, $275 standalone, or $275 for the Comprehensive Conners.",
  },
  {
    q: "Do you offer need-based scholarships?",
    a: "Yes. Anna partners with community organizations and families to provide need-based scholarships. Please ask during your initial consultation — there's no formal application required to start the conversation.",
  },
  {
    q: "What happens after the report is delivered?",
    a: "Additional consultation — reviewing the report with schools or therapists, attending IEP/504 meetings, or follow-up calls beyond 15 minutes — is billed at $100/hour. Many families find one or two follow-ups helpful as the school year unfolds.",
  },
];

/* ───── Small UI primitives ─────────────────────────────────── */

const Eyebrow: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => <span className={`eyebrow ${className ?? ""}`}>{children}</span>;

const ImagePlaceholder: FC<{
  tone?: "warm" | "sage" | "plain";
  shape?: "portrait" | "square" | "wide" | "circle";
  label: string;
  children: ReactNode;
}> = ({ tone = "plain", shape, label, children }) => (
  <div
    className={`img-ph ${tone === "warm" ? "warm" : tone === "sage" ? "sage" : ""}`}
    data-shape={shape}
  >
    <span className="ph-label">{label}</span>
    {children}
  </div>
);

/* ───── Sections ────────────────────────────────────────────── */

const Nav: FC = () => (
  <nav className="nav">
    <div className="nav-inner">
      <a className="brand" href="#top">
        <span className="brand-name">Anna Layden, MS</span>
        <span className="brand-tag">Educational Consultant</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#process">Process</a>
        <a href="#faq">FAQ</a>
      </div>
      <a className="btn btn-primary" href="#contact">
        Book consultation
        <span className="arrow">→</span>
      </a>
    </div>
  </nav>
);

const Hero: FC = () => (
  <header className="hero" id="top">
    <Image
      className="hero-bg"
      src="/assets/c2d6dc572dd94832894786ee2adc81f9.avif"
      alt=""
      fill
      aria-hidden
    />
    <div className="container">
      <div className="hero-grid">
        <div>
          <Eyebrow>Independent Psychoeducational Evaluations</Eyebrow>
          <h1>
            Understanding
            <br />
            how your child
            <br />
            <span className="italic-accent">actually</span> learns.
          </h1>
          <p className="lede">
            For families and schools across the Four Corners — academic and
            cognitive testing, interpreted together, providing you with results you can use to inform your child’s best educational path forward.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#contact">
              Book initial consultation
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost btn-lg" href="#process">
              See how it works
            </a>
          </div>
          <div className="hero-trust">
            <span className="dot" />
            22 years educating in Durango · Colorado Lic. #354584
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ServiceCard: FC<ServiceCardProps> = ({
  label,
  title,
  description,
  price,
  priceNote,
  tone,
  image,
}) => (
  <article className="service-card">
    {image && (
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        style={{ objectFit: "cover", width: "100%", height: "auto", opacity: 0.5 }}
      />
    )}
    <span className="label">{label}</span>
    <h3>{title}</h3>
    <p className="muted">{description}</p>
    <div className="price-line">
      <span className="price">{price}</span>
      <span className="price-note">{priceNote}</span>
    </div>
  </article>
);

const About: FC = () => (
  <section id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-img">
          <Image
            src="/assets/Anna, Birch, Robin-5859.avif"
            alt="Photo of Anna Layden"
            width={400}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "auto" , borderRadius: 8}}
          />
        </div>
        <div className="about-body">
          <h2 style={{ marginTop: 14, marginBottom: 28 }}>
            More about Anna.
          </h2>
          <p>
            Anna Layden has been an educator in Durango, Colorado since 2005 —
            teaching in Montessori elementary, project-based middle, and
            traditional high school classrooms.
          </p>
          <p>
            She's worked with students as a classroom teacher, a special
            education teacher, a social worker, and an academic diagnostician.
            She's worked alongside countless families as an educational advocate
            and ally.
          </p>
          <p>
            Since 2020 she has been providing psychoeducational evaluations
            across the Four Corners area, for students ages six through
            twenty-four. As an educator invested in equity, Anna partners with
            community organizations to provide need-based scholarships.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Services: FC = () => (
  <section className="services" id="services">
    <div className="container">
      <div className="section-head">
        <Eyebrow>What we offer</Eyebrow>
        <h2>Two ways we work with families:</h2>
        <p className="lede">
          Most families start with a consultation. From there we recommend
          either a full independent evaluation or ongoing educational consulting
          - whichever fits your situation.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

const Pricing: FC = () => (
  <section id="pricing">
    <div className="container">
      <div className="section-head">
        <Eyebrow>Pricing</Eyebrow>
        <h2>What the full evaluation includes</h2>
        <p className="lede">
          The follow-up meeting and comprehensive
          report are always included in the package price.
        </p>
      </div>

      <div className="pricing-table">
        {PRICING.map((group) => (
          <Fragment key={group.group}>
            <div className="pricing-row who">
              <div className="pr-title">{group.group}</div>
              <div />
              <div />
            </div>
            {group.rows.map((row) => (
              <div className="pricing-row" key={row.title}>
                <div className="pr-title">{row.title}</div>
                <div className="pr-desc">{row.desc}</div>
                <div className="pr-price">
                  {row.price}
                  {row.priceSmall ? <small> {row.priceSmall}</small> : null}
                </div>
              </div>
            ))}
          </Fragment>
        ))}

        <div className="pricing-total">
          <div>
            <div className="pt-name">Everything above in one package</div>
          </div>
          <div className="pt-amount">$2,300</div>
        </div>
      </div>
    </div>
  </section>
);

const Process: FC = () => (
  <section
    className="tight"
    id="process"
    style={{
      background: "var(--bg-alt)",
      borderTop: "1px solid var(--line-soft)",
      borderBottom: "1px solid var(--line-soft)",
    }}
  >
    <div className="container">
      <div className="section-head" style={{ marginBottom: 40 }}>
        <Eyebrow>The process</Eyebrow>
        <h2>What to expect from start to finish:</h2>
      </div>

      <div className="process-grid">
        {PROCESS.map((step) => (
          <div className="step" key={step.num}>
            <div className="step-num">
              {step.num} / {step.label}
            </div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <div className="step-meta">{step.meta}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Credentials: FC = () => (
  <section className="credentials tight">
    <div className="container">
      <Eyebrow>Credentials</Eyebrow>
      <h2 style={{ color: "var(--on-deep)", marginTop: 14, maxWidth: "24ch" }}>
        Licensed and credentialed with 22 years of classroom experience.
      </h2>
      <div className="cred-grid">
        {CREDENTIALS.map((c) => (
          <div className="cred" key={c.title}>
            <div className="cred-title">{c.title}</div>
            <div className="cred-detail">{c.detail}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials: FC = () => (
  <section id="testimonials">
    <div className="container">
      <div className="section-head">
        <h2>Testimonials</h2>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <article className="testimonial" key={i}>
            <blockquote>{t.quote}</blockquote>
            {t.cite && <cite>{t.cite}</cite>}
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Faq: FC = () => (
  <section
    id="faq"
    className="tight"
    style={{
      background: "var(--bg-alt)",
      borderTop: "1px solid var(--line-soft)",
      borderBottom: "1px solid var(--line-soft)",
    }}
  >
    <div className="container-narrow">
      <div className="section-head" style={{ marginBottom: 32 }}>
        <Eyebrow>Common questions</Eyebrow>
        <h2>What parents and schools ask:</h2>
      </div>

      <div className="faq-list">
        {FAQ.map((item) => (
          <details className="faq" key={item.q}>
            <summary>{item.q}</summary>
            <div className="faq-answer">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const Contact: FC = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div style={{ maxWidth: 720 }}>
        <Eyebrow>Get in touch</Eyebrow>
        <h2 style={{ marginTop: 14 }}>
          Let's start with a conversation about your child.
        </h2>
        <p
          className="lede"
          style={{
            color: "color-mix(in oklch, var(--on-deep) 75%, transparent)",
            marginTop: 18,
          }}
        >
          Initial consultations are $125/hr with no commitment to move forward.
        </p>
      </div>

      <dl className="direct contact-details">
        <div>
          <dt>Email</dt>
          <dd>
            <a href="mailto:aelayden@gmail.com">aelayden@gmail.com</a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>
            <a href="tel:+19707693006">970-769-3006</a>
          </dd>
        </div>
        <div>
          <dt>Office</dt>
          <dd>
            1309 E 3rd Ave., #27
            <br />
            Durango, CO 81301
          </dd>
        </div>
        <div>
          <dt>Serving</dt>
          <dd>
            Four Corners region
            <br />
            Colorado · New Mexico · Arizona · Utah
          </dd>
        </div>
      </dl>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-inner">
        <span>© 2026 Anna Layden Educational Consulting</span>
        <span>CO Lic. #354584 · Durango, CO</span>
      </div>
    </div>
  </footer>
);

/* ───── Root component ─────────────────────────────────────── */

const AnnaLaydenSite: FC<AnnaLaydenSiteProps> = ({ palette = "clinic" }) => {
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.getAttribute("data-palette");
    html.setAttribute("data-palette", palette);
    return () => {
      if (previous) html.setAttribute("data-palette", previous);
      else html.removeAttribute("data-palette");
    };
  }, [palette]);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Credentials />
      <Process />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default AnnaLaydenSite;
