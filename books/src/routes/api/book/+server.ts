// src/routes/api/hello/+server.js
import type Book from '$lib/models/book.js';
import { PutBook } from '$lib/server/utils.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const book: Book  = await request.json();
    // Your server-side logic here

    return await PutBook(book);
}
