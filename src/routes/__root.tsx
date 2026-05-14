import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="relative z-10 max-w-md">
        <div className="font-cinzel text-xs tracking-[0.4em] text-gold">LOST IN THE FLAMES</div>
        <h1 className="mt-4 font-display text-7xl md:text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl text-cream">This table isn't on our menu</h2>
        <p className="mt-3 text-sm text-cream/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3 text-xs font-semibold uppercase tracking-widest text-background shadow-gold"
          >
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-full border border-gold/40 px-7 py-3 text-xs font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GB Flame & Flavor — Premium Chinese & BBQ Restaurant in Karachi" },
      { name: "description", content: "Cinematic fine-dining in Karachi. Signature Chinese, BBQ and modern fusion." },
      { name: "author", content: "GB Flame & Flavor" },
      { property: "og:title", content: "GB Flame & Flavor" },
      { property: "og:description", content: "Where every bite feels like luxury." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GB Flame & Flavor" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative bg-background text-foreground overflow-x-hidden">
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <Outlet />
        <Footer />
        <WhatsAppFloat />
      </main>
    </QueryClientProvider>
  );
}
