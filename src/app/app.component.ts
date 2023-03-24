import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public email:string = '';

  public borda_email:string = '';

  salvar():boolean {
    if (this.email != '' && !this.isValidDomain(this.email)){
      this.borda_email = 'border:1px solid #FF0000';
      return false;
    }

    return true;
  }

  isValidDomain(email:string):boolean{
    let split = email.split('@');
    let domain:string = split[1];

    if (domain != "alunos.sc.senac.br"){
      return false;
    }
    return true;
  }
}