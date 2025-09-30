import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initSmoothWheelScroll } from "@/lib/smooth-scroll";

const cleanup = initSmoothWheelScroll();
createRoot(document.getElementById("root")!).render(<App />);

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    cleanup();
  });
}
