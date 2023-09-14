'use client';

import Flowbite, { Badge, Button, Table } from 'flowbite-react';
import modules from "@/data/modules.json" 
import IconComponent from '../icons/IconComponent';
import Link from 'next/link';
import ModulesHeader from './ModulesHeader';
import { ModalHeader } from 'flowbite-react/lib/esm/components/Modal/ModalHeader';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Loader from '../Loader';
import FlowModal from '../modals/FlowModal';

export default function ModulesTable() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Code to run after component has rendered
    setIsLoading(true)
    // Example: Fetch data from an API
    // fetch(`/api/admin/${params?.slug}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Process the fetched data
    //     setIsLoading(false)
    //   }).catch((error)=>{
    //     setIsLoading(false)
    //   });
  }, [setIsLoading,params]); 
  return (
    <>
    <div className='relative w-full h-full flex flex-col'>
      <div className='flex flex-col bg-white'>
        <ModulesHeader />
      </div>
      <div className='flex flex-col items-start bg-white-50 overflow-auto'>
        <Table>
          <Table.Head>
            <Table.HeadCell>
              Icon
            </Table.HeadCell>
            <Table.HeadCell>
              Module
            </Table.HeadCell>
            <Table.HeadCell>
              Description
            </Table.HeadCell>
            <Table.HeadCell>
              Category
            </Table.HeadCell>
            <Table.HeadCell>
              Tags
            </Table.HeadCell>
            
            <Table.HeadCell>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
          {modules.data.map((item) => (
            <Table.Row key={item.slug} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <IconComponent iconName={item.icon_name} size={22} color='gray'/>
                </Table.Cell>
              <Table.Cell>
                {item.name}
              </Table.Cell>
              <Table.Cell>
                {item.short_description}
              </Table.Cell>
              <Table.Cell>
              <div className='flex flex-row gap-2'>
                {item.category.map((cat) => (
                    <Badge key={cat.name} color="gray" className='rounded-lg px-2 outline outline-1 outline-gray-200 bg-transparent'>
                        <p className='w-30 whitespace-nowrap text-ellipsis overflow-hidden'>{cat.name}</p>
                    </Badge>
                ))}
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className='flex flex-row gap-2'>
                {item.tags.map((tag) => (
                    <Badge key={`${item.slug}-${tag}`} color="light" className='rounded-full px-3'>
                        <p>{tag}</p>
                    </Badge>
                ))}
                </div>
              </Table.Cell>
              <Table.Cell>
                <Button.Group color='dark' className="hover:bg-transparent gap-0"  >
                    <Button color="" className="bg-white  text-gray-800 hover:bg-transparent hover:text-teal-500" size="xs">
                        <IconComponent iconName='add' />
                    </Button>
                    <Button  color="" className="bg-white  text-gray-800 hover:bg-transparent hover:text-cyan-500" size="xs">
                        <IconComponent iconName='edit' />
                    </Button>
                    <Button  color="" className="bg-white  text-red-800 hover:bg-transparent hover:text-red-500" size="xs">
                        <IconComponent iconName='close' />
                    </Button>
                    
                </Button.Group>
              </Table.Cell>
              </>
            </Table.Row>
            ))}
            
          </Table.Body>
        </Table>
        </div>
      </div>
    </>
  )
}



