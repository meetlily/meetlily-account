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
  
  useEffect(() => {
    // Code to run after component has rendered
    setIsLoading(true)
    // Example: Fetch data from an API

  }, [setIsLoading,params]); 
  return (
    <>
      <AdminLayout showSidebar={showSidebar} currentUser={currentUser}>
      <div>
          {params?.slug && params?.slug === 'resume' && (
              <><ResumeView formData={formStructure} /></>
          )}
          {params?.slug && params?.slug === 'live_edit' && (
              <PreviewComponent showEditor={true}/>
          )}
      </div>
      </AdminLayout>
    </>
  )
}

export default ModulePage;