import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { TestServService } from "../test-serv.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formdata: FormGroup;

  constructor(fb: FormBuilder, private testS: TestServService, private route: Router) {
    this.formdata = fb.group({
      email: new FormControl(""),
      password: new FormControl("")
   });
   }

  ngOnInit() {

    if(sessionStorage.token)
    {
      this.route.navigateByUrl('/about');
    }
    
  }
  onClickSubmit(data) { 
    this.testS.login(data).then((data)=>{
      // console.log(data.token);
      let data1 = JSON.parse(JSON.stringify(data));
      console.log(data1.token);
      if(data1.token)
      {
        sessionStorage.token = data1.token;
        this.route.navigateByUrl('/about');
      }
    },(err)=>{ alert("Invalid Crendential"); });
   }
}
