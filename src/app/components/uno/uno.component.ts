import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})

export class UnoComponent implements OnInit {

  showImage: boolean = true;  
  
  constructor() { }

  ngOnInit(): void {
  }

  notShow(): void {
    this.showImage = false;
  }

}
