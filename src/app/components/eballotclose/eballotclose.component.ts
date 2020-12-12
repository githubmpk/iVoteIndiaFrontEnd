import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eballotclose',
  templateUrl: './eballotclose.component.html',
  styleUrls: ['./eballotclose.component.css']
})
export class EballotcloseComponent implements OnInit {

  today: number = Date.now();

  constructor() { }

  ngOnInit(): void {
    // let dateFormat = require('dateformat');
    // let now = new Date();
    // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    // console.log('date: ' +now);
  }

}
