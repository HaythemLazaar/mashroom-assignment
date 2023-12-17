import getTemplates from "@/server/templates";
import Image from "next/image";

export default function Templates() {
    const templates = getTemplates();
    return (
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
    )
}