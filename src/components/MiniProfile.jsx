"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={
          session?.user?.image ||
          "https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png"
        }
        alt="instagram"
        className="w-16 h-16 rounded-full border p-[2px] object-cover"
      />
      <div>
        <h1 className="font-bold">{session?.user?.username}</h1>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      {session ? (
        <button className="text-blue-500" onClick={signOut}>
          Log Out
        </button>
      ) : (
        <button className="text-blue-500" onClick={signIn}>
          Sign In
        </button>
      )}
    </div>
  );
}
