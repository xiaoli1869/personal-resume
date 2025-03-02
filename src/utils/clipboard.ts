"use client";

import ClipboardJS from "clipboard";

export const initClipboard = (): void => {
  try {
    const clipboard = new ClipboardJS("[data-clipboard-text]");

    clipboard.on("success", (e) => {
      const button = e.trigger as HTMLElement;
      const originalText = button.querySelector("span")?.textContent;
      const successText = button.getAttribute("data-clipboard-success-text");

      if (originalText && successText) {
        const span = button.querySelector("span");
        if (span) {
          span.textContent = successText;
          setTimeout(() => {
            span.textContent = originalText;
          }, 2000);
        }
      }
    });
  } catch (error) {
    console.warn("Clipboard initialization failed:", error);
  }
};
