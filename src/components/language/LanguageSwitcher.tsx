"use client";

import { useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const locales = [
    { code: "en", label: "English" },
    { code: "ua", label: "Українська" },
    { code: "ru", label: "Русский" },
  ];

  const [selectedLocale, setSelectedLocale] = useState(params.locale || locales[0].code);

  const handleLanguageChange = (locale: string) => {
    if (locale !== selectedLocale) {
      setSelectedLocale(locale);
      const updatedPathname = `/${locale}${pathname.substring(3)}`;
      router.replace(updatedPathname);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="!m-0">
        <Button variant="outline" className="flex items-center gap-2">
          <FlagIcon className="h-5 w-5" />
          <span>{typeof selectedLocale == "string"? selectedLocale.toUpperCase() : selectedLocale[0].toUpperCase()}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuGroup>
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale.code}
              onSelect={() => handleLanguageChange(locale.code)}
            >
              <FlagIcon className="mr-2 h-5 w-5" />
              {locale.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
