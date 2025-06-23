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
      className="rounded-0! border [&>pre]:m-0 [&>pre]:p-5"
      style={{
        borderRadius: "0px !important",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Code;
