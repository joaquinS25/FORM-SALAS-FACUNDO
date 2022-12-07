import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  firstNameControl = new FormControl('Joaquin',[Validators.required,Validators.minLength(6)])
  lastNameControl = new FormControl('Salas',[Validators.required])
  
  registrarForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  })


  }
