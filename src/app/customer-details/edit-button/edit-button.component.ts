import { Component, OnInit, Inject, Injector } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements ICellRendererAngularComp  {
  public params: any;
  private router: Router;
  refresh(params: any): boolean {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }

  constructor(private customerService: CustomerService,
   @Inject(Injector) public injector: Injector) {
     this.router = injector.get(Router);
  }

  invokeEditMethod() {
    const selectedData = this.params.data;
    if (selectedData && selectedData.id > 0) {
      this.router.navigate(['Inquiry'], { queryParams: { id: selectedData.id }, replaceUrl: true });
    }
  }

  invokeDeleteMethod() {
    const selectedData = this.params.data;
    if (selectedData && selectedData.id > 0) {
      const result = confirm('Do you want to delete the selected customer?');
      if (result) {
        this.customerService.delete(selectedData.id).subscribe(res => {
          if (res.status === 204) {
            alert('Customer record is delete successfully.');
            // Refresh the data;
            this.params.context.componentParent.loadCustomerData();
          } else {
            alert('Something happened at server-side, please contact administrator');
          }
        });
      }
    }
  }
}
