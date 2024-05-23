"use server";

import { cookies } from "next/headers";

const useCookies = () => {
  const userId: string = cookies().get("userId")?.value!;
  const token: string = cookies().get("TOKEN")?.value!;
  const deleteCookies = () => cookies().delete("userId");

  return {
    userId,
    token,
    deleteCookies,
  };
};

export default useCookies;
