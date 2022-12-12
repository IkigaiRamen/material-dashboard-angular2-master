import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Niveau } from 'app/Core/enum/niveau';
import { EquipeServiceService } from 'app/Core/Services/equipe-service.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css'],
  providers:[EquipeServiceService]
})
export class AddEquipeComponent implements OnInit {
  reactiveForm = this.fb.group({
    nomEquipe:['', [Validators.required, Validators.minLength(3)]],
    Niveau: ['',Validators.required],
    detailEquipe:['', [Validators.required, Validators.minLength(3)]],
    });

  constructor(private fb:FormBuilder,private Equipes:EquipeServiceService , public n:Niveau ,public niv:Niveau, private router:Router ) { }

  ngOnInit(): void {
  }
  Save(){
    console.log(this.reactiveForm);
    let Equipe = this.reactiveForm.getRawValue();
   // this.Equipes.addEquipe(Equipe);
    console.log("user = ", Equipe);

  }

  get nomEquipe(){
    return this.reactiveForm.get('nomEquipe');
  }
  get detailEquipe(){
    return this.reactiveForm.get('detailEquipe');
  }
}
