import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-02-14',
    useCdn: false,
});


