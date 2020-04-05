import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  public allCustomers: Customer[];
  public customer: Customer;

  public newCustomer: Customer;
  public customerId: string;
  public response: string;

  constructor(public _customerService: CustomerService) { }

  ngOnInit() {
    this.allCustomers = [];
    this.initCustomers();
    this.customerId = '';
  }

  initCustomers() {
    this.newCustomer = new Customer();
    this.customer = new Customer();
    this._customerService.getAll().subscribe((data: Customer[]) => {
      this.allCustomers = data;
    });
  }

  public dialogOpened = false;

  public getPlaceholderDateFormat() {
    return {
      year: 'yy', month: 'MM', day: 'dd',
      hour: 'h', minute: 'm', second: 's'
    };
  }

  public actionsLayout: string = 'normal';

  public onDialogClose() {
      this.dialogOpened = false;
  }

  public getShortDateFormat() {
    return 'dd-MM-yyyy';
  }

  public mask: string = "000-0000000";

  public saveCustomer() {
    this._customerService.saveClient(this.newCustomer).subscribe((_customer: Customer) => {
      this.customer = new Customer();
      this.response = "Cliente registrado"
      this.dialogOpened = true;
    }, (error: any) => {
      this.dialogOpened = true;
      this.response = "Cliente no registrado"
      console.error(error);
    });
  }

  public getCustomerById() {
    this._customerService.getCustomerById(this.customerId).subscribe((_customer: Customer) => {
      this.customer = _customer;
      if(_customer == null ){
          this.customer =  new Customer();
      }
      this.customerId = "";
    }, (error: any) => {
      this.dialogOpened = true;
      this.response = "Cliente no se encuentra registrado"
      console.error(error);
    });



  }

}
