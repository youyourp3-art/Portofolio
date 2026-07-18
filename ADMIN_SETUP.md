# Mettre en service le panel admin — étapes à suivre

Trois blocs : (1) mettre le site en ligne sur Netlify, (2) activer ton
compte admin unique, (3) uploader tes fichiers depuis `/admin`. Compte
15-20 minutes la première fois, ensuite c'est instantané.

## 1. Déployer le site sur Netlify

1. Pousse ce projet sur GitHub (si ce n'est pas déjà fait) :
   ```
   git init
   git add .
   git commit -m "Portfolio prêt pour Netlify"
   ```
   Crée un repo sur github.com, puis :
   ```
   git remote add origin https://github.com/<ton-compte>/portfolio.git
   git push -u origin main
   ```
2. Va sur netlify.com, crée un compte gratuit, connecte-le à GitHub.
3. **Add new site** → **Import an existing project** → sélectionne ton repo.
4. Netlify détecte `netlify.toml` automatiquement (build command
   `npm run build`, publish directory `dist`). Clique **Deploy**.
5. Attends 1-2 minutes — ton site est en ligne sur une URL du type
   `https://<nom-aleatoire>.netlify.app`. Tu peux la personnaliser plus
   tard dans **Site settings → Domain management**.

## 2. Activer Netlify Identity (ton compte admin unique)

1. Dans le dashboard Netlify de ton site : **Integrations** (ou
   **Site configuration**) → **Identity** → **Enable Identity**.
2. Descends à **Registration** → choisis **Invite only** (important :
   ça empêche n'importe qui de créer un compte — seul toi pourras te
   connecter).
3. Descends à **Services** → **Git Gateway** → **Enable Git Gateway**.
   C'est ce qui permet au panel admin de faire des commits sur ton repo
   sans que tu aies à donner tes identifiants GitHub à l'interface.
4. Remonte à **Identity → Invite users** → entre ton propre email →
   **Send**. Tu reçois un email d'invitation.
5. Clique le lien dans l'email → il t'amène sur ton site avec une
   fenêtre "Complete your signup" → choisis ton mot de passe.

C'est fait : un seul compte existe (le tien), personne d'autre ne peut
s'inscrire, et ce mot de passe n'apparaît jamais dans le code.

## 3. Utiliser le panel admin

1. Va sur `https://<ton-site>.netlify.app/admin`
2. Connecte-toi avec l'email/mot de passe de l'étape 2.
3. Cinq sections dans le menu de gauche :
   - **Pages du site** → Accueil / À propos / Contact — textes généraux.
   - **Médiathèque** → photo, CV (PDF), lettres (PDF), captures QGIS et WebGIS.
   - **Diagnostic Aïn Bénian** → les 7 sous-pages du diagnostic (Accueil,
     Démographie, Cartographie, Équipements, AFOM, Stratégie, Dashboard) —
     chiffres, tableaux, listes AFOM, projets phares, cartes de l'atlas.
     Tout est éditable, y compris les images de l'atlas cartographique.
4. Chaque **Publish** fait un commit sur ton repo GitHub → Netlify
   redéploie automatiquement → le changement est visible sur le site
   en 30 secondes à 1 minute (pas besoin de recharger manuellement,
   actualise juste la page après ce délai).

## Limites à connaître

- Ce n'est pas une base de données : chaque modif = un commit + un
  rebuild. Pour un contenu qui change rarement (portfolio), c'est
  largement suffisant.
- Les captures de la page Démonstration (page 08) ne sont **pas encore**
  branchées au CMS — elles restent modifiables uniquement dans le code.
- Ce portfolio ne dépend plus du backend Express/SQLite d'Aïn Bénian —
  tout le diagnostic est maintenant du contenu statique géré ici même.
  Le projet backend original reste chez toi, indépendant, si tu veux
  t'en servir ailleurs.
- Si tu perds l'accès à ton email d'invitation, récupère l'accès depuis
  **Identity → tableau des utilisateurs** dans le dashboard Netlify.
