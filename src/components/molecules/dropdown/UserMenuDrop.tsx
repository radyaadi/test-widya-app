"use client";

import Link from "next/link";
import DropDownProvider from "./dropdown-provider";
import Button from "@/components/atoms/button/Button";
import { ChevronUp } from "lucide-react";
import { deleteCookies } from "@/libs/actions/cookies";
import { useRouter } from "next/navigation";
import { UserProps } from "@/libs/interface";

export default function UserMenuDrop({ _id, name }: UserProps) {
  const router = useRouter();

  const onLogout = async () => {
    await deleteCookies("TOKEN");
    await deleteCookies("userId");
    router.replace("/sign-in");
  };

  return (
    <DropDownProvider
      label={name}
      triggerStyle="border-none hover:bg-emerald-500"
      position="right"
      triggerIcon={ChevronUp}
    >
      <Link
        href={`/profile/${_id}`}
        className="block w-44 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      >
        Profile
      </Link>
      <Button
        onClick={onLogout}
        className="w-full rounded-none border-none bg-transparent text-start font-normal text-gray-700 hover:bg-gray-200"
      >
        Logout
      </Button>
    </DropDownProvider>
  );
}
