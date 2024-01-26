import { getServerSession } from "next-auth";
import AuthButton from "./components/button/AuthButton";

export default function Home() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
