import React, { useState } from 'react';
import PortfolioMenu from './PortfolioMenu';


// Placeholder components for sections
const AboutSection = () => (
  <div className="fade-in text-center font-ticketing text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
    <h2 className="text-4xl">About Me</h2>
    <p className="mt-4 text-xl text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
      I’m Ved, and I’m a junior at NYU studying Math and Computer Science. My interests span from Control Systems to Machine Learning to Web3 and more.
      I'm a passionate nerd who loves building projects and sharing STEM knowledge. I also compose and produce music, often blending both interests in my work. Check out my projects and discography below-enjoy!
    </p>
  </div>
);

const PortfolioSection = () => (
  <div className="fade-in flex flex-col justify-center items-center h-full font-ticketing text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
    <h2 className="text-4xl mb-8">Portfolio</h2>
    <PortfolioMenu />
  </div>
);

const MusicSection = () => (
  <div className="fade-in text-center font-ticketing text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
    <h2 className="text-4xl">Play Music</h2>
    <p className="mt-4 text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
      Interactive demo coming soon...
    </p>
  </div>
);

const ContactSection = () => (
  <div className="fade-in text-center font-ticketing text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
    <h2 className="text-4xl">Contact</h2>
    <p className="mt-4 text-2xl text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
      Email: var9026 at nyu dot edu<br />
      Phone Number: (267) 455 4215
    </p>
    {/* Social Media Buttons */}

    <div className="flex justify-left items-center">
      <div className="w-[15%] grid grid-cols-2 gap-10 mt-6">
      </div>
      <div className="w-[60%] grid grid-cols-2 gap-8 mt-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ved-radhakrishnan-2a872b222/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-20 h-20 rounded-full bg-transparent relative group transition-all"
        >
        <span className="absolute left-[-12px] top-[10%] h-[80%] w-[5px] bg-white scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
        <img
            src="/assets/linkedin-pixel.png"
            alt="LinkedIn"
            className="w-12 h-12 filter invert brightness-200"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/vedradhak/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-20 h-20 rounded-full bg-transparent relative group transition-all"
        >
        <span className="absolute left-[-12px] top-[10%] h-[80%] w-[5px] bg-white scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
        <img
            src="/assets/insta-pixel.png"
            alt="Instagram"
            className="w-12 h-12 filter invert brightness-200"
          />
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/vedaradhak"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-20 h-20 rounded-full bg-transparent relative group transition-all"
        >
        <span className="absolute left-[-12px] top-[10%] h-[80%] w-[5px] bg-white scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
        <img
            src="/assets/twitter-pixel.png"
            alt="Twitter"
            className="w-12 h-12 filter invert brightness-200"
          />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/vedradhakrishnan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-20 h-20 rounded-full bg-transparent relative group transition-all"
        >
        <span className="absolute left-[-12px] top-[10%] h-[80%] w-[5px] bg-white scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
        <img
            src="/assets/github-pixel.png"
            alt="GitHub"
            className="w-12 h-12 filter invert brightness-200"
          />
        </a>
      </div>
    </div>

  </div>
);





const Overlay = () => {
  const [selectedItem, setSelectedItem] = useState(null); // Tracks the currently selected menu item
  const [fadeState, setFadeState] = useState(''); // Tracks the fade state

  const handleMenuClick = (item) => {
    setFadeState('fade-out');
    setTimeout(() => {
      setSelectedItem(item);
      setFadeState('fade-in');
    }, 300); // Sync with transition duration
  };

  const handleBackClick = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      setSelectedItem(null);
      setFadeState('fade-in');
    }, 300);
  };

  const renderSection = () => {
    switch (selectedItem) {
      case 'About Me':
        return <AboutSection />;
      case 'Portfolio':
        return <PortfolioSection />;
      case 'Play Music':
        return <MusicSection />;
      case 'Contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex">
      {/* Left Half: Name */}
      <div className="w-1/6 flex justify-center items-start text-5xl font-adventure text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] mt-[25vh]">
        {/* Optional smaller section */}
      </div>
      <div className="w-1/3 flex justify-center items-start text-5xl font-adventure text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] mt-[30vh]">
        Ved Radhakrishnan
      </div>

      <div className="w-1/12 flex justify-center items-start text-5xl font-adventure text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] mt-[25vh]">
        {/* Optional smaller section */}
      </div>

      {/* Right Half: Navigation/Menu or Content */}
      <nav className={`w-1/5 flex flex-col justify-start items-center mt-[25vh] transition-opacity duration-500 ${fadeState}`}>
        {!selectedItem ? (
          <ul className="space-y-8 pointer-events-auto">
            {['About Me', 'Portfolio', 'Play Music', 'Contact'].map((item) => (
              <li
                key={item}
                onClick={() => handleMenuClick(item)}
                className="text-4xl font-ticketing text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] cursor-pointer hover:drop-shadow-[0_0_30px_rgba(255,0,0,1)] transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className={`relative w-full transition-opacity duration-500 ${fadeState}`}>
            <button
              onClick={handleBackClick}
              className="absolute top-5 left-5 text-xl font-ticketing text-white underline pointer-events-auto z-10"
            >
              Back
            </button>
            {renderSection()}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Overlay;
