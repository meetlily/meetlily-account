'use client';
import ResumeForm from '@/app/components/forms/ResumeForm';
import formStructure from '@/data/moduleFormFields/resume-2.json'; // assuming you have the form structure in a JSON file
import React from 'react';

const ResumePageForm: React.FC = () => {
	return <ResumeForm formStructure={formStructure} />;
};

export default ResumePageForm;
