import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISurgery } from 'src/app/models/surgery.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-todays-surgery',
  templateUrl: './view-todays-surgery.component.html',
  styleUrls: ['./view-todays-surgery.component.css']
})
export class ViewTodaysSurgeryComponent {
  surgeries: ISurgery[] = [];
  alertClass = ""
  textMessage = ""
  loading = true;
  getTodaySurgery: any;
  constructor(private router: Router, private dataService: DataService) {
  }
  editSurgery(surgery: any) {
    console.log(surgery);
    this.router.navigate(['/editSurgery', surgery.SurgeryId], {
      state:
        { data: surgery }
    })
  }
  ngOnInit() {
    this.dataService.getAllSurgeries().subscribe(

      (response) => {
        //On successful excecution of service
        this.loading = false;
        this.textMessage = 'Specializations Fetched Successfully';
        this.alertClass = 'alert alert-success';
        this.surgeries = response;
        console.log(this.textMessage);
      },

      (error) => {
        //In case of error
        this.loading = false;
        
        Swal.fire('Failed to Load','','error');
    this.router.navigate(['/home'])
        this.textMessage = 'Error fetching Specializations';
        this.alertClass = 'alert alert-danger';
        console.error(this.textMessage);
      });
  }
}