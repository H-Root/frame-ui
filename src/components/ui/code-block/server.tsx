"use server";

import { BundledLanguage, codeToHtml } from "shiki";
import "./code.css";

type TCodeProps = {
  code: string;
  lang: BundledLanguage | string;
};

const Code = async ({ code, lang }: TCodeProps) => {
  const html = await codeToHtml(code, {
    lang,

    themes: {
      light: "light-plus",
      dark: "andromeeda",
    },
    defaultColor: "light-dark()",
  });

  return (
    <div
      className="border [&>pre]:p-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Code;
