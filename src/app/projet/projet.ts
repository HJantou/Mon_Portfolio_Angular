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
    let btn_more = event.target as HTMLElement
    if(!this.more){
      btn_more!.textContent = "→ voir moins"
    }
    else{
      btn_more!.textContent = "→ voir plus"
    }

    let more_img = document.querySelector(".project-item")
    more_img!.classList.toggle("more")
  }
}
