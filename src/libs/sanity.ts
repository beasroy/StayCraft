import { createClient, SanityClient } from 'next-sanity';

// Create the client without type assertion
const rawSanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_STUDIO_TOKEN,
  apiVersion: '2021-10-21',
});

// Explicitly assert the type of the client
const sanityClient: SanityClient = rawSanityClient;

export default sanityClient;