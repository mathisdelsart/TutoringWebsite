# PageProf MVP

Landing page personnelle pour professeur particulier optimisée pour le référencement local et la conversion.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Configuration

Modifiez le fichier `.env.local` :

```env
ADMIN_PASSWORD=prof2024
PROF_SLUG=jean-dupont
```

### Lancement en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
/app
  /[slug]           # Page publique du professeur
    page.tsx
  /admin            # Interface d'administration
    page.tsx
  /api/prof         # API pour sauvegarder les données
    route.ts
  globals.css
  layout.tsx
  page.tsx

/components         # Composants React réutilisables
  Hero.tsx
  Services.tsx
  Method.tsx
  Infos.tsx
  Contact.tsx
  Temoignage.tsx

/data              # Données du professeur
  prof.json
```

## 🎯 Fonctionnalités

### Page publique (`/[slug]`)

- **Hero** : Nom, matières, niveaux, zone, phrase d'accroche
- **Services** : Liste des cours proposés
- **Méthode** : Description pédagogique
- **Infos pratiques** : Zone, modalités, disponibilités
- **Témoignage** : Avis d'un parent/élève (optionnel)
- **Contact** : Boutons Email et WhatsApp

### Interface admin (`/admin`)

- Protection par mot de passe (défini dans `.env.local`)
- Formulaire complet d'édition
- Sauvegarde directe dans `prof.json`
- Prévisualisation de la page

## 🔍 SEO

Le projet intègre automatiquement :

- **Title dynamique** : `Prof de [matières] à [ville] – [Nom]`
- **Meta description** optimisée
- **Balises sémantiques** (h1, h2)
- **Schema.org Person** pour les données structurées
- **Open Graph** pour le partage social

## 🎨 Design

- Design sobre et professionnel
- Mobile-first et responsive
- Tailwind CSS pour le style
- Pas d'animations superflues
- Performance optimisée (Lighthouse > 90)

## 🔐 Sécurité

⚠️ **MVP uniquement** : L'authentification admin est simplifiée pour le MVP. Pour une utilisation en production :

- Implémenter une vraie authentification côté serveur
- Utiliser NextAuth.js ou un service d'authentification
- Ajouter des variables d'environnement sécurisées
- Protéger l'API avec des tokens

## 📝 Modification du contenu

1. Accédez à `/admin`
2. Entrez le mot de passe (défini dans `.env.local`)
3. Modifiez les informations
4. Cliquez sur "Sauvegarder"
5. Les changements sont visibles immédiatement sur la page publique

## 🚀 Déploiement

### Sur Vercel (recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre repository GitHub
3. Configurez les variables d'environnement :
   - `ADMIN_PASSWORD`
   - `PROF_SLUG`
4. Déployez !

```bash
npm run build
```

### Sur Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Connectez votre repository
3. Build command : `npm run build`
4. Publish directory : `.next`

## 📊 Évolutions futures (non implémentées)

- Multi-professeurs (annuaire)
- Pages par ville
- Système de recommandation
- Tableau de bord analytique
- Abonnement/paiement

## 🛠️ Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Style** : Tailwind CSS
- **Données** : JSON local
- **Déploiement** : Vercel

## 📄 Licence

Projet MVP pour usage personnel.

---

**Créé avec ❤️ pour les professeurs particuliers**
