declare module "*.vue";

type MediaQueryListEvent = Event & {
  readonly matches: boolean; // Indicates if the media query matches the current state
  readonly media: string; // The media query string
};

type MediaQueryList =
  & EventTarget
  & []
  & {
    readonly matches: boolean;
    readonly media: string;
    addEventListener(
      type: "change",
      listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void,
      options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener(
      type: "change",
      listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void,
      options?: boolean | EventListenerOptions,
    ): void;
  };

type MediaQueryEvent = Event & {
  readonly matches: boolean;
  readonly media: string;
};

interface Window {
  matchMedia?: (mediaQueryString: string) => MediaQueryList;
}
