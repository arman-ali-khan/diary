import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercentage(scrollPercent);
    };

    const delayedHandleScroll = () => {
      setTimeout(() => {
        handleScroll();
      }, 50);
    };

    window.addEventListener('scroll', delayedHandleScroll);

    return () => {
      window.removeEventListener('scroll', delayedHandleScroll);
    };
  }, []);

  return (
    <div
      id="progress-container"
      style={{
        height: '4px',
        width: '100%',
        zIndex:'123',
        background: '#ddd',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        overflow: 'hidden',
      }}
    >
      <div
        className="progress-fill"
        style={{
          height: '100%',
          zIndex:'123',
          background: 'linear-gradient(to left, #da90ff, #0000ff8a)',
          borderRadius:'13px',
          position: 'relative',
          width: `${scrollPercentage}%`,
          transition: 'width 0.3s ease-in-out',
        }}
      >
        {/* Neon shadows at top and bottom */}
        <div
          className="neon-shadow-top"
          style={{
            content: '',
            position: 'absolute',
            top: '-3px',
            left: '0',
            right: '0',
            height: '3px',
            background: 'linear-gradient(to left,darkorchid, darkblue)',
            boxShadow: '0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)',
          }}
        ></div>
        <div
          className="neon-shadow-bottom"
          style={{
            content: '',
            position: 'absolute',
            bottom: '-3px',
            left: '0',
            right: '0',
            height: '3px',
            background: 'linear-gradient(to right, darkblue, darkorchid)',
            boxShadow: '0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6), 0 0 30px rgba(0, 0, 255, 0.4)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
