'use client'
import { SafeUser } from "@/app/types";
import { signIn, useSession } from 'next-auth/react';
import Button from "../Button";
import SocialButton from "../SocialButton";
import Input from "../inputs/Input";
import { redirect, useRouter } from "next/navigation";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Logo from "../navbar/Logo";
interface LoginFormProps {
    currentUser: SafeUser | null
}
const LoginForm: React.FC<LoginFormProps> = ({
    currentUser
}) => {
    const router = useRouter();

    if(currentUser){
        redirect('/dashboard')
    }

    const onSubmitProvider = (provider: string) => {
        signIn(provider)
            .then((callback) =>{
                if (callback?.ok) {
                    setTimeout(()=>{
                        toast.success('Logged in')
                    }, 3000)
                }
                if(callback?.error) {
                    toast.error(callback.error)
                }
            })
            .catch((error) => {
                toast.error("Something went wrong.")
            })
            .finally(()=>{
 
                setTimeout(()=>{
                    router.push('/');
                }, 3000)
            })
    }

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data, provider: any) => {
        signIn('credentials', {
            ...data,
            redirect: false
        })
        .then((callback) =>{

            if (callback?.ok) {
                setTimeout(()=>{
                    reset(); 
                    toast.success('Logged in')
                }, 3000)
            }
            if(callback?.error) {
                toast.error(callback.error)
            }
        })
        .catch((error) => {
            toast.error("Something went wrong.")
        })
        .finally(()=>{

            setTimeout(()=>{
                router.push('/');
            }, 3000)
        })
        

        
    }
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
            />
            <Input 
                id="password"
                type="password"
                label="Password"
  
                register={register}
                errors={errors}
                required
            />
        </div>
    )
    const footerContent = (
        <>
        <div className='flex flex-row gap-4 mt-3'>
            <SocialButton />
        </div>
        <div className="mt-6 border-b border-b-gray-300"></div>
        <p className="py-4 text-sm font-thin text-center text-gray-400">
        or sign in with your email and password
        </p>
        </>
    )
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
                    <div className='mx-auto'>
                        <Logo color='black' width={180} height={180} onClick={()=>{}} />
                    </div>
                    <div className='form-wrapper pb-20 pt-8'>
                        <h2 className={`
                            mb-2
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            xl:text-4xl
                            font-light
                            text-gray-700
                            md:font-semibold
                        `}>Sign In</h2>
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
                        {/* Body */ }
                        <div
                            className="

                                relative
                                flex-auto
                            "   
                        >
                            <div>
                                {footerContent}
                            </div>
                            {bodyContent}

                            <div
                                className="
                                    flex
                                    flex-row
                                    items-center
                                    gap-4
                                    w-full
                                    my-5
                                "   
                            >
                                <Button label={"Continue"} onClick={handleSubmit(onSubmit)} />
                            </div>
                            <div className='justify-center flex flex-row items-center gap-2 text-sm'>
                                <div className='text-neutral-400'>
                                    Don&apos;t have an account?
                                </div>
                                <div
                                    onClick={() => router.push('/register')}
                                    className='
                                        text-neutral-800
                                        cursor-pointer
                                        hover:underline
                                    '   
                                >
                                    Sign Up
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
