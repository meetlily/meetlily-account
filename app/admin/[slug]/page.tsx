
import getCurrentUser from '@/app/actions/getCurrentUser';
import AdminLayout from '@/app/components/AdminLayout';
import ModulePage from '@/app/components/modules/ModulePage';
import ModulesTable from '@/app/components/modules/ModulesTable';
import ModuleForm from '@/app/components/modules/formFields/ModuleForm';
import OrganizationFormPage from '@/app/components/modules/formFields/OrganizationFormPage';
import { useParams } from 'next/navigation';
import React from 'react';


const Page: React.FC = async () => {
    let currentUser = await getCurrentUser();
    
  return (
    <div>
        <ModulePage />
    </div>
  );
};
export default Page;

