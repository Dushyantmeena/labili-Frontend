import React, { useState } from 'react';
import { X, Send, Sparkles, MessageCircle } from 'lucide-react';
import './BaisaSaheli.scss';

const QUICK_QUESTIONS = [
  'Help me find an Aangi blouse size',
  'Can I rent an outfit for a wedding?',
  'How do custom alterations work?',
  'Where is the Jaipur flagship studio located?'
];

const BaisaSaheli = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'saheli',
      text: 'Khamma Ghani! I am Labiii Saheli, your personal Jaipur stylist. How may I assist you with sizes, custom poshak, or rental enquiries today?'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputText('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'saheli',
          text: `Thank you for asking! For direct personal styling and custom measurements, our master karigar is available right now on WhatsApp at +91 76650 22710.`
        }
      ]);
    }, 700);
  };

  const handleQuickQuestion = (q) => {
    setMessages((prev) => [...prev, { sender: 'user', text: q }]);
    setTimeout(() => {
      let reply = '';
      if (q.includes('size')) {
        reply = 'All our Aangi blouses and lehenga skirts feature 2-inch internal margins for easy alteration. We also offer made-to-measure tailoring upon request!';
      } else if (q.includes('rent')) {
        reply = 'Yes! We offer 3, 5, or 7-day bridal and poshak rentals across India. Explore our "Rent an Outfit" page or message us on WhatsApp.';
      } else if (q.includes('studio')) {
        reply = 'Our flagship studio is at 46 Sachivalaya Vihar, New Sanganer Road, Jaipur, Rajasthan 302020. Open all 7 days from 9:00 AM to 8:00 PM!';
      } else {
        reply = 'Our team provides complimentary custom fitting and alteration consultation for all heirloom pieces.';
      }
      setMessages((prev) => [...prev, { sender: 'saheli', text: reply }]);
    }, 600);
  };

  return (
    <div id="baisa-saheli" className="baisa-saheli-root">
      {/* Chat Drawer/Panel */}
      {isOpen && (
        <div className="bs-panel" role="dialog" aria-label="Baisa Saheli Stylist">
          <div className="bs-head">
            <div className="bs-avatar">✦</div>
            <div>
              <span className="bs-title">Labiii Saheli</span>
              <span className="bs-subtitle">Personal Jaipur Stylist &amp; Concierge</span>
            </div>
            <button
              className="bs-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close Baisa Saheli"
              type="button"
            >
              <X size={18} />
            </button>
          </div>

          <div className="bs-chat-body">
            {messages.map((m, idx) => (
              <div key={idx} className={`bs-msg-bubble ${m.sender}`}>
                <p>{m.text}</p>
              </div>
            ))}

            <div className="bs-quick-prompts">
              <span className="prompts-label">Quick questions:</span>
              <div className="prompts-pills">
                {QUICK_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="prompt-pill"
                    onClick={() => handleQuickQuestion(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bs-footer">
            <form onSubmit={handleSend} className="bs-input-form">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about sizes, fabrics or rentals..."
                aria-label="Type message"
              />
              <button type="submit" className="bs-send-btn" aria-label="Send">
                <Send size={15} />
              </button>
            </form>

            <a
              href="https://wa.me/917665022710?text=Hi+Labiii%2C+I+need+styling+advice"
              target="_blank"
              rel="noreferrer"
              className="bs-wa-direct"
            >
              <MessageCircle size={14} /> Chat directly on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating Pill Launch Button matching Screenshot 2, 3, 4, 5, 6, 7, 8 */}
      <button
        className="bs-launch"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ask Labiii Saheli"
        type="button"
      >
        <span className="bs-spark">✦</span>
        <span className="bs-label">Ask Labiii Saheli</span>
      </button>
    </div>
  );
};

export default BaisaSaheli;

