"use client";

interface CursorMoveConfig {
  selector: string;
  transitionStyle?: string;
  moveScale?: number;
  rotateScale?: number;
}

export class CursorMoveEffect {
  private elements: NodeListOf<HTMLElement>;
  private config: Required<CursorMoveConfig>;
  private boundMouseMoveHandler: (e: MouseEvent) => void;

  constructor(config: CursorMoveConfig) {
    this.config = {
      selector: config.selector,
      transitionStyle:
        config.transitionStyle ||
        "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      moveScale: config.moveScale || 0.01,
      rotateScale: config.rotateScale || 0.01,
    };

    this.elements = document.querySelectorAll<HTMLElement>(
      this.config.selector
    );
    this.boundMouseMoveHandler = this.handleMouseMove.bind(this);
    this.init();
  }

  private init() {
    document.addEventListener("mousemove", this.boundMouseMoveHandler);
  }

  private handleMouseMove(e: MouseEvent) {
    const { clientX, clientY } = e;

    this.elements.forEach((element) => {
      element.style.transition = this.config.transitionStyle;
      element.style.transform = `translate(${
        clientX * this.config.moveScale
      }px, ${clientY * this.config.moveScale}px) rotate(${
        (clientX + clientY) * this.config.rotateScale
      }deg)`;
    });
  }

  destroy() {
    document.removeEventListener("mousemove", this.boundMouseMoveHandler);
  }
}

export const initCursorEffect = (): void => {
  new CursorMoveEffect({
    selector: ".move-with-cursor",
  });
};
