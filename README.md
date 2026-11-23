# Quadern de valencià

Lliçons diàries de valencià (IES Jorge Juan) amb exercicis autocorregibles, empaquetades com a **aplicació web instal·lable (PWA)** que funciona sense connexió.

- `index.html` — índex de lliçons i progrés del temari
- `lessons/` — les 72 lliçons (una pàgina HTML autònoma per lliçó)
- `manifest.webmanifest`, `sw.js`, `icons/` — instal·lació al mòbil i mode offline

## Publicar a GitHub Pages
1. Puja el contingut d'aquesta carpeta a un repositori (arrel de la branca `main`).
2. Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
3. Obri `https://<usuari>.github.io/<repositori>/` al mòbil.

## Instal·lar al mòbil
- **Android (Chrome):** botó «Instal·la» de la pàgina, o menú ⋮ → *Instal·la l'aplicació*.
- **iPhone (Safari):** Compartir → *Afig a la pantalla d'inici*.

Després de la primera visita, totes les lliçons queden guardades i s'obrin sense internet.
Les tipografies de Google es descarreguen la primera vegada; sense connexió s'usa una font del sistema.
