# Site de Tiarere Lussan

## Modifier le contenu (le plus simple)
1. Va sur **https://app.pagescms.org** et connecte-toi avec GitHub.
2. Ouvre le dépôt **portfolio** → **Mon site**.
3. Modifie les champs, ajoute des photos avec les boutons, puis clique **Save**.
Le site se met à jour tout seul en 1–2 minutes. Rien à installer, rien à pousser.

Le contenu est dans `content.json`, les photos dans `images/`.
Astuce : réduis les photos à ~2000 px de large avant de les envoyer, et préfère YouTube (vidéo « non répertoriée ») pour les vidéos.

⚠️ Si tu modifies sur pagescms.org, fais **Fetch origin** dans GitHub Desktop avant toute modification sur ton ordi, pour récupérer les changements.

## Mettre en ligne (GitHub Pages, gratuit)
1. GitHub Desktop → **File → Add Local Repository** → choisis ce dossier `portfolio`.
2. Clique **Publish repository** et **décoche** « Keep this code private » (GitHub Pages gratuit exige un dépôt public — c'est normal pour un portfolio, il n'y a rien de secret ici).
3. Sur github.com, ouvre le dépôt → **Settings → Pages** → Source : *Deploy from a branch*, branche `main`, dossier `/ (root)` → **Save**.
4. Après 1–2 minutes, le site est en ligne à `https://tia14-gift.github.io/portfolio/`.

Après chaque modification : GitHub Desktop → écris un résumé → **Commit to main** → **Push origin**. Le site se met à jour tout seul.

## QR code
Génère le QR code vers l'adresse du site (ou mieux, ton propre nom de domaine, réglable dans Settings → Pages → Custom domain).
