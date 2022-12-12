import { Niveau } from "../enum/niveau";
import { detailEquipe } from "./DetailEquipe";
import { Etudiant } from "./Etudiant";

export class Equipe {
        
    idEquipe!: number;
    nomEquipe!: string;
    niveau!:Niveau;
    etudiants!:[Etudiant];
    detailEquipe!:detailEquipe;

}
