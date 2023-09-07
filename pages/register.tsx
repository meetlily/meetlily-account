import '@/app/globals.css'
import { useRouter } from "next/navigation";
import { Metadata } from 'next'
import ClientOnly from "@/app/components/ClientOnly";
import ToasterProvider from "@/app/components/providers/ToasterProvider";
import Button from '@/app/components/Button';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { MouseEvent, useCallback, useState } from 'react';
import Input from '@/app/components/inputs/Input';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import toast from 'react-hot-toast';
import Logo from '@/app/components/navbar/Logo';
interface MetaData {
    title: string;
    description: string;
}
export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const metaData: Metadata = {
      title: 'Dashboard',
      description: 'Welcome, Guest!'
    }
    const toggle = useCallback(() => {
        
    }, [])
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
            password: '',
            name: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        
        setIsLoading(true);
        signIn('credentials', {
            ...data,
            redirect: false
        })
        .then((callback) =>{
            setIsLoading(false);
            if (callback?.ok) {
                toast.success('Logged in')
                router.refresh();
            }

            if(callback?.error) {
                toast.error(callback.error)
            }
        })
        .catch((error) => {
            toast.error("Something went wrong.")
        })
        .finally(()=>{
            reset(); 
            setIsLoading(false);
            router.push('/');
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
                id="name"
                type="text"
                label="Full Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input 
                id="email"
                type="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            
        </div>
    )
    const footerContent = (
        <>
        <div className='flex flex-row gap-4 mt-3'>
            
            <Button 
                outline
                label='Google'
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button 
                outline
                label='Github'
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            
        </div>
        <div className="mt-6 border-b border-b-gray-300"></div>
        <p className="py-4 text-sm font-thin text-center text-gray-400">
        or use the form below
        </p>
        </>
    )
    return (

        <ClientOnly>
        <div 
            className="
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
                    bg-white
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
                        px-20
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
                        `}>Register</h2>
                        <p 
                        className={`
                            max-w-sm 
                            mb-8
                            font-sans 
                            font-light 
                            text-gray-400
                            min-w-[340px]
                        `}
                        >
                            Register or create your account with
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
                                <Button label={"Create"} onClick={() => {}} />
                            </div>
                            <div className='justify-center flex flex-row items-center gap-2 text-sm'>
                                <div className='text-neutral-400'>
                                    Already have an account?
                                </div>
                                <div
                                    onClick={toggle}
                                    className='
                                        text-neutral-800
                                        cursor-pointer
                                        hover:underline
                                    '   
                                >
                                    Login
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ClientOnly>
    )
}




