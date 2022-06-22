import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent implements OnInit{
    public binding = 'Hello World!';
    constructor(){

    }
    ngOnInit(): void {
        
    }
    clicBouton(){
        console.log('Clic bouton!');
        this.binding = 'Clic !'

    }
}