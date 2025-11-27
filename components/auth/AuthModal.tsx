"use client";

import { X } from "lucide-react";
import ModalPortal from "../common/ModalPortal";

export default function AuthModal({ open, onClose, children }: any) {
  if (!open) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Box */}
        <div className="relative bg-white rounded-xl shadow-xl w-[95%] max-w-4xl p-0 z-[10000]">
          {/* Close BTN */}
          <button
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 z-50"
            onClick={onClose}
          >
            <X size={22} />
          </button>

          {/* Content (Form + Image) */}
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}
