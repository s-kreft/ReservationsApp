"use client";
import { changeLanguage } from "i18next";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const ChangeLanguage = async (lng: string) => {
    if (searchParams.has("locale")) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("locale", lng);
      await router.push(`${pathname}?${newSearchParams.toString()}`);
    } else {
      await router.push(`${pathname}?${searchParams}locale=${lng}`);
    }

    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <select>
        <option value="pl" onClick={() => ChangeLanguage("pl")}>
          Polski
        </option>
        <option value="en" onClick={() => ChangeLanguage("en")}>
          English
        </option>
      </select>
    </div>
  );
};
