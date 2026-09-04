"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import VideoModal from "@/components/video-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Eye, Sparkles } from "lucide-react";

export interface MediaItem {
  id: string;
  type: "video" | "image";
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoId?: string; // Pour les vidéos YouTube
}

// 📌 لائحة الفيديوهات والصور - تقدر تزيد أو تنقص فيها كيفما بغيتي
export const mediaItems: MediaItem[] = [
  {
    id: "1",
    type: "video",
    category: "Vidéo d'Entreprise",
    title: "Découvrez notre expertise logistique & chaîne d'approvisionnement",
    description:
      "Une immersion au cœur des infrastructures de JIM DISTRIBUTION : gestion des stocks, chaîne du froid et distribution B2B.",
    thumbnail: "/images/video/image.png",
    videoId: "L61p2uyiMSo",
  },
  {
    id: "2",
    type: "image",
    category: "Infrastructures",
    title: "Entrepôts modernes & Plateforme logistique",
    description:
      "Espaces de stockage haute capacité répondant aux normes internationales d'hygiène et de sécurité alimentaire.",
    thumbnail: "/images/logo_jim1.jpg",
  },
  {
    id: "3",
    type: "image",
    category: "Flotte & Transport",
    title: "Flotte de transport frigorifique et de livraison rapide",
    description:
      "Véhicules équipés pour garantir la chaîne du froid et assurer une livraison ponctuelle dans tout le Nord du Maroc.",
    thumbnail: "/images/blog/blog-01.jpg",
  },
  {
    id: "4",
    type: "video",
    category: "Distribution FMCG",
    title: "Représentation commerciale & Partenariats de marques",
    description:
      "Comment nous accompagnons les grandes marques agroalimentaires pour conquérir le marché marocain.",
    thumbnail: "/images/blog/blog-02.jpg",
    videoId: "L61p2uyiMSo",
  },
];

export default function Video() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = (videoId?: string) => {
    if (videoId) {
      setActiveVideoId(videoId);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="container px-4">
          <SectionTitle
            title="DÉCOUVREZ NOTRE EXPERTISE EN IMAGES"
            paragraph="Plongez dans les coulisses de JIM DISTRIBUTION : nos infrastructures logistiques de pointe, notre flotte de transport et nos opérations quotidiennes."
            center
            mb="36px"
          />

          <div className="relative mx-auto max-w-5xl px-0 sm:px-10 md:px-14">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {mediaItems.map((item, index) => (
                  <CarouselItem key={item.id} className="pl-2 sm:pl-4 w-full">
                    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white dark:bg-gray-900 shadow-xl transition-all duration-300">
                      {/* Media Display Area with responsive aspect ratio */}
                      <div className="relative aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden bg-black/5 dark:bg-black/40">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                          priority={index === 0}
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                        {/* Badge Top Left */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-white border border-white/20">
                            {item.type === "video" ? (
                              <>
                                <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                                {item.category}
                              </>
                            ) : (
                              <>
                                <Sparkles className="size-3 text-primary" />
                                {item.category}
                              </>
                            )}
                          </span>
                        </div>

                        {/* Interactive Action Icon (Center Play button for Video or Eye for Image) */}
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              type="button"
                              onClick={() => handlePlayVideo(item.videoId)}
                              aria-label={`Lire la vidéo : ${item.title}`}
                              className="group/btn relative flex size-14 sm:size-16 md:size-20 items-center justify-center rounded-full bg-primary/95 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-primary cursor-pointer ring-4 ring-white/40"
                            >
                              <Play className="ml-1 size-6 sm:size-7 md:size-8 fill-white text-white transition-transform group-hover/btn:scale-110" />
                              <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                            </button>
                          </div>
                        )}

                        {item.type === "image" && (
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                            <span className="flex size-7 sm:size-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20">
                              <Eye className="size-3.5 sm:size-4" />
                            </span>
                          </div>
                        )}

                        {/* Text Caption at Bottom of Slide */}
                        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:p-8 text-white z-10">
                          <h3 className="font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl line-clamp-2 drop-shadow-md leading-snug">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 max-w-3xl drop-shadow">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Arrows with touch-friendly responsive positioning */}
              <CarouselPrevious className="absolute left-2 sm:-left-5 lg:-left-12 top-1/2 -translate-y-1/2 size-9 sm:size-11 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all cursor-pointer backdrop-blur-sm z-20" />
              <CarouselNext className="absolute right-2 sm:-right-5 lg:-right-12 top-1/2 -translate-y-1/2 size-9 sm:size-11 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all cursor-pointer backdrop-blur-sm z-20" />
            </Carousel>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 left-0 -z-10 h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none" />
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        channel="youtube"
        videoId={activeVideoId || "L61p2uyiMSo"}
      />
    </>
  );
}
