import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeownerService } from 'src/app/services/homeowner.service';

@Component({
  selector: 'app-homeowner-login-page',
  templateUrl: './homeowner-login-page.component.html',
  styleUrls: ['./homeowner-login-page.component.css']
})
export class HomeownerLoginPageComponent implements OnInit {

  constructor(private router: Router, private homeownerService: HomeownerService) { }

  ngOnInit(): void {
  }
  toHomeownerRegistration() {
    this.router.navigate(["/newHomeownerPage"]);
  }
  checkLogin(identification: FormGroup) {
    this.homeownerService.CheckHomeownerLogin(identification.value).subscribe(
      restartConsumer => {
        this.homeownerService.currentHomeowner = restartConsumer;
        if (this.homeownerService.currentHomeowner == null) {
          alert("אחד או יותר מהפריטים שהזנת שגוי")
        }
        else {
          this.router.navigate(["/HomeownerShowPage"]);
        }
      },
      er => { alert(er.massege + "תקלה"); }
    )
  }
}

