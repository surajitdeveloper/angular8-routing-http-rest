import { Component, OnInit } from '@angular/core';
import { TestServService } from "../test-serv.service";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  a: number;
  b: number;
  c: number;

  constructor(testS: TestServService) { 

    this.a = testS.a;
    this.b = testS.b;
   }

  ngOnInit() {
    this.c = this.a + this.b;
   }
}
