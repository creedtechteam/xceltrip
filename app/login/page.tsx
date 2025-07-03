"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConfig, useSignMessage, useConnect } from "wagmi";
import type { Connector } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react"; // ✅ Lucide check icon

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export default function LoginPage() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const config = useConfig();
  const { signMessageAsync } = useSignMessage();
  const { connect, connectors, status, error: connectError } = useConnect();

  const noInjectedWallet = connectors.every(
    (conn: Connector) => conn.name !== "MetaMask" && conn.name !== "Injected"
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const hasAuthenticated = useRef(false);

  useEffect(() => {
    if (!isConnected || !address || hasAuthenticated.current) return;

    async function authenticateWallet() {
      hasAuthenticated.current = true;
      setError(null);
      setLoading(true);

      try {
        const nonceRes = await fetch(`${BASE_URL}/api/auth/nonce/?wallet=${address}`);
        if (!nonceRes.ok) throw new Error("❌ Failed to fetch nonce");

        const { message: messageToSign } = await nonceRes.json();
        const signature = await signMessageAsync({ message: messageToSign });

        const payload = {
          wallet_address: address,
          signed_message: signature,
          original_message: messageToSign,
        };

        const loginRes = await fetch(`${BASE_URL}/api/auth/wallet-signin/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!loginRes.ok) {
          const errorData = await loginRes.json();
          throw new Error(errorData.message || "❌ Wallet login failed");
        }

        const { access, refresh } = await loginRes.json();
        localStorage.setItem("xceltrip_token", access);
        localStorage.setItem("xceltrip_refresh", refresh);

        setSuccess(true);
        setLoading(false);

        setTimeout(() => {
          setShowCheck(true);
        }, 1500);

        setTimeout(() => {
          router.push("/home");
        }, 2500);
      } catch (err: any) {
        console.error("❌ Auth failed:", err);
        setError(err.message || "❌ Something went wrong");
        setLoading(false);
        hasAuthenticated.current = false;
      }
    }

    authenticateWallet();
  }, [isConnected, address, signMessageAsync, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 relative">
      {/* Logo top-left */}
      <div className="absolute top-6 left-6">
        <Image src="/images/favicon1.png" alt="XCELTRIP Logo" width={50} height={50} priority />
      </div>

      {/* Login Card */}
      <div className="max-w-sm w-full text-center space-y-8 p-8 bg-black/30 rounded-xl border border-gray-700 shadow-2xl relative">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/favicon1.png"
            alt="XCELTRIP Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Welcome to XCELTRIP</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sign in securely using your crypto wallet
          </p>
        </div>

        <div className="relative inline-block mb-4">
          <ConnectButton
            chainStatus="icon"
            showBalance={false}
            accountStatus="address"
          />
          {(loading || status === "pending") && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-xl cursor-not-allowed">
              <span className="text-blue-400 font-semibold animate-pulse">
                Authenticating...
              </span>
            </div>
          )}
        </div>

        {error && (
          <p className="text-xs text-red-500 mb-4 select-text">{error}</p>
        )}

        {noInjectedWallet && (
          <p className="text-xs text-red-400 mb-4 select-text">
            🔐 No browser wallet detected. Please{" "}
            <a
              href="https://metamask.io/download/"
              className="underline text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              install MetaMask
            </a>{" "}
            or open this site in a crypto-enabled browser.
          </p>
        )}

        <p className="text-xs text-gray-500 select-text">
          Your wallet is your secure passport to access Xceltrip
        </p>
      </div>

      {/* ✅ Success Modal */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 border-4 border-green-500 text-white px-8 py-6 rounded-2xl max-w-sm text-center shadow-2xl">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/favicon1.png"
                  alt="Success Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Login Successful!</h2>
              <p className="text-sm text-white/90 mb-4">
                Welcome back to <span className="font-semibold">XCELTRIP</span>. You're being redirected...
              </p>

              {!showCheck ? (
                <div className="loader mx-auto w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <CheckCircle2 className="mx-auto text-green-400 w-10 h-10 animate-bounce" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
