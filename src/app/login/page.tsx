import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export default function Home() {
  async function addCookieAndRedirect(formData: FormData) {
    "use server"
    const name = formData.get("name")!;
    cookies().set("name", name as string)
    redirect("/")
  }
  return (
    <form action={addCookieAndRedirect}>
      <p>Hello, world</p>
      <label>
        <div>Your name:</div>
        <input name="name"/>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
