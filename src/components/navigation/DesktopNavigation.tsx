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
import React from "react";
import { PickaxeIcon, HandCoinsIcon } from "lucide-react";

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

  return (
    <div
      style={{
        paddingLeft: "clamp(4vw, 9vw, 10.55vw)",
        paddingRight: "clamp(4vw, 9vw, 10.55vw)",
        maxWidth: "100vw",
      }}
    >
      <div
        className="flex flex-row justify-between min-[6.83vh] mt-[8.49vh] mb-[1.56vh] shadow-sm bg-secondary px-[2.01vw] py-[4px]"
      >
        <div className="flex flex-row items-center">
          <Link href={`/${lang}`}>
            <Image
              src="/menu/logo.png"
              width={64}
              height={64}
              alt="AploCoin logo"
              className="mr-4 cursor-pointer"
            />
          </Link>
          <div
            className={`flex flex-row items-center`}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t('crypto')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md bg-background  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={`/${lang}/mining-aplo`}
                          >
                            <PickaxeIcon className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {t("mining")}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {t("start-mining")}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>

                      <li className="col-span-1">
                        <NavigationMenuLink asChild>
                          <Button
                            variant="outline"
                            onClick={addAploNetwork}
                            className={cn(
                              "h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {t('addNetwork')}
                            </div>
                          </Button>
                        </NavigationMenuLink>
                      </li>

                      <li className="col-span-1">
                        <NavigationMenuLink asChild>
                          <Button
                            variant="outline"
                            onClick={() => { addToken("0x0000000000000000000000000000000000001235", "APLO") }}
                            className={cn(
                              "h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {t('addAploToken')}
                            </div>
                            <p className="text-sm font-normal leading-tight text-muted-foreground">
                              TEST
                            </p>
                          </Button>
                        </NavigationMenuLink>
                      </li>
                      <li className="col-span-1">
                        <NavigationMenuLink asChild>
                          <Button
                            variant="outline"
                            onClick={() => { addToken("0x0000000000000000000000000000000000001234", "GAPLO") }}
                            className={cn(
                              "h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {t('addGaploToken')}
                            </div>
                            <p className="text-sm font-normal leading-tight text-muted-foreground">
                              TEST
                            </p>
                          </Button>
                        </NavigationMenuLink>
                      </li>

                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t('aboutAplo')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]" style={{ gridAutoFlow: "dense" }} >
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md bg-background  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={`/${lang}/what-is-aplo`}
                          >
                            <HandCoinsIcon className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {t("whatIsAplo")}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              TEST
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <NavigationMenuLink asChild>
                        <Link href={`/${lang}/faq`} passHref>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {t("faq")}
                            </div>
                            <p className="text-sm font-normal leading-tight text-muted-foreground">
                              TEST
                            </p>
                          </Button>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link href={`/${lang}/about-aplo`} passHref>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {t("about")}
                            </div>
                            <p className="text-sm font-normal leading-tight text-muted-foreground">
                              TEST
                            </p>
                          </Button>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link href={`/${lang}/user-guides`} passHref>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {t("userGuides")}
                            </div>
                            <p className="text-sm font-normal leading-tight text-muted-foreground">
                              TEST
                            </p>
                          </Button>
                        </Link>
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
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
