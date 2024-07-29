import NewUserForm from "@/components/user/NewUserForm";
import Image from "next/image";

export default function Home() {
  return (
    <main >
       <h1 className="text-3xl font-black text-center">USER REGISTRATION</h1>
       <NewUserForm/>
    </main>
  );
}
