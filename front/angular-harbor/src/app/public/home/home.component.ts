import { Component, Renderer2, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    public filesArr: Array<File> = [];

    constructor (
        private router: Router,
        private componentElement:  ElementRef,
        private render: Renderer2) {console.log(componentElement.nativeElement.querySelector('main'))}

    addFile(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        let files: FileList | null = inputElement.files;

        if (!files){
            console.log('Nenhum arquivo adicionado'); 
            return
        }

        for (let element = 0; element < files.length; element++) {
            if (!this.filesArr.some((currentFile: File) => currentFile.name === files[element]['name'])) {
                this.filesArr.push(files[element]);
            }
        }

        console.log(this.filesArr);
        //setTimeout(()=>{ this.router.navigate(['/upload']); }, 600)
        
    }; 
}