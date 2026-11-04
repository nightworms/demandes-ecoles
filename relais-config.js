/* ═══════════════════════════════════════════════════════════════════════════
   CONFIGURATION DES PAGES RELAIS v4 — une seule source (D26)
   Les pages v3 écrivent l'adresse de la base en dur ; les pages v4 la lisent
   ici, et nulle part ailleurs.

   VERSION EN SERVICE (relais-ecoles.fr) : base en service, autorisée par D27
   pour le formulaire des écoles seulement. La copie d'évolutions garde, elle,
   sa propre version pointée vers la base d'essai.

   GARDE-FOU : la base EN SERVICE est refusée tant que « deploiement » ne cite
   pas la décision écrite qui l'autorise (ex. 'D27'). Ne pas retirer.
   ═══════════════════════════════════════════════════════════════════════════ */
window.RELAIS_CONFIG = {
  base: 'service',          // 'essai' | 'service'
  API: 'https://ktrtnujbonwqksomgumt.supabase.co',  // base EN SERVICE (plateforme-demandes-ecoles)
  CLE: 'sb_publishable_nTCosqebGOjUK3jGwoxhfQ_BnnkRpNn',  // clé publiable, la même que formulaire-v3.html
  deploiement: 'D27'        // décision écrite autorisant la base en service (formulaire seul)
};

(function garde() {
  'use strict';
  var BASE_EN_SERVICE = 'ktrtnujbonwqksomgumt';
  var c = window.RELAIS_CONFIG, motif = null;
  if (!c.API || !c.CLE) {
    motif = "La base d'essai n'est pas encore configurée (relais-config.js).";
  } else if (c.API.indexOf(BASE_EN_SERVICE) !== -1 && !c.deploiement) {
    motif = 'Cette page v4 pointe vers la base en service sans décision de déploiement : arrêt.';
  } else if (/sb_secret_|service_role/.test(c.CLE)) {
    motif = 'Une clé secrète a été placée dans relais-config.js : arrêt.';
  }
  c.pret = !motif;
  c.motif = motif;
  // Une session par base : un jeton de la base en service ne part jamais vers
  // la base d'essai, ni l'inverse, même si les pages sont servies au même endroit.
  c.suffixeSession = c.base === 'service' ? '' : '-' + c.base;
})();
