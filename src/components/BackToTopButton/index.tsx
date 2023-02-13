import { useState, useEffect } from 'react';

export function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowButton(window.pageYOffset > 300);
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const handleClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
    className={`bg-orange-primary text-white p-2 rounded-full hover:bg-orange-500 fixed bottom-2 right-2 h-12 w-12 ${
      !showButton ? 'hidden' : ''
    }`}
      onClick={handleClick}
    >
       ▲
    </button>
  );
}

