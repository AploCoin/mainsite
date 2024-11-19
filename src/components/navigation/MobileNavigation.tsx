import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Murecho } from "next/font/google";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import LanguageSwitcher from "../language/LanguageSwitcher";
import { clsx } from "clsx";

const murecho = Murecho({ subsets: ["latin", "cyrillic"] });

export default function MobileNavigation() {
  const t = useTranslations("Menu");
  const [showMenu, setShowMenu] = useState(false);
  const [mainComponentHeight, setMainComponentHeight] = useState(0);
  const mainComponentRef = useRef(null);

  const pathname = usePathname();
  const lang = pathname.substring(1, 3);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setTimeout(() => setShowMenu(false), 300);

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
      <div
        style={{ height: `${mainComponentHeight}px`, marginBottom: "1.35vh" }}
      ></div>
      <div
        ref={mainComponentRef}
        className={`flex flex-column bg-white justify-between items-center pl-[3.73vw] pr-[3.73vw] z-10 w-full fixed top-0`}
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
        <button onClick={toggleMenu}>
          <div>
          <Image
              src="/menu/menu-m.svg"
              width={24}
              height={16}
              alt="Icon open menu"
              className="w-[9vw]"
            />
          </div>
        </button>
      </div>
      <Sidebar open={showMenu} onOpenChange={setShowMenu} side="right">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu className="overflow-hidden">
              <SidebarMenuItem key="switcher">
                <div className="flex flex-row items-center space-y-3 w-full justify-between">
                  <Link
                    href={`/${lang}/donate-aplo-project`}
                    className="flex items-center justify-center w-auto rounded-sm pr-3 pl-3 pt-1 pb-1"
                    style={{ background: "rgb(51, 128, 179)" }}
                  >
                    <span
                      className={clsx(
                        murecho.className,
                        "h-full size-[clamp(10px, 1vw, 64px)] font-bold text-center uppercase"
                      )}
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      {t("donate")}
                    </span>
                  </Link>
                  <LanguageSwitcher />
                </div>
              </SidebarMenuItem>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={clsx(murecho.className, "font-medium size-4")}
                      style={{
                        marginTop: "2.46vh",
                        marginBottom: "2.46vh",
                      }}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  );
}
