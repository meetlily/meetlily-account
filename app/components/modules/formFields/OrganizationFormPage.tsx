'use client'
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrganizationForm from './OrganizationForm';
import OrganizationFormFields from '@/app/components/modules/formFields/OrganizationFormFields';

const OrganizationFormPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Organization Form</h1>
        
        <Tabs>
          <TabList className="flex mb-6">
            <Tab className="mr-4 px-4 py-2 bg-gray-200 rounded-lg cursor-pointer">Basic Information</Tab>
            <Tab className="mr-4 px-4 py-2 bg-gray-200 rounded-lg cursor-pointer">Contact Information</Tab>
            {/* Add more tabs for other field groups */}
          </TabList>

          <TabPanel>
            <OrganizationForm formFields={OrganizationFormFields} group="Basic Information" />
          </TabPanel>
          <TabPanel>
            <OrganizationForm formFields={OrganizationFormFields} group="Contact Information" />
          </TabPanel>
          {/* Add more TabPanel components for other field groups */}
        </Tabs>
      </div>
    </div>
  );
};

export default OrganizationFormPage;