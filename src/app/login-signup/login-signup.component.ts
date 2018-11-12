import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  radioValue: number;
  data: any;
  isMiddleDivVisible: boolean = false;
  mobileQuery: MediaQueryList;
  events: string[] = [];
  opened: boolean;
  get(radioValue) {
    switch (radioValue) {
      case 1:
        return "warn";
      case 2:
        return "accent";
        case 3:
        return "primary";
      default:
        return "primary";
    }
  }
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.get(this.radioValue);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  ngOnInit() {
  }
  abc(value) {
    this.radioValue = value.value;
    console.log(this.radioValue);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signup() {
    alert("Working");
  }
  Cancel() {
    alert("cancel");
  }
  change() {
    if(this.isMiddleDivVisible==false){
       this.isMiddleDivVisible=true;
      }else{
        this.isMiddleDivVisible=false;
      }
  }
  change1() {
  
}
}
