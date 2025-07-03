"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import { WagmiProvider, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, polygon } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

// ✅ WalletConnect project ID
const projectId = "91ec24582a926e8fbcc720bc88f987cd";

const config = getDefaultConfig({
  appName: "XCELTRIP",
  projectId,
  appUrl: "https://xceltrip-two.vercel.app/", // ✅ Add this line
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>XCELTRIP</title>
      </head>
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {mounted ? (
              <RainbowKitProvider>{children}</RainbowKitProvider>
            ) : (
              <div className="text-white bg-black min-h-screen flex items-center justify-center">
                Loading...
              </div>
            )}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
