// src/routes/api/hello/+server.js
import Book from '$lib/models/book.js';
import { GetAllBooks, PutBook } from '$lib/server/utils.js';

export async function POST({ request }) {
    const book: Book  = await request.json();
    // Your server-side logic here

    return await PutBook(book);
}

export async function GET({ request }) {
    var resp = await GetAllBooks();
    return resp;
}