import { Component, OnInit, Input } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Profil } from './profil/profil';
import { Skills } from './skills/skills'
import { SkillsItems } from './skills/modele/skill-item'
import { Projet } from './projet/projet';
import { ProjetItems } from './projet/modele/projet-item';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Profil,
    Skills,
    Projet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  skillsList! : SkillsItems[];
  projetList! : ProjetItems[];

  ngOnInit(): void {
    this.skillsList = [
      new SkillsItems("Backend", ["Java (POO)", "SQL / SQLite"]),
      new SkillsItems("Frontend", ["HTML5 / CSS3 (Grid/Flex)", "JavaScript (ES6+)", "Design Responsive"]),
      new SkillsItems("Outils & Méthodes", ["Git / GitHub", "UML / Analyse", "Agile (Notions)"])
    ]

    this.projetList = [
      new ProjetItems ("Système PV Étudiants", "Automatisation du calcul des moyennes et génération de procès-verbaux académiques.","Java, SQL",["dashboard.png","gestion_compte1.png"]),
      new ProjetItems ("Site Portfolio", "Création d'un site portfolio pour présenter mes compétences et projets personnels.","Angular, TypeScript, HTML, CSS",["portfolio.png","portfolio2.png"]),
    ]
  }



}
