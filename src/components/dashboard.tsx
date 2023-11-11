import getModels from "@/server/models";
import getTemplates from "@/server/templates";
import Image from "next/image";
import { ReactNode } from "react";

export default function Dashboard() {
  const templates = getTemplates();
  const models = getModels();
  return (
    <div className="w-full flex flex-col pt-10">
      <Section title="What do you want to create ?">
        <div className="flex gap-7">
          <CreateButton
            name="Packshot"
            desc="Images againt a white background"
          />
          <CreateButton name="Vignette" desc="Product focused-imagery" />
          <CreateButton
            name="Lifestyle  Images"
            desc="Images in life-like environnments"
          />
          <CreateButton
            name="Mash My Room"
            desc="Room creator using products bundles"
          />
        </div>
      </Section>
      <Section title="My Models (180)">
        <div className="flex flex-wrap gap-2">
          {models.map((image) => {
            return (
              <Image
                src={`/models/${image}.png`}
                width={124}
                height={124}
                alt={`Model ${image.toString()}`}
                key={image}
                className="max-h-[124px] w-auto cursor-pointer hover:opacity-70 transition-all"
              />
            );
          })}
        </div>
      </Section>
      <Section title="Templates (100)">
        <div className="flex flex-wrap gap-4 justify-between">
          {templates.map((image) => {
            return (
              <div
                className="flex flex-col cursor-pointer hover:opacity-70 transition-all gap-1"
                key={image.image}
              >
                <Image
                  src={`/templates/${image.image}.png`}
                  width={290}
                  height={140}
                  alt={image.name}
                  className=""
                />
                <h3>{image.name}</h3>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="bg-surfacegray px-2 rounded-[4px] font-[600] text-lg">
        {title}
      </h1>
      <div className="w-full px-2 py-6">{children}</div>
    </div>
  );
};

const CreateButton = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <div className="cursor-pointer bg-surfaceAmber text-white flex flex-col gap-4 p-2 pt-4 lg:w-[227px] rounded-[4px] hover:opacity-70 transition-all justify-end">
      <h1 className="text-2xl font-[600]">{name}</h1>
      <h3 className="text-[12px]">{desc}</h3>
    </div>
  );
};
