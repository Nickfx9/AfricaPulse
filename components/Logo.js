import Image from "next/image";
import logo from "../public/images/africa-logo-2.jpg"; // Ensure this path is correct

export default function Logo() {
  return (
    <div className="relative w-32 h-20">
      <Image
        src={logo}
        alt="AfricaPulse Logo"
        fill // replaces layout="fill"
        style={{ objectFit: "cover" }} // replaces objectFit="cover"
        priority
      />
    </div>
  );
}
