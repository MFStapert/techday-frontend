import "solid-js"

// We need to declare the WebComponents we use in the SolidJS namespace for Solid to understand them
// https://github.com/solidjs/solid/issues/616
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "lit-puzzle": any;
      "video-component": any;
      "newsletter-component": any;
    }
  }
}
