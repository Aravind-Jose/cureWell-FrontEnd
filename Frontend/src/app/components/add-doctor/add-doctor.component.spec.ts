import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDoctorComponent } from './add-doctor.component';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
// import { DataService } from 'src/app/services/data.service';
describe('AddDoctorComponent', () => {
  let component: AddDoctorComponent;
  let fixture: ComponentFixture<AddDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDoctorComponent]
    });
    fixture = TestBed.createComponent(AddDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // describe('myService', () => {

  //   beforeEach(() => TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule], 
  //     providers: [myService]
  //   }));

  //    it('should be created', () => {
  //     const service: myService = TestBed.get(myService);
  //     expect(service).toBeTruthy();
  //    });

  //    it('should have getData function', () => {
  //     const service: myService = TestBed.get(myService);
  //     expect(service.getData).toBeTruthy();
  //    });

  // });




  it('should contain doctor names', () => {
    expect(component.addDoctorResponse).toBe(true);
  });
});
