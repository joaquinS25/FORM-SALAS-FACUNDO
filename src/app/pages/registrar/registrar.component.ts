import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  firstNameControl = new FormControl('',[Validators.required,Validators.minLength(3)])
  lastNameControl = new FormControl('',[Validators.required,Validators.minLength(3)])
  emailControl = new FormControl('',[Validators.required,Validators.email])
  contraseniaControl = new FormControl('',[Validators.required,Validators.minLength(6)])
  repetirContraseniaControl = new FormControl('',[Validators.required,Validators.minLength(6)])
  
  
  registrarForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    contraseña: this.contraseniaControl,
    repetirContraseña: this.repetirContraseniaControl
    
  })
  submit(): void {
    
    alert("DATOS GRABADOS CON EXITO")

  }

  }
