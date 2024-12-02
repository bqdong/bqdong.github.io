import { onMounted, onUnmounted, ref } from "vue";

export function usePreferredTheme() {
  const darkModeMediaQuery = globalThis.window.matchMedia &&
    globalThis.window.matchMedia("(prefers-color-scheme: dark)");

  const theme = ref<"light" | "dark">("light");

  const handlePerferredThemeChange = (event: MediaQueryEvent) => {
    theme.value = event.matches ? "dark" : "light";
  };

  onMounted(() => {
    const dark = darkModeMediaQuery?.matches;
    if (dark) {
      theme.value = "dark";
    }
    darkModeMediaQuery?.addEventListener("change", handlePerferredThemeChange);
  });

  onUnmounted(() => {
    darkModeMediaQuery?.removeEventListener(
      "change",
      handlePerferredThemeChange,
    );
  });

  return theme;
}
