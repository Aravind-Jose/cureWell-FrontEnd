import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctorClass.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  // message: string = '';
  // textMessage = ""
  // alertClass = ""
  loading=false;
  doctorModel=new Doctor();
  addDoctorResponse:boolean=true;
  constructor(private dataService:DataService, private router:Router){

  }

  //added display
  // displayMessage(){
  //    this.message = 'Doctor successfully added'
  // }
  addDoctor(){
    console.log(this.doctorModel);
    this.loading=true;
    this.dataService.addDoctor(this.doctorModel).subscribe( 
      (response) => {
    this.loading=false;
    this.addDoctorResponse=response;
        //On successful excecution of service
        // this.textMessage = 'Doctors Fetched Successfully';
        // this.alertClass = 'alert alert-success';
        // console.log(this.textMessage);
        Swal.fire('Successfully Inserted','','success')
        this.router.navigate(['/doctor']);
      },

      (error) => {
        this.loading=false;
        //In case of error
        // this.textMessage = 'Error fetching doctors';
        // this.alertClass = 'alert alert-danger';
        // console.error(this.textMessage);
        Swal.fire('Failed to Insert','','error')
      }
  );
     
     
  }
}
