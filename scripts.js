/* =========================================================
   THE CAMP KIDS — atmospheric effects + nav
   ========================================================= */

(function () {
  'use strict';

  /* ---------- TREE silhouettes ---------- */
  function buildTrees() {
    const layer = document.querySelector('.trees');
    if (!layer) return;
    layer.innerHTML = `
      <svg viewBox="0 0 1440 180" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="#0a1f18" opacity="0.85" d="M0,180 L0,120 L50,70 L100,130 L150,55 L210,135 L260,80 L320,40 L380,120 L430,90 L490,50 L550,125 L610,75 L670,30 L740,115 L800,70 L860,110 L920,45 L980,125 L1040,80 L1100,55 L1160,120 L1220,90 L1290,60 L1360,115 L1440,90 L1440,180 Z"/>
        <path fill="#040d09" d="M0,180 L0,150 L40,110 L90,150 L140,80 L200,150 L260,100 L320,135 L380,70 L440,150 L500,110 L560,140 L620,60 L680,140 L740,100 L800,135 L860,75 L920,140 L980,100 L1040,135 L1100,65 L1160,140 L1220,105 L1280,140 L1340,80 L1400,140 L1440,115 L1440,180 Z"/>
      </svg>
    `;
  }

  /* ---------- STARS ---------- */
  function buildStars() {
    const sky = document.querySelector('.sky');
    if (!sky) return;
    const STAR_COUNT = 80;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < STAR_COUNT; i++) {
      const s = document.createElement('span');
      const size = Math.random() * 2 + 0.8;
      s.style.cssText = `
        position: absolute;
        top: ${Math.random() * 65}%;
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        background: #f7f1e3;
        border-radius: 50%;
        opacity: ${Math.random() * 0.6 + 0.2};
        box-shadow: 0 0 ${size * 2}px rgba(247, 241, 227, 0.6);
        animation: twinkle ${Math.random() * 3 + 2.5}s ease-in-out ${Math.random() * 4}s infinite;
      `;
      frag.appendChild(s);
    }
    sky.appendChild(frag);
  }

  /* ---------- FIREFLIES ---------- */
  function buildFireflies() {
    const layer = document.querySelector('.fireflies');
    if (!layer) return;
    const FLY_COUNT = 16;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < FLY_COUNT; i++) {
      const f = document.createElement('span');
      const dur = Math.random() * 16 + 14;
      const delay = Math.random() * 12;
      f.style.cssText = `
        position: absolute;
        top: ${Math.random() * 65 + 15}%;
        left: ${Math.random() * 100}%;
        width: 5px;
        height: 5px;
        background: radial-gradient(circle, #fff2c8 0%, #f0c065 40%, transparent 70%);
        border-radius: 50%;
        box-shadow: 0 0 12px 3px rgba(240, 192, 101, 0.55);
        opacity: 0;
        animation: float-fly ${dur}s ease-in-out ${delay}s infinite,
                   flicker ${Math.random() * 2 + 1.4}s ease-in-out ${delay}s infinite;
      `;
      frag.appendChild(f);
    }
    layer.appendChild(frag);
  }

  /* ---------- MOBILE NAV ---------- */
  function wireNav() {
    const btn = document.querySelector('.nav-toggle');
    const links = document.querySelector('nav.links');
    if (!btn || !links) return;
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
      btn.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  function init() {
    buildTrees();
    buildStars();
    buildFireflies();
    wireNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Keyframes injected once */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.9; }
    }
    @keyframes flicker {
      0%, 100% { opacity: 0.2; }
      30% { opacity: 1; }
      60% { opacity: 0.4; }
      80% { opacity: 0.85; }
    }
    @keyframes float-fly {
      0%   { transform: translate(0, 0); }
      20%  { transform: translate(40px, -30px); }
      40%  { transform: translate(-25px, -60px); }
      60%  { transform: translate(60px, -40px); }
      80%  { transform: translate(-40px, -20px); }
      100% { transform: translate(0, 0); }
    }
  `;
  document.head.appendChild(style);
})();
