import { Injectable } from "@angular/core";

@Injectable()
export class BooksService {
    protected files: Array<File> = [];

    getBooks(): Array<File> {
        return this.files;
    }

    getBook(index: number): File {
        return this.files[index];
    }

    addBook(book: File): void {
        this.files.push(book)
    }

    exists(bookName: string): boolean {
        return this.files.some((currentFile: File) => currentFile.name === bookName)
    }
}