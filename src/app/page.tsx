import {cookies} from "next/headers";

export default function Home() {
  const cookieStore = cookies()
  const name = cookieStore.get("name");
  return (
    <p>Hi, {name?.value}!</p>
  );
}
