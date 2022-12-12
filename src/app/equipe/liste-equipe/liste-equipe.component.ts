import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'app/Core/Model/Equipe';
import { EquipeServiceService } from 'app/Core/Services/equipe-service.service';

@Component({
  selector: 'app-liste-equipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListeEquipeComponent implements OnInit {

  constructor(private route:Router, private Equipes:EquipeServiceService) { }
    listeEquipe:Equipe[] = [];
  
    ngOnInit(): void {
      this.getEquipe();
  
    }
  
    getEquipe(){
      this.Equipes.getAllEquipes().subscribe(data => this.listeEquipe=data);
      console.assert(this.Equipes);
    }
    deleteEquipe(id:any){
      this.Equipes.deleteEquipe(Number(id)).subscribe( () =>this.getEquipe() );
    }

}
