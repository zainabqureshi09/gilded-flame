import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => {
  // Detect if we are running in a Vercel environment
  const isVercel = !!process.env.VERCEL;

  return {
    plugins: [
      tanstackStart({
        server: {
          // Only use custom server entry if not on Vercel, 
          // as the current src/server.ts is Cloudflare-specific.
          entry: isVercel ? undefined : "src/server.ts",
        },
      }),
      react(),
      tailwindcss(),
      tsconfigPaths(),
      // Only enable Cloudflare plugin if we are in production and NOT on Vercel
      mode === "production" && !isVercel ? cloudflare() : null,
    ].filter(Boolean),
  };
});
