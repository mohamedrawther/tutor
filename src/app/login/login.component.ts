import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule  }   from '@angular/forms';
import {NGXLogger} from "ngx-logger";

import {Courtier} from '../model/courtier';
//import { forbiddenNameValidator } from '../directive/validator/forbidden-name-validator-reactive-form.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NGXLogger]
})
export class LoginComponent implements OnInit {
  courtier: Courtier;
  
  title: string;

  heroes: string[];
  myHero: string;

  constructor(private router : Router) { 
    this.title="testMe";
    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.myHero = this.heroes[0];
    this.typedValue='';
    this.courtier=new Courtier();
  }
  //Start Reactive built-in validator
  loginFormGroup: FormGroup;
  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      'id': new FormControl(this.courtier.id,[Validators.required,Validators.minLength(3)]),
      'userid': new FormControl(this.courtier.userid, [Validators.required,Validators.minLength(3)]),
      'password': new FormControl(this.courtier.password, [Validators.required,Validators.minLength(3)])

    });
  }
  get userid(){return this.loginFormGroup.get('userid');  }
  get password(){return this.loginFormGroup.get('password'); }
  //End validation framework

  login(){
    this.courtier.id = 100;   
  }

  get diagnostic() { return JSON.stringify(this.courtier); }

  typedValue: string;
  onKey(typedValue: string){
    this.typedValue = typedValue;
  }
  onEnter(typedValue: string){
    this.typedValue = typedValue;
  }
}
