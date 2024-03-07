'use client';

import config from 'public/config.json';
import { useEffect, useRef } from 'react';

function getScript() {
  const giscusConfig = config.giscus;
  const scriptElem = document.createElement('script');
  const keys = Object.keys(giscusConfig);
  const values = Object.values(giscusConfig);
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i] !== 'active') {
      scriptElem.setAttribute(keys[i], values[i].toString());
    }
  }
  console.log(scriptElem);
  return scriptElem;
}

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    ref.current.appendChild(getScript());
  }, []);

  return config.giscus.active ? <section ref={ref} /> : undefined;
}
