import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
