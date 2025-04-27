import Link from "next/link"; 
import AfricaPulse from "./AfricaPulse";

export default function Header() {
  return(
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md flex items-center gap-4">
      <Link href="/" legacyBehavior>
        <a>
          <div className="w-32 h-20 overflow-hidden cursor-pointer">
            <AfricaPulse />
          </div>
        </a>
      </Link>
      <h1 className="text-2xl font-bold">AfricaPulse</h1>
    </header>
  );
}



