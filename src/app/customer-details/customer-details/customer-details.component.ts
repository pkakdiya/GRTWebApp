import { Component, OnInit } from '@angular/core';
import { CustomerService, ICustomerInquiry } from 'src/app/customer.service';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [DatePipe]
})
export class CustomerDetailsComponent implements OnInit {

  public rowData: any = [];
  public columnDefs;
  public gridApi;
  public gridColumnApi;
  public context;
  constructor(private customerService: CustomerService,
   private datePipe: DatePipe) { }

  ngOnInit() {
    this.columnDefs = [
      {field: 'id', hide: true },
      {field: 'name' },
      {field: 'address'},
      {field: 'phone'},
      {field: 'email'},
      {field: 'birthdate', valueFormatter: param => this.timeForMatter(param)},
      {field: 'cast'},
      {field: 'occupation'},
      {field: 'flattype'},
      {field: 'budget'},
      { headerName: 'Action', cellRendererFramework: EditButtonComponent }
    ];
    this.context = { componentParent: this };
    this.loadCustomerData();
  }

  timeForMatter(param) {
    return this.datePipe.transform(param.value, 'dd/MM/yyyy');
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  loadCustomerData() {
    this.customerService.get().subscribe(res => {
      const data = res;
      this.rowData = data;
    });
  }
}
