"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import eSATHI from "../assets/images/sathi_logo.png";
import mSATHI from "../assets/images/mSathi.png";
import grahakSATHI from "../assets/images/grahakSathi.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const MotionCarouselItem = motion(CarouselItem); // Apply animation directly

const ProductShowcase = ({
  heading = "Our Products",
  items = [
    {
      id: "item-1",
      title: "eSATHI",
      summary:
        "A powerful ERP solution for large enterprises to streamline operations, optimize resources, and boost productivity with advanced automation, analytics, and seamless integrations.",
      url: "#",
      image: eSATHI
    },
    {
      id: "item-2",
      title: "mSATHI",
      summary:
        "A smart, easy-to-use ERP solution tailored for small businesses and shops. Manage inventory, billing, sales, and finances effortlessly.",
      url: "#",
      image: mSATHI,
    },
   
    {
      id: "item-4",
      title: "grahakSATHI",
      summary:
        "Launch your online store with grahakSATHI and start selling products effortlessly. From product listing to payments & order management, everything is handled in one platform.",
      url: "#",
      image: grahakSATHI,
    },
    {
        id: "item-3",
        title: "webSATHI",
        summary:
          "Build stunning, high-converting landing pages with webSATHI. No coding required just pick a layout, customize, and launch your website in minutes!",
        url: "#",
        image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
      },
   
  ],
}) => {
  const [carouselApi, setCarouselApi] = useState(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // Section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  // Card animation with stagger effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={sectionVariants}
      className="py-32"
    >
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
              {heading}
            </h2>
            <Link
              to='/product'
              className="group flex items-center gap-1 text-sm font-medium md:text-base lg:text-lg"
            >
              Explore More
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel setApi={setCarouselApi} className="relative left-[-1rem]">
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(10rem,calc(50vw-1500px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item, index) => (
              <MotionCarouselItem
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={cardVariants}
                custom={index}
                className="pl-4 md:max-w-[452px]"
              >
                <a href={item.url} className="group flex flex-col justify-between">
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full bg-accent w-full origin-bottom transition duration-300 group-hover:scale-[1.01]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full p-4 object-contain object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8  line-clamp-3 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm">
                    Read more{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </MotionCarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
};

export { ProductShowcase };
