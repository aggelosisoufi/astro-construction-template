import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.css";

type ImgSrc = string | { src: string }; // supports plain URLs or Astro ImageMetadata.src
type CarouselImage = { src: ImgSrc; alt?: string };

export interface EmblaCarouselProps {
  images: CarouselImage[];
  options?: EmblaOptionsType;   // e.g., { loop: true, align: "start" }
  autoplay?: boolean;           // enable autoplay plugin
  delayMs?: number;             // autoplay delay
}

const getUrl = (s: ImgSrc) => (typeof s === "string" ? s : s.src);

export default function EmblaCarousel({
  images,
  options = { loop: false, align: "center" },
  autoplay = false,
  delayMs = 4000,
}: EmblaCarouselProps) {
  const plugins = autoplay ? [Autoplay({ delay: delayMs, stopOnMouseEnter: true })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnapCount(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, i) => (
            <div className="embla__slide" key={i}>
              <img
                className="embla__slide__img"
                src={getUrl(img.src)}
                alt={img.alt ?? ""}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__button embla__button--prev" onClick={scrollPrev} aria-label="Previous slide">
        ‹
      </button>
      <button className="embla__button embla__button--next" onClick={scrollNext} aria-label="Next slide">
        ›
      </button>

      <div className="embla__dots" role="tablist" aria-label="Carousel Pagination">
        {Array.from({ length: snapCount }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to slide ${i + 1}`}
            className={`embla__dot${i === selectedIndex ? " is-selected" : ""}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
