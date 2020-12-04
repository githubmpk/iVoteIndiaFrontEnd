import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationconfirmation',
  templateUrl: './registrationconfirmation.component.html',
  styleUrls: ['./registrationconfirmation.component.css']
})
export class RegistrationconfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backtoLogin() {
    this.router.navigate(['login']);
  }

}
