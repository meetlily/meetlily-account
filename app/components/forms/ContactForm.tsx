'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Input from '../inputs/Input';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ButtonComponent from '../Button';
import AppIcons from '../icons/AppIcons';

const ContactForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			to: '',
			subject: '',
			text: ''
		}
	});

	const onSubmit: SubmitHandler<FieldValues> = (data, provider: any) => {
		setIsLoading(true);
		data.subject = 'contactUs';
		axios
			.post('/api/email', data)
			.then((callback) => {
				if (callback) {
					setIsLoading(false);
					toast.success('Email successfully sent');
				}
			})
			.catch((error) => {
				toast.error('Something went wrong.');
			})
			.finally(() => {
				setIsLoading(false);
				reset();
			});
	};
	return (
		<>
			<div className="flex flex-row w-full mb-10">
				<div className="flex flex-col w-full">
					<div className="px-4 md:px-10 lg:px-20">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-gray-900">
							Contact Us
						</h2>
						<p className="mb-4 lg:mb-10 font-light text-center text-gray-200 dark:text-gray-700 sm:text-xl">
							Got a technical issue? Want to send feedback about a beta feature? Need details about
							our Business plan? Let us know.
						</p>
						<Input
							id="to"
							type="email"
							label="Email"
							register={register}
							errors={errors}
							required
							name={'to'}
							onChange={() => {}}
						/>

						<div className="py-3">
							<Input
								id="subject"
								type="text"
								label="Subject"
								register={register}
								errors={errors}
								required
								name={'subject'}
								onChange={() => {}}
							/>
						</div>
						<div className="py3">
							<Input
								id="text"
								type="text"
								label="Message"
								register={register}
								errors={errors}
								required
								name={'text'}
								onChange={() => {}}
							/>
						</div>
						<ButtonComponent
							label={'Send Email'}
							onClick={handleSubmit(onSubmit)}
							classNames="w-full px-4 pl-2 mt-4"
							color="gray"
							size="xl"
							icon={AppIcons['signIn']}
							iconSize={24}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
