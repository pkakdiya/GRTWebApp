import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-blogcomponent',
  templateUrl: './blogcomponent.component.html',
  styleUrls: ['./blogcomponent.component.css']
})
export class BlogcomponentComponent implements OnInit {

  constructor(private httpClient: HttpClient,private builder: FormBuilder) {

   }
  env = environment;
  emails;
  profileForm = new FormGroup({
    cemail:new FormControl(''),
  });
  ngOnInit() {
    
    window.addEventListener('scroll', this.scrollEvent, true);
  }


  
  scrollEvent = (event: any): void => {

    let scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
    let clientHeight =  document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
  /*   console.log(scrollTop);
    console.log(clientHeight);
    console.log(scrollHeight);
   */ 
   if ((scrollTop + clientHeight) >= scrollHeight) {
       //FUNCTIONS WHEN BOTTOM
       console.log("Bottom");
      //this.get_products();
     

    }
    else if ((scrollTop + scrollHeight) == scrollHeight) {
       //FUNCTIONS WHEN TOP
       console.log("TOp");
    }
  }
  get_products(){
    this.httpClient.get(`${this.env['api']}/Email`).subscribe((res)=>{
        console.log(res);
        this.emails=res;
        
    });
}
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.log(this.profileForm.value);
}
}
