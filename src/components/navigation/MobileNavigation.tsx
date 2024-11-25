import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Murecho } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitcher from "../language/LanguageSwitcher";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const APLO_NETWORK = {
  chainId: "0x6e7a", // 28282 in hex
  chainName: "Aplo Network",
  rpcUrls: ["https://pub1.aplocoin.com"],
  nativeCurrency: {
    name: "GAPLO",
    symbol: "GAPLO",
    decimals: 18,
  },
};
import { useToast } from "@/hooks/use-toast";

const murecho = Murecho({ subsets: ["latin", "cyrillic"] });

export default function MobileNavigation() {
  const t = useTranslations("Menu");
  const [open, setOpen] = useState(false);
  const [mainComponentHeight, setMainComponentHeight] = useState(0);
  const mainComponentRef = useRef<null | HTMLDivElement>(null);

  const pathname = usePathname();
  const lang = pathname.substring(1, 3);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (mainComponentRef.current) {
      setMainComponentHeight(mainComponentRef.current.offsetHeight);
    }
  }, []);

  const { toast } = useToast();

  const addAploNetwork = async () => {
    try {
      if (!window.ethereum) return;
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [APLO_NETWORK],
      });
      toast({
        title: t("success"),
        description: t("networkAdded"),
      });
    } catch (err: unknown) {
      const error = err as Error;
      toast({
        variant: "destructive",
        title: t("error"),
        description: error.message,
      });
    }
  };

  const getCurrentChainId = async () => {
    try {
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });
      return chainId;
    } catch (err) {
      return null;
    }
  };

  const switchToAploNetwork = async () => {
    try {
      if (!window.ethereum) return false;

      const currentChainId = await getCurrentChainId();
      if (currentChainId === APLO_NETWORK.chainId) return true;

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: APLO_NETWORK.chainId }],
      });

      toast({
        title: t("success"),
        description: t("networkSwitched"),
      });
      return true;
    } catch (err: unknown) {
      // Error code 4902 means the chain hasn't been added yet
      if ((err as any).code === 4902) {
        try {
          await addAploNetwork();
          // Try switching again after adding network
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: APLO_NETWORK.chainId }],
          });
          return true;
        } catch (addErr: unknown) {
          const error = addErr as Error;
          toast({
            variant: "destructive",
            title: t("error"),
            description: error.message,
          });
          return false;
        }
      }
      const error = err as Error;
      toast({
        variant: "destructive",
        title: t("error"),
        description: error.message,
      });
      return false;
    }
  };

  const addToken = async (contractId: string, name: string) => {
    try {
      if (!window.ethereum) return;

      // Verify and switch to Aplo network first
      const switched = await switchToAploNetwork();
      if (!switched) {
        toast({
          variant: "destructive",
          title: t("error"),
          description: t("switchNetworkFirst"),
        });
        return;
      }

      // Double check we're on the right network
      const currentChainId = await getCurrentChainId();
      if (currentChainId !== APLO_NETWORK.chainId) {
        toast({
          variant: "destructive",
          title: t("error"),
          description: t("wrongNetwork"),
        });
        return;
      }

      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: contractId,
            symbol: name,
            decimals: 18,
          },
        },
      });

      toast({
        title: t("success"),
        description: t("tokenAdded"),
      });
    } catch (err: unknown) {
      const error = err as Error;
      toast({
        variant: "destructive",
        title: t("error"),
        description: error.message,
      });
    }
  };

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
        className="flex flex-column bg-secondary justify-between items-center px-[3.73vw] z-10 w-full fixed top-0"
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
                className="w-[7vw]"
              />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[360px]">
            <SheetHeader className="space-y-6 h-full">
              <div className="flex flex-col justify-between items-center h-full">
                <nav className="flex flex-col space-y-4">
                  <div className="flex flex-row items-center justify-between">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                  </div>
                  <Link
                    href={`/${lang}/donate-aplo-project`}
                    onClick={closeMenu}
                  >
                    <Button className="w-full">{t("donate")}</Button>
                  </Link>
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={clsx(murecho.className, "font-medium")}
                      onClick={closeMenu}
                    >
                      <Button variant="outline" className="w-full">
                        {item.title}
                      </Button>
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-4 w-full">
                  <Button
                    variant="outline"
                    onClick={addAploNetwork}
                    className={clsx(murecho.className, "font-medium w-full")}
                  >
                    {t("addNetwork")}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      addToken(
                        "0x0000000000000000000000000000000000001235",
                        "APLO"
                      );
                    }}
                    className={clsx(murecho.className, "font-medium w-full")}
                  >
                    {t("addAploToken")}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      addToken(
                        "0x0000000000000000000000000000000000001234",
                        "GAPLO"
                      );
                    }}
                    className={clsx(murecho.className, "font-medium w-full")}
                  >
                    {t("addGaploToken")}
                  </Button>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
