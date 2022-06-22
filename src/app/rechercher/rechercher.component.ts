import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent implements OnInit{
public title = 'titre par défaut';
public year: number;
public type = '';
public error = '';
public films = [];

    constructor(){

    }
    ngOnInit(): void {
        
    }
    rechercher(){
      this.error = '';
      if(!this.title || this.title.length<3){
          this.error = 'Veuillez saisir un title de plus de trois caractères';
      }
      if(this.year && (this.year<1900 || this.year>2022)){
        this.error = 'Veuillez saisir une année entre 1900 et 2022';
        }
        if(this.type === undefined){
            this.error = 'Veuillez saisir un type de média';
            }
            //Fin des contrôles de surface
            this.lancerRecherche();
    }

    private lancerRecherche(){
        this.films = [
            {
                Title: 'Film A',
                Year: 1952,
                Poster: 'assets/icon/favicon.png'
            },
            {
                Title: 'Film B',
                Year: 1977,
                Poster: 'assets/icon/favicon.png'
            },
            {
                Title: 'Film C',
                Year: 2012,
                Poster: 'assets/icon/favicon.png'
            }
         ]
    }
}