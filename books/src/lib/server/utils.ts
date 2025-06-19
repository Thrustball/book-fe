import type Book from "$lib/models/book";

export async function PutBook(book: Book): Promise<Response> {
    const url = "http://backend:8000/book"; 

    var request = new Request(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    return fetch(request);
}

export async function GetAllBooks(): Promise<Response> {
    const url = "http://backend:8000/book"; 

    var request = new Request(url, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });

    return fetch(request);
}