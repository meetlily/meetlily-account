'use client';
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ButtonComponent from '../Button';
import SocialButton from '../SocialButton';
import AppIcons from '../icons/AppIcons';
import Input from '../inputs/Input';
import Logo from '../navbar/Logo';
interface LoginFormProps {
	currentUser?: any;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	if (currentUser) {
		redirect('/dashboard');
	}
	useEffect(() => {
		NProgress.done();

		return () => {
			NProgress.start();
		};
	}, []);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: ''
		}
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		NProgress.start();
		signIn('credentials', {
			...data,
			redirect: false
		})
			.then((callback) => {
				if (callback?.ok) {
					setTimeout(() => {
						reset();
						toast.success('Logged in');
						NProgress.done();
					}, 3000);
				}
				if (callback?.error) {
					toast.error(callback.error);
				}
			})
			.catch((error) => {
				toast.error('Something went wrong.');
				NProgress.done();
			})
			.finally(() => {
				setTimeout(() => {
					router.push('/dashboard');
				}, 500);
			});
	};
	const bodyContent = (
		<div
			className="
                flex
                flex-col
                gap-4
            "
		>
			<Input
				id="email"
				type="email"
				label="Email"
				register={register}
				errors={errors}
				required
				name={'email'}
				onChange={() => {}}
			/>
			<Input
				id="password"
				type="password"
				label="Password"
				register={register}
				errors={errors}
				required
				name={'password'}
				onChange={() => {}}
			/>
		</div>
	);
	const footerContent = (
		<>
			<div className="flex flex-row gap-4 mt-3">
				<SocialButton />
			</div>
			<div className="mt-6 border-b border-b-gray-300"></div>
			<p className="py-4 text-sm font-thin text-center text-gray-400">
				or sign in with your email and password
			</p>
		</>
	);
	return (
		<>
			<div
				className="
              bg-gray-800
                justify-center
                items-center
                flex
                fixed
                inset-0
                z-50
                outline-none
                overflow-auto
                focus:outline-none"
			>
				<div
					className={`
                    relative 
                    flex 
                    flex-col 
                    bg-gray-50
                    shadow-2xl 
                    rounded-2xl 
                    md:flex-row 
                    md:space-y-0 
                    md:m-0
                    
                `}
				>
					<div
						className="
                        translate
                        flex
                        flex-col
                        my-auto
                        px-10
                        md:px-20
                        pt-10
                    "
					>
						<div className="mx-auto">
							<Logo color="black" width={180} height={180} onClick={() => router.push('/')} />
						</div>
						<div className="form-wrapper pb-20 pt-8">
							<h2
								className={`
                            mb-2
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            xl:text-4xl
                            font-light
                            text-gray-700
                            md:font-semibold
                        `}
							>
								Sign In
							</h2>
							<p
								className={`
                            max-w-sm 
                            mb-8
                            font-sans 
                            font-light 
                            text-gray-400
                            min-w-[340px]
                            md:min-w-[380px]
                        `}
							>
								Sign in to your account with
							</p>
							{/* Body */}
							<div
								className="

                                relative
                                flex-auto
                            "
							>
								<div>{footerContent}</div>
								{bodyContent}

								<div
									className="
                                    flex
                                    flex-row
                                    items-center
                                    gap-4
                                    w-full
                                    my-7
                                "
								>
									<ButtonComponent
										isProcessing={isLoading}
										label={'Continue'}
										onClick={handleSubmit(onSubmit)}
										classNames="w-full px-4 pl-2"
										color="dark"
										size="xl"
										icon={AppIcons['signIn']}
										iconSize={24}
									/>
									<ButtonComponent
										label={'Cancel'}
										onClick={() => router.push('/')}
										classNames="w-full px-4 pl-2 text-gray-600"
										color="gray"
										size="xl"
										icon={AppIcons['close']}
										iconSize={24}
									/>
								</div>
								<div className="justify-center flex flex-row items-center gap-2 text-sm">
									<div className="text-neutral-400">Don&apos;t have an account?</div>
									<div
										onClick={() => router.push('/sign-up')}
										className="
                                        text-neutral-800
                                        cursor-pointer
                                        hover:underline
                                    "
									>
										Create an account
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default LoginForm;
