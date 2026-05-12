import { useRef, useState, useEffect } from "react";
import { useVisible } from "../hooks";
import { Icon } from "../icons";
import FAIcon from "../icons/FAIcon";
import { SOCIALS, CONTACT_INFO } from "../data";
import emailjs from "@emailjs/browser";

const FORM_FIELDS = [
  { id: "name",    label: "Your Name",      placeholder: "What's your name?" },
  { id: "email",   label: "Email Address",  placeholder: "What's your email?" },
  { id: "project", label: "Project Type",   placeholder: "Video / Photography / Design" },
];

function SuccessMessage() {
  return (
    <div className="fw" style={{ textAlign: "center", padding: "52px 32px" }}>
      <div
        style={{
          width: 52, height: 52, borderRadius: "50%",
          background: "rgba(16,185,129,.14)",
          border: "1px solid rgba(16,185,129,.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 18px", fontSize: 20, color: "#10b981",
        }}
      >
        ✓
      </div>
      <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 7, color: "var(--tx)" }}>
        Message Sent!
      </div>
      <div style={{ color: "var(--mu)", fontSize: 13 }}>
        I'll reply within 24 hours.
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm]   = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!notification) return;
    const id = setTimeout(() => setNotification(null), 4000);
    return () => clearTimeout(id);
  }, [notification]);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  if (sent) return <SuccessMessage />;

  return (
    <div className="fw">
      {FORM_FIELDS.map(({ id, label, placeholder }) => (
        <div key={id} className="fg">
          <label className="flbl" htmlFor={id}>{label}</label>
          <input
            className="fi"
            id={id}
            type="text"
            placeholder={placeholder}
            value={form[id]}
            onChange={update(id)}
          />
        </div>
      ))}
      <div className="fg">
        <label className="flbl" htmlFor="msg">Tell Me About Your Project</label>
        <textarea
          className="fta"
          id="msg"
          placeholder="I'm looking to create..."
          value={form.message}
          onChange={update("message")}
        />
      </div>
      <button
        className="bp"
        style={{ width: "100%", justifyContent: "center" }}
        onClick={async (e) => {
          // basic validation
          if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
            alert("Please enter a valid email address.");
            return;
          }

          const toEmail = "jessie162004@gmail.com";

          // EmailJS config from env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
          const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
          const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
          const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

          const templateParams = {
            to_email: toEmail,
            from_name: form.name || form.email,
            from_email: form.email,
            project: form.project,
            message: form.message,
          };

          if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
            try {
              setSending(true);
              await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
              setSending(false);
              setSent(true);
              setNotification({ type: "success", text: "Message sent — thank you!" });
            } catch (err) {
              setSending(false);
              console.error("EmailJS send error:", err);
              setNotification({ type: "error", text: "Failed to send via EmailJS. Falling back to mail client." });
              // also show alert as a fallback UX
              alert("Failed to send via EmailJS — opening your mail client instead.");
              const subject = encodeURIComponent(`Website message from ${form.name || form.email}`);
              const body = encodeURIComponent(
                `Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.project}\n\nMessage:\n${form.message}`
              );
              window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
              setSent(true);
            }
          } else {
            // EmailJS not configured: fallback to mailto
            setNotification({ type: "info", text: "Email service not configured — opening your mail client." });
            const subject = encodeURIComponent(`Website message from ${form.name || form.email}`);
            const body = encodeURIComponent(
              `Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.project}\n\nMessage:\n${form.message}`
            );
            window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
            setSent(true);
          }
        }}
        disabled={sending}
      >
        {sending ? "Sending..." : "Send Message →"}
      </button>
      {notification && (
        <div
          aria-live="polite"
          style={{
            position: "fixed",
            right: 20,
            top: 20,
            zIndex: 9999,
            padding: "12px 16px",
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,.35)",
            color: "#fff",
            background: notification.type === "success" ? "#16a34a" : notification.type === "error" ? "#dc2626" : "#374151",
            fontWeight: 600,
            fontSize: 13,
          }}
          onClick={() => setNotification(null)}
        >
          {notification.text}
        </div>
      )}
    </div>
  );
}

export function Contact() {
  const ref     = useRef(null);
  const visible = useVisible(ref, 0.1);

  return (
    <section id="contact" ref={ref}>
      <div className="wrap">
        <div className={`rv ${visible ? "in" : ""}`}>
          <div className="tag">Get In Touch</div>
          <h2 className="h1">
            Let's Build <span className="gr">Together</span>
          </h2>
        </div>

        <div className="cg">
          {/* Left column */}
          <div className={`rl ${visible ? "in" : ""}`}>
            <div className="avp">
              <div className="avd" />
              Available for Work
            </div>
            <div className="cbig">
              Ready to create something <span className="gr">extraordinary?</span>
            </div>
            <p style={{ color: "var(--mu)", fontSize: "14px", lineHeight: 1.8 }}>
              Whether it's a brand film, editorial shoot, or full graphic
              identity — let's make something that endures.
            </p>

            <div className="clist">
              {CONTACT_INFO.map((item, i) => (
                <a key={i} className="cl" href="#">
                  <div className="ci">{item.ic}</div>
                  <span>{item.t}</span>
                </a>
              ))}
            </div>

            <div className="sr">
              {SOCIALS.map(({ key, url }) => (
                <a key={key} className="sb" href={url} target="_blank" rel="noreferrer">
                  <FAIcon name={key} size={15} color="var(--mu)" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className={`rr ${visible ? "in" : ""}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}