import { Component, Input } from "@angular/core";
import { BooksService } from "../../services/books.service";

@Component({
    selector: "app-upload-books",
    templateUrl: './upload.component.html',
    styleUrl: './upload.component.css',
})

export class UploadComponent {

    constructor (public booksService: BooksService) {
    }

}