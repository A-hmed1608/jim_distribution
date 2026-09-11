"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog as BlogType } from "@/types/blog";

const defaultBlogPosts: BlogType[] = [
  {
    id: "1",
    slug: "future-of-fmcg-distribution",
    title: "L'Avenir de la Distribution Agroalimentaire & FMCG au Maroc",
    paragraph: "Découvrez les grandes mutations technologiques et logistiques qui transforment le secteur de la distribution au Maroc.",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1280",
    author: {
      name: "Direction Commerciale",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=128",
      designation: "JIM DISTRIBUTION",
    },
    tags: ["Distribution", "FMCG"],
    publishDate: "30 Nov 2024",
  },
  {
    id: "2",
    slug: "optimisation-chaine-logistique",
    title: "Optimisation de la Chaîne Logistique : Délais et Qualité Garantis",
    paragraph: "Comment une chaîne du froid rigoureuse et une flotte moderne assurent la fraîcheur de vos produits en rayons.",
    image: "https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg?auto=compress&cs=tinysrgb&w=1280",
    author: {
      name: "Équipe Logistique",
      image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=128",
      designation: "Operations Manager",
    },
    tags: ["Logistique", "Qualité"],
    publishDate: "28 Nov 2024",
  },
  {
    id: "3",
    slug: "partenariats-gagnants-marques",
    title: "Stratégies de Partenariats Gagnants avec les Grandes Marques",
    paragraph: "Accompagner les marques nationales et internationales pour maximiser leur visibilité et leur pénétration du marché.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1280",
    author: {
      name: "Ahmed Bennani",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=128",
      designation: "Responsable Partenariats",
    },
    tags: ["Business", "Partenariats"],
    publishDate: "25 Nov 2024",
  },
];

interface BlogProps {
  posts?: BlogType[];
  title?: string;
  subtitle?: string;
}

const Blog: React.FC<BlogProps> = ({
  posts,
  title = "Actualités & Perspectives",
  subtitle = "Découvrez nos derniers articles, analyses du marché et conseils logistiques",
}) => {
  const allPosts = posts && posts.length > 0 ? posts : defaultBlogPosts;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    allPosts.forEach((post) => {
      post.tags?.forEach((t) => cats.add(t));
    });
    return ["all", ...Array.from(cats)];
  }, [allPosts]);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return allPosts;
    }
    return allPosts.filter((p) =>
      p.tags?.some(
        (t) => t.toLowerCase() === selectedCategory.toLowerCase()
      )
    );
  }, [allPosts, selectedCategory]);

  return (
    <div className="w-full">
      {/* Filter and Sorting Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-border/50 dark:border-white/10 mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-muted/60 dark:bg-white/5 rounded-xl border border-border/40">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                }`}
              >
                {cat === "all" ? "Tous" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Cards Grid - 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:gap-8 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const postSlug = post.slug || post.id;
          const mainTag = post.tags?.[0] || "Actualité";

          return (
            <Card
              key={post.id || post.title}
              className="group flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 dark:bg-[#121c24]/90 dark:border-white/10 dark:hover:border-primary/50"
            >
              <div>
                <CardHeader className="p-2 sm:p-3 pb-0">
                  <Link
                    href={`/blog/${postSlug}`}
                    className="block relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-muted"
                  >
                    <Image
                      alt={post.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      src={post.image || "/images/blog/blog-01.jpg"}
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                      <Badge
                        variant="secondary"
                        className="bg-background/90 backdrop-blur-md text-foreground font-semibold text-[9px] sm:text-xs px-1.5 sm:px-2.5 py-0.5 sm:py-1 shadow-sm border border-border/40"
                      >
                        {mainTag}
                      </Badge>
                    </div>
                  </Link>
                </CardHeader>

                <CardContent className="p-2.5 sm:p-5 pt-2 sm:pt-4">
                  <h3 className="line-clamp-2 text-xs sm:text-lg lg:text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary leading-snug sm:leading-tight">
                    <Link href={`/blog/${postSlug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {post.paragraph && (
                    <p className="mt-1.5 sm:mt-2.5 line-clamp-2 text-[11px] sm:text-sm text-muted-foreground leading-relaxed">
                      {post.paragraph}
                    </p>
                  )}
                </CardContent>
              </div>

              {/* Author and Date Footer */}
              <div className="px-2.5 sm:px-5 pb-2.5 sm:pb-5 pt-2 flex items-center justify-between border-t border-border/40 dark:border-white/5 mt-auto">
                <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                  <div className="relative size-6 sm:size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
                    <Image
                      alt={post.author?.name || "Auteur"}
                      className="object-cover"
                      fill
                      sizes="32px"
                      src={post.author?.image || "/images/blog/author-02.png"}
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] sm:text-xs font-semibold text-foreground dark:text-white truncate">
                      {post.author?.name || "JIM DISTRIBUTION"}
                    </span>
                    {post.author?.designation && (
                      <span className="hidden sm:inline text-[10px] text-muted-foreground truncate">
                        {post.author.designation}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-[9px] sm:text-xs text-muted-foreground whitespace-nowrap pl-1 sm:pl-2 shrink-0">
                  {post.publishDate}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 bg-muted/20 rounded-2xl border border-dashed border-border/60">
          <p className="text-muted-foreground">Aucun article trouvé dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
