import { useState } from "react";
import { Camera, Paperclip, Send } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";

const pastQuestions = [
  "Tomato leaf curl",
  "Rainy season planting",
  "Rice fertilizer guide",
];

export default function Assistant() {
  const [messages, setMessages] = useState([
    "Maaaring dahil ito sa sobrang tubig o fungal infection. Suriin ang ugat at bawasan ang pagdidilig kung basa pa rin ang lupa. Kung may puting amag, ilagay ang larawan dito para masuri pa.",
  ]);
  const [draft, setDraft] = useState("");

  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, draft.trim()]);
    setDraft("");
  };

  return (
    <div className="inner-page assistant-page">
      <SectionHeading eyebrow="Your farm companion" title="AI Assistant Hub" />
      <div className="assistant-layout">
        <aside className="panel past-questions">
          <h2>Past Questions</h2>
          {pastQuestions.map((q) => (
            <button key={q}>
              {q}
              <span>›</span>
            </button>
          ))}
        </aside>

        <section className="panel chat-window">
          <div className="chat-date">Today</div>
          {messages.map((message, i) => (
            <div
              className={
                i % 2 === 0 ? "chat-bubble assistant" : "chat-bubble user"
              }
              key={`${message}-${i}`}
            >
              {message}
            </div>
          ))}
          <div className="chat-input">
            <button className="icon-button" aria-label="Attach photo">
              <Camera />
            </button>
            <button className="icon-button" aria-label="Attach file">
              <Paperclip />
            </button>
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && send()}
              placeholder="What would you like to ask?"
            />
            <button className="send-button" onClick={send} aria-label="Send">
              <Send size={20} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
