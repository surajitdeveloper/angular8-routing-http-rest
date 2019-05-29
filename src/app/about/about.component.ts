import { Component, OnInit } from '@angular/core';
import { TestServService } from "../test-serv.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string = ""

  users = []

  constructor(private testS: TestServService, private route: Router) { }

  ngOnInit() {
    if(!sessionStorage.token)
    {
      this.route.navigateByUrl('/home');
    }
    else{
      this.name = sessionStorage.token;
      this.testS.getuser().then((e)=>{
        // console.log(e);
        let users = JSON.parse(JSON.stringify(e));
        this.users = users.data;
        console.log(this.users);
      });
    }
  }
  logout()
  {
    sessionStorage.removeItem("token");
    this.route.navigateByUrl('/home');
  }

}
