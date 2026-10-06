import { createBrowserRouter, useRouteError } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Capabilities from "./pages/Capabilities";
import Methodology from "./pages/Methodology";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import BrmDwm from "./pages/BrmDwm";
import { Kicker, Btn } from "./components/ui";

function RootErrorBoundary() {
  const error = useRouteError();
  console.error("Application error:", error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#07090e] px-6 text-center text-white">
      <Kicker tone="accent">System Alert</Kicker>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-sm text-slate-400">
        An unexpected error occurred while loading this page.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Btn to="/">Return to Safety</Btn>
        <button
          onClick={() => window.location.reload()}
          className="cursor-pointer rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition hover:border-[#B4FF00] hover:text-[#B4FF00]"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1320px] flex-col justify-center px-6 lg:px-10">
      <Kicker>Not found</Kicker>
      <h1 className="mt-6 font-display text-6xl font-extrabold tracking-[-0.03em]">This page slipped past.</h1>
      <p className="mt-6 max-w-md text-muted">The address you followed isn't part of the Envista site.</p>
      <div className="mt-8"><Btn to="/">Back to home</Btn></div>
    </section>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: RootErrorBoundary,
    children: [
      { index: true, Component: Home },
      { path: "capabilities", Component: Capabilities },
      { path: "platform", Component: Capabilities },
      { path: "platform-capabilities", Component: Capabilities },
      { path: "methodology", Component: Methodology },
      { path: "about", Component: About },
      { path: "about-us", Component: About },
      { path: "insights", Component: Insights },
      { path: "industries", Component: Industries },
      { path: "case-studies", Component: CaseStudies },
      { path: "faq", Component: Faq },
      { path: "contact", Component: Contact },
      { path: "contact-us", Component: Contact },
      { path: "solutions/brm-dwm", Component: BrmDwm },
      { path: "brm-dwm", Component: BrmDwm },
      { path: "*", Component: NotFound },
    ],
  },
]);
