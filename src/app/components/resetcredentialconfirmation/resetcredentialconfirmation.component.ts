import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetcredentialconfirmation',
  templateUrl: './resetcredentialconfirmation.component.html',
  styleUrls: ['./resetcredentialconfirmation.component.css']
})
export class ResetcredentialconfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backtoLogin() {
    this.router.navigate(['login']);
  }

}
