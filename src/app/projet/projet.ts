import { Component, Input } from '@angular/core';
import { ProjetItems } from './modele/projet-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projet',
  imports: [CommonModule],
  templateUrl: './projet.html',
  styleUrl: './projet.scss',
})
export class Projet {
  @Input() projetItems! : ProjetItems
  more = false


  onMore(event : Event) : void{
    let btn_more = event.target as HTMLButtonElement
    if(!this.more){
      btn_more!.textContent = "→ voir moins"
      this.more = true
    }
    else{
      btn_more!.textContent = "→ voir plus"
      this.more = false
    }

    let divParent = btn_more.closest(".project-item") as HTMLDivElement
    divParent.classList.toggle("more")    
  }

  // Stocke l'URL de l'image actuellement agrandie (null si fermé)
  imageSelectionnee: string | null = null;

  ouvrirLecteur(urlImage: string) {
    this.imageSelectionnee = urlImage;
  }

  fermerLecteur() {
    this.imageSelectionnee = null;
  }
}
