import "solid-js"

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "lit-puzzle": any;
      "video-component": any;
      "newsletter-component": any;
    }
  }
}
