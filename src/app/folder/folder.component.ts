import { Component, Input, OnInit } from '@angular/core';
import { Folder, Report } from '../dos/dos.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() folder: Folder;
  @Input() report: Report;

  constructor() { }

  ngOnInit(): void {
  }

}