import { Component, Input } from '@angular/core';
import { ProjetItems } from './modele/projet-item';

@Component({
  selector: 'app-projet',
  imports: [],
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
}
