'use client'
import Preview from "../Preview";

import ModulePreview from "./ModulePreview";
import ModulesTable from "./ModulesTable";
import { Button, Card } from "flowbite-react";
import ModulesHeader from "./ModulesHeader";
import Dashboard from "../Dashboard";
import IconComponent from "../icons/IconComponent";

interface PreviewComponentProps {
    children?: React.ReactNode;
    showEditor?: boolean;
}
const PreviewComponent: React.FC<PreviewComponentProps> = ({children, showEditor}) => {
    const scope = { Dashboard, ModulePreview, ModulesTable, ModulesHeader, Card, Button, IconComponent };
    const code = `<ModulesTable />`;

  return <Preview code={code} scope={scope} noInline={false} showEditor={showEditor} />;
};

export default PreviewComponent;