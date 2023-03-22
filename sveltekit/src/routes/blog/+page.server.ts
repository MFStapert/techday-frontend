import { getPosts } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
	  posts: await getPosts()
	};
}) satisfies PageServerLoad;