import React, { useEffect, useState } from 'react';
import style from './Logo.module.css';

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
        className={style.logo}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
        }}
      >
        <h2>F  E  R  M - M  A  R  K  E  T</h2>
        <h2>F  E  R  M - M  A  R  K  E  T</h2>
        {/* <img src="/images/whale.png" width={120} /> */}
      </div>
    </div>
  );
}
