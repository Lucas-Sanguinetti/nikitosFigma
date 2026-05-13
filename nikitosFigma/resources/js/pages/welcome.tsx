import { Head, Link, usePage } from '@inertiajs/react';
import { login, register } from '@/routes';
import navbar from '@/components/navbar';
import banner from '@/components/banner';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
       
        <div>
            {navbar()} 

            {banner()}
        </div>
        </>
    );
}
