import { Component, OnInit } from '@angular/core';
import { Contrat } from 'app/Core/Model/Contrat';
import { ContratServiceService } from 'app/Core/Services/contrat-service.service';

@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {

  constructor(private constratS:ContratServiceService) { }
  shouldOpen!:boolean;
listContrats:Contrat[]=[];
  ngOnInit(): void {
    this.getAllContrat();
  }
getAllContrat(){
  this.constratS.getAllContrats().subscribe(data => this.listContrats= data);

}
openAddForm(){
  this.shouldOpen = true;
}
addContrat(contrat:Contrat){
this.constratS.addContrat(contrat).subscribe();
}
deleteContrat(id:number){
  this.constratS.delete(Number(id)).subscribe( () =>this.getAllContrat() );
}
}
