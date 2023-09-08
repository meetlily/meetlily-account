'use client';
import Button from "@/app/components/Button";
import AppIcons from "@/app/components/icons/AppIcons";
import { signIn } from "next-auth/react";

const SocialButton = () => {
    return (
        <>
            <Button 
                outline
                label='Google'
                icon={AppIcons['google']}
                onClick={() => signIn('google')}
            />
            <Button 
                outline
                label='Github'
                icon={AppIcons['github']}
                onClick={() => signIn('github')}
            />
        </>
    )
}

export default SocialButton;