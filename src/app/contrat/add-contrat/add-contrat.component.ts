import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import { Contrat } from 'app/Core/Model/Contrat';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  contrat!:Contrat;
  @Output() notification = new EventEmitter<Contrat>();
  constructor() { }

  ngOnInit(): void {
    this.contrat={
      titre:"",
      id:0,
      dateD:new Date(),
      dateF:new Date(),
      description:""
    }
  }
  notifparent(contrat:Contrat){
    this.notification.emit(contrat)
  }
}
