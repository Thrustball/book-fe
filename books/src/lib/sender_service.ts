import type Book from "./models/book";
import { PutBook } from "./server/utils";

export async function SendBook(book: Book) {
    await PutBook(book);
}