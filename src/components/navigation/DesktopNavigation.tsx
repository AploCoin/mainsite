import styles from "./desktop.module.css";
import LanguageSwitcher from "../language/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/hooks/use-toast";

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

const APLO_TOKEN = {
  address: "0x0000000000000000000000000000000000001235",
  symbol: "APLO",
  decimals: 18,
};

export default function DesktopNavigation() {
  const t = useTranslations("Menu");
  const pathname = usePathname();
  const lang = pathname.substring(1, 3);
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
        method: 'eth_chainId'
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
  
  const addAploToken = async () => {
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
          options: APLO_TOKEN,
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

  return (
    <div
      style={{
        paddingLeft: "clamp(4vw, 9vw, 10.55vw)",
        paddingRight: "clamp(4vw, 9vw, 10.55vw)",
        maxWidth: "100vw",
      }}
    >
      <div
        className={styles["menu-container"] + " flex flex-row justify-between"}
      >
        <div className="flex flex-row items-center">
          <Link href={`/${lang}`}>
            <Image
              src="/menu/logo.png"
              width={6}
              height={3}
              alt="AploCoin logo"
              className={styles.logo}
            />
          </Link>
          <div
            className={`flex flex-row items-center ${styles[`${lang}-lang`]}`}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Crypto</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="col-span-1">
                        <NavigationMenuLink asChild>
                          <Button
                            variant="outline"
                            onClick={addAploNetwork}
                            className={cn(
                              "w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Add APLO Network
                            </div>
                          </Button>
                        </NavigationMenuLink>
                      </li>

                      <li className="col-span-1">
                        <NavigationMenuLink asChild>
                          <Button
                            variant="outline"
                            onClick={addAploToken}
                            className={cn(
                              "w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              Add APLO Token
                            </div>
                          </Button>
                        </NavigationMenuLink>
                      </li>

                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/${lang}/mining-aplo`}
                            className={cn(
                              "block border border-input bg-background shadow-sm select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {t("mining")}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug">
                              {t("start-mining")}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={`/${lang}/what-is-aplo`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("whatIsAplo")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={`/${lang}/faq`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("faq")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={`/${lang}/about-aplo`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("about")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={`/${lang}/roadmap`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("roadmap")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href={`/${lang}/user-guides`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {t("userGuides")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Button className="mr-[1.385vw]">
            <Link href={`/${lang}/donate-aplo-project`}>{t("donate")}</Link>
          </Button>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
