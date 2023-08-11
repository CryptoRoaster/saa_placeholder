import Link from "next/link";

export default function Navbar() {
  return (
    // Navbar
    <>
      {/* Hero Container */}

      <div className="relative container max-w-full py-6 mb-2 shadow-lg">
        {/* Menu & Logo Container */}
        <nav className="max-w-6xl flex flex-row justify-between mx-auto items-center font-medium text-gray-500">
          {/* Logo */}
          <img
            src="images/logo.svg"
            alt="SELLanyAD Logo"
            className="md:ml-10"
          />
          {/* Menu */}
          <div className="hidden h-5 md:flex md:flex-row md:space-x-10 md:mr-10">
            <div className="group">
              <Link
                href="#hero"
                className="hover:text-purple-700 active-purple-400"
              >
                Home
              </Link>
              <div className="mx-2 group-hover:border-b-2 group-hover:border-purple-300 group-active:border-b group-active:border-purple-700"></div>
            </div>
            <div className="group">
              <Link
                href="#app"
                className="hover:text-purple-700 active-purple-400"
              >
                App
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-purple-300 group-active:border-b group-active:border-purple-700"></div>
            </div>
            <div className="group">
              <Link
                href="#features"
                className="hover:text-purple-700 active-purple-400"
              >
                Features
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-purple-300 group-active:border-b group-active:border-purple-700"></div>
            </div>
            <div className="group">
              <Link
                href="#team"
                className="hover:text-purple-700 active-purple-400"
              >
                Team
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-purple-300 group-active:border-b group-active:border-purple-700"></div>
            </div>
            <div className="group">
              <Link
                href="#contact"
                className="hover:text-purple-700 active-purple-400"
              >
                Contact
              </Link>
              <div className="mx-2 group-hover:border-b group-hover:border-purple-300 group-active:border-b group-active:border-purple-700"></div>
            </div>
          </div>
          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
