import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {
    public filesArr: Array<File> = [];

    someAction(event: Event) {
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
        /* this.someVar = someElement.form.controls["input-file"];
        console.log(this.someVar); */
    }; 
}