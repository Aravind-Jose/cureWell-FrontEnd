import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeCheck } from './timeCheck';
import { ISurgery } from 'src/app/models/surgery.model';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css']
})
export class UpdateSurgeryComponent {
  surgery: ISurgery;
  surgeryForm!: FormGroup;
  // alertClass = ""
  // textMessage = ""
  loading=false;
  constructor(private fb: FormBuilder, private route: Router, private http: DataService) {
    this.surgery = route.getCurrentNavigation()?.extras.state?.['data'];

    console.log(this.surgery);

    this.surgeryForm = this.fb.group({
      surgeryCategory: [this.surgery.SurgeryCategory],
      surgeryId: [this.surgery.SurgeryId],
      doctorId: [this.surgery.DoctorId],
      surgeryDate: [this.surgery.SurgeryDate],
      startTime: [this.surgery.StartTime, [Validators.required, Validators.max(23), Validators.min(0), Validators.pattern("^[0-9]*$")]],
      endTime: [this.surgery.EndTime, [Validators.required, Validators.max(23), Validators.min(0), Validators.pattern("^[0-9]*$")]],

    }, {
      validators: timeCheck('startTime', 'endTime')
    })
  }

  updateSurgery() {
    this.loading=true;
    console.log(this.surgeryForm.value);
    this.http.updateSurgery(this.surgeryForm.value).subscribe(
      (data) => {
        this.loading=false;
        if (data == true) {
         
          //On successful excecution of service
          // this.textMessage = 'Surgery details updtaed Successfully';
          // this.alertClass = 'alert alert-success';
          // console.log(this.textMessage);
          Swal.fire('Successfully Updated', '', 'success')
          this.route.navigate(['/todaySurgery'])
        }
        else {
          // this.textMessage = 'Surgery details updated successfully';
          // this.alertClass = 'alert alert-danger';
          // console.log(this.textMessage);
          Swal.fire('Failed to Update','','error')
        }
      },

      (error) => {
        //In case of error
        // this.textMessage = 'Some error occured';
        // this.alertClass = 'alert alert-danger';
        // console.error(this.textMessage);
        this.loading=false;
        Swal.fire('Failed to Update','','error')
      }
    );


    
  }

  // get f() { 
  //   return this.surgeryForm.controls;
  //  }
  get startTime() {
    return this.surgeryForm.get('startTime');
  }
  get endTime() {
    return this.surgeryForm.get('endTime');
  }
}
