"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(locale: string) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => switchLocale("es")}>ES</button>
      <button onClick={() => switchLocale("en")}>EN</button>
    </div>
  );
}
