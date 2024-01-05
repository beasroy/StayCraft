'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { signUp } from 'next-auth-sanity/client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const defaultFormData = {
    email: '',
    name: '',
    password: '',
};
const Auth = () => {
    const [formData, setFormData] = useState(defaultFormData);

    const handleInputChange=(event: ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=event.target;
        setFormData({...formData, [name]:value})
    };

    const {data : session}= useSession();

    const router =useRouter();

    useEffect(() => {
        if (session) router.push('/');
      }, [router, session]);

    const loginHandler = async () => {
        try {
          await signIn();
          router.push('/');
        } catch (error) {
          console.log(error);
          toast.error("Something wen't wrong");
        }
      };

    const handleSubmit=async(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        try {
            const user = await signUp(formData);
            if (user) {
              toast.success('Success. Please sign in');
            }
          } catch (error) {
            console.log(error);
            toast.error("Something wen't wrong");
          } finally {
            setFormData(defaultFormData);
          }
        };

    return (
        <section className="container mx-auto mt-5">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[50%] mx-auto">
                <div className="flex mb-8 flex-wrap gap-3 md:flex-row item-center justify-center md:justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Create an Account</h1>
                    <p>or</p>
                    <span className='inline-flex items-center'>
                        <AiFillGithub onClick={loginHandler} className='mr-3 text-3xl cursor-pointer text-black dark:text-white' />
                        |
                        <FcGoogle onClick={loginHandler} className='ml-3 text-3xl cursor-pointer' />
                    </span>
                </div>
                <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        required
                        className='border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'
                        value={formData.email}
                        onChange={handleInputChange} />
                    <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        required
                        className='border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'
                        value={formData.name}
                        onChange={handleInputChange} />
                    <input
                        name='password'
                        type='password'
                        placeholder='password'
                        required
                        minLength={8}
                        className='border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none'
                        value={formData.password}
                        onChange={handleInputChange} />

                    <button
                        type='submit'
                        className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-tertiary-light'
                    >
                        Sign Up
                    </button>

                </form>
                <button
                    type='submit'
                    onClick={loginHandler}
                    className='w-full bg-[#f4bf96] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-tertiary-dark'
                >
                    Login
                </button>


            </div>
        </section >
    )
}

export default Auth