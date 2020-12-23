import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  showImage: boolean = false;

  folders: Folder[] = [];
  reports: Report[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('On init');
    this.apiService.getFolders().subscribe((response) => {
      console.log(response);
      this.folders = response;
    })

    this.apiService.getReports().subscribe((response) => {
      console.log(response);
      this.reports = response;
    })
  }

  onFolderClick(folder: string): void {
    console.log('report component ', folder);
  }

}

export class Folder{
  name: string;
}

export class Report{
  name: string;
  id: number;
}