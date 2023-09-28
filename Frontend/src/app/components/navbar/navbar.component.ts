import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor( private router: Router) {}
  faHospital=faHospital;
}
