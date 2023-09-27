import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { IDoctor } from 'src/app/models/doctor.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  doctors: IDoctor[] = [];
  tempDoctors: IDoctor[] = [];
  doctorIds: any[] = [];
  category: any;
  showMsgDiv: string = '';
  couldFetch = true;
  loading=true;
  
  constructor(private http: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    try {
      this.category = this.activatedRoute.snapshot.paramMap.get('specializationCode');
    }
    catch (e) {
      this.category = null;
    }
  }
   hideloader() {  
    // Setting display of spinner
    // element to none
    
}
  ngOnInit() {
    if (this.category == null) {
      this.http.getAllDoctors().subscribe(
        (data) => {
        this.loading=false;
        console.log(data);
        this.doctors = data;
        
        //Error Causing 

        //From here
        if (data.length > 0) {
          this.showMsgDiv = "All Doctors Fetched Successfully!!!";
          this.couldFetch = true;
        }
        else {
          this.showMsgDiv = "No Doctors Present !!!";
          this.couldFetch = false;
        }

        //till here

      },
      (error)=>{
        this.loading=false;
      }
      );
      console.log("cate " + this.category);

    }
    else {
      this.http.getDoctorSpecialization(this.category).subscribe(
        (data) => {
          this.loading=false;
        this.doctorIds = data;
        console.log(this.doctorIds);
        this.http.getAllDoctors().subscribe((data: any) => {
          this.tempDoctors = data;
          console.log(this.tempDoctors);
          this.doctors = this.tempDoctors.filter(item => {
            return this.doctorIds.some(filterItem => filterItem.DoctorId == item.DoctorId);
          });
          console.log('Final')
          console.log(this.doctors);
        });

      },
      (error)=>{
        this.loading=false;
      }
      
      );

    }
  }

  editDoctor(doctor: any) {
    this.router.navigate(['/doctor', doctor.DoctorId])
  }

  //Created the httpdelete and Updated Data
  deleteDoctor(doctor: Number) {
    // console.log(typeof(doctor))
    this.http.deleteDoctor(doctor).subscribe(
      (data) => {
        //  this.deleteMsg=data;
        this.http.getAllDoctors().subscribe((data: any) => {
          this.doctors = data;
        });
        Swal.fire('Successfully Deleted', '', 'success')
        //  console.log(data)
      },
      (error) => {
        //In case of error


        Swal.fire('Failed to Delete', '', 'error')
      }
    )
  }
}
