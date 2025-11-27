"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LocationPromptProps {
  onAllow: () => void | Promise<void>;
}

export default function LocationPrompt({ onAllow }: LocationPromptProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const asked = localStorage.getItem("location_prompt_shown");
    if (asked === "yes") return;

    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" as PermissionName })
        .then((status) => {
          if (status.state === "granted" || status.state === "denied") return;
          setOpen(true);
        });
    } else {
      setOpen(true);
    }
  }, []);

  const handleAllow = async () => {
    localStorage.setItem("location_prompt_shown", "yes");
    await onAllow();
    setOpen(false);
  };

  const handleDeny = () => {
    localStorage.setItem("location_prompt_shown", "yes");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* shadcn overlay */}
      <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />

      <DialogContent className="max-w-sm rounded-xl p-6 z-[60]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Cho phép truy cập vị trí?
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-600 mt-3">
          SenTrip cần quyền truy cập vị trí để gợi ý điểm đến và hiển thị thời tiết theo khu vực của bạn.
        </p>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={handleDeny}>Từ chối</Button>
          <Button onClick={handleAllow} className="bg-pink-500 hover:bg-pink-600">
            Cho phép
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
