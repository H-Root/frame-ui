import { BundledLanguage } from "shiki";
import Code from "./server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import CopyButton from "@/components/utils/copy-button";

type TCodeBlockProps =
  | {
      code: string;
      lang: BundledLanguage | string;
    }
  | {
      code: { content: string; file: string; lang: BundledLanguage | string }[];
      lang?: null;
    };

const CodeBlock = (props: TCodeBlockProps) => {
  if (typeof props.code === "object") {
    const { code } = props;
    return (
      <Tabs defaultValue={code[0].file}>
        <TabsList>
          {code.map((file) => (
            <TabsTrigger value={file.file} key={`list-${file.file}`}>
              {file.file}
            </TabsTrigger>
          ))}
        </TabsList>
        {code.map((file) => (
          <TabsContent
            value={file.file}
            key={`content-${file.file}`}
            className="relative"
          >
            <CopyButton content={file.content} />
            <Code code={file.content} lang={file.lang} />
          </TabsContent>
        ))}
      </Tabs>
    );
  }

  return (
    <div className="relative">
      <CopyButton content={props.code} />
      <Code code={props.code} lang={props.lang as string} />
    </div>
  );
};

export default CodeBlock;
