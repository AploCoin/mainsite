import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
