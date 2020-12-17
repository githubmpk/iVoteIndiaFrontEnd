import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrcodereader',
  templateUrl: './qrcodereader.component.html',
  styleUrls: ['./qrcodereader.component.css']
})
export class QrcodereaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toeVote() {
    this.router.navigate(['eballot']);
  }

}
