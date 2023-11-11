import { URL } from '@/shared/config';

async function getPosts() {
	const res = await fetch(URL);
	return res.json();
}

export { getPosts };
