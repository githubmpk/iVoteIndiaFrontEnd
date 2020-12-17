import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fingerprintreader',
  templateUrl: './fingerprintreader.component.html',
  styleUrls: ['./fingerprintreader.component.css']
})
export class FingerprintreaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toQRCodeScan() {
    this.router.navigate(['qrcodereader']);
  }

}
