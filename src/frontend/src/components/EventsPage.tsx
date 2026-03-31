import {
  ArrowLeft,
  Calendar,
  Clock,
  Cpu,
  MapPin,
  PartyPopper,
  Search,
  Star,
  UserCheck,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface EventData {
  name: string;
  date: string;
  category: "tech" | "non-tech";
  icon: string;
}

const ALL_EVENTS: EventData[] = [
  { name: "Prajwalan", date: "24-06-2026", category: "non-tech", icon: "🔥" },
  { name: "AI Event", date: "22-06-2026", category: "tech", icon: "🤖" },
  {
    name: "Working Professional",
    date: "22-06-2026",
    category: "non-tech",
    icon: "💼",
  },
  {
    name: "Search & Info Fest",
    date: "22-06-2026",
    category: "tech",
    icon: "🔍",
  },
];

interface EventsPageProps {
  onBack: () => void;
}

function EventCard({
  event,
  index,
  onEventClick,
}: {
  event: EventData;
  index: number;
  onEventClick: (event: EventData) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onEventClick(event)}
      data-ocid={`events.item.${index + 1}`}
      style={{
        display: "flex",
        alignItems: "center",
        margin: "12px 16px",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        border: hovered
          ? "1.5px solid oklch(82% 0.17 200 / 0.5)"
          : "1.5px solid oklch(58% 0.24 295 / 0.2)",
        background: hovered
          ? "linear-gradient(135deg, oklch(35% 0.18 295), oklch(45% 0.22 220), oklch(38% 0.2 200))"
          : "linear-gradient(135deg, oklch(20% 0.07 290), oklch(22% 0.08 280))",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: hovered
          ? "0 8px 32px oklch(58% 0.24 295 / 0.35), 0 2px 8px oklch(82% 0.17 200 / 0.2)"
          : "0 2px 8px oklch(13% 0.09 300 / 0.4)",
        transform: hovered
          ? "translateY(-2px) scale(1.005)"
          : "translateY(0) scale(1)",
      }}
    >
      {/* Color strip / icon */}
      <div
        style={{
          width: 72,
          minWidth: 72,
          height: 90,
          background: hovered
            ? "linear-gradient(180deg, oklch(82% 0.17 200 / 0.3), oklch(58% 0.24 295 / 0.3))"
            : "linear-gradient(180deg, oklch(58% 0.24 295 / 0.25), oklch(40% 0.18 295 / 0.15))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          flexShrink: 0,
          borderRight: `1px solid ${
            hovered ? "oklch(82% 0.17 200 / 0.3)" : "oklch(58% 0.24 295 / 0.15)"
          }`,
          transition: "all 0.35s ease",
        }}
      >
        {event.icon}
      </div>

      {/* Text */}
      <div style={{ padding: "12px 20px", flex: 1 }}>
        <h3
          style={{
            margin: "0 0 5px 0",
            fontSize: 16,
            fontWeight: 700,
            color: hovered ? "oklch(96% 0.01 290)" : "oklch(88% 0.03 295)",
            fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
            transition: "color 0.25s ease",
            letterSpacing: "0.01em",
          }}
        >
          {event.name}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: hovered ? "oklch(82% 0.17 200)" : "oklch(65% 0.06 295)",
            transition: "color 0.25s ease",
            fontFamily: "'Figtree', system-ui, sans-serif",
          }}
        >
          📅 Scheduled on: {event.date}
        </p>
        <span
          style={{
            display: "inline-block",
            marginTop: 6,
            padding: "2px 10px",
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase" as const,
            background:
              event.category === "tech"
                ? "oklch(58% 0.24 295 / 0.25)"
                : "oklch(72% 0.19 42 / 0.25)",
            color:
              event.category === "tech"
                ? "oklch(82% 0.17 200)"
                : "oklch(80% 0.18 55)",
            border: `1px solid ${
              event.category === "tech"
                ? "oklch(58% 0.24 295 / 0.3)"
                : "oklch(72% 0.19 42 / 0.3)"
            }`,
          }}
        >
          {event.category}
        </span>
      </div>
    </motion.div>
  );
}

function EventSection({
  title,
  events,
  icon,
  delay = 0,
  onEventClick,
}: {
  title: string;
  events: EventData[];
  icon: React.ReactNode;
  delay?: number;
  onEventClick: (event: EventData) => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{
        background:
          "linear-gradient(135deg, oklch(17% 0.07 295), oklch(19% 0.08 285))",
        borderRadius: 20,
        overflow: "hidden",
        border: "1.5px solid oklch(58% 0.24 295 / 0.2)",
        boxShadow: "0 8px 32px oklch(13% 0.09 300 / 0.5)",
        marginBottom: 32,
      }}
    >
      {/* Section header */}
      <div
        style={{
          background:
            "linear-gradient(90deg, oklch(22% 0.12 295), oklch(20% 0.1 275), oklch(22% 0.11 255))",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: "1.5px solid oklch(58% 0.24 295 / 0.25)",
        }}
      >
        <span style={{ fontSize: 20 }}>{icon}</span>
        <h2
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 800,
            fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
            background:
              "linear-gradient(90deg, oklch(82% 0.17 200), oklch(72% 0.19 42))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.03em",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            marginLeft: "auto",
            padding: "3px 10px",
            borderRadius: 20,
            background: "oklch(58% 0.24 295 / 0.25)",
            color: "oklch(82% 0.17 200)",
            fontSize: 12,
            fontWeight: 600,
            border: "1px solid oklch(58% 0.24 295 / 0.3)",
          }}
        >
          {events.length} events
        </div>
      </div>

      {/* Events list */}
      <div style={{ padding: "8px 0", maxHeight: 360, overflowY: "auto" }}>
        <AnimatePresence>
          {events.length > 0 ? (
            events.map((event, i) => (
              <EventCard
                key={event.name}
                event={event}
                index={i}
                onEventClick={onEventClick}
              />
            ))
          ) : (
            <div
              style={{
                padding: "40px 24px",
                textAlign: "center",
                color: "oklch(55% 0.06 295)",
                fontFamily: "'Figtree', system-ui, sans-serif",
              }}
              data-ocid="events.empty_state"
            >
              No events found matching your search.
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function EventDetailPage({
  event,
  onBack,
}: {
  event: EventData;
  onBack: () => void;
}) {
  const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(event.name)}/1200/400`;

  const highlights = [
    "Expert speakers and practitioners from top tech companies",
    "Live demonstrations and hands-on workshops",
    "Certificate of participation for all attendees",
    "Exciting prizes and networking opportunities",
  ];

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 80 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background:
          "linear-gradient(135deg, oklch(11% 0.05 300) 0%, oklch(14% 0.08 285) 50%, oklch(12% 0.06 310) 100%)",
        minHeight: "100vh",
        fontFamily: "'Figtree', Verdana, sans-serif",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "linear-gradient(90deg, oklch(15% 0.1 300), oklch(18% 0.12 280), oklch(15% 0.1 295))",
          borderBottom: "1.5px solid oklch(58% 0.24 295 / 0.3)",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          position: "sticky" as const,
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 24px oklch(13% 0.09 300 / 0.6)",
        }}
      >
        <button
          type="button"
          onClick={onBack}
          style={{
            background: "oklch(58% 0.24 295 / 0.15)",
            border: "1.5px solid oklch(58% 0.24 295 / 0.4)",
            color: "oklch(82% 0.17 200)",
            borderRadius: 22,
            padding: "8px 20px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.25s ease",
            fontFamily: "'Figtree', sans-serif",
          }}
          data-ocid="event_detail.back.button"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "oklch(58% 0.24 295 / 0.3)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 0 16px oklch(58% 0.24 295 / 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "oklch(58% 0.24 295 / 0.15)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
          }}
        >
          <ArrowLeft size={16} />
          Back to Events
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "oklch(90% 0.04 295)",
            fontWeight: 700,
            fontSize: 18,
            fontFamily: "'Bricolage Grotesque', cursive",
          }}
        >
          <span style={{ fontSize: 20 }}>{event.icon}</span>
          {event.name}
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        style={{
          width: "100%",
          height: 420,
          overflow: "hidden",
          position: "relative",
        }}
        data-ocid="event_detail.card"
      >
        <img
          src={imageUrl}
          alt={event.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, oklch(11% 0.05 300 / 0.85) 100%)",
          }}
        />
        {/* Event name overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 40,
            right: 40,
          }}
        >
          <span
            style={{
              display: "inline-block",
              marginBottom: 10,
              padding: "3px 14px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              background:
                event.category === "tech"
                  ? "oklch(58% 0.24 295 / 0.4)"
                  : "oklch(72% 0.19 42 / 0.4)",
              color:
                event.category === "tech"
                  ? "oklch(82% 0.17 200)"
                  : "oklch(80% 0.18 55)",
              border: `1px solid ${
                event.category === "tech"
                  ? "oklch(82% 0.17 200 / 0.4)"
                  : "oklch(80% 0.18 55 / 0.4)"
              }`,
              backdropFilter: "blur(8px)",
            }}
          >
            {event.category}
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 42,
              fontWeight: 900,
              fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
              background:
                "linear-gradient(90deg, oklch(95% 0.01 290), oklch(82% 0.17 200))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              textShadow: "none",
              filter: "drop-shadow(0 2px 12px oklch(13% 0.09 300 / 0.8))",
            }}
          >
            {event.name}
          </h1>
        </div>
      </motion.div>

      {/* Content */}
      <div
        style={{ maxWidth: 860, margin: "0 auto", padding: "40px 32px 60px" }}
      >
        {/* Information Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(135deg, oklch(17% 0.07 295), oklch(19% 0.08 285))",
            borderRadius: 20,
            border: "1.5px solid oklch(58% 0.24 295 / 0.2)",
            boxShadow: "0 8px 32px oklch(13% 0.09 300 / 0.5)",
            marginBottom: 32,
            overflow: "hidden",
          }}
          data-ocid="event_detail.panel"
        >
          {/* Section header */}
          <div
            style={{
              background:
                "linear-gradient(90deg, oklch(22% 0.12 295), oklch(20% 0.1 275), oklch(22% 0.11 255))",
              padding: "18px 28px",
              borderBottom: "1.5px solid oklch(58% 0.24 295 / 0.25)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Star size={18} style={{ color: "oklch(82% 0.17 200)" }} />
            <h2
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 800,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                background:
                  "linear-gradient(90deg, oklch(82% 0.17 200), oklch(72% 0.19 42))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.03em",
              }}
            >
              Event Information
            </h2>
          </div>

          <div style={{ padding: "28px" }}>
            <p
              style={{
                margin: "0 0 28px 0",
                fontSize: 15.5,
                lineHeight: 1.75,
                color: "oklch(78% 0.04 295)",
                fontFamily: "'Figtree', system-ui, sans-serif",
              }}
            >
              {event.name} is one of the most anticipated events at SRKR
              Engineering College, bringing together students, faculty, and
              industry professionals for an enriching and engaging experience.
              This event is designed to foster innovation, collaboration, and
              skill development among participants. Whether you're a seasoned
              participant or attending for the first time, this event promises
              to be an unforgettable journey filled with learning, excitement,
              and inspiration.
            </p>

            {/* Key Details */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  icon: <Calendar size={16} />,
                  label: "Date",
                  value: event.date,
                },
                {
                  icon: <MapPin size={16} />,
                  label: "Venue",
                  value: "SRKR Main Auditorium",
                },
                {
                  icon: <Clock size={16} />,
                  label: "Duration",
                  value: "2 Hours",
                },
                {
                  icon: <UserCheck size={16} />,
                  label: "Registration",
                  value: "Open",
                },
              ].map((detail) => (
                <div
                  key={detail.label}
                  style={{
                    background: "oklch(22% 0.08 290)",
                    borderRadius: 12,
                    padding: "14px 18px",
                    border: "1px solid oklch(58% 0.24 295 / 0.15)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: "oklch(72% 0.17 200)",
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    {detail.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase" as const,
                        color: "oklch(55% 0.1 295)",
                        marginBottom: 4,
                        fontFamily: "'Figtree', sans-serif",
                      }}
                    >
                      {detail.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "oklch(88% 0.04 295)",
                        fontFamily: "'Figtree', sans-serif",
                      }}
                    >
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Special Highlights Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1.5px solid oklch(82% 0.17 200 / 0.25)",
            boxShadow:
              "0 8px 40px oklch(58% 0.24 295 / 0.2), 0 0 0 1px oklch(82% 0.17 200 / 0.05)",
          }}
          data-ocid="event_detail.section"
        >
          {/* Header */}
          <div
            style={{
              background:
                "linear-gradient(135deg, oklch(28% 0.15 200), oklch(30% 0.18 230), oklch(26% 0.14 260))",
              padding: "20px 28px",
              borderBottom: "1.5px solid oklch(82% 0.17 200 / 0.2)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Zap size={18} style={{ color: "oklch(88% 0.2 55)" }} />
            <h2
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 800,
                fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                background:
                  "linear-gradient(90deg, oklch(88% 0.2 55), oklch(82% 0.17 200))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.03em",
              }}
            >
              ✨ Special Highlights
            </h2>
          </div>

          {/* Highlights body */}
          <div
            style={{
              background:
                "linear-gradient(135deg, oklch(18% 0.1 220 / 0.9), oklch(20% 0.12 240 / 0.95), oklch(17% 0.1 260 / 0.9))",
              padding: "28px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 16,
              }}
            >
              {highlights.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    background: "oklch(25% 0.12 230 / 0.5)",
                    border: "1px solid oklch(82% 0.17 200 / 0.15)",
                    borderRadius: 12,
                    padding: "16px 18px",
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      minWidth: 28,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, oklch(58% 0.24 295), oklch(72% 0.19 200))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 800,
                      color: "white",
                      fontFamily: "'Figtree', sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "oklch(84% 0.05 230)",
                      fontFamily: "'Figtree', system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default function EventsPage({ onBack }: EventsPageProps) {
  const [activeTab, setActiveTab] = useState<"all" | "tech" | "non-tech">(
    "all",
  );
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const filtered = ALL_EVENTS.filter((e) => {
    const matchesTab = activeTab === "all" || e.category === activeTab;
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs = [
    {
      key: "all" as const,
      label: "All Events",
      icon: <Star className="w-4 h-4" />,
    },
    {
      key: "tech" as const,
      label: "Tech Events",
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      key: "non-tech" as const,
      label: "Non-Tech Events",
      icon: <PartyPopper className="w-4 h-4" />,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {selectedEvent ? (
        <EventDetailPage
          key="detail"
          event={selectedEvent}
          onBack={() => setSelectedEvent(null)}
        />
      ) : (
        <motion.div
          key="list"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(135deg, oklch(11% 0.05 300) 0%, oklch(14% 0.08 285) 50%, oklch(12% 0.06 310) 100%)",
            minHeight: "100vh",
            fontFamily: "'Figtree', Verdana, sans-serif",
          }}
        >
          {/* Inject keyframes */}
          <style>{`
            @keyframes eMotion {
              0% { offset-distance: 0%; }
              85% { offset-distance: 100%; }
              92% { offset-distance: 85%; }
              100% { offset-distance: 100%; }
            }
            @keyframes vingoSlide {
              0% { transform: translateX(2000px); }
              80% { transform: translateX(-20px); }
              100% { transform: translate(-40px, -60px); }
            }
            @keyframes eventsGlow {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }
            ::-webkit-scrollbar { width: 6px; }
            ::-webkit-scrollbar-track { background: oklch(15% 0.06 300); }
            ::-webkit-scrollbar-thumb { background: oklch(40% 0.15 295); border-radius: 3px; }
          `}</style>

          {/* Nav Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background:
                "linear-gradient(90deg, oklch(15% 0.1 300), oklch(18% 0.12 280), oklch(15% 0.1 295))",
              borderBottom: "1.5px solid oklch(58% 0.24 295 / 0.3)",
              padding: "16px 32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap" as const,
              gap: 16,
              position: "sticky" as const,
              top: 0,
              zIndex: 50,
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px oklch(13% 0.09 300 / 0.6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <button
                type="button"
                onClick={onBack}
                style={{
                  background: "oklch(58% 0.24 295 / 0.15)",
                  border: "1.5px solid oklch(58% 0.24 295 / 0.4)",
                  color: "oklch(82% 0.17 200)",
                  borderRadius: 22,
                  padding: "8px 20px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.25s ease",
                  fontFamily: "'Figtree', sans-serif",
                }}
                data-ocid="events.back.button"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(58% 0.24 295 / 0.3)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 16px oklch(58% 0.24 295 / 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(58% 0.24 295 / 0.15)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "none";
                }}
              >
                <ArrowLeft size={16} />
                Back to Portal
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "oklch(90% 0.04 295)",
                  fontWeight: 700,
                  fontSize: 20,
                  fontFamily: "'Bricolage Grotesque', cursive",
                }}
              >
                <Zap size={20} style={{ color: "oklch(82% 0.17 200)" }} />
                Event Information
                <span style={{ fontSize: 18 }}>🔥</span>
              </div>
            </div>

            {/* Tab Buttons */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  data-ocid={`events.${
                    tab.key === "non-tech" ? "nontech" : tab.key
                  }.tab`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "9px 20px",
                    borderRadius: 22,
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: 14,
                    fontFamily: "'Figtree', sans-serif",
                    transition: "all 0.25s ease",
                    background:
                      activeTab === tab.key
                        ? "linear-gradient(135deg, oklch(58% 0.24 295), oklch(65% 0.22 265))"
                        : "oklch(22% 0.08 295)",
                    color:
                      activeTab === tab.key ? "white" : "oklch(70% 0.06 295)",
                    boxShadow:
                      activeTab === tab.key
                        ? "0 4px 16px oklch(58% 0.24 295 / 0.45)"
                        : "none",
                    transform:
                      activeTab === tab.key ? "translateY(-1px)" : "none",
                  }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.header>

          {/* Main Content */}
          <div style={{ padding: "0 32px 40px" }}>
            {/* EVINGO Animated Logo */}
            <div
              style={{
                height: 180,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: 96,
                  fontWeight: 900,
                  display: "flex",
                  letterSpacing: 8,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                <span
                  style={
                    {
                      background:
                        "linear-gradient(90deg, oklch(82% 0.17 200), oklch(58% 0.24 295), oklch(72% 0.19 42))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      offsetPath: 'path("M -400 -200 Q -150 -250 0 0")',
                      offsetDistance: "0%",
                      offsetRotate: "0deg",
                      animation:
                        "eMotion 2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                      filter: "drop-shadow(0 0 20px oklch(82% 0.17 200 / 0.5))",
                    } as React.CSSProperties
                  }
                >
                  E
                </span>
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(58% 0.24 295), oklch(82% 0.17 200), oklch(72% 0.19 42))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    transform: "translateX(2000px)",
                    animation: "vingoSlide 1s ease-out forwards",
                    animationDelay: "1.5s",
                    filter: "drop-shadow(0 0 20px oklch(58% 0.24 295 / 0.4))",
                  }}
                >
                  VINGO
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                maxWidth: 520,
                margin: "0 auto 40px",
                position: "relative",
              }}
            >
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "oklch(65% 0.1 295)",
                  pointerEvents: "none",
                }}
              />
              <input
                type="text"
                placeholder="Search for events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 20px 14px 50px",
                  borderRadius: 40,
                  fontSize: 15,
                  fontFamily: "'Figtree', sans-serif",
                  background: "oklch(18% 0.08 290)",
                  border: "1.5px solid oklch(58% 0.24 295 / 0.3)",
                  color: "oklch(90% 0.03 295)",
                  outline: "none",
                  boxSizing: "border-box" as const,
                  transition: "all 0.25s ease",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLInputElement).style.border =
                    "1.5px solid oklch(82% 0.17 200 / 0.7)";
                  (e.currentTarget as HTMLInputElement).style.boxShadow =
                    "0 0 0 4px oklch(58% 0.24 295 / 0.15)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLInputElement).style.border =
                    "1.5px solid oklch(58% 0.24 295 / 0.3)";
                  (e.currentTarget as HTMLInputElement).style.boxShadow =
                    "none";
                }}
                data-ocid="events.search_input"
              />
            </motion.div>

            {/* Event Sections */}
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <EventSection
                title="Ongoing Events"
                events={filtered}
                icon="⚡"
                delay={0.35}
                onEventClick={setSelectedEvent}
              />
              <EventSection
                title="Upcoming Events"
                events={filtered}
                icon="📅"
                delay={0.45}
                onEventClick={setSelectedEvent}
              />
              <EventSection
                title="Completed Events"
                events={filtered}
                icon="✅"
                delay={0.55}
                onEventClick={setSelectedEvent}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
