"use client";

import { useEffect, useRef } from "react";
import {
  initThemeHandlers,
  initCarousels,
  initContactForm,
  initCursorEffect,
  initClipboard,
} from "@/utils";
import { usePathname } from "next/navigation";
import { IStaticMethods } from "preline/preline";
import { Carousel } from "@/utils/carousel";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function Initializer() {
  const path = usePathname();
  const carouselsRef = useRef<Carousel[]>([]);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        // 加载 Preline
        await import("preline/preline");
        if (!mounted) return;

        window.HSStaticMethods.autoInit();

        // 初始化主题
        initThemeHandlers();

        // 初始化轮播图
        if (mounted) {
          carouselsRef.current = initCarousels();
        }

        // 初始化其他功能
        initContactForm();
        initCursorEffect();
        initClipboard();
      } catch (error) {
        console.error("初始化失败:", error);
      }
    };

    init();

    // 清理函数
    return () => {
      mounted = false;
    };
  }, [path]);

  return null; // 这个组件不需要渲染任何内容
}
