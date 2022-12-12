import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from '../Model/Equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeServiceService {

  listeEquipes: Equipe[]= [];


  //URL du Backend
  url = "http://localhost:3000/equipe";
  constructor(private http:HttpClient) { }


  getAllEquipes(){
    return this.http.get<Equipe[]>(this.url);
  } 

  getEquipeById(id: Number){
    return this.http.get<Equipe>(this.url+'/'+id);
  }

  addEquipe(Equipe:Equipe){
    return this.http.post(this.url,Equipe);
  }

  deleteEquipe(id:Number){
    return this.http.delete(this.url+'/'+id);
  }

  updateEquipe(Equipe:Equipe, id:number){
    const ID = id;

    return this.http.put<Equipe>(this.url+'/'+ID, Equipe);
  }
}