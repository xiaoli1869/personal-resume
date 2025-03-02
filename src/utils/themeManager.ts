"use client";

interface ThemeAppearance {
  init(): void;
  setAppearance(
    theme: string,
    saveInStore?: boolean,
    dispatchEvent?: boolean
  ): void;
  getAppearance(): string;
  getOriginalAppearance(): string;
  _resetStylesOnLoad(): HTMLStyleElement;
}

export const ThemeManager: ThemeAppearance = {
  init() {
    const theme = localStorage.getItem("hs_theme") || "default";
    if (!document.querySelector("html")?.classList.contains("dark")) {
      this.setAppearance(theme);
    }
  },

  _resetStylesOnLoad(): HTMLStyleElement {
    const style = document.createElement("style");
    style.innerText = "*{transition: unset !important;}";
    style.setAttribute("data-hs-appearance-onload-styles", "");
    document.head.appendChild(style);
    return style;
  },

  setAppearance(theme: string, saveInStore = true, dispatchEvent = true) {
    const style = this._resetStylesOnLoad();

    if (saveInStore) {
      localStorage.setItem("hs_theme", theme);
    }

    if (theme === "auto") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "default";
    }

    const html = document.querySelector("html");
    if (html) {
      html.classList.remove("dark", "default", "auto");
      html.classList.add(this.getOriginalAppearance());
    }

    setTimeout(() => {
      style.remove();
    });

    if (dispatchEvent) {
      window.dispatchEvent(
        new CustomEvent("on-hs-appearance-change", { detail: theme })
      );
    }
  },

  getAppearance(): string {
    let theme = this.getOriginalAppearance();
    if (theme === "auto") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "default";
    }
    return theme;
  },

  getOriginalAppearance(): string {
    return localStorage.getItem("hs_theme") || "default";
  },
};

// 导出主题切换事件处理函数
export const initThemeHandlers = (): void => {
  // 初始化主题
  ThemeManager.init();

  // 监听系统主题变化
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (ThemeManager.getOriginalAppearance() === "auto") {
        ThemeManager.setAppearance("auto", false);
      }
    });

  const themeButtons = document.querySelectorAll<HTMLElement>(
    "[data-hs-theme-click-value]"
  );
  const themeSwitches = document.querySelectorAll<HTMLInputElement>(
    "[data-hs-theme-switch]"
  );

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-hs-theme-click-value");
      if (value) {
        ThemeManager.setAppearance(value, true, true);
      }
    });
  });

  themeSwitches.forEach((switchEl) => {
    switchEl.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      ThemeManager.setAppearance(target.checked ? "dark" : "default");
    });
    switchEl.checked = ThemeManager.getAppearance() === "dark";
  });

  window.addEventListener("on-hs-appearance-change", (e: Event) => {
    const customEvent = e as CustomEvent;
    themeSwitches.forEach((switchEl) => {
      switchEl.checked = customEvent.detail === "dark";
    });
  });
};
