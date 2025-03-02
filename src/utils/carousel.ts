"use client";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CarouselConfig {
  selector: string;
  navigation: {
    nextEl: string;
    prevEl: string;
  };
}

export class Carousel {
  private swiper: Swiper | null = null;
  private selector: string;
  private config: CarouselConfig;

  constructor(config: CarouselConfig) {
    this.selector = config.selector;
    this.config = config;
    this.init();
  }

  private init() {
    try {
      const element = document.querySelector(this.selector);
      if (!element) {
        console.warn(`Element with selector ${this.selector} not found`);
        return;
      }

      this.swiper = new Swiper(this.selector, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false, // 先禁用 loop 模式，等初始化完成后再启用
        navigation: {
          nextEl: this.config.navigation.nextEl,
          prevEl: this.config.navigation.prevEl,
        },
        breakpoints: {
          1: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        },
      });

      // 确保有足够的幻灯片后再启用 loop 模式
      if (this.swiper && element.children.length > 1) {
        this.swiper.params.loop = true;
        this.swiper.update();
      }
    } catch (error) {
      console.error("Failed to initialize Swiper:", error);
    }
  }

  destroy() {
    try {
      if (this.swiper) {
        // 先禁用 loop 模式，避免销毁时的问题
        this.swiper.params.loop = false;
        this.swiper.update();

        // 延迟一帧再销毁，确保 DOM 更新完成
        requestAnimationFrame(() => {
          if (this.swiper) {
            this.swiper.destroy(true, true); // true, true 表示删除所有事件监听器和样式
            this.swiper = null;
          }
        });
      }
    } catch (error) {
      console.error("Failed to destroy Swiper:", error);
      this.swiper = null;
    }
  }
}

export const initCarousels = (): Carousel[] => {
  const carousels = [
    new Carousel({
      selector: ".review-carousel",
      navigation: {
        nextEl: ".review-carousel-button-next",
        prevEl: ".review-carousel-button-prev",
      },
    }),
    new Carousel({
      selector: ".blog-carousel",
      navigation: {
        nextEl: ".blog-carousel-button-next",
        prevEl: ".blog-carousel-button-prev",
      },
    }),
  ];
  return carousels;
};
