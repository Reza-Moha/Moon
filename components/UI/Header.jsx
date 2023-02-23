import Logo from "@/components/UI/Logo";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="fixed inset-0 h-20 bg-transparent ">
        <div className="container h-full max-w-4xl flex justify-between items-center text-center">
          <Link href="/">
            <Logo fill="#ffffff" width="100" height="100" />
          </Link>
          <nav className="text-gray-100">
            <ul className="grid grid-cols-2 grid-rows-1 justify-items-center text-center">
              <li>
                <Link
                  href="#"
                  className="text-xs p-2 bg-slate-900 rounded-md border border-indigo-600 hover:shadow hover:shadow-Slate-700 transition-all ease-in-out "
                >
                  ورود | ثبت نام
                </Link>
              </li>
              <li>
                <Link href="#">2</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
