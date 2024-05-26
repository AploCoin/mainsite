import { useState, ChangeEvent, ReactNode, useTransition } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

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
    { code: 'en', label: 'English' },
    { code: 'ua', label: 'Українська' },
    { code: 'ru', label: 'Русский' },
  ];
  const [selectedLocale, setSelectedLocale] = useState(params.locale || locales[0].code);
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

  return (
    <div className={styles.container} onClick={toggleDropdown}>
      <div className={styles.icon}>🌐</div>
      <div className={styles.selectedLanguage}>
        {locales.find((locale) => locale.code === selectedLocale)?.label}
      </div>
      <div className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>⌄</div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {locales.map((locale) => (
            <li
              key={locale.code}
              className={styles.option}
              onClick={() => onSelectChange({ target: { value: locale.code } } as ChangeEvent<HTMLSelectElement>)}
            >
              {locale.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
