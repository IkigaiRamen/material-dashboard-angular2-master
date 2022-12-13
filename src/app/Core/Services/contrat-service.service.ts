import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrat } from '../Model/Contrat';

@Injectable(
  {
  providedIn: 'root'
})
export class ContratServiceService {
  url = "http://localhost:3000/contrats/";
  constructor(private http:HttpClient) { }

  addContrat(contrat:Contrat){
    console.log("last step");
    console.log(contrat);

    return this.http.post<Contrat>(this.url,contrat);
  }

  modifyContrat(id:number,contrat:Contrat){
    return this.http.put(this.url+id,contrat);

    
  }
getAllContrats(){
  return this.http.get<Contrat[]>(this.url);


}
  delete(id:number){
    return this.http.delete(this.url+id);
  }
}
