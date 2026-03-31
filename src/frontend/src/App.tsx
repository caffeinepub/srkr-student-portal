import EventsPage from "@/components/EventsPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calendar,
  CreditCard,
  ExternalLink,
  Globe,
  GraduationCap,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Timetable", href: "https://srkrec.edu.in/timetables.php" },
  { label: "Results", href: "https://srkrexams.in/login.aspx" },
  { label: "Placements", href: "https://srkrec.edu.in/placements_home.php" },
  { label: "Fee Payment", href: "https://srkrec.edu.in/fee_payment.php" },
  { label: "Events", href: "#events" },
];

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconGradient: string;
  link: string;
  comingSoon?: boolean;
  buttonLabel: string;
  accentColor: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "timetable",
    title: "Timetable",
    description: "Access your class schedules and timetables",
    icon: <Calendar className="w-6 h-6 text-white" />,
    iconGradient: "from-[oklch(58%_0.24_295)] to-[oklch(72%_0.2_270)]",
    accentColor: "oklch(58%_0.24_295)",
    link: "https://srkrec.edu.in/timetables.php",
    buttonLabel: "View Timetable",
  },
  {
    id: "exam-results",
    title: "Exam Results",
    description: "Check your exam results and academic performance",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    iconGradient: "from-[oklch(55%_0.25_230)] to-[oklch(70%_0.2_210)]",
    accentColor: "oklch(55%_0.25_230)",
    link: "https://srkrexams.in/login.aspx",
    buttonLabel: "Check Results",
  },
  {
    id: "placements",
    title: "Placements & Internships",
    description:
      "Explore placement drives, internship opportunities and updates",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    iconGradient: "from-[oklch(68%_0.2_42)] to-[oklch(75%_0.18_55)]",
    accentColor: "oklch(68%_0.2_42)",
    link: "https://srkrec.edu.in/placements_home.php",
    buttonLabel: "Explore Placements",
  },
  {
    id: "events",
    title: "Event Info",
    description: "Stay updated with college events and activities",
    icon: <Star className="w-6 h-6 text-white" />,
    iconGradient: "from-[oklch(70%_0.18_355)] to-[oklch(62%_0.22_330)]",
    accentColor: "oklch(70%_0.18_355)",
    link: "#",
    buttonLabel: "Explore Events",
  },
  {
    id: "fee-payment",
    title: "Fee Payment",
    description: "Pay your college fees quickly and securely online",
    icon: <CreditCard className="w-6 h-6 text-white" />,
    iconGradient: "from-[oklch(65%_0.22_160)] to-[oklch(74%_0.18_175)]",
    accentColor: "oklch(65%_0.22_160)",
    link: "https://srkrec.edu.in/fee_payment.php",
    buttonLabel: "Pay Fees",
  },
  {
    id: "grievance",
    title: "Grievance Portal",
    description: "Submit and track your grievances and complaints",
    icon: <Shield className="w-6 h-6 text-white" />,
    iconGradient: "from-[oklch(82%_0.17_200)] to-[oklch(68%_0.22_215)]",
    accentColor: "oklch(82%_0.17_200)",
    link: "https://srkrec.edu.in/grievance/index.php",
    buttonLabel: "Submit Grievance",
  },
];

function Header({ onEvents }: { onEvents?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white text-black shadow-lg border-b border-gray-200">
      {/* Glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(58%_0.24_295)] to-transparent opacity-80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(58%_0.24_295)] to-[oklch(82%_0.17_200)] flex items-center justify-center flex-shrink-0 shadow-glow">
              <span className="text-xs font-bold text-white tracking-tight">
                SRKR
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm leading-tight font-display text-black">
                SRKR Engineering College
              </p>
              <p className="text-xs text-gray-600 leading-tight">
                Student Portal
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            data-ocid="nav.section"
          >
            {NAV_LINKS.map((link) => {
              if (link.label === "Events" && onEvents) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={onEvents}
                    className="px-3 py-1.5 text-sm font-medium text-black hover:text-black hover:bg-gray-100 rounded-md transition-all duration-100"
                    data-ocid="nav.events.link"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="px-3 py-1.5 text-sm font-medium text-black hover:text-black hover:bg-gray-100 rounded-md transition-all duration-100"
                  data-ocid={`nav.${link.label.toLowerCase().replace(" ", "-")}.link`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            data-ocid="nav.mobile_menu.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className="md:hidden pb-4 border-t border-gray-200 pt-2 overflow-hidden"
            >
              {NAV_LINKS.map((link) => {
                if (link.label === "Events" && onEvents) {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => {
                        setMobileOpen(false);
                        onEvents();
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-black hover:text-black hover:bg-gray-100 rounded-md"
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block px-3 py-2 text-sm text-black hover:text-black hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="hero-gradient text-white py-16 sm:py-20 lg:py-24"
      id="dashboard"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6"
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="pulse-ring-dot absolute inline-flex w-full h-full rounded-full bg-[oklch(82%_0.17_200)] opacity-75" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[oklch(82%_0.17_200)]" />
              </span>
              <span className="font-medium">
                NAAC A+ Accredited Institution
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 font-display"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            >
              Your Academic Hub,{" "}
              <span className="shimmer-text">All in One Place</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-white/80 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            >
              Access timetables, results, placements, fee payment, events, and
              more — all from one unified dashboard.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-[oklch(58%_0.24_295)] to-[oklch(65%_0.22_270)] hover:from-[oklch(62%_0.24_295)] hover:to-[oklch(70%_0.22_270)] text-white font-semibold px-8 py-3 rounded-lg shadow-glow transition-all duration-150 border-0"
                data-ocid="hero.explore_portal.button"
              >
                <a href="#features">
                  <Zap className="w-4 h-4 mr-2" />
                  Explore Portal
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 font-semibold px-8 py-3 rounded-lg transition-all duration-150"
                data-ocid="hero.visit_website.button"
              >
                <a
                  href="https://srkrec.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit SRKR Website
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right illustration */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(58%_0.24_295)]/30 to-[oklch(82%_0.17_200)]/20 rounded-2xl blur-3xl scale-110" />
              <img
                src="/assets/generated/srkr-hero-illustration.dim_600x400.png"
                alt="SRKR Campus"
                className="hero-float relative rounded-2xl w-full object-cover shadow-2xl border border-white/15"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCardItem({
  card,
  index,
  onEvents,
}: { card: FeatureCard; index: number; onEvents?: () => void }) {
  const content = (
    <motion.div
      className={`bg-card rounded-xl p-6 card-shadow card-top-strip flex flex-col h-full transition-all duration-150 ${
        card.comingSoon
          ? "opacity-60 cursor-default"
          : "card-glow-hover cursor-pointer group"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      whileHover={card.comingSoon ? undefined : { scale: 1.025 }}
      data-ocid={`features.${card.id}.card`}
    >
      {/* Icon badge */}
      <div
        className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.iconGradient} flex items-center justify-center mb-4 flex-shrink-0 transition-all duration-150 group-hover:shadow-glow`}
      >
        {card.icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base text-foreground font-display">
            {card.title}
          </h3>
          {card.comingSoon && (
            <Badge
              variant="secondary"
              className="text-xs bg-muted text-muted-foreground shrink-0"
              data-ocid={`features.${card.id}.coming_soon`}
            >
              Coming Soon
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Action */}
      <div className="mt-5 pt-4 border-t border-border">
        {card.comingSoon ? (
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
            <Star className="w-4 h-4" />
            Link coming soon
          </span>
        ) : (
          <span
            className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-100"
            style={{ color: card.accentColor }}
          >
            {card.buttonLabel}
            <ExternalLink className="w-4 h-4" />
          </span>
        )}
      </div>
    </motion.div>
  );

  if (card.comingSoon) return content;

  if (card.id === "events" && onEvents) {
    return (
      <button
        type="button"
        onClick={onEvents}
        className="no-underline block h-full w-full text-left bg-transparent border-none p-0"
        data-ocid="features.events.button"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block h-full"
      data-ocid={`features.${card.id}.link`}
    >
      {content}
    </a>
  );
}

function FeaturesSection({ onEvents }: { onEvents?: () => void }) {
  return (
    <section className="py-16 sm:py-20 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 font-display">
            Student Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need, organized and accessible from one place.
          </p>
          <div className="gradient-divider w-20 mx-auto mt-5" />
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="features.list"
        >
          {FEATURE_CARDS.map((card, i) => (
            <FeatureCardItem
              key={card.id}
              card={card}
              index={i}
              onEvents={onEvents}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    {
      label: "Years of Excellence",
      value: "45+",
      gradient: "from-[oklch(58%_0.24_295)] to-[oklch(72%_0.2_270)]",
    },
    {
      label: "NAAC Grade",
      value: "A+",
      gradient: "from-[oklch(82%_0.17_200)] to-[oklch(68%_0.22_215)]",
    },
    {
      label: "Placement Offers 2025",
      value: "1800+",
      gradient: "from-[oklch(72%_0.19_42)] to-[oklch(76%_0.18_55)]",
    },
    {
      label: "NBA Accredited Programs",
      value: "6",
      gradient: "from-[oklch(70%_0.18_355)] to-[oklch(62%_0.22_330)]",
    },
  ];

  return (
    <div className="stats-gradient text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
            >
              <p
                className={`text-2xl sm:text-3xl font-extrabold font-display bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
              </p>
              <p className="text-sm text-white/75 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-gradient text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(58%_0.24_295)] to-[oklch(82%_0.17_200)] flex items-center justify-center shadow-glow">
                <span className="text-xs font-bold text-white">SRKR</span>
              </div>
              <div>
                <p className="font-bold text-sm font-display">
                  SRKR Engineering College
                </p>
                <p className="text-xs text-white/60">(Autonomous)</p>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Sagi Rama Krishnam Raju Engineering College (Autonomous) —
              empowering students through technical education since 1980.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-4 font-display bg-gradient-to-r from-[oklch(72%_0.19_42)] to-[oklch(82%_0.17_200)] bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FEATURE_CARDS.filter((c) => !c.comingSoon).map((card) => (
                <li key={card.id}>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group"
                    data-ocid={`footer.${card.id}.link`}
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {card.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 font-display bg-gradient-to-r from-[oklch(72%_0.19_42)] to-[oklch(82%_0.17_200)] bg-clip-text text-transparent">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[oklch(72%_0.19_42)]" />
                <span>SRKR Marg, China Amiram, Bhimavaram, A.P - 534204</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0 text-[oklch(82%_0.17_200)]" />
                <span>+91 (8816) 223332</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Globe className="w-4 h-4 shrink-0 text-[oklch(72%_0.19_42)]" />
                <a
                  href="https://srkrec.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  srkrec.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} SRKR Engineering College. All Rights
            Reserved.
          </p>
          <p>
            Built with <span className="text-[oklch(72%_0.19_42)]">♥</span>
            {" using "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [view, setView] = useState<"home" | "events">("home");

  return (
    <AnimatePresence mode="wait">
      {view === "events" ? (
        <motion.div
          key="events"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <EventsPage onBack={() => setView("home")} />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="min-h-screen flex flex-col bg-background"
        >
          <Header onEvents={() => setView("events")} />
          <main className="flex-1">
            <HeroSection />
            <StatsBar />
            <FeaturesSection onEvents={() => setView("events")} />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
