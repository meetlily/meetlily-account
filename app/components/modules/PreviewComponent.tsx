'use client'
import Preview from "../Preview";
import formStructure from '@/data/moduleFormValues/resumeFormData.json'; 
import ModulePreview from "./ModulePreview";
import ModulesTable from "./ModulesTable";
import { Button, Card } from "flowbite-react";
import ModulesHeader from "./ModulesHeader";
import Dashboard from "../Dashboard";
import IconComponent from "../icons/IconComponent";
import ResumeView from "./ResumeView";
import Resumes from "./Resumes";

interface PreviewComponentProps {
    children?: React.ReactNode;
    showEditor?: boolean;
}
const PreviewComponent: React.FC<PreviewComponentProps> = ({children, showEditor}) => {
    const scope = { formStructure, Dashboard, ModulePreview, ModulesTable, ModulesHeader, Card, Button, IconComponent, Resumes, ResumeView };
    const code = `<ModulesTable />`;

  return <Preview code={code} scope={scope} noInline={false} showEditor={true} />;
};

export default PreviewComponent;