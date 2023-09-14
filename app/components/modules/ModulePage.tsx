'use client';

import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ResumeView from './ResumeView';
import formStructure from '@/data/moduleFormValues/resumeFormData.json'; 
import PreviewComponent from './PreviewComponent';
import AdminLayout from '../AdminLayout';
import { SafeUser } from '@/app/types';
import getCurrentUser from '@/app/actions/getCurrentUser';
interface ModulePageProps {
  currentUser?: SafeUser | null;
  showSidebar?: boolean;
}
const ModulePage: React.FC<ModulePageProps> = ({currentUser, showSidebar}) => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState();
  useEffect(() => {
    setIsLoading(true)
    // Fetch the data from the API
    // fetch(`/api/admin/${params?.slug}`)
    // .then((response) => response.json())
    // .then((data) => {
    //   setFormData(data)
    // })
    // .catch((error) => console.error('Error fetching sections:', error))
    // .finally(() => setIsLoading(false));
}, [params]);
  return (
    <>
      <div className='h-full w-full flex flex-col'>
          {params?.slug && params?.slug === 'resume' && (
              <>
              <ResumeView formData={formStructure} />
              </>
          )}
          {params?.slug && params?.slug === 'live_edit' && (
              <PreviewComponent showEditor={true}/>
          )}
      </div>
    </>
  )
}

export default ModulePage;