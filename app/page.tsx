'use client'

import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex flex-col gap-8 items-center text-center max-w-md">
        <h1 className="text-3xl font-bold text-black">
          TikTok Analytics Pro
        </h1>
        <p className="text-gray-600">
          Connecte ton compte TikTok et analyse tes performances comme un pro.
        </p>
        <button
          onClick={() => signIn('tiktok')}
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Se connecter avec TikTok
        </button>
        <p className="text-xs text-gray-400">
          Analyse avancée • Essai gratuit 7 jours
        </p>
      </div>
    </main>
  )
}
