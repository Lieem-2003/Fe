"use client";

import { useState } from "react";
import Image from "next/image";
import { LoginForm } from "../auth/login-form";
import { SignupForm } from "../auth/signup-form";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "@/components/contexts/AuthContext";

import {
  User,
  Gift,
  Clock,
  Ticket,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

export default function UserMenu({
  mobile,
}: {
  user: any;
  mobile?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<null | "login" | "signup">(null);
  const { user } = useAuth();

  /* ===========================================================
      MÀN CHƯA LOGIN → SHOW 2 BUTTON
     =========================================================== */
  if (!user) {
    return (
      <>
        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 border rounded-full"
            onClick={() => setModal("login")}
          >
            Đăng nhập
          </button>

          <button
            className="px-4 py-2 rounded-full bg-black text-white"
            onClick={() => setModal("signup")}
          >
            Đăng ký
          </button>
        </div>

        {/* MODAL LOGIN/SIGNUP */}
        <AuthModal open={modal !== null} onClose={() => setModal(null)}>
          {modal === "login" && <LoginForm onSuccess={() => setModal(null)} onSwitchSignup={() => setModal("signup")} />}
          {modal === "signup" && <SignupForm />}
        </AuthModal>
      </>
    );
  }

  /* ===========================================================
      MÀN ĐÃ LOGIN → SHOW MENU DROPDOWN
     =========================================================== */
  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Image
          src={user.avatar || "/avatar.png"}
          alt="avatar"
          width={38}
          height={38}
          className="rounded-full"
        />

        <div className="text-sm leading-tight">
          <p className="font-medium">Chào, {user.name}</p>
          <Image src={"/Gold.png"}
            alt="rank"
            width={15}
            height={15}>{user.rank}</Image>
        </div>
      </div>

      {open && (
        <div className="absolute right-0 mt-3 w-60 bg-white shadow-xl rounded-xl p-3 z-50">
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <User size={18} /> Thông tin cá nhân
            </li>
            <li className="flex items-center gap-2">
              <Gift size={18} /> Quà của tôi
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} /> Chuyến đi của tôi
            </li>
            <li className="flex items-center gap-2">
              <Ticket size={18} /> Gói cước của tôi
            </li>
            <li className="flex items-center gap-2">
              <Heart size={18} /> Danh sách yêu thích
            </li>
            <li className="flex items-center gap-2">
              <Settings size={18} /> Cài đặt
            </li>

            <li className="flex items-center gap-2 text-red-500 cursor-pointer">
              <LogOut size={18} />
              Đăng xuất
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
