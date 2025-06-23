import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const object: Record<string, unknown> = {};

		data.forEach((value: unknown, key: string) => {
			// Prefer Reflect.has over hasOwnProperty
			if (!Reflect.has(object, key)) {
				object[key] = value;
				return;
			}
			if (!Array.isArray(object[key])) {
				object[key] = [object[key]];
			}
			// Type assertion to tell TypeScript this is now an array
			(object[key] as unknown[]).push(value);
		});

		const json = JSON.stringify(object);

        console.log(json);
		return { success: true };
	}
} satisfies Actions;