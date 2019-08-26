import { Component, OnInit } from '@angular/core';
import { EmailSend }    from '../email-send';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.css']
})
export class LayoutFooterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  env = environment;

  EmailSendModel = new EmailSend('');
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  onSubmit(event: any) {
    this.http.post(`${this.env['api']}/Email`, JSON.stringify(event),{headers: this.headers})
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

  get diagnostic() { return JSON.stringify(this.EmailSendModel); }
  
}
