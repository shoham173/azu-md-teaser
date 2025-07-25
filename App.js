
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-08-04T10:00:00-04:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        setCountdown("It has begun...");
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(`${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`);
    };
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <video autoPlay muted loop className="background-video">
        <source src="/water_skin_background.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Some doors don’t open.<br />They invite you in.</h1>
        <p className="subtitle">On August 4, something timeless begins…</p>
        <div className="countdown">{countdown}</div>
      </div>
    </div>
  );
}

export default App;
