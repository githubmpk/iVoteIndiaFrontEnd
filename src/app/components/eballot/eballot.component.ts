import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eballot',
  templateUrl: './eballot.component.html',
  styleUrls: ['./eballot.component.css']
})
export class EballotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  eBallotSubmission() {
    this.router.navigate(['eballotconfirmation']);
  }

}
