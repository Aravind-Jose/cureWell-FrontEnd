import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../models/doctor.model';
import { ISpecialization } from '../models/specialization.model';
import { IDoctorSpecialization } from '../models/doctorSpecialization.model';
import { ISurgery } from '../models/surgery.model';
import { Doctor } from '../models/doctorClass.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAllDoctors():Observable<IDoctor[]>{
   
  //Change the port Number Whoever is running The Backend ~AS 

    
    // return this.http.get<IDoctor[]>('https://localhost:7170/api/Doctor');
    return this.http.get<IDoctor[]>('https://localhost:44384/api/Doctor');

  }
  deleteDoctor(doctor: Number):Observable<boolean>{
   
    // return this.http.delete<boolean>('https://localhost:7170/api/Doctor/'+doctor);
    return this.http.delete<boolean>('https://localhost:44384/api/Doctor/'+doctor);
  }
  updateDoctor(doctor: Doctor):Observable<boolean>{
    // return this.http.put<boolean>('https://localhost:7170/api/Doctor',doctor);
    return this.http.put<boolean>('https://localhost:44384/api/Doctor',doctor);
  }
  addDoctor(doctor:Doctor):Observable<boolean>{
    // return this.http.post<boolean>('https://localhost:7170/api/Doctor',doctor);
    return this.http.post<boolean>('https://localhost:44384/api/Doctor',doctor);
  }
  getAllSpecializations():Observable<ISpecialization[]>{
    // return this.http.get<ISpecialization[]>('https://localhost:7170/api/Specialization');
    return this.http.get<ISpecialization[]>('https://localhost:44384/api/Specialization');
  }
  getAllSurgeries():Observable<ISurgery[]>{
    return this.http.get<ISurgery[]>('https://localhost:44384/api/Surgery');
    //return this.http.get('https://localhost:44384/api/Surgery');
  }
  updateSurgery(surgery:ISurgery):Observable<boolean>{
    // return this.http.put<boolean>('https://localhost:7170/api/Surgery',surgery);
    return this.http.put<boolean>('https://localhost:44384/api/Surgery',surgery);
  }
  getDoctorSpecialization(specializationCode :string):Observable<IDoctorSpecialization[]>{
    // return this.http.get<IDoctorSpecialization[]>('https://localhost:7170/api/DoctorSpecialization/'+specializationCode);
    return this.http.get<IDoctorSpecialization[]>('https://localhost:44384/api/DoctorSpecialization/'+specializationCode);
  }

}
