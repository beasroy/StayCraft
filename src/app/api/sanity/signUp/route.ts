import { signUpHandler } from 'next-auth-sanity';

import sanityClient from '@/libs/sanity';
import { SanityClient } from 'sanity';

const typedSanityClient = sanityClient as SanityClient;

export const POST = signUpHandler(typedSanityClient);