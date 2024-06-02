import { useState, ChangeEvent, useTransition, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

type LocaleOption = {
  code: string;
  label: string;
};

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locales: LocaleOption[] = [
    { code: "en", label: "English" },
    { code: "ua", label: "Українська" },
    { code: "ru", label: "Русский" },
  ];
  const [selectedLocale, setSelectedLocale] = useState(
    params.locale || locales[0].code
  );
  const [isOpen, setIsOpen] = useState(false);

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    if (nextLocale === selectedLocale) {
      setIsOpen(false);
      return;
    }
    setSelectedLocale(nextLocale);
    startTransition(() => {
      const updatedPathname = `/${nextLocale}${pathname.substring(3)}`;
      router.replace(updatedPathname);
      setIsOpen(false);
    });
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [styles, setStyles] = useState<any>({});

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const loadStyles = async () => {
      if (isMobile) {
        const module = await import('./mobile.module.css');
        setStyles(module);
      } else {
        const module = await import('./desktop.module.css');
        setStyles(module);
      }
    };
    loadStyles();
  }, [isMobile]);

  return (
    <>
      <div className={styles.container} onClick={toggleDropdown}>
        <Image
          src="/menu/language.svg"
          width={20}
          height={16}
          alt="Icon change language"
          className={styles.icon}
        />
        <div className={`${styles.selectedLanguage} ${montserrat.className}`}>
          {locales.find((locale) => locale.code === selectedLocale)?.label}
        </div>
        <Image
          src="/menu/arrow.png"
          width={6}
          height={3}
          alt="Arrow change language"
          className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
        />
        {isOpen && (
          <ul className={styles.dropdown}>
            {locales.map((locale) => (
              <li
                key={locale.code}
                className={`${styles.option} ${montserrat.className}`}
                onClick={() =>
                  onSelectChange({
                    target: { value: locale.code },
                  } as ChangeEvent<HTMLSelectElement>)
                }
              >
                {locale.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
