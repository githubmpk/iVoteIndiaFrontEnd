import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetcredentials',
  templateUrl: './resetcredentials.component.html',
  styleUrls: ['./resetcredentials.component.css']
})
export class ResetcredentialsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  
  resetConfirmation() {
    this.router.navigate(['resetcredentialconfirmation']);
  }

}
