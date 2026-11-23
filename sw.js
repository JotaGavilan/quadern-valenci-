const VERSION = 'quadern-32cbbd777f';
const FONTS = 'quadern-fonts';
const PRECACHE = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/icon.svg",
 "icons/apple-touch-icon.png",
 "lessons/2026-09-16-isc-ixo-o-ixe.html",
 "lessons/2026-09-16-vaig-programar-en-valencia.html",
 "lessons/2026-09-16-vine-digues-fes.html",
 "lessons/2026-09-17-subjuntiu-irregulars-17-set.html",
 "lessons/2026-09-17-vaig-fer-vas-dir.html",
 "lessons/2026-09-18-fare-o-faria.html",
 "lessons/2026-09-19-ets-estas-vas-has.html",
 "lessons/2026-09-20-cantava-o-cantara.html",
 "lessons/2026-09-21-he-fet-he-dit-he-vist.html",
 "lessons/2026-09-22-fent-dient-vivint.html",
 "lessons/2026-09-23-dic-faig-vull.html",
 "lessons/2026-09-24-ves-vine-sapies.html",
 "lessons/2026-09-25-que-puga-que-vulga.html",
 "lessons/2026-09-26-vam-fer-vau-dir-van-venir.html",
 "lessons/2026-09-27-tindre-no-tindria.html",
 "lessons/2026-09-28-soc-estic-he-vaig.html",
 "lessons/2026-09-29-si-poguera-si-volguera.html",
 "lessons/2026-09-30-escrit-obert-resolt.html",
 "lessons/2026-10-01-tenint-venint-sent.html",
 "lessons/2026-10-02-vull-puc-se.html",
 "lessons/2026-10-03-ix-estigues-sapies.html",
 "lessons/2026-10-04-que-isca-que-sapia.html",
 "lessons/2026-10-05-vas-preguntar-vaig-respondre.html",
 "lessons/2026-10-06-vindre-sabre-podre.html",
 "lessons/2026-10-07-som-estem-hem-anem.html",
 "lessons/2026-10-08-volia-o-volguera.html",
 "lessons/2026-10-09-havia-fet-haure-dit.html",
 "lessons/2026-10-10-veient-creient-traient.html",
 "lessons/2026-10-11-vinc-tinc-visc.html",
 "lessons/2026-10-12-tingues-vulgues-sigues.html",
 "lessons/2026-10-13-que-vinga-que-diga.html",
 "lessons/2026-10-14-vaig-entrenar-vas-provar.html",
 "lessons/2026-10-15-caldra-o-caldria.html",
 "lessons/2026-10-16-siga-estiga-haja-vaja.html",
 "lessons/2026-10-17-sabia-o-sabera.html",
 "lessons/2026-10-18-haja-fet-hagues-dit.html",
 "lessons/2026-10-19-duent-seient-bevent.html",
 "lessons/2026-10-20-conec-veig-caic.html",
 "lessons/2026-10-21-pren-obri-escriu.html",
 "lessons/2026-10-22-que-faca-que-tinga.html",
 "lessons/2026-10-23-vam-clicar-vau-guardar.html",
 "lessons/2026-10-24-voldre-haure-anire.html",
 "lessons/2026-10-25-era-estava-havia-anava.html",
 "lessons/2026-10-26-feia-o-fera.html",
 "lessons/2026-10-27-resolt-apres-impres.html",
 "lessons/2026-10-28-rient-i-escrivint.html",
 "lessons/2026-10-29-trac-caic-i-ric.html",
 "lessons/2026-10-30-posa-guarda-ix.html",
 "lessons/2026-10-31-que-estiga-que-vaja.html",
 "lessons/2026-11-01-vam-connectar-vau-crear.html",
 "lessons/2026-11-02-sabre-o-sabria.html",
 "lessons/2026-11-03-son-estan-han-van.html",
 "lessons/2026-11-04-deia-o-diguera.html",
 "lessons/2026-11-05-cobert-o-descobert.html",
 "lessons/2026-11-06-ixent-corrent-prenent.html",
 "lessons/2026-11-07-em-dic-m-agrada-porta-m.html",
 "lessons/2026-11-08-se-n-va-li-ho-dic.html",
 "lessons/2026-11-09-ves-hi-n-hi-ha-ho-se.html",
 "lessons/2026-11-10-fes-m-ho-no-m-ho-faces.html",
 "lessons/2026-11-11-que-qui-on-el-qual.html",
 "lessons/2026-11-12-que-quin-quant.html",
 "lessons/2026-11-13-a-mi-per-a-tu.html",
 "lessons/2026-11-14-el-llibre-el-tinc.html",
 "lessons/2026-11-15-per-tu-o-per-a-tu.html",
 "lessons/2026-11-16-des-de-o-des-que.html",
 "lessons/2026-11-17-a-peu-o-en-bici.html",
 "lessons/2026-11-18-vulga-o-no-vulga.html",
 "lessons/2026-11-19-cap-a-on-fins-quan.html",
 "lessons/2026-11-20-vindre-o-vendre.html",
 "lessons/2026-11-21-sere-o-seria.html",
 "lessons/2026-11-22-de-fusta-o-de-ferro.html",
 "lessons/2026-11-23-veig-laura-no-a-laura.html"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== VERSION && k !== FONTS).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).catch(() =>
      req.mode === 'navigate' ? caches.match('index.html') : Response.error())));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
  }
});
