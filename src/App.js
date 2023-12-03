import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>https://wa.me</h3>
      <div>
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/85252269794?text=I'm%20interested%20in%20your%20e-cigarette
%20for%20sale"
        >
          <img
            alt="Chat on WhatsApp"
            src="/chat-on-whatsapp/WhatsAppButtonGreenLarge.svg"
          />
        </a>
      </div>

      <h3>https://api.whatspp.com</h3>
      <div>
        <a
          aria-label="Chat on WhatsApp"
          href="https://api.whatsapp.com/send?phone=85252269794&text=I'm%20interested%20in%20your%20e-cigarette
%20for%20sale"
        >
          <img
            alt="Chat on WhatsApp"
            src="/chat-on-whatsapp/WhatsAppButtonGreenLarge.svg"
          />
        </a>
      </div>

      <h3>whatsapp://send?phone=85252269794</h3>
      <div>
        <a
          aria-label="Chat on WhatsApp"
          href="https://api.whatsapp.com/send?phone=85294507775&text=I'm%20interested%20in%20your%20e-cigarette
%20for%20sale"
        >
          <img
            alt="Chat on WhatsApp"
            src="/chat-on-whatsapp/WhatsAppButtonGreenLarge.svg"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
