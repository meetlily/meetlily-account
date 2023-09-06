'use client';

import { Tabs } from 'flowbite-react';
import { useEffect, useState } from 'react';
import AppIcons from '../../icons/AppIcons';
import AddItem from './AddItem';

interface ContentData {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    active: boolean;
  }

const TabNav = () => {
    const [tabContent, setTabContent] = useState<ContentData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        // Fetch the data from the API
        setIsLoading(true)
        fetch('/api/category')
        .then((response) => response.json())
        .then((data) => setTabContent(data))
        .catch((error) => console.error('Error fetching sections:', error))
        .finally(() => setIsLoading(false));
    }, [setTabContent]);
    if (tabContent.length === 0) {
        return null; // Render a loading state or fallback UI if the data is not available yet
    }
    return (
        <>
            
            <Tabs.Group
                aria-label="Default tabs"
                style="underline"
                >
                {tabContent.map((tab) => {
                    tab.active = false;
                    if(tab.slug === 'administration'){
                        tab.active = true;
                        tab.name = 'Admin';
                    }
                    return (
                        
                            <Tabs.Item
                                key={tab.id}
                                active={tab.active}
                                icon={AppIcons[tab.icon]}
                                title={tab.name}
                                className='rounded-0'
                            >
                                
                                {tab.name === 'Admin' && (
                                    <>
                                    <div className="grid grid-cols-3 py-1 px-2 text-center bg-white w-[320px] ">
                                        <AddItem title="Servers" iconName="server" iconSize={24} fontSize={18}/>
                                        <AddItem title="Databases" iconName="database" iconSize={24} fontSize={18}/>
                                        <AddItem title="Integrations" iconName="integration" iconSize={24} fontSize={18}/>
                                        <AddItem title="Users" iconName="users" iconSize={24} fontSize={18}/>
                                        <AddItem title="Settings" iconName="gears" iconSize={24} fontSize={18}/>
                                    </div>
                                    </>
                                )}
                                {tab.name === 'Applications' && (
                                    <>
                                    <div className="grid grid-cols-3 py-1 px-2 text-center bg-white w-[320px]">
                                        <AddItem title="Accounting" iconName="accounting" iconSize={24} fontSize={18}/>
                                        <AddItem title="PoS" iconName="pos" iconSize={24} fontSize={18}/>
                                        <AddItem title="PoS" iconName="pos" iconSize={24} fontSize={18}/>
                                    </div>
                                
                                    </>
                                )}
                                {tab.name === 'Tools' && (
                                    <>
                                        <div className="grid grid-cols-3 py-1 px-2 text-center max-w-[600px] md:max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1920px] bg-white w-[320px] ">
                                            <AddItem title="Add Icon" iconName="icons" iconSize={24} fontSize={18}/>
                                            <AddItem title="Add Block" iconName="addBlock" iconSize={24} fontSize={18}/>
                                        </div>
                                        
                                    </>
                                )}
                            </Tabs.Item>
                    )
                })}
                
                </Tabs.Group>

        
        </>
    )
}

export default TabNav;


