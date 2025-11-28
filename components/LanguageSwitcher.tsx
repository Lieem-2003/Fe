"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const [lang, setLang] = useState<"EN" | "VI" | "CN">("EN");

  const languages = [
    { code: "EN", label: "English" },
    { code: "VI", label: "Tiếng Việt" },
    { code: "CN", label: "中文" },
  ];

  // Load ngôn ngữ đã lưu
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved as any);
  }, []);

  // Lưu khi đổi
  const changeLang = (code: any) => {
    setLang(code);
    localStorage.setItem("lang", code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`flex items-center gap-1 cursor-pointer text-sm select-none ${className}`}
        >
          <Globe size={18} />
          <span>{lang}</span>
          <span>▾</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        {languages.map((l) => (
          <DropdownMenuItem key={l.code} onClick={() => changeLang(l.code)}>
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
