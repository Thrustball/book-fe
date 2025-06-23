import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
        console.log(data);
		return { success: true };
	}
} satisfies Actions;