'use client';

import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <h2 className="text-2xl md:text-4xl font-light text-foreground/90 font-headline">
      {displayText}
      <span className="animate-pulse" style={{ animationDuration: '1.2s' }}>|</span>
    </h2>
  );
};

export default TypingAnimation;
