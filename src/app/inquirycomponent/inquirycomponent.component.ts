import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquirycomponent',
  templateUrl: './inquirycomponent.component.html',
  styleUrls: ['./inquirycomponent.component.css']
})
export class InquirycomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: any) {
    console.log(event);
  }

}
