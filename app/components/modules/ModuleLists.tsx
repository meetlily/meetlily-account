'use client'

import { ModuleType } from "@/app/types"
import { useRouter, useSearchParams } from "next/navigation"
import modules from "@/data/modules.json";
import qs from "query-string";
import ModuleBox from "./ModuleBox";
import { useCallback } from "react";

interface ModuleListsProps {

}

const ModuleLists: React.FC<ModuleListsProps> = ({

}) => {
    const iconSize = 36;
    const router = useRouter();
    const params = useSearchParams();

    
    return (
        <>
        <div className="flex flex-col items-center justify-center mx-auto mb-4 p-4">
            <div 
                className="
                    grid
                    grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-6
                    2xl:grid-cols-7
                    gap-2
                    md:gap-x-4
                    md:gap-y-2
                    max-w-[400px]
                    md:max-w-[1280px]
                    lg:max-w-[1660px]
                    xl:max-w-[1920px]
                    2xl:max-w-[2500px]
                "
            >
                {modules?.data.map((item) => (
                    <ModuleBox
                        key={item.slug}
                        slug={item.slug}
                        iconSize={46}
                        label={item.name}
                        iconName={item.icon_name}
                        buttonId={`${item.slug}-button`}
                        contentId={`${item.slug}-content`}
                        description={item.description}
                        short_desc={item.short_description}
                        outline={true}
                        rounded
                        shadow
                        installed={item.installed}
                    />
                ))}

                
            </div>
        </div>
        </>
    )
}

export default ModuleLists;