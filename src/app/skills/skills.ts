import { Component, OnInit, Input } from '@angular/core';
import { SkillsItems } from './modele/skill-item';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  @Input() skillsItems! : SkillsItems

}
