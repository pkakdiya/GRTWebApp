import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-contactcomponent',
  templateUrl: './contactcomponent.component.html',
  styleUrls: ['./contactcomponent.component.css']
})
export class ContactcomponentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  } 
  env = environment;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  onSubmit(event: any) {
    console.log(event);
    this.http.post(`${this.env['api']}/Contactus`, JSON.stringify(event),{headers: this.headers})
    .subscribe(
    data  => {
         if(data['errorInfo'])
         {
           alert(data['errorInfo']);
        /*Exception Management */
         }
        else
        {
          alert("Done");
            console.log(data);
        }
   },
        error  => {
          alert(error);
        console.log("Error", error);
        }
  );
  }

}
