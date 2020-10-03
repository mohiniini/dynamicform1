import { Component, OnInit } from '@angular/core';
import { home } from '../model/home';
import { Router }  from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormserviceService } from '../formservice.service';
@Component({
  selector: 'app-multipleform',
  templateUrl: './multipleform.component.html',
  styleUrls: ['./multipleform.component.css']
})
export class MultipleformComponent implements OnInit {

constructor(private _router: Router,private formservice : FormserviceService, private http : HttpClient ) { }
home=new home();
name:any;
salary:any;
age:any;
dataarray = []


  ngOnInit(): void {
    this.dataarray.push(this.home);
  }

addform()

{

  this.home = new home();
  this.dataarray.push(this.home);
}

submit(f)
{
  console.log(this.dataarray)
  console.log("dasd");
  this.formservice.postNewPerson(this.dataarray).subscribe(data => {
   
    console.log(this.dataarray)
  })
  this._router.navigate(['/submitdetails']); 
}

removeform(index)
{
this.dataarray.splice(index);

}
}

