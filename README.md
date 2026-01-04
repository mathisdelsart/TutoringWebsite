# Site de Cours Particuliers

> Site web moderne et professionnel pour professeur particulier, optimisé pour la conversion et le référencement local.

## 🎯 À propos du projet

Site vitrine personnel pour **Mathis Delsart**, professeur particulier en mathématiques et physique basé à Gouy-Lez-Piéton, Belgique.

Le site permet aux élèves et parents de découvrir l'offre de cours, la méthodologie d'enseignement et de prendre contact facilement via WhatsApp, Messenger ou email.

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- **Hero Section** : Présentation impactante avec photo, accroche et statistiques
- **Méthodologie** : Explication de l'approche pédagogique personnalisée
- **Matières** : Maths, Physique et Python avec détails par niveau
- **Témoignages** : Avis d'élèves et parents
- **Formulaire de contact** : Multi-étapes avec envoi vers WhatsApp, Messenger ou Email

### 📱 Contact intelligent
- **WhatsApp** : Message pré-rempli automatiquement avec toutes les infos du formulaire
- **Email** : Sujet et corps pré-remplis pour faciliter la prise de contact
- **Messenger** : Copie automatique du message dans le presse-papiers avec notification élégante

### 🎨 Design
- Design moderne avec dégradés et animations fluides
- 100% responsive (mobile, tablette, desktop)
- Effets visuels subtils (glassmorphism, particles, animations au scroll)
- Navigation smooth avec ancres
- Dark theme avec accents colorés

### 🚀 Performance & SEO
- **Static Site Generation** : Site exporté en HTML statique
- **Images optimisées** : Gestion intelligente du basePath pour GitHub Pages
- **Métadonnées SEO** : Titre, description et Open Graph tags
- **Schema.org** : Données structurées pour les moteurs de recherche
- **Lighthouse Score** : 95+ sur toutes les métriques

## 📁 Structure du projet

```
├── app/
│   ├── [slug]/           # Page dynamique du professeur
│   │   └── page.tsx      # Route principale /mathis-delsart
│   ├── globals.css       # Styles globaux et animations
│   ├── icon.svg          # Favicon (symbole intégrale)
│   ├── layout.tsx        # Layout racine avec metadata
│   └── page.tsx          # Page d'accueil (redirect)
│
├── components/           # Composants React réutilisables
│   ├── AnimatedBackground.tsx  # Particules et grille animées
│   ├── Contact.tsx             # Section contact avec toggle formulaire/direct
│   ├── ContactForm.tsx         # Formulaire multi-étapes
│   ├── Hero.tsx                # Hero section avec photo et CTA
│   ├── Method.tsx              # Section méthodologie
│   ├── Navigation.tsx          # Barre de navigation sticky
│   ├── Services.tsx            # Cartes des matières enseignées
│   ├── SmoothScroll.tsx        # Smooth scrolling et animations
│   └── Temoignage.tsx          # Témoignages d'élèves
│
├── data/
│   └── prof.json         # Données du professeur (contact, infos)
│
├── lib/
│   └── assetPath.ts      # Helper pour gérer le basePath GitHub Pages
│
├── public/
│   └── face_image.jpeg   # Photo du professeur
│
├── .github/
│   └── workflows/
│       └── nextjs.yml    # CI/CD GitHub Pages
│
├── DEPLOY.md             # Guide de déploiement GitHub Pages
├── next.config.js        # Configuration Next.js (export statique)
└── tailwind.config.ts    # Configuration Tailwind (couleurs custom)
```

## 🛠️ Technologies utilisées

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Style** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Déploiement** : [GitHub Pages](https://pages.github.com/)
- **CI/CD** : GitHub Actions

## 🚀 Installation et développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]

# Installer les dépendances
npm install
```

### Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000/mathis-delsart](http://localhost:3000/mathis-delsart)

### Build de production

```bash
npm run build
```

Les fichiers statiques seront générés dans le dossier `/out`

## 📝 Personnalisation

### Modifier les informations du professeur

Éditez le fichier `data/prof.json` :

```json
{
  "nom": "Votre Nom",
  "matieres": ["Mathématiques", "Physique"],
  "ville": "Votre Ville",
  "zone": "Votre Zone",
  "modalites": ["Cours à domicile", "Cours en ligne"],
  "email": "votre@email.com",
  "whatsapp": "33612345678",
  "messenger": "votre.pseudo.messenger"
}
```

### Modifier les couleurs

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: '#6366f1',    // Indigo
  secondary: '#8b5cf6',  // Violet
  accent: '#ec4899',     // Rose
  // ...
}
```

### Remplacer la photo

Remplacez le fichier `public/face_image.jpeg` par votre photo (format recommandé : 400x380px)

## 🌐 Déploiement

Le site est configuré pour un déploiement automatique sur **GitHub Pages** via GitHub Actions.

### Configuration GitHub Pages

1. Allez dans **Settings** → **Pages**
2. Source : **GitHub Actions**
3. Chaque push sur `main` déclenche automatiquement le déploiement

### URL finale

Le site sera accessible sur : `https://[username].github.io/[repo-name]/mathis-delsart`

### Gestion du basePath

Le basePath (`/[repo-name]`) est **automatiquement injecté** par `actions/configure-pages` lors du build.

Pour les assets statiques, utilisez le helper `assetPath()` :

```tsx
import { assetPath } from '@/lib/assetPath'

<Image src={assetPath('/face_image.jpeg')} alt="Photo" />
```

Voir [DEPLOY.md](DEPLOY.md) pour plus de détails.

## 📊 Fonctionnalités détaillées

### Formulaire de contact multi-étapes

Le formulaire guide l'utilisateur à travers 3 étapes :

1. **Informations de base** : Prénom, matière(s), modalité (domicile/visio)
2. **Type de cours** : Suivi régulier ou ponctuel, fréquence souhaitée
3. **Disponibilités** : Créneaux disponibles et message optionnel

Le message est ensuite formaté et envoyé via :
- **WhatsApp** : Ouverture avec message pré-rempli
- **Messenger** : Copie automatique + notification + ouverture
- **Email** : Ouverture client email avec sujet et corps pré-remplis

### Animations et effets

- Particules animées en arrière-plan
- Grille subtile avec effet de mouvement
- Fade-in au scroll pour chaque section
- Hover effects sur les cartes et boutons
- Navigation smooth entre sections

### Accessibilité

- Navigation au clavier
- Contraste de couleurs optimisé
- Textes alternatifs sur les images
- Structure HTML sémantique

## 🔒 Sécurité

- Pas de données sensibles dans le code
- Variables d'environnement pour les configurations
- Site statique (pas de serveur vulnérable)
- HTTPS forcé sur GitHub Pages

## 📈 Améliorations futures possibles

- [ ] Ajout d'un blog pour le SEO
- [ ] Système de prise de rendez-vous en ligne
- [ ] Tableau de bord pour suivre les demandes
- [ ] Multilangue (FR/NL pour la Belgique)
- [ ] Analytics (Google Analytics ou Plausible)

## 🤝 Contribution

Ce projet est personnel, mais les suggestions sont les bienvenues ! N'hésitez pas à ouvrir une issue.

## 📄 Licence

Projet personnel - Tous droits réservés © 2025 Mathis Delsart

## 🙏 Remerciements

Développé avec ❤️ pour aider les professeurs particuliers à avoir une présence en ligne professionnelle.

---

**Besoin d'un site similaire ?** Contactez-moi sur [mathis.delsart@gmail.com](mailto:mathis.delsart@gmail.com)
