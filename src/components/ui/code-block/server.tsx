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
			className="[&>pre]:p-5 border"
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
};

export default Code;
