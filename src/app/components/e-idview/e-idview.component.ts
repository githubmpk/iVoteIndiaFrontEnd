import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-idview',
  templateUrl: './e-idview.component.html',
  styleUrls: ['./e-idview.component.css']
})
export class EIdviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toHome() {
    this.router.navigate(['home']);
  }

}
