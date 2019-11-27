import { Component, OnInit, Inject, Injector } from '@angular/core';
import { CustomerService, ICustomerInquiry } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquirycomponent',
  templateUrl: './inquirycomponent.component.html',
  styleUrls: ['./inquirycomponent.component.css']
})
export class InquirycomponentComponent implements OnInit {

  public id?: number;
  public Iname: string;
  public address: string;
  public Iphone: any;
  public Ibdate: any;
  public Icast: string;
  public Ibudjet: any;
  public Imail: string;
  public I2BHK: any;
  public I3BHK: any;
  public IBusiness: any;
  public IJob: any;
  public inquiryBtnText: string;
  private editMode = false;
  private router: Router;

  constructor(private customerService: CustomerService, 
    private route: ActivatedRoute, 
    @Inject(Injector) public injector: Injector) { 
      this.router = injector.get(Router);  
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = this.route.snapshot.queryParamMap.get('id');
      if (id) {
        this.inquiryBtnText = 'Edit Inquiry'
        this.editMode = true;
        this.customerService.getById(id).subscribe(res => {
          if (res) {
            this.id = res.id;
            this.Iname = res.name;
            this.address = res.address;
            this.Iphone = res.phone;
            this.Ibdate = res.birthdate;
            this.Icast = res.cast;
            this.Ibudjet = res.budget;
            this.Imail = res.email;
            this.I2BHK = res.flattype === '2BHK' ? true : false;
            this.I3BHK = res.flattype === '3BHK' ? true : false;
            this.IBusiness = res.occupation === 'Business' ? true : false;
            this.IJob = res.occupation === 'Job' ? true : false;
          }
        });
      } else {
        this.id = null;
        this.inquiryBtnText = 'Save Inquiry'
        this.editMode = false;
      }
    });
  }
  onSubmit(modal: any) {
    if (this.editMode) {
      const customerModel: ICustomerInquiry = {
        name: modal.Iname,
        address: modal.address,
        phone: modal.Iphone,
        birthdate: modal.Ibdate,
        cast: modal.Icast,
        budget: modal.Ibudjet,
        email: modal.Imail,
        flattype: modal.I2BHK ? '2BHK' : '3BHK',
        occupation: modal.IBusiness ? 'Business' : 'Job'
      };
      this.customerService.put(this.id, customerModel).subscribe(resp => {
        if (resp.status === 204) {
          alert('Customer is successfully Updated.');
          this.router.navigate(['Customer'], { replaceUrl: true });
        } else {
          alert('Something happened at server-side, please contact administrator');
        }
      });
    } else {
    const customerModel: ICustomerInquiry = {
        name: modal.Iname,
        address: modal.address,
        phone: modal.Iphone,
        birthdate: modal.Ibdate,
        cast: modal.Icast,
        budget: modal.Ibudjet,
        email: modal.Imail,
        flattype: modal.I2BHK ? '2BHK' : '3BHK',
        occupation: modal.IBusiness ? 'Business' : 'Job'
    };
    this.customerService.post(customerModel).subscribe(resp => {
      if (resp.status === 201) {
        alert('Customer is successfully created.');
        this.resetForm();
      } else {
        alert('Something happened at server-side, please contact administrator');
      }
    });
    }
  }

  resetForm() {
    this.Iname = '';
    this.address = '';
    this.Iphone = '';
    this.Icast = '';
    this.Imail = '';
    this.Ibdate = '';
    this.Ibudjet = '';
    this.I3BHK = false;
    this.I2BHK = false;
    this.IBusiness = false;
    this.IJob = false;
  }
}
