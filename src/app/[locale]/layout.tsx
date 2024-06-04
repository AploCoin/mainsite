import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "./globals.css";
import Navigation from "@/components/navigation/component";
import CustomFooter from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "AploCoin",
  description: "",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "ru", "ua"].map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navigation />
      {children}
      <CustomFooter />
    </NextIntlClientProvider>
  );
}
