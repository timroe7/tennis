import { Component, OnInit } from '@angular/core';
import {Game} from '../game';
@Component({
  selector: 'app-counter-test',
  templateUrl: './counter-test.component.html',
  styleUrls: ['./counter-test.component.css']
})
export class CounterTestComponent implements OnInit {
  
  constructor(game: Game) {
    
   }

  ngOnInit() {
  }

}