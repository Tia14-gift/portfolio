# Site de Tiarere Lussan

## Modifier le contenu
Tout le texte est dans **`content.js`**. Ouvre-le (VS Code ou TextEdit) et change uniquement ce qui est entre guillemets.

| Je veux…                     | Je fais…                                                                 |
|------------------------------|--------------------------------------------------------------------------|
| Ajouter une photo de projet  | Mets `ma-photo.jpg` dans `images/`, puis `cover: "images/ma-photo.jpg"`   |
| Plusieurs photos             | `gallery: ["images/a.jpg", { src: "images/b.jpg", caption: "Légende" }]` |
| Une vidéo YouTube            | `video: { youtube: "dQw4w9WgXcQ" }` (ce qui suit `v=` dans le lien)      |
| Une vidéo à moi (< 50 Mo)    | Mets-la dans `videos/`, puis `video: { file: "videos/film.mp4" }`         |
| Un lien vers un site         | `link: "https://..."`                                                    |
| Mon CV en PDF                | Mets-le dans `documents/`, puis `cv: "documents/CV.pdf"`                  |

Astuce photos : réduis-les à ~2000 px de large (Aperçu → Outils → Ajuster la taille) pour que le site reste rapide.
Pour les vidéos longues, préfère YouTube (en « non répertoriée »).

## Voir le site sur mon ordi
Double-clique sur `index.html`.

## Mettre en ligne (GitHub Pages, gratuit)
1. GitHub Desktop → **File → Add Local Repository** → choisis ce dossier `portfolio`.
2. Clique **Publish repository** et **décoche** « Keep this code private » (GitHub Pages gratuit exige un dépôt public — c'est normal pour un portfolio, il n'y a rien de secret ici).
3. Sur github.com, ouvre le dépôt → **Settings → Pages** → Source : *Deploy from a branch*, branche `main`, dossier `/ (root)` → **Save**.
4. Après 1–2 minutes, le site est en ligne à `https://tia14-gift.github.io/portfolio/`.

Après chaque modification : dans `index.html`, augmente le numéro `?v=2` → `?v=3` (3 endroits) pour que les navigateurs prennent la nouvelle version. Puis GitHub Desktop → écris un résumé → **Commit to main** → **Push origin**. Le site se met à jour tout seul.

## QR code
Génère le QR code vers l'adresse du site (ou mieux, ton propre nom de domaine, réglable dans Settings → Pages → Custom domain).
