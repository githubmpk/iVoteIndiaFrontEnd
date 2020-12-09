import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-eballotconfirmation',
  templateUrl: './eballotconfirmation.component.html',
  styleUrls: ['./eballotconfirmation.component.css']
})
export class EballotconfirmationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backtoLogin() {
    this.router.navigate(['login']);
  }


}
