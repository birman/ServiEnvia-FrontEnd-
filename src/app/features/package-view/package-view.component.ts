import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
import { Package } from 'src/app/models';

@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.scss']
})
export class PackageViewComponent implements OnInit {

  public allPackages: Package[];
  public package: Package;

  public newPackage: Package;
  public packageId: string;
  public response: string;

  public autoCorrect: boolean = true;
  public format: string = 'n';

  public cities: Array<string> = ['Manizales',  'Pereira', 'Armenia'];

  constructor(public _packageService: PackageService ) { }

  ngOnInit() {
    this.allPackages = [];
    this.initPackages();
    this.packageId = '';
  }

  initPackages() {
    this.newPackage = new Package();
    this.package = new Package();
  }

  public dialogOpened = false;

  public onDialogClose() {
      this.dialogOpened = false;
  }

  public mask: string = "000-0000000";

  public savePackage() {
    this._packageService.savePackage(this.newPackage).subscribe((_Package: Package) => {
      this.package = new Package();
      this.response = "Paquete registrado"
      this.dialogOpened = true;
    }, (error: any) => {
      this.dialogOpened = true;
      this.response = "Paquete no registrado"
      console.error(error);
    });
  }

  public getpackageById() {
    this._packageService.getPackageById(this.packageId).subscribe((_Package: Package) => {
      this.package = _Package;
      if(_Package == null ){
          this.package =  new Package();
      }
      this.packageId = "";
    }, (error: any) => {
      this.dialogOpened = true;
      this.response = "Paquete no se encuentra registrado"
      console.error(error);
    });
  }

}
