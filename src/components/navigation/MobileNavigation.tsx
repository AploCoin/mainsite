import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Murecho } from "next/font/google";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import LanguageSwitcher from "../language/LanguageSwitcher";
import { clsx } from "clsx";

const murecho = Murecho({ subsets: ["latin", "cyrillic"] });

export default function MobileNavigation() {
  const t = useTranslations("Menu");
  const [open, setOpen] = useState(false);
  const [mainComponentHeight, setMainComponentHeight] = useState(0);
  const mainComponentRef = useRef<null | HTMLDivElement>(null);

  const pathname = usePathname();
  const lang = pathname.substring(1, 3);

  const closeMenu = () => setTimeout(() => setOpen(false), 300);

  useEffect(() => {
    if (mainComponentRef.current) {
      setMainComponentHeight(mainComponentRef.current.offsetHeight);
    }
  }, []);

  const menuItems = [
    { title: t("whatIsAplo"), url: `/${lang}/what-is-aplo` },
    { title: t("mining"), url: `/${lang}/mining-aplo` },
    { title: t("faq"), url: `/${lang}/faq` },
    { title: t("about"), url: `/${lang}/about-aplo` },
    { title: t("roadmap"), url: `/${lang}/roadmap` },
    { title: t("userGuides"), url: `/${lang}/user-guides` },
  ];

  return (
    <>
      <div style={{ height: `${mainComponentHeight / 2}px`, marginBottom: "1.35vh" }}></div>
      <div
        ref={mainComponentRef}
        className="flex flex-column bg-white justify-between items-center px-[3.73vw] z-10 w-full fixed top-0"
      >
        <Link href={`/${lang}`} onClick={closeMenu}>
          <Image
            src="/menu/logo.png"
            width={6}
            height={3}
            alt="AploCoin logo"
            className="w-[12.8vw] h-auto p-1"
          />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button>
              <Image
                src="/menu/menu-m.svg"
                width={24}
                height={16}
                alt="Icon open menu"
                className="w-[9vw]"
              />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[360px]">
            <SheetHeader className="space-y-6">
              <div className="flex flex-row items-center justify-between">
                <Link
                  href={`/${lang}/donate-aplo-project`}
                  className="flex items-center justify-center w-auto rounded-sm px-3 py-1"
                  style={{ background: "rgb(51, 128, 179)" }}
                  onClick={closeMenu}
                >
                  <span
                    className={clsx(
                      murecho.className,
                      "h-full !w-auto size-[clamp(10px,1vw,64px)] font-bold text-center uppercase"
                    )}
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    {t("donate")}
                  </span>
                </Link>
                <LanguageSwitcher />
              </div>
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={clsx(murecho.className, "font-medium")}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}