import { Component, Input, Renderer2 } from "@angular/core";
import { BooksService } from "../../services/books.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-upload",
    templateUrl: './upload.component.html',
    styleUrl: './upload.component.css',
})

export class UploadComponent {

    constructor (
        private booksService: BooksService,
        private router: Router,
        private render: Renderer2) {}

    addFile(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const formElement: HTMLElement | null = inputElement!.parentElement;
        const mainElement: HTMLElement | null = formElement!.parentElement;

        let files: FileList | null = inputElement.files;

        if (!files){
            console.log('Nenhum arquivo adicionado'); 
            return
        }

        for (let element = 0; element < files.length; element++) {
            if (!this.booksService.exists(files[element]['name'])) {
                this.booksService.addBook(files[element]);
            }
        }

        /* this.render.addClass(formElement, 'zoomEffect');
        setTimeout(()=>{
            this.render.addClass(mainElement, 'zoomEffectSlow')
        }, 300);

        console.log(inputElement.parentElement?.parentElement?.parentElement);
        setTimeout(()=>{ this.router.navigate(['/upload']); }, 400) */
        
    }; 

}