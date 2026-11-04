/* ═══════════════════════════════════════════════════════════════════════════
   ICÔNES — la famille validée par le dirigeant (maquettes 05 et 06, D22)
   Une icône au trait par domaine, sa couleur, et son animation au survol.
   S'utilise avec systeme-design/verre.css (classes .pique et .a, keyframes).

   Usage :  RelaisIcones.domaine('BATIMENT')  →  { html, style }
            - html  : le carré coloré avec l'icône, à placer dans la carte ;
            - style : les variables CSS de la carte (--c, --p, --anim, --duree).
   Un code inconnu rend une carte neutre, sans icône : c'est le libellé qui
   porte le sens, l'icône n'est qu'un repère (aria-hidden).
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function svg(attrs, corps) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' + attrs +
      ' aria-hidden="true" focusable="false">' + corps + '</svg>';
  }
  var ROND = 'stroke-linecap="round"', ROND_JOINT = 'stroke-linecap="round" stroke-linejoin="round"';

  // c = couleur pleine (≥ 6:1 avec du blanc), p = fond pâle, anim/duree = verre.css
  var DOMAINES = {
    RESTAURATION: { c: 'var(--agir)', p: 'var(--agir-pale)', anim: 'balance', duree: '.9s',
      svg: svg(ROND, '<g class="a"><path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5M17 3c-2 2-2 6 0 8v10"/></g>') },
    INFORMATIQUE: { c: 'var(--marine)', p: 'var(--marine-pale)', anim: 'clignote', duree: '1.1s',
      svg: svg(ROND_JOINT, '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/><path class="a" d="M7 8.5h6M7 11.5h9"/>') },
    MOBILIER: { c: 'var(--violet)', p: 'var(--violet-pale)', anim: 'rebond', duree: '.8s',
      svg: svg(ROND, '<g class="a"><path d="M3 10h14M5 10v10M15 10v10M17 14h4v6M17 14V9"/></g>') },
    VENTILATION: { c: 'var(--marine-encre)', p: '#d9f3ff', anim: 'tourne', duree: '.8s',
      svg: svg(ROND, '<g class="a"><circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2 0 2 3-1 5M14 12c4 0 7 1 7 4 0 2-3 2-5-1M12 14c0 4-1 7-4 7-2 0-2-3 1-5M10 12c-4 0-7-1-7-4 0-2 3-2 5 1"/></g>') },
    RIDEAUX: { c: 'var(--violet)', p: 'var(--violet-pale)', anim: 'rideau', duree: '1.4s',
      svg: svg(ROND, '<path d="M3 4h18"/><path class="a" style="transform-origin:left center" d="M5 4c1 5-1 11 0 16h4c-1-5 1-11 0-16"/><path class="a" style="transform-origin:right center" d="M19 4c-1 5 1 11 0 16h-4c1-5-1-11 0-16"/>') },
    CLES_BIP: { c: 'var(--olive)', p: 'var(--olive-pale)', anim: 'cle', duree: '1s',
      svg: svg(ROND, '<g class="a" style="transform-origin:8px 15px;transform-box:view-box"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/></g>') },
    SECURITE_INCENDIE: { c: 'var(--alerte)', p: 'var(--alerte-pale)', anim: 'flamme', duree: '.6s',
      svg: svg('stroke-linejoin="round"', '<g class="a" style="transform-origin:50% 100%"><path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/></g>') },
    TRAVAUX: { c: 'var(--agir)', p: 'var(--agir-pale)', anim: 'tape', duree: '.7s',
      svg: svg(ROND_JOINT, '<path d="M3 21h18"/><g class="a" style="transform-origin:6px 20px;transform-box:view-box"><path d="M6 20l8-8"/><path d="M12 6l6 6-2.5 2.5-6-6z"/></g>') },
    BATIMENT: { c: 'var(--magenta)', p: 'var(--magenta-pale)', anim: 'rebond', duree: '.9s',
      svg: svg('stroke-linejoin="round"', '<g class="a"><path d="M3 11l9-7 9 7M5 9.5V20h14V9.5"/><rect x="10" y="14" width="4" height="6"/></g>') },
    ESPACES_VERTS: { c: 'var(--fait)', p: 'var(--fait-pale)', anim: 'balance', duree: '1.3s',
      svg: svg(ROND, '<path d="M12 15v6M9 21h6"/><g class="a" style="transform-origin:12px 15px;transform-box:view-box"><circle cx="12" cy="9" r="6"/></g>') },
    TRAITEMENT_3D: { c: 'var(--sarcelle)', p: 'var(--sarcelle-pale)', anim: 'brume', duree: '1s',
      svg: svg(ROND_JOINT, '<rect x="6" y="9" width="8" height="12" rx="2"/><path d="M8 9V6h4v3M12 6h3"/><g class="a"><circle cx="18" cy="5" r=".9"/><circle cx="20.5" cy="7.5" r=".9"/><circle cx="18.5" cy="9.5" r=".9"/></g>') },
    TRI: { c: 'var(--encre-doux)', p: '#ebe9e9', anim: 'tremble', duree: '.8s',
      svg: svg(ROND, '<g class="a"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01"/></g>') }
  };

  function domaine(code) {
    var d = DOMAINES[code];
    if (!d) return { html: '', style: '' };
    return {
      html: '<span class="pique">' + d.svg + '</span>',
      style: '--c:' + d.c + ';--p:' + d.p + ';--anim:' + d.anim + ';--duree:' + d.duree
    };
  }

  window.RelaisIcones = { domaine: domaine, codes: Object.keys(DOMAINES) };
})();
