'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ButtonComponent from '../Button';
import AppIcons from '../icons/AppIcons';
import Input from '../inputs/Input';

const NewsletterForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			to: '',
			subject: 'newsletter'
		}
	});

	const onSubmit: SubmitHandler<FieldValues> = (data, provider: any) => {
		setIsLoading(true);
		axios
			.post('/api/email', data)
			.then((callback) => {
				if (callback) {
					toast.success('Email successfully sent');
					setIsLoading(false);
				}
			})
			.catch((error) => {
				toast.error('Something went wrong.');
			})
			.finally(() => {
				reset();
			});
	};
	return (
		<>
			<div className="sm:flex">
				<div className="min-w-0 flex-1 mb-3">
					<label htmlFor="email" className="sr-only">
						Email address
					</label>
					<Input
						disabled={isLoading}
						id="to"
						type="email"
						label="Email"
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="mt-0 sm:mt-0 mb-3 sm:ml-3">
					<ButtonComponent
						label={'Subscribe'}
						onClick={handleSubmit(onSubmit)}
						classNames="w-full px-4 py-2 text-gray-600"
						color="gray"
						size="xl"
						icon={AppIcons['email']}
						iconSize={24}
					/>
				</div>
			</div>
			<p className="mt-3 text-sm text-gray-300 sm:mt-4">
				Our newsletter covers a wide range of topics, including AI, machine learning, web and mobile
				development, cloud computing, and much more. Stay ahead of the curve with our expert
				articles, tutorials, case studies, and industry news. By providing your email, you agree to
				our{' '}
				<Link href="/terms" className="font-medium text-white">
					terms of service
				</Link>
				.
			</p>
		</>
	);
};

export default NewsletterForm;
