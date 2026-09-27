# 🏢 JIM DISTRIBUTION — Enterprise Portal & CMS

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Payload CMS](https://img.shields.io/badge/Payload_CMS-v3.88-000000?style=for-the-badge&logo=payloadcms)](https://payloadcms.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

<br />

**Plateforme Web & Système de Gestion de Contenu (CMS) de Nouvelle Génération pour la Distribution Agroalimentaire & FMCG dans le Nord du Maroc.**

[Fonctionnalités](#-fonctionnalités-clés) • [Architecture](#-pile-technologique) • [Installation](#-guide-de-démarrage) • [Configuration](#-configuration-environnement) • [Structure](#-structure-du-projet) • [Déploiement](#-déploiement)

</div>

---

## 📌 Présentation

**JIM DISTRIBUTION** est une vitrine institutionnelle moderne et dynamique doublée d'un système de gestion de contenu d'entreprise (Headless CMS intégré via Payload CMS). Conçue sur mesure pour les leaders de la distribution agroalimentaire, la chaîne du froid, le stockage logistique et la représentation de marques FMCG dans la région Tanger-Tétouan-Al Hoceïma.

---

## ✨ Fonctionnalités Clés

- ⚡ **Performance & Rendu Hybride** : Rendu ultra-rapide via **Next.js 16 (App Router)** et Server Components React 19.
- 🛠️ **Payload CMS 3.x Intégré** : Gestion de contenu sans friction (Articles, Produits, Catalogues, Médias) avec éditeur Lexical RichText et adaptateur PostgreSQL natif.
- 🎨 **UI/UX Moderne & Fluide** : Composants interactifs basés sur **Tailwind CSS v4**, **Radix UI**, **Motion** et **GSAP** (Carrousels Embla, Cartes 3D, Effets de particules, Modales animées).
- 🌓 **Support Thème Sombre / Clair** : Basculement instantané via `next-themes` sans effet de scintillement (Zero-FOUC).
- 📍 **Couverture Logistique Interactive** : Mise en valeur du réseau de distribution et des zones de couverture régionales (Tanger, Tétouan, Martil, Al Hoceïma, Larache).
- 🔍 **SEO & Données Structurées Avancées** : Intégration JSON-LD Schema.org (`LocalBusiness`, `Organization`), métadonnées dynamiques OpenGraph, `sitemap.ts` et `robots.ts` automatisés.
- 📱 **Conception 100% Responsive** : Expérience fluide et optimisée pour mobile, tablette et écrans haute résolution.

---

## 🛠️ Pile Technologique

| Domaine | Technologies |
| :--- | :--- |
| **Core Framework** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Headless CMS** | [Payload CMS v3](https://payloadcms.com/) avec Lexical RichText |
| **Base de Données** | [PostgreSQL](https://www.postgresql.org/) (Compatible Neon DB / Supabase / Self-hosted) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), DaisyUI 5, Radix UI Primitives, Lucide Icons |
| **Animations & Motion** | Motion (Framer Motion), GSAP 3 |
| **Images & Optimisation** | Sharp, Next.js Image Optimization |
| **Qualité & Formatage** | ESLint 9, Prettier avec Plugin Tailwind CSS |

---

## 📁 Structure du Projet

```text
startup-nextjs/
├── src/
│   ├── app/
│   │   ├── (app)/              # Application Web principale (Frontend Next.js)
│   │   │   ├── layout.tsx      # Layout racine, Polices & Fournisseurs de thèmes
│   │   │   ├── page.tsx        # Page d'accueil interactive
│   │   │   ├── providers.tsx   # Fournisseurs de contexte (Theme, State)
│   │   │   └── ...             # Pages (About, Services, Contact, Blog...)
│   │   ├── (payload)/          # Routes et Interface Admin de Payload CMS
│   │   ├── robots.ts           # Générateur dynamique de robots.txt
│   │   └── sitemap.ts          # Générateur dynamique de sitemap.xml
│   ├── collections/            # Schémas des collections Payload CMS (Users, Media, Pages...)
│   ├── components/             # Composants modulaires de l'interface
│   │   ├── Header/             # Navigation principale & Sélecteur de thème
│   │   ├── Footer/             # Pied de page & Coordonnées légales
│   │   ├── Hero/               # Section Hero avec animations
│   │   ├── Services/           # Vitrine des services logistiques
│   │   ├── SEO/                # Composants JSON-LD Structured Data
│   │   └── ui/                 # Composants d'interface atomiques (Boutons, Cartes 3D, Accordéons...)
│   ├── lib/                    # Utilitaires, Helpers & Initialisation Payload
│   ├── styles/                 # Feuilles de styles globales (index.css)
│   └── types/                  # Définitions TypeScript globales
├── public/                     # Assets statiques, Images, Logos & Favicons
├── payload.config.ts           # Configuration centrale de Payload CMS
├── next.config.js              # Configuration Next.js
└── package.json                # Dépendances et Scripts npm
```

---

## 🚀 Guide de Démarrage

### Prérequis

- **Node.js** : Version `20.x` ou supérieure recommandée
- **Gestionnaire de paquets** : `npm`, `pnpm` ou `yarn`
- **Instance PostgreSQL** : Locale ou Cloud (ex: Neon, Supabase, Railway)

### 1. Installation des dépendances

```bash
npm install
```

### 2. Configuration de l'environnement

Créez un fichier `.env.local` à la racine :

```bash
cp .env.local.example .env.local
```

Renseignez vos variables d'environnement :

```env
# URL du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Connexion PostgreSQL (Payload CMS)
DATABASE_URI=postgresql://postgres:password@localhost:5432/jim_distribution

# Clé secrète Payload CMS
PAYLOAD_SECRET=your-super-strong-secret-key-here
```

### 3. Lancer en mode Développement

```bash
npm run dev
```

- 🌐 **Site Web** : Accédez à [`http://localhost:3000`](http://localhost:3000)
- ⚙️ **Panneau d'Administration CMS** : Accédez à [`http://localhost:3000/admin`](http://localhost:3000/admin)

---

## 📜 Scripts Disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Démarre le serveur de développement Next.js |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance le serveur de production compilé |
| `npm run lint` | Exécute l'analyse statique du code avec ESLint |

---

## 🚢 Déploiement

### Déploiement sur Vercel (Recommandé)

1. Importez le dépôt GitHub sur [Vercel](https://vercel.com/).
2. Configurez les variables d'environnement (`DATABASE_URI`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SITE_URL`).
3. Déployez en un clic.

---

## 📄 Licence

Ce projet est la propriété exclusive de **JIM DISTRIBUTION**. Tous droits réservés.
