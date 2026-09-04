"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center border-b border-[#141d23]/10 dark:border-white/10 ${
          sticky
            ? "fixed z-9999 bg-[#f6faff]/90 dark:bg-[#141d23]/90 backdrop-blur-md transition-all duration-200"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-3 lg:py-2" : "py-5"
                }`}
              >
                <Image
                  src="/images/logo/logo_jim.png"
                  alt="JIM DISTRIBUTION"
                  width={200}
                  height={60}
                  className="h-auto w-auto max-h-16 object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] px-3 py-[6px] focus:ring-2 lg:hidden rounded-none border border-[#141d23]/20 dark:border-white/20"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-[#141d23]/20 dark:border-white/20 dark:bg-[#141d23] absolute right-0 z-30 w-[250px] rounded-none border bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-8">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-sm font-medium tracking-wide uppercase font-mono lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-[#0059bb] dark:text-[#adc7ff]"
                                : "text-[#141d23] hover:text-[#0059bb] dark:text-white/80 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-[#141d23] group-hover:text-[#0059bb] flex cursor-pointer items-center justify-between py-2 text-sm font-medium tracking-wide uppercase font-mono lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/80 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-2">
                                <svg width="18" height="18" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-[#141d23] border border-[#141d23]/20 dark:border-white/20 relative top-full left-0 rounded-none bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[240px] lg:p-3 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-[#141d23] hover:text-[#0059bb] block py-2 text-xs font-mono uppercase lg:px-3 dark:text-white/80 dark:hover:text-white border-b border-[#141d23]/5 dark:border-white/5 last:border-0"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end gap-3 pr-16 lg:pr-0">
                <Link
                  href="/contact"
                  className="text-[#141d23] dark:text-white hidden px-4 py-2.5 text-xs font-mono font-medium tracking-wider uppercase border border-[#141d23]/30 dark:border-white/30 hover:bg-[#141d23] hover:text-white dark:hover:bg-white dark:hover:text-[#141d23] transition-colors md:block"
                >
                  NOUS CONTACTER
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#0059bb] hover:bg-[#0070ea] hidden px-5 py-2.5 text-xs font-mono font-bold tracking-wider text-white uppercase transition-colors md:block border border-[#0059bb]"
                >
                  DEMANDER UN DEVIS
                </Link>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
