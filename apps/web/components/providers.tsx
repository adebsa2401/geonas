"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TRPCReactProvider } from "@workspace/trpc/client";
import { Toaster } from "@workspace/ui/components/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        forcedTheme="light"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
        <Toaster />
      </NextThemesProvider>
    </TRPCReactProvider>
  );
}
