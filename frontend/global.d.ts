export {};

declare global {
  interface Window {
    [jQuery: string]: any;
  }
}
