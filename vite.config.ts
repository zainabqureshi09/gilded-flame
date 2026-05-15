import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { nitro } from "nitro/vite";

export default defineConfig(({ mode }) => {
  const isVercel = !!process.env.VERCEL;

  return {
    plugins: [
      tanstackStart({
        server: {
          entry: isVercel ? undefined : "src/server.ts",
        },
      }),
      isVercel ? nitro() : null,
      react(),
      tailwindcss(),
      tsconfigPaths(),
      mode === "production" && !isVercel ? cloudflare() : null,
    ].filter(Boolean),
  };
});
