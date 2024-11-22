"use client";

import { useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const locales = [
    { code: "en", label: "English", flag: "/flags/gb.svg" },
    { code: "ua", label: "Українська", flag: "/flags/ua.svg" },
    { code: "ru", label: "Русский", flag: "/flags/ru.svg" },
  ];

  const [selectedLocale, setSelectedLocale] = useState(params.locale || locales[0].code);

  const handleLanguageChange = (locale: string) => {
    if (locale !== selectedLocale) {
      setSelectedLocale(locale);
      const updatedPathname = `/${locale}${pathname.substring(3)}`;
      router.push(updatedPathname);
    }
  };

  const selectedFlag = locales.find(locale => locale.code === selectedLocale)?.flag;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="!m-0">
        <Button variant="outline" className="flex items-center gap-2">
          <Image 
            src={selectedFlag || "/flags/gb.svg"}
            alt={`${selectedLocale} flag`}
            width={20}
            height={20}
            className="rounded-sm object-cover"
            unoptimized
          />
          <span>
            {typeof selectedLocale === "string" 
              ? selectedLocale.toUpperCase() 
              : selectedLocale[0].toUpperCase()}
          </span>
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuGroup>
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale.code}
              onClick={() => handleLanguageChange(locale.code)}
              className="flex items-center gap-2"
            >
              <Image 
                src={locale.flag}
                alt={`${locale.code} flag`}
                width={20}
                height={20}
                className="rounded-sm object-cover"
                unoptimized
              />
              {locale.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
