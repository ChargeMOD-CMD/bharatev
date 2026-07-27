import { useEffect, useRef, useState } from "react";
import { ChevronUp, X, Send, Bot, RotateCcw } from "lucide-react";

/* ─────────────────────────────────────────────
   BHARAT EV KNOWLEDGE BASE — rule-based AI engine
   ───────────────────────────────────────────── */

interface BotReply {
  text: string;
  followUp?: string;
}

type KBEntry = {
  patterns: RegExp[];
  reply: BotReply;
};

const knowledgeBase: KBEntry[] = [
  {
    patterns: [/\b(hi|hello|hey|namaste|hii|helo)\b/i],
    reply: {
      text: "Hello! 👋 Welcome to **Bharat EV** — India's fastest-growing EV charging network. I'm your AI assistant.\n\nI can help you with:\n• 🔌 Charger locations & availability\n• 💰 Pricing & plans\n• 🔧 Connector types (CCS2, Bharat DC, AC)\n• 🚛 Fleet & depot charging\n• 🤝 Hosting / partnership enquiries\n• 📞 Contact & support\n\nWhat would you like to know?",
    },
  },
  {
    patterns: [/charger.*(near|close|location|find|where)|where.*(charge|charger)|find.*station|nearest|locate/i],
    reply: {
      text: "📍 **Find a Charger Near You**\n\nBharat EV operates **480+ fast chargers** across **62 cities** in India, including:\n\n🟢 **Live corridors:** Delhi → Mumbai (NH-48), Bengaluru → Chennai, Pune → Hyderabad\n\n🏙️ **City hubs:** Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Ahmedabad, Jaipur\n\nFor real-time availability, use our app or visit the **Network** page on this site. All chargers show live status, queue time and power output.",
      followUp: "Would you like to know about connector types or pricing at our stations?",
    },
  },
  {
    patterns: [/\b(price|pricing|cost|rate|fee|charge|tariff|rupee|₹|rs\.?)\b/i],
    reply: {
      text: "💰 **Bharat EV Pricing**\n\n| Plan | Rate | Best For |\n|------|------|----------|\n| Pay-per-use | ₹12–18 / kWh | Occasional users |\n| Monthly Pass | ₹999 / month | Daily commuters |\n| Fleet Contract | Custom | Businesses & fleets |\n\n⚡ DC Fast Charging (60–150 kW): ₹15–18/kWh\n🔌 AC Charging (7–22 kW): ₹10–12/kWh\n\nSession fee: ₹10 flat (waived on monthly plans). No hidden charges. GST included.",
      followUp: "Want details on our Fleet or Partnership plans?",
    },
  },
  {
    patterns: [/\b(connector|plug|ccs|ccs2|bharat|type2|dc|ac|standard|compatible|socket)\b/i],
    reply: {
      text: "🔌 **Connector Standards at Bharat EV**\n\nAll our stations support multiple connector types:\n\n✅ **CCS2** — for most new EVs (Tata Nexon EV, MG ZS EV, Hyundai Ioniq 5, Kia EV6)\n✅ **Bharat DC-001** — Indian standard, for older EVs & 2W/3W\n✅ **Bharat AC-001** — Slow AC charging, 2-wheelers & some 4-wheelers\n✅ **Type-2 AC** — European standard EVs\n✅ **CHAdeMO** — Nissan Leaf & select Japanese models\n\nEvery Bharat EV hub has **at least 4 connector types** so you're never stuck regardless of your vehicle.",
    },
  },
  {
    patterns: [/\b(fleet|depot|bus|logistics|commercial|truck|van|company)\b/i],
    reply: {
      text: "🚛 **Fleet & Depot Charging Solutions**\n\nWe specialise in large-scale fleet electrification:\n\n🏭 **Depot installations**: Custom high-capacity charger banks (up to 1 MW sites)\n📊 **Fleet management software**: Real-time monitoring, scheduling & billing\n⚡ **Overnight batch charging**: Smart load balancing to minimise grid costs\n🚌 **Supported fleets**: E-buses, delivery vans, cab aggregators, logistics\n\n**Current fleet partners include** city bus corporations, leading e-commerce logistics firms and cab aggregators across India.\n\nInterested in a fleet proposal?",
      followUp: "I can connect you with our fleet team — type 'contact' for details.",
    },
  },
  {
    patterns: [/\b(partner|host|hosting|location|property|mall|hotel|office|highway plaza|fuel station)\b/i],
    reply: {
      text: "🤝 **Partner / Host a Charging Hub**\n\nOwn a commercial space? Let's electrify it together!\n\n**Ideal locations:**\n🏬 Malls & Retail centres\n🏨 Hotels & Resorts\n🏢 Office Parks\n⛽ Fuel Stations\n🛣️ Highway plazas\n🏘️ Residential towers\n\n**What you get:**\n✅ Zero capex — we install & operate\n✅ Revenue share on every charging session\n✅ 24/7 remote monitoring by our NOC\n✅ Branding at your location\n\nVisit the **Partners** page or contact us to start a conversation.",
    },
  },
  {
    patterns: [/\b(speed|fast|kw|kilowatt|time|how long|minutes|hours|charging speed|rapid)\b/i],
    reply: {
      text: "⚡ **Charging Speeds at Bharat EV**\n\n| Charger Type | Power | Typical Charge Time |\n|---|---|---|\n| DC Ultra-Fast | 150 kW | 15–25 min (10→80%) |\n| DC Fast | 60 kW | 30–45 min (10→80%) |\n| AC Fast | 22 kW | 2–3 hours (0→100%) |\n| AC Standard | 7.2 kW | 6–8 hours (0→100%) |\n\n🏆 Our highway corridors use **150 kW DC Ultra-Fast chargers** — enough to add ~200 km of range in 20 minutes on most modern EVs.",
    },
  },
  {
    patterns: [/\b(app|mobile|android|ios|download|qr|scan|pay|payment|upi|wallet)\b/i],
    reply: {
      text: "📱 **Bharat EV App & Payments**\n\n**Supported payment methods:**\n💳 UPI (GPay, PhonePe, Paytm, BHIM)\n💳 Credit / Debit cards (Visa, Mastercard, RuPay)\n🏦 Net Banking\n👛 Bharat EV Wallet (pre-load for instant charging)\n\n**App features:**\n• Live charger map with real-time availability\n• Queue booking (reserve your slot)\n• Session monitoring & history\n• Invoice download\n\n📲 Download on **Google Play** & **App Store** — search *Bharat EV Charge*.",
    },
  },
  {
    patterns: [/\b(uptime|reliability|working|down|broken|maintenance|support|24.?7|service)\b/i],
    reply: {
      text: "🟢 **Network Reliability & Support**\n\n✅ **99.2% uptime SLA** across our live network\n🔧 Remote diagnostics from our NOC (Network Operations Centre)\n🚗 On-ground response team at every major corridor within 4 hours\n📞 24/7 helpline: **1800-XXX-XXXX** (toll-free)\n💬 In-app chat support with < 2 min response during peak hours\n\nIf a charger is non-functional, our app auto-reroutes you to the next available unit within 5 km.",
    },
  },
  {
    patterns: [/\b(contact|email|phone|call|reach|talk|team|office|headquarters|hq|delhi|mumbai|bangalore|bengaluru)\b/i],
    reply: {
      text: "📞 **Contact Bharat EV**\n\n📧 **Email:** bhaaratev@gmail.com\n📱 **Phone:** +91 89012 22728\n🏢 **Offices:** New Delhi · Mumbai · Bengaluru\n\n💬 **WhatsApp:** Click the green WhatsApp button on this page for instant messaging!\n\n🌐 You can also fill in the **Contact form** (click *Contact* in the nav) and our team responds within 1 business day.",
    },
  },
  {
    patterns: [/\b(about|who|company|founded|team|mission|vision|story|bharat ev)\b/i],
    reply: {
      text: "🏭 **About Bharat EV**\n\nBharat EV is building **India's energy highway** — a nationwide network of fast, reliable EV charging infrastructure.\n\n🎯 **Mission:** Make EV charging as effortless as fuelling up, across every highway, city and fleet depot in India.\n\n📍 **Presence:** 480+ chargers · 62 cities · National highway corridors\n\n🔋 **Technology:** Indian-grid engineered hardware, CCS2 + Bharat standards, AI-driven load management\n\nWe're corridor-first, not parking-lot first — meaning we build where India moves.",
    },
  },
  {
    patterns: [/\b(government|scheme|subsidy|fame|evse|policy|incentive|ministry)\b/i],
    reply: {
      text: "🏛️ **Government & Policy**\n\nBharat EV aligns with India's EV charging ecosystem:\n\n✅ **FAME-II compliant** infrastructure\n✅ **BIS-certified** chargers (IS 17017)\n✅ Eligible for **state EV subsidies** in Maharashtra, Karnataka, Delhi & Tamil Nadu\n✅ Partnering with **NHAI** for highway corridor rollouts\n\nFor policy documentation or DISCOM coordination for your project, contact our business team at bhaaratev@gmail.com.",
    },
  },
  {
    patterns: [/\b(thank|thanks|great|awesome|perfect|ok|okay|cool|nice|good)\b/i],
    reply: {
      text: "You're welcome! ⚡ Is there anything else I can help you with about Bharat EV's charging network, pricing or partnership opportunities?",
    },
  },
  {
    patterns: [/\b(bye|goodbye|exit|quit|done|no thanks|that.?s all)\b/i],
    reply: {
      text: "Thanks for chatting with Bharat EV! 🚗⚡\n\nDrive electric, drive smart. If you need anything, we're always here. Have a great journey! 🇮🇳",
    },
  },
];

const SORRY_REPLY =
  "Sorry, I can only answer questions related to **Bharat EV** — our charging network, pricing, connectors, fleet solutions, partnerships or support. 🙏\n\nPlease ask me something about Bharat EV, or reach us directly:\n📧 bhaaratev@gmail.com\n📞 +91 89012 22728";

function getBotReply(input: string): string {
  const trimmed = input.trim();
  for (const entry of knowledgeBase) {
    if (entry.patterns.some((p) => p.test(trimmed))) {
      const { text, followUp } = entry.reply;
      return followUp ? `${text}\n\n💡 *${followUp}*` : text;
    }
  }
  return SORRY_REPLY;
}

/* ─────────────────────────────────────────────
   MESSAGE TYPES
   ───────────────────────────────────────────── */

interface Message {
  id: number;
  from: "user" | "bot";
  text: string;
  time: string;
}

function now() {
  return new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

/* ─────────────────────────────────────────────
   MARKDOWN-LITE RENDERER (bold, bullet, table)
   ───────────────────────────────────────────── */

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    // Table row
    if (line.includes("|")) {
      const cells = line.split("|").filter((c) => c.trim() && !/^[-\s|]+$/.test(c));
      if (cells.length > 0) {
        elements.push(
          <div key={i} className="flex gap-2 text-xs my-0.5">
            {cells.map((c, j) => (
              <span key={j} className="flex-1 text-gray-700 font-mono">
                {renderInline(c.trim())}
              </span>
            ))}
          </div>
        );
        return;
      }
    }
    // Bullet
    if (/^[•✅🟢🏭🔌⚡💳🏦👛📲🚌📊💬🔧🚗📞🏬🏨🏢⛽🛣️🏘️✅📱💳📧🏙️🏛️✅🎯🔋]/.test(line) || /^[-*]/.test(line)) {
      elements.push(
        <div key={i} className="flex gap-1.5 items-start my-0.5">
          <span className="text-[11px] leading-5">{line}</span>
        </div>
      );
      return;
    }
    // Empty line = spacer
    if (!line.trim()) {
      elements.push(<div key={i} className="h-1.5" />);
      return;
    }
    // Normal line
    elements.push(
      <p key={i} className="leading-snug">
        {renderInline(line)}
      </p>
    );
  });

  return <>{elements}</>;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i} className="text-gray-500">{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

/* ─────────────────────────────────────────────
   CHATBOT COMPONENT
   ───────────────────────────────────────────── */

function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Hello! 👋 I'm the **Bharat EV AI Assistant**. Ask me anything about our charging network, pricing, connectors, fleet solutions or partnerships!",
      time: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const [resetting, setResetting] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetChat = () => {
    setResetting(true);
    setInput("");
    setTyping(false);
    setTimeout(() => {
      setMessages([
        {
          id: Date.now(),
          from: "bot",
          text: "Chat reset! 🔄 Hello again! I'm the **Bharat EV AI Assistant**. How can I help you today?",
          time: now(),
        },
      ]);
      setResetting(false);
    }, 250);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setHasNew(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { id: Date.now(), from: "user", text, time: now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    const delay = 600 + Math.random() * 700;
    setTimeout(() => {
      const reply = getBotReply(text);
      const botMsg: Message = { id: Date.now() + 1, from: "bot", text: reply, time: now() };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);
      if (!open) setHasNew(true);
    }, delay);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat panel */}
      {open && (
        <div
          id="bharat-ev-chatbot-panel"
          className="chat-panel fixed z-50 flex flex-col overflow-hidden shadow-2xl
            bottom-0 left-0 right-0 rounded-t-2xl
            md:bottom-24 md:left-auto md:right-6 md:w-[380px] md:rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.98)",
            border: "1px solid rgba(31,158,40,0.2)",
            backdropFilter: "blur(20px)",
            height: "min(92dvh, 600px)",
          }}
        >
          {/* Mobile drag handle */}
          <div className="flex justify-center pt-2.5 pb-1 md:hidden">
            <div className="h-1 w-10 rounded-full bg-gray-300" />
          </div>

          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "linear-gradient(135deg, #1F9E28, #10306B)" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white leading-tight">Bharat EV AI</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
                  <span className="text-[10px] text-white/70 font-mono uppercase tracking-wider">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                id="chatbot-reset-btn"
                onClick={resetChat}
                disabled={resetting}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white/30 disabled:opacity-40"
                aria-label="Reset conversation"
                title="Reset conversation"
              >
                <RotateCcw className={`h-3.5 w-3.5 ${resetting ? "animate-spin" : ""}`} />
              </button>
              <button
                id="chatbot-close-btn"
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5" style={{ minHeight: 0 }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.from === "bot" && (
                  <div
                    className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg,#1F9E28,#10306B)" }}
                  >
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
                <div className="max-w-[78%]">
                  <div
                    className={`rounded-2xl px-3 py-2 text-[12.5px] leading-relaxed ${msg.from === "user"
                        ? "rounded-tr-sm text-white"
                        : "rounded-tl-sm bg-gray-50 text-gray-800"
                      }`}
                    style={
                      msg.from === "user"
                        ? { background: "linear-gradient(135deg,#1F9E28,#0f8520)" }
                        : { border: "1px solid rgba(31,158,40,0.12)" }
                    }
                  >
                    {msg.from === "bot" ? renderMarkdown(msg.text) : msg.text}
                  </div>
                  <p className="mt-0.5 px-1 text-[9px] text-gray-400">{msg.time}</p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start">
                <div
                  className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "linear-gradient(135deg,#1F9E28,#10306B)" }}
                >
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div
                  className="flex items-center gap-1 rounded-2xl rounded-tl-sm px-3 py-2.5"
                  style={{ background: "#f8f9fa", border: "1px solid rgba(31,158,40,0.12)" }}
                >
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-gray-400 [animation-delay:0.2s]" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-gray-400 [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick prompts */}
          <div className="px-3 pb-2 flex gap-1.5 overflow-x-auto scrollbar-hide">
            {["Charger locations", "Pricing", "Fleet solutions", "Contact"].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setInput(q);
                  setTimeout(() => {
                    setInput("");
                    const userMsg: Message = { id: Date.now(), from: "user", text: q, time: now() };
                    setMessages((m) => [...m, userMsg]);
                    setTyping(true);
                    setTimeout(() => {
                      const reply = getBotReply(q);
                      setMessages((m) => [...m, { id: Date.now() + 1, from: "bot", text: reply, time: now() }]);
                      setTyping(false);
                    }, 700);
                  }, 50);
                }}
                className="shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-colors hover:border-green-500 hover:text-green-700 whitespace-nowrap"
                style={{ borderColor: "rgba(31,158,40,0.3)", color: "#1F9E28" }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 border-t px-3 py-2.5"
            style={{ borderColor: "rgba(31,158,40,0.15)" }}
          >
            <input
              ref={inputRef}
              id="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about Bharat EV…"
              className="flex-1 bg-transparent text-[13px] text-gray-800 placeholder-gray-400 outline-none"
            />
            <button
              id="chatbot-send-btn"
              onClick={send}
              disabled={!input.trim()}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all disabled:opacity-30"
              style={{ background: "linear-gradient(135deg,#1F9E28,#0f8520)" }}
              aria-label="Send message"
            >
              <Send className="h-3.5 w-3.5 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        id="chatbot-toggle-btn"
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-13 w-13 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: open
            ? "linear-gradient(135deg,#10306B,#1F9E28)"
            : "linear-gradient(135deg,#1F9E28,#10306B)",
          boxShadow: "0 4px 20px rgba(31,158,40,0.45)",
          width: 52,
          height: 52,
        }}
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
      >
        {open ? <X className="h-5 w-5 text-white" /> : <Bot className="h-5 w-5 text-white" />}
        {hasNew && !open && (
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
        )}
      </button>
    </>
  );
}

/* ─────────────────────────────────────────────
   WHATSAPP BUTTON
   ───────────────────────────────────────────── */

function WhatsAppButton() {
  return (
    <a
      id="whatsapp-chat-btn"
      href="https://wa.me/918901222728?text=Hello%2C%20I%20am%20interested%20in%20Bharat%20EV%20charging%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: "#25D366",
        boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        width: 52,
        height: 52,
      }}
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* Official WhatsApp SVG */}
      <svg viewBox="0 0 24 24" width="26" height="26" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ─────────────────────────────────────────────
   SCROLL TO TOP BUTTON
   ───────────────────────────────────────────── */

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      id="scroll-to-top-btn"
      onClick={scrollTop}
      className="flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 fade-scale-in"
      style={{
        background: "linear-gradient(135deg,#1F9E28,#55B00A)",
        boxShadow: "0 4px 16px rgba(31,158,40,0.4)",
        width: 52,
        height: 52,
      }}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ChevronUp className="h-5 w-5 text-white" strokeWidth={2.5} />
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT — stacked widget cluster
   ───────────────────────────────────────────── */

export function FloatingWidgets() {
  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 md:right-6"
      role="complementary"
      aria-label="Floating tools"
    >
      <ScrollToTop />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  );
}
