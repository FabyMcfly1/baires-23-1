import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/config/i18n";

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Importación síncrona (clave para Next 16)
  const messages = require(`@/messages/${locale}.json`);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
