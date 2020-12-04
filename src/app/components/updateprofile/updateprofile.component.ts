import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['registrationconfirmation']);
  }

  towelcome() {
    this.router.navigate(['login']);
  }

}
