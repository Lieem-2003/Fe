"use client";

import Image from "next/image";
import NavigationMenu from "./NavigationMenu";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

import { Search, Bell, Globe, Menu, X } from "lucide-react";
import { useState } from "react";

import AuthModal from "../auth/AuthModal";
import { LoginForm } from "../auth/login-form";
import { SignupForm } from "../auth/signup-form";
import Weather from "../Weather";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModal, setAuthModal] = useState<null | "login" | "signup">(null);

  const user = null; // sẽ thay bằng auth sau này

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">

      <div className="w-full flex items-center justify-between py-4 px-4 md:px-6 lg:px-12">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" width={70} height={38} alt="logo" />

          {/* Weather */}
          <Weather />
        </div>

        {/* CENTER */}
        <div className="hidden md:flex justify-center flex-1">
          <NavigationMenu />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Search size={20} className="cursor-pointer" />

          <div className="relative cursor-pointer">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-[7px] h-[7px] bg-pink-500 rounded-full" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer text-sm">
            <Globe size={18} />
            <span>EN</span>
            <span>▾</span>
          </div>

          {/* Desktop user menu */}
          <div className="hidden md:block">
            <UserMenu user={user} />
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <MobileMenu
          user={user}
          close={() => setMobileOpen(false)}
          openAuth={(type: "login" | "signup") => {
            setMobileOpen(false); // đóng menu
            setAuthModal(type);   // mở modal
          }}
        />
      )}

      {/* AUTH MODAL */}
      <AuthModal open={authModal !== null} onClose={() => setAuthModal(null)}>
        {authModal === "login" && (
          <LoginForm 
            onSuccess={() => setAuthModal(null)} 
            onSwitchSignup={() => setAuthModal("signup")}
          />
        )}

        {authModal === "signup" && <SignupForm />}
      </AuthModal>
    </header>
  );
}
