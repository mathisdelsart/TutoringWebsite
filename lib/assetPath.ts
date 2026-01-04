/**
 * Génère un chemin d'asset qui respecte le basePath configuré dans Next.js
 *
 * Utilisation :
 * - En local : assetPath('/image.jpg') → '/image.jpg'
 * - Sur GitHub Pages : assetPath('/image.jpg') → '/cours-particuliers/image.jpg'
 *
 * Le basePath est automatiquement injecté par actions/configure-pages lors du build
 */
export function assetPath(path: string): string {
  // Récupère le basePath depuis la configuration Next.js
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';

  // Si le chemin commence déjà par le basePath, ne pas le doubler
  if (basePath && path.startsWith(basePath)) {
    return path;
  }

  // Assurer que le path commence par /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
