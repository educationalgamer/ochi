import useMediaQuery from "../hooks/useMediaQuery";

export const useIsSmall = () => useMediaQuery("(min-width: 640px)");
export const useIsMedium = () => useMediaQuery("(min-width: 768px)");
export const useIsLarge = () => useMediaQuery("(min-width: 1024px)");
export const useIsXLarge = () => useMediaQuery("(min-width: 1280px)");
export const useIsXXLarge = () => useMediaQuery("(min-width: 1536px)");
