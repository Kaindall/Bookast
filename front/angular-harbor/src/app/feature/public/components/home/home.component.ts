import { Component, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";

import { BooksService } from "../../services/books.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
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

        this.router.navigate(['/upload'])

        /* this.render.addClass(formElement, 'zoomEffect');
        setTimeout(()=>{
            this.render.addClass(mainElement, 'zoomEffectSlow')
        }, 300);

        console.log(inputElement.parentElement?.parentElement?.parentElement);
        setTimeout(()=>{ this.router.navigate(['/upload']); }, 400) */
        
    }; 
}