
import ModulesTable from '@/app/components/modules/ModulesTable';
import ModuleForm from '@/app/components/modules/formFields/ModuleForm';
import OrganizationFormPage from '@/app/components/modules/formFields/OrganizationFormPage';
import React from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import ModulePage from '../components/modules/ModulePage';


const Page: React.FC = async () => {
  let currentUser = await getCurrentUser();
  console.log(currentUser)
  return (
    <div>
      <ModulePage currentUser={currentUser}/>
    </div>
  );
};

export default Page;