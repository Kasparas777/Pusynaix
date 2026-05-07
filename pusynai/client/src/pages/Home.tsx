/**
 * PUŠYNAI FOOD ON FIRE – Main Page
 * Design: "Miško Ugnis" – Dark forest meets open fire
 * Palette: Deep forest green (#1a2e1a) + charcoal + cream + amber fire accent
 * Fonts: Playfair Display (headings) + DM Sans (body) + JetBrains Mono (prices)
 */

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ChevronDown, Menu, X } from "lucide-react";

// ─── Logo SVG (pine trees) ──────────────────────────────────────────────────
const PineTreesLogo = () => (
  <svg width="56" height="56" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left small tree */}
    <line x1="28" y1="100" x2="28" y2="60" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="28,60 18,78 38,78" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="28,50 16,70 40,70" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="28,40 20,58 36,58" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="28,30 22,46 34,46" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    {/* Center tall tree */}
    <line x1="60" y1="100" x2="60" y2="45" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="60,45 46,68 74,68" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="60,33 44,58 76,58" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="60,22 46,46 74,46" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="60,12 48,34 72,34" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    {/* Right small tree */}
    <line x1="92" y1="100" x2="92" y2="60" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="92,60 82,78 102,78" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="92,50 80,70 104,70" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="92,40 84,58 100,58" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
    <polyline points="92,30 86,46 98,46" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

// ─── Navigation ─────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: "Meniu" },
    { href: "#atsiliepimai", label: "Atsiliepimai" },
    { href: "#kontaktai", label: "Kontaktai" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(20, 38, 20, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(93, 138, 82, 0.15)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <PineTreesLogo />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.12em" }}>
              PUŠYNAI
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: "#5d8a52", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              FOOD ON FIRE
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.1em", color: "#f0faf0", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#f0faf0")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+37068700909"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", padding: "0.5rem 1.25rem", border: "1px solid rgba(93, 138, 82, 0.6)", color: "#5d8a52", letterSpacing: "0.05em", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#5d8a52"; e.currentTarget.style.color = "#1a2e1a"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#5d8a52"; }}
          >
            Rezervacija
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: "#ffffff" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "rgba(20, 38, 20, 0.98)", borderTop: "1px solid rgba(93, 138, 82, 0.2)" }}>
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", letterSpacing: "0.1em", color: "#f0faf0", textTransform: "uppercase" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+37068700909"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", padding: "0.75rem 1.5rem", border: "1px solid rgba(93, 138, 82, 0.6)", color: "#5d8a52", textAlign: "center" }}
            >
              Rezervacija
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// ─── Hero Section ────────────────────────────────────────────────────────────
const Hero = () => (
  <section
    id="top"
    style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    {/* Background image */}
    <div
      style={{
        position: "absolute",
        inset: 0,
    backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663624260546/TxuUQMhKJTXoetVgKBTRwK/hero_forest_fire-MjFpdKbaDeHYMoiAWWGeGL.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        filter: "brightness(0.75)",
      }}
    />
    {/* Gradient overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(20,38,20,0.3) 0%, rgba(20,38,20,0.1) 50%, rgba(20,38,20,0.8) 100%)",
      }}
    />

    {/* Content */}
    <div style={{ position: "relative", textAlign: "center", padding: "0 1.5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Logo with pine trees – large, above fire */}
      <div style={{ marginBottom: "0.5rem" }}>
        <svg width="110" height="110" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left small tree */}
          <line x1="28" y1="100" x2="28" y2="60" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
          <polyline points="28,60 18,78 38,78" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="28,50 16,70 40,70" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="28,40 20,58 36,58" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="28,30 22,46 34,46" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          {/* Center tall tree */}
          <line x1="60" y1="100" x2="60" y2="45" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
          <polyline points="60,45 46,68 74,68" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="60,33 44,58 76,58" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="60,22 46,46 74,46" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="60,12 48,34 72,34" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          {/* Right small tree */}
          <line x1="92" y1="100" x2="92" y2="60" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
          <polyline points="92,60 82,78 102,78" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="92,50 80,70 104,70" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="92,40 84,58 100,58" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="92,30 86,46 98,46" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.0,
          letterSpacing: "0.1em",
          marginBottom: "0.4rem",
          textShadow: "0 2px 40px rgba(0,0,0,0.8)",
        }}
      >
        PUŠYNAI
      </h1>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.45em",
          color: "#5d8a52",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
        }}
      >
        FOOD ON FIRE
      </div>
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          color: "rgba(240,235,224,0.75)",
          maxWidth: "480px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.75,
          textShadow: "0 1px 12px rgba(0,0,0,0.9)",
        }}
      >
        Surinkę prisiminimus iš praeities, juos įprasminome čia,<br />
        tarp šnabždančių pušų ir rusenančios ugnies.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a
          href="#menu"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.85rem 2.5rem",
            background: "#5d8a52",
            color: "#1a2e1a",
            fontWeight: 600,
            transition: "all 0.25s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#6da060"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#5d8a52"; }}
        >
          Peržiūrėti meniu
        </a>
        <a
          href="#kontaktai"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.85rem 2.5rem",
            border: "1px solid rgba(240, 235, 224, 0.4)",
            color: "#ffffff",
            transition: "all 0.25s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#5d8a52"; e.currentTarget.style.color = "#5d8a52"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(240, 235, 224, 0.4)"; e.currentTarget.style.color = "#ffffff"; }}
        >
          Kontaktai
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div
      style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        color: "rgba(240, 235, 224, 0.4)",
        animation: "bounce 2s infinite",
      }}
    >
      <ChevronDown size={20} />
    </div>
  </section>
);

// ─── Menu Section ─────────────────────────────────────────────────────────────
type MenuItem = { name: string; price?: string | number; desc?: string };
type MenuCategory = { title: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    title: "Sriubos",
    items: [
      { name: "Šefo sriuba", price: "5,5" },
      { name: "Šaltibarščiai, gruzdintos skiltelės", price: "6" },
    ],
  },
  {
    title: "Užkandžiai",
    items: [
      { name: "Silpnai sūdyta silkė, grill marinuoti svogūnai, jaunos bulvės, obuoliai, laiškinio česnako aliejus", price: "13" },
      { name: "Kiaulienos liežuvis, jaunos bulvytės, krienų padažas, svogūnai, grąžgarstės", price: "13" },
      { name: "Jautienos tartaras, šalotinis svogūnas, laiškinis svogūnas, kiaušinio trynys", price: "17" },
      { name: "Kepta duona, sūrio ir totoriškas padažai", price: "9" },
    ],
  },
  {
    title: "Picos",
    items: [
      { name: "Prosciutto crudo", price: "14" },
      { name: "Grybų ir šoninės", price: "12" },
      { name: "Chorizo", price: "12" },
      { name: "Margheritta", price: "11" },
    ],
  },
  {
    title: "Grill patiekalai",
    items: [
      { name: "Kiaulienos sprandinės šašlykas žolelių marinate", price: "13" },
      { name: "Vištienos kumpelių šašlykas jogurtiniame marinate", price: "13" },
      { name: "Jautienos išpjova 200 g", price: "34" },
      { name: "Ėriuko rump steak šašlykas", price: "26" },
      { name: "Jautienos antrekotas (200g, 300g, 400g)", price: "16 eur/100g" },
      { name: "Dienos žuvis", price: "17" },
      { name: "Savojos kopūstas, žiedinio kopūsto tyrė, saulėje džiovintų pomidorų ir anakardžių salsa, marinuoti obuoliai", price: "16" },
    ],
  },
  {
    title: "Garnyrai",
    items: [
      { name: "Bulvių košė, kietasis sūris", price: "5,5" },
      { name: "Gruzdintos bulvytės", price: "4,5" },
      { name: "Ryžiai, žolelės, sviestas", price: "4,5" },
      { name: "Agurkų salotos, marinuoti svogūnai", price: "4,5" },
      { name: "Pomidorų salotos, grietinė", price: "5" },
      { name: "Marinuotos sezoninės daržovės", price: "5" },
      { name: "Grill daržovės, kietasis sūris", price: "6" },
    ],
  },
  {
    title: "Padažai",
    items: [
      { name: "Naminis pomidorų, totoriškas, krienų, bbq, Chimichurri", price: "" },
    ],
  },
  {
    title: "Desertai",
    items: [
      { name: "Šefo Tinginys", price: "5" },
      { name: "Naminės varškės spurgytės, karamelė, riešutai", price: "9" },
      { name: "Vaniliniai ledai su uogom", price: "3,5 / burbuliukas" },
    ],
  },
];

const wineData = [
  {
    title: "Vynas taurėmis",
    items: [
      { name: "Putojantis – ZONIN Prosecco Brut 1821 DOC", price: "7,5" },
      { name: "Baltas – Maori Bay Sauvignon Blanc", price: "8" },
      { name: "Baltas – Tenuta Ca'Bolani Pinot Grigio", price: "8" },
      { name: "Baltas – MASCOTA Vineyards Opi Chardonnay", price: "8,5" },
      { name: "Rožinis – Barton & Guestier Rose d'Anjou", price: "8" },
      { name: "Rožinis – Gerard Bertrand Gris Blanc", price: "8,5" },
      { name: "Raudonas – Vina Pomal Crianza", price: "8" },
      { name: "Raudonas – Masseria Altemura Sasseo Primitivo", price: "9" },
    ],
  },
  {
    title: "Šampanas",
    items: [
      { name: "VEUVE CLICQUOT Brut Yellow Label 37,5cl", price: "49" },
      { name: "VEUVE CLICQUOT Brut Yellow Label 75cl", price: "99" },
      { name: "VEUVE CLICQUOT Brut Rose 75cl", price: "109" },
      { name: "RUINART Blanc de Blancs", price: "179" },
      { name: "RUINART Rose Brut", price: "199" },
      { name: "Taittinger Brut Reserve", price: "89" },
      { name: "Taittinger Prestige Rose Brut", price: "99" },
    ],
  },
  {
    title: "Putojantis vynas",
    items: [
      { name: "ZONIN Prosecco Brut 1821 DOC 75cl", price: "39" },
      { name: "ZONIN Prosecco Brut Rose 1821 75cl", price: "39" },
      { name: "SALASAR Carte Azur Brut Cremant De Limoux AOP 75cl", price: "47" },
    ],
  },
  {
    title: "Kokteiliai",
    items: [
      { name: "Aperol Spritz", price: "11" },
      { name: "Limoncello Spritz", price: "11" },
      { name: "Gin Tonic", price: "10" },
      { name: "Pink Gin Tonic", price: "10" },
      { name: "Cuba Libre", price: "10" },
      { name: "Old Fashioned", price: "12" },
      { name: "Negroni", price: "12" },
      { name: "Paloma", price: "12" },
      { name: "Margarita", price: "12" },
    ],
  },
  {
    title: "Pilstomas alus / sidras",
    items: [
      { name: "Carlsberg", price: "4,5 / 5,5" },
      { name: "Grimbergen Dubbel", price: "4,5 / 5,5" },
      { name: "Kronenbourg Blanc", price: "4,5 / 5,5" },
      { name: "Švyturio Ekstra", price: "4 / 5" },
      { name: "Bėganti Kopa", price: "5,5" },
      { name: "Somersby", price: "5,5" },
    ],
  },
  {
    title: "Gaivieji gėrimai",
    items: [
      { name: "Surgiva gazuotas / negazuotas vanduo", price: "3 / 5" },
      { name: "Coca Cola, Sprite, Fanta", price: "3,5" },
      { name: "Three Cents (Ginger Beer, Tonic Water, Pink Grapefruit Soda)", price: "3,5" },
      { name: "Kombucha Acala", price: "7 / 17" },
      { name: "PAGO sultys", price: "3,5" },
      { name: "Naminis limonadas", price: "4 / 9" },
      { name: "Gira", price: "4" },
    ],
  },
  {
    title: "Karštieji gėrimai",
    items: [
      { name: "Juoda kava", price: "4" },
      { name: "Espresso", price: "4" },
      { name: "Kava su pienu", price: "4,5" },
      { name: "Latte", price: "4,5" },
      { name: "Cappuccino", price: "4,5" },
      { name: "Flat white", price: "5,5" },
      { name: "Šalta kava", price: "5" },
      { name: "Kusmi arbata", price: "4" },
    ],
  },
];

type MenuTab = "maistas" | "gerimai";

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>("maistas");

  const tabStyle = (tab: MenuTab) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.8rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    padding: "0.6rem 2rem",
    border: "1px solid",
    borderColor: activeTab === tab ? "#5d8a52" : "rgba(93, 138, 82, 0.25)",
    color: activeTab === tab ? "#1a2e1a" : "#f0faf0",
    background: activeTab === tab ? "#5d8a52" : "transparent",
    cursor: "pointer",
    transition: "all 0.2s",
  });

  const currentData = activeTab === "maistas" ? menuData : wineData;

  return (
    <section id="menu" style={{ background: "#0d1f0d", padding: "6rem 0" }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", color: "#5d8a52", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Restorano
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#ffffff", fontWeight: 700, marginBottom: "1.5rem" }}>
            Meniu
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #5d8a52, transparent)", margin: "0 auto 2rem" }} />

          {/* Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0" }}>
            <button style={tabStyle("maistas")} onClick={() => setActiveTab("maistas")}>Maistas</button>
            <button style={tabStyle("gerimai")} onClick={() => setActiveTab("gerimai")}>Gėrimai</button>
          </div>
        </div>

        {/* Menu grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {currentData.map((category) => (
            <div
              key={category.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(93, 138, 82, 0.12)",
                padding: "1.75rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(93, 138, 82, 0.35)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(93, 138, 82, 0.12)"; }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(93, 138, 82, 0.2)",
                  letterSpacing: "0.02em",
                }}
              >
                {category.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {category.items.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#e8f5e8", lineHeight: 1.5, flex: 1 }}>
                      {item.name}
                    </span>
                    {item.price && (
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", color: "#5d8a52", fontWeight: 600, whiteSpace: "nowrap" }}>
                        {item.price} €
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

// ─── Reviews Section ──────────────────────────────────────────────────────────
const reviews = [
  {
    author: "Rasa K.",
    rating: 5,
    text: "Nuostabus restoranas! Maistas ant ugnies – tikrai nepakartojamas skonis. Atmosfera miške – magiška. Grįšime tikrai!",
    date: "2024",
  },
  {
    author: "Tomas M.",
    rating: 5,
    text: "Jautienos antrekotas buvo tobulas. Personalas labai draugiškas ir profesionalus. Rekomenduoju visiems!",
    date: "2024",
  },
  {
    author: "Laura P.",
    rating: 5,
    text: "Buvome Nidos filiale – vaizdas į pušyną, šviežias oras ir nuostabus maistas. Tikra patirtis, kurią prisiminsime ilgai.",
    date: "2024",
  },
  {
    author: "Marius S.",
    rating: 5,
    text: "Šefo sriuba ir gruzdintos bulvytės – paprastas, bet tobulas derinys. Kokteiliai irgi puikūs. Labai rekomenduoju!",
    date: "2024",
  },
  {
    author: "Eglė V.",
    rating: 5,
    text: "Vieta su siela. Jautienos tartaras buvo puikus, o Aperol Spritz – tobulas vasaros gėrimas. Tikrai grįšiu!",
    date: "2024",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: "#5d8a52", fontSize: "0.9rem" }}>★</span>
    ))}
  </div>
);

const ReviewsSection = () => (
  <section
    id="atsiliepimai"
    style={{
      background: "#0a1a0a",
      padding: "6rem 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative bg */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663624260546/TxuUQMhKJTXoetVgKBTRwK/grill_food-8ayKudVundHCQCX7sjAAbc.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.06,
      }}
    />
    <div className="container" style={{ position: "relative" }}>
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", color: "#5d8a52", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Svečių
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#ffffff", fontWeight: 700 }}>
          Atsiliepimai
        </h2>
        <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #5d8a52, transparent)", margin: "1.5rem auto 0" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(93, 138, 82, 0.1)",
              padding: "1.75rem",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(93, 138, 82, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(93, 138, 82, 0.1)";
            }}
          >
            <Stars count={r.rating} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#d8eed8", lineHeight: 1.7, margin: "1rem 0" }}>
              "{r.text}"
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "#ffffff", fontWeight: 600 }}>
                {r.author}
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#8fc48f" }}>
                {r.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Contacts Section ─────────────────────────────────────────────────────────
const vilniusHours = [
  { day: "Pirm", hours: "Uždaryta" },
  { day: "Ant", hours: "17:00 – 22:00" },
  { day: "Tre", hours: "17:00 – 22:00" },
  { day: "Ketv", hours: "17:00 – 22:00" },
  { day: "Pen", hours: "17:00 – 22:00" },
  { day: "Šeš", hours: "12:00 – 22:00" },
  { day: "Sekm", hours: "12:00 – 20:00" },
];

const nidaHours = [
  { day: "Pirm", hours: "12:00 – 20:00" },
  { day: "Ant", hours: "12:00 – 20:00" },
  { day: "Tre", hours: "12:00 – 20:00" },
  { day: "Ketv", hours: "12:00 – 20:00" },
  { day: "Pen", hours: "12:00 – 20:00" },
  { day: "Šeš", hours: "12:00 – 20:00" },
  { day: "Sekm", hours: "12:00 – 18:00" },
];

// Get current day in Vilnius timezone
function getTodayVilnius(): number {
  const now = new Date();
  const vilniusTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Vilnius" }));
  return vilniusTime.getDay(); // 0=Sun, 1=Mon...
}

const ContactsSection = () => {
  const todayVilnius = getTodayVilnius();
  // Map JS day (0=Sun) to our array index (0=Mon)
  const vilniusDayIndex = todayVilnius === 0 ? 6 : todayVilnius - 1;

  return (
    <section
      id="kontaktai"
      style={{
        background: "#0d1f0d",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      {/* Nida bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663624260546/TxuUQMhKJTXoetVgKBTRwK/nida_bg-h29bQo45ifhMRkXYTuJwMW.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.07,
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", color: "#5d8a52", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Raskite mus
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#ffffff", fontWeight: 700 }}>
            Kontaktai
          </h2>
          <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #5d8a52, transparent)", margin: "1.5rem auto 0" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Vilnius */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(93, 138, 82, 0.15)",
              padding: "2.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <MapPin size={18} style={{ color: "#5d8a52", flexShrink: 0 }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#ffffff", fontWeight: 700 }}>
                Vilnius
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <a
                href="tel:+37068700909"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#e8f5e8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e8f5e8")}
              >
                <Phone size={15} style={{ color: "#5d8a52" }} />
                +370 687 00909
              </a>
              <a
                href="mailto:rezervacijos@pusynaifoodonfire.lt"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#e8f5e8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", transition: "color 0.2s", wordBreak: "break-all" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e8f5e8")}
              >
                <Mail size={15} style={{ color: "#5d8a52", flexShrink: 0 }} />
                rezervacijos@pusynaifoodonfire.lt
              </a>
              <a
                href="https://maps.google.com/?q=Vilnius+Pusynai+Food+On+Fire"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#e8f5e8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e8f5e8")}
              >
                <MapPin size={15} style={{ color: "#5d8a52" }} />
                Rodyti žemėlapyje
              </a>
            </div>

            <div style={{ borderTop: "1px solid rgba(93, 138, 82, 0.15)", paddingTop: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <Clock size={14} style={{ color: "#5d8a52" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#8fc48f", textTransform: "uppercase" }}>
                  Darbo valandos
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {vilniusHours.map((h, i) => (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.3rem 0.5rem",
                      background: i === vilniusDayIndex ? "rgba(93, 138, 82, 0.1)" : "transparent",
                      borderLeft: i === vilniusDayIndex ? "2px solid #5d8a52" : "2px solid transparent",
                    }}
                  >
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: i === vilniusDayIndex ? "#ffffff" : "#8fc48f", fontWeight: i === vilniusDayIndex ? 500 : 400 }}>
                      {h.day}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: h.hours === "Uždaryta" ? "#5a8a5a" : (i === vilniusDayIndex ? "#5d8a52" : "#d8eed8") }}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div style={{ marginTop: "1.75rem", display: "flex", gap: "1rem" }}>
              <a
                href="https://www.instagram.com/pusynaifoodonfire"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#8fc48f", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8fc48f")}
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/pusynaifoodonfire"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#8fc48f", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8fc48f")}
              >
                <Facebook size={16} />
                Facebook
              </a>
            </div>
          </div>

          {/* Nida */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(93, 138, 82, 0.15)",
              padding: "2.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <MapPin size={18} style={{ color: "#5d8a52", flexShrink: 0 }} />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#ffffff", fontWeight: 700 }}>
                Nida
              </h3>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#e8f5e8", marginBottom: "0.5rem" }}>
                Naglių g. 18, Nida
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <a
                href="tel:+37060977069"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#e8f5e8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e8f5e8")}
              >
                <Phone size={15} style={{ color: "#5d8a52" }} />
                +370 609 77069
              </a>
              <a
                href="https://maps.google.com/?q=Naglių+g.+18,+Nida"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#e8f5e8", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#e8f5e8")}
              >
                <MapPin size={15} style={{ color: "#5d8a52" }} />
                Rodyti žemėlapyje
              </a>
            </div>

            <div style={{ borderTop: "1px solid rgba(93, 138, 82, 0.15)", paddingTop: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <Clock size={14} style={{ color: "#5d8a52" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#8fc48f", textTransform: "uppercase" }}>
                  Darbo valandos
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {nidaHours.map((h, i) => (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.3rem 0.5rem",
                      background: i === vilniusDayIndex ? "rgba(93, 138, 82, 0.1)" : "transparent",
                      borderLeft: i === vilniusDayIndex ? "2px solid #5d8a52" : "2px solid transparent",
                    }}
                  >
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: i === vilniusDayIndex ? "#ffffff" : "#8fc48f", fontWeight: i === vilniusDayIndex ? 500 : 400 }}>
                      {h.day}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: h.hours === "Uždaryta" ? "#5a8a5a" : (i === vilniusDayIndex ? "#5d8a52" : "#d8eed8") }}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#5a8a5a", marginTop: "1rem", fontStyle: "italic" }}>
                * Sezoninės darbo valandos gali keistis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer
    style={{
      background: "#080f08",
      borderTop: "1px solid rgba(93, 138, 82, 0.1)",
      padding: "2.5rem 0",
    }}
  >
    <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <PineTreesLogo />
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.1em" }}>
            PUŠYNAI
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.55rem", color: "#5d8a52", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            FOOD ON FIRE
          </div>
        </div>
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#5a8a5a" }}>
        © {new Date().getFullYear()} Pušynai Food On Fire. Visos teisės saugomos.
      </p>
      <div style={{ display: "flex", gap: "1.25rem" }}>
        <a href="https://www.instagram.com/pusynaifoodonfire" target="_blank" rel="noopener noreferrer" style={{ color: "#5a8a5a", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#5a8a5a")}>
          <Instagram size={18} />
        </a>
        <a href="https://www.facebook.com/pusynaifoodonfire" target="_blank" rel="noopener noreferrer" style={{ color: "#5a8a5a", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#5d8a52")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#5a8a5a")}>
          <Facebook size={18} />
        </a>
      </div>
    </div>
  </footer>
);

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: "#0d1f0d", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <MenuSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
