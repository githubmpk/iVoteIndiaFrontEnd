import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-eballot',
  templateUrl: './eballot.component.html',
  styleUrls: ['./eballot.component.css']
})
export class EballotComponent implements OnInit {
  eballotform: any;
  inputValue: any;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.eballotform = this.fb.group({
      inputValue : ['', Validators.required ],
    });
  }

  

  eBallotSubmission() {
    this.router.navigate(['eballotconfirmation']);
  }

}
