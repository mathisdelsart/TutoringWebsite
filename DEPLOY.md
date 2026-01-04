# Guide de déploiement - GitHub Pages

## Comment fonctionne le basePath avec GitHub Pages

### Configuration automatique

L'action GitHub `actions/configure-pages@v5` avec `static_site_generator: next` injecte **automatiquement** le `basePath` dans votre `next.config.js` lors du build sur GitHub Actions.

```js
// En local (next.config.js)
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

// Sur GitHub Actions (injecté automatiquement)
const nextConfig = {
  output: "export",
  basePath: "/PageProf",  // ← Ajouté automatiquement
  images: { unoptimized: true },
};
```

### Ce qui est géré automatiquement

✅ **Chemins gérés automatiquement par Next.js** :
- `<Link href="/about">` → devient `/PageProf/about`
- `router.push('/contact')` → devient `/PageProf/contact`
- Imports CSS/JS automatiquement préfixés
- Routes de l'application

❌ **Chemins NON gérés automatiquement** :
- Chaînes de caractères hardcodées : `src="/image.jpg"`
- URLs construites manuellement : `href="https://site.com/page"`

### Solution : Helper `assetPath()`

Pour les assets statiques (images, fichiers dans `/public`), utilisez le helper `assetPath()` :

```tsx
import { assetPath } from '@/lib/assetPath'

// ❌ INCORRECT - Ne fonctionne pas sur GitHub Pages
<Image src="/face_image.jpeg" alt="..." />

// ✅ CORRECT - Fonctionne partout
<Image src={assetPath('/face_image.jpeg')} alt="..." />
```

Le helper détecte automatiquement le basePath :
- **En local** : `assetPath('/image.jpg')` → `/image.jpg`
- **Sur GitHub Pages** : `assetPath('/image.jpg')` → `/PageProf/image.jpg`

## Structure du projet

```
/public/
  └── face_image.jpeg       # Assets statiques
/lib/
  └── assetPath.ts          # Helper pour gérer le basePath
/components/
  └── Hero.tsx              # Utilise assetPath() pour les images
```

## Déploiement

### Build local
```bash
npm run build
npm run start  # Teste le site statique localement
```

### Déploiement sur GitHub Pages

Le déploiement est **automatique** via GitHub Actions (voir `.github/workflows/nextjs.yml`) :

1. Push sur la branche `main`
2. GitHub Actions build le projet avec le basePath injecté
3. Le site est déployé sur `https://[username].github.io/PageProf/`

## Bonnes pratiques

### ✅ Utiliser assetPath() pour tous les assets statiques

```tsx
// Images
<Image src={assetPath('/logo.png')} alt="Logo" />

// Fichiers PDF, etc.
<a href={assetPath('/cv.pdf')}>Télécharger mon CV</a>

// Favicons (dans le composant Head)
<link rel="icon" href={assetPath('/favicon.ico')} />
```

### ✅ Les composants Next.js gèrent le basePath automatiquement

```tsx
// Pas besoin d'assetPath() pour les routes/liens
<Link href="/about">À propos</Link>
router.push('/contact')
```

### ❌ Ne pas hardcoder les URLs

```tsx
// ❌ ÉVITER
const imageUrl = "/public/image.jpg"
const fullUrl = "https://monsite.com/page"

// ✅ PRÉFÉRER
const imageUrl = assetPath("/image.jpg")
```

## Résolution des problèmes

### Image 404 sur GitHub Pages

**Symptôme** : L'image fonctionne en local mais retourne 404 sur GitHub Pages

**Cause** : Chemin hardcodé sans basePath

**Solution** :
```tsx
// Avant
<Image src="/face_image.jpeg" />

// Après
import { assetPath } from '@/lib/assetPath'
<Image src={assetPath('/face_image.jpeg')} />
```

### Vérifier le build local

```bash
# Build avec export statique
npm run build

# Vérifier que l'image est dans /out
ls -la out/face_image.jpeg

# Démarrer un serveur local pour tester
npx serve out
```

## Variables d'environnement

Le helper `assetPath()` utilise la variable interne Next.js :
- `process.env.__NEXT_ROUTER_BASEPATH` : Basepath configuré (injecté par GitHub Actions)

Cette variable est :
- `undefined` en développement local
- `/PageProf` sur GitHub Pages (injecté automatiquement)

## Références

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js basePath](https://nextjs.org/docs/app/api-reference/next-config-js/basePath)
- [GitHub Pages avec Next.js](https://github.com/actions/configure-pages)
