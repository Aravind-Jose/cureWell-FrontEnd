import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  isLoggedIn: any;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.checkToken()
  }

  onLogin() {
    this.router.navigateByUrl('login')
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('login')
  }
  faHospital=faHospital;


}
