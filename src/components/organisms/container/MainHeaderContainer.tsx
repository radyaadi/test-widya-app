import TempLogo from "@/components/atoms/logo/TempLogo";
import UserMenuDrop from "../../molecules/dropdown/UserMenuDrop";
import useCookies from "@/libs/hooks/use-cookies";
import { UserProps } from "@/libs/interface";

export async function getCurrentAuthUser(userId: string, token: string) {
  const response = await fetch(`http://localhost:5001/user/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (response.ok) {
    return result.payload;
  } else {
    console.log(result.message);
  }
}

export default async function MainHeaderContainer() {
  const { userId, token } = useCookies();
  const currentUser: UserProps = await getCurrentAuthUser(userId, token);

  return (
    <div className="flex justify-between p-5 lg:px-10">
      <TempLogo className="text-md sm:text:lg" />
      <UserMenuDrop {...currentUser} />
    </div>
  );
}
