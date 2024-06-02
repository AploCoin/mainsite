'use client';
import { useEffect } from "react";
import { redirect } from "next/navigation";

const supportedLanguages = ['en', 'ru', 'ua'];

export default function RootPage() {
  useEffect(() => {
    const langPrefix = navigator.language .split('-')[0];

    if (supportedLanguages.includes(langPrefix)) {
      redirect(`/${langPrefix}`);
    } else {
      redirect('/en');
    }
  }, []);

  return null;
}
