"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConfig, useSignMessage } from "wagmi";
import type { Connector } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const config = useConfig();
  const { signMessageAsync } = useSignMessage();

  const connectors = config.connectors as Connector[];
  const noInjectedWallet = connectors.every(
    (conn: Connector) => conn.name !== "MetaMask" && conn.name !== "Injected"
  );

  // UI State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isConnected || !address) return;

    async function authenticateWallet() {
      setError(null);
      setLoading(true);

      try {
        // 1. Fetch nonce from backend
        const res = await fetch(`/api/auth/nonce?address=${address}`);
        if (!res.ok) throw new Error("Failed to fetch nonce");
        const { nonce } = await res.json();

        // 2. Prompt user to sign nonce
        const signature = await signMessageAsync({ message: nonce });

        // 3. Send login request
        const loginRes = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ address, signature }),
        });

        if (!loginRes.ok) {
          const errorData = await loginRes.json();
          throw new Error(errorData.message || "Login failed");
        }

        const data = await loginRes.json();

        // 4. Save token
        localStorage.setItem("xceltrip_token", data.token);

        // 5. Redirect user
        router.push("/home");
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
        setLoading(false);
      }
    }

    authenticateWallet();
  }, [isConnected, address, signMessageAsync, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 relative">
      {/* Top-left logo */}
      <div className="absolute top-6 left-6">
        <Image
          src="/images/favicon1.png"
          alt="Top Left Logo"
          width={50}
          height={50}
        />
      </div>

      {/* Center Card */}
      <div className="max-w-sm w-full text-center space-y-6 p-6 bg-black/30 rounded-xl border border-gray-700 shadow-2xl relative">
        {/* Center Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/favicon1.png"
            alt="XCELTRIP Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold">Welcome to XCELTRIP</h1>
          <p className="mt-2 text-gray-400 text-sm">
            Sign in securely using your crypto wallet
          </p>
        </div>

        {/* Wallet Connect Button with loading overlay */}
        <div className="relative inline-block">
          <ConnectButton
            chainStatus="icon"
            showBalance={false}
            accountStatus="address"
          />
          {loading && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-xl cursor-not-allowed select-none">
              <span className="text-blue-400 font-semibold animate-pulse">
                Authenticating...
              </span>
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <p className="text-xs text-red-500 mt-4 select-text">
            ⚠️ {error}
          </p>
        )}

        {/* Fallback for no injected wallet */}
        {noInjectedWallet && (
          <p className="text-xs text-red-400 mt-4 select-text">
            🔐 No browser wallet detected. Please{" "}
            <a
              href="https://metamask.io/download/"
              className="underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              install MetaMask
            </a>{" "}
            or open this site on a crypto wallet-enabled browser.
          </p>
        )}

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 select-text">
          Your wallet is your secure passport to access Xceltrip
        </p>
      </div>
    </div>
  );
}
