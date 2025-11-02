import image from "@/public/image.png";
import Image from "next/image";
import LoginForm from "../_components/LoginForm";

export default function Page() {
  return (
    <div className="grid grid-cols-2  min-h-screen">
      <div className=" w-full h-full relative">
        <Image
          src={image}
          alt="halo"
          fill
          placeholder="blur"
          className="object-cover object-top"
        />
      </div>
      <div className="flex mx-40 items-center">
        <LoginForm />
      </div>
    </div>
  );
}
