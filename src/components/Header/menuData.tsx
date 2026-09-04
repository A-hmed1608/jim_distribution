import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "À Propos",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Actualités",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact & Devis",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Navigation",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "À Propos",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact & Devis",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Articles & Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog (Sidebar)",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Détails Article",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
];
export default menuData;
