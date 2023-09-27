import { Component } from '@angular/core';
import {User} from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {

  textMessage = '';
  alertClass = '';

  constructor(private authService: AuthService){

  }

  userModel = new User()

  onSubmitHandler(){
  
    this.authService.register(this.userModel).subscribe((response: any) => {
      console.log(response)
      this.alertClass= 'alert alert-success'
      this.textMessage = response.message
    }, (error) => {
      console.log(error)
      this.alertClass= 'alert alert-danger'
      this.textMessage = error. error.message
    })
  }


  
}
