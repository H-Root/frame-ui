import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { readFileSync } from "fs";
import { docsPath } from "@/utils/readMdx";
import CodeBlock from "../ui/code-block/code-block";

const ComponentPreview = async ({
  file,
  folder,
}: {
  folder: string;
  file: string;
}) => {
  const fileContent = readFileSync(docsPath(folder, `${file}.tsx`), "utf-8");
  const { default: Comp } = await import(`@/content/examples/${file}.tsx`);

  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card>
          <CardContent className="">
            <Comp />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={fileContent} lang={"tsx"} />
      </TabsContent>
    </Tabs>
  );
};

export default ComponentPreview;
