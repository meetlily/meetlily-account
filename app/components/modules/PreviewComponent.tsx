'use client';
import { SafeUser } from '@/app/types';
import formStructure from '@/data/moduleFormValues/resumeFormData.json';
import {
	Accordion,
	Alert,
	Avatar,
	Blockquote,
	Breadcrumb,
	Button,
	Card,
	Carousel,
	Checkbox,
	Dropdown,
	FileInput,
	Footer,
	Label,
	ListGroup,
	Modal,
	Navbar,
	Pagination,
	Progress,
	Radio,
	Rating,
	Select,
	Sidebar,
	Spinner,
	Table,
	Tabs,
	TextInput,
	Textarea,
	Toast,
	ToggleSwitch,
	Tooltip
} from 'flowbite-react';
import Dashboard from '../Dashboard';
import Preview from '../Preview';
import AppIcons from '../icons/AppIcons';
import IconComponent from '../icons/IconComponent';
import DocumentationPage from './DocumentationPage';
import ModulePreview from './ModulePreview';
import ModulesHeader from './ModulesHeader';
import ModulesTable from './ModulesTable';
import ResumeView from './ResumeView';
import Resumes from './Resumes';

interface PreviewComponentProps {
	children?: React.ReactNode;
	showEditor?: boolean;
	currentUser?: SafeUser | null;
}
const PreviewComponent: React.FC<PreviewComponentProps> = ({
	children,
	showEditor,
	currentUser
}) => {
	const scope = {
		formStructure,
		Dashboard,
		ModulePreview,
		ModulesTable,
		ModulesHeader,
		Card,
		Button,
		IconComponent,
		Resumes,
		ResumeView,
		Breadcrumb,
		AppIcons,
		Avatar,
		Carousel,
		TextInput,
		Checkbox,
		Select,
		Label,
		Textarea,
		Radio,
		FileInput,
		ToggleSwitch,
		Modal,
		Rating,
		Tabs,
		currentUser,
		ListGroup,
		Navbar,
		Pagination,
		Progress,
		Tooltip,
		Toast,
		Sidebar,
		Dropdown,
		Footer,
		Blockquote,
		Table,
		Spinner,
		Alert,
		Accordion,
		DocumentationPage
	};
	const code = ``;

	return <Preview code={code} scope={scope} noInline={false} showEditor={false} />;
};

export default PreviewComponent;
