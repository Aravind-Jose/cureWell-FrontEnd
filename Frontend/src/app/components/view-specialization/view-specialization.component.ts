import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { ISpecialization } from 'src/app/models/specialization.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrls: ['./view-specialization.component.css']
})

export class ViewSpecializationComponent {
  specializations!: ISpecialization[];
  alertClass = ""
  textMessage = ""
  loading = true;
  constructor(private http: DataService, private router: Router) { }
  viewDoctor(specialization: any) {
    console.log(specialization);
    this.router.navigate(['/specialization', specialization.SpecializationCode])
  }

  ngOnInit() {
    this.http.getAllSpecializations().subscribe(

      (response) => {
        this.loading = false;
        this.specializations = response;

        //On successful excecution of service
        this.textMessage = 'Specializations Fetched Successfully';
        this.alertClass = 'alert alert-success';
        console.log(this.textMessage);
      },

      (error) => {
        this.loading = false;

        //In case of error
        this.textMessage = 'Error fetching Specializations';
        this.alertClass = 'alert alert-danger';
        console.error(this.textMessage);
      });
  }

}