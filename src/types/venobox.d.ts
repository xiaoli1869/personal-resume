declare module "venobox" {
  interface VenoBoxOptions {
    selector: string;
    fitView?: boolean;
    onPostOpen?: () => void;
    onPreClose?: () => void;
  }

  class VenoBox {
    constructor(options: VenoBoxOptions);
    destroy(): void;
  }

  export default VenoBox;
}
