import React, { useEffect, useState } from 'react';

export default function Logo() {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="row">
      <div
        className="col text-center logo"
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
        }}
      >
        <h2>FERMMARKET</h2>
        <h2>FERMMARKET</h2>
        {/* <img src="/images/whale.png" width={120} /> */}
      </div>
    </div>
  );
}
