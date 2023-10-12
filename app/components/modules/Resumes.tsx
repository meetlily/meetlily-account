'use client';
import { useEffect, useState } from 'react';

interface Resume {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	education: string;
	experience: string;
}

const Resumes = () => {
	const [resumes, setResumes] = useState<Resume[]>([]);

	useEffect(() => {
		const fetchResumes = async () => {
			const res = await fetch('/api/module/resume');
			const data = await res.json();
			setResumes(data);
		};
		fetchResumes();
	}, []);

	return (
		<div>
			<h1>Resumes</h1>
			{resumes.map((resume) => (
				<div key={resume.id}>
					<h2>
						{resume.firstName} {resume.lastName}
					</h2>
					<p>Email: {resume.email}</p>
					<p>Education: {resume.education}</p>
					<p>Experience: {resume.experience}</p>
				</div>
			))}
		</div>
	);
};

export default Resumes;
