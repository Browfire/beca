import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  formOne = new FormGroup({
    select: new FormControl()
  });

  formTwo = new FormGroup({
    date: new FormControl(),
    text1: new FormControl(),
    text2: new FormControl(),
    file: new FormControl()
  });

  showImage: boolean = false;

  folders: Folder[] = [];
  reports: Report[] = [];

  selectedFolder = '';

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

  onFolderClick(folder: Folder): void {
    console.log('report component ', folder);
    this.selectedFolder = folder.name;
  }

  onSubmit(){
    const selectedValue = this.formOne.controls.select.value;
    console.log(selectedValue);
  }

  onSubmit2(){
    const dateValue = this.formTwo.controls.date.value;
    const textOneValue = this.formTwo.controls.text1.value;
    const textTwoValue = this.formTwo.controls.text2.value;
    const fileValue = this.formTwo.controls.file.value;
    console.log('date: ', dateValue);
    console.log('param1: ', textOneValue);
    console.log('param2: ', textTwoValue);
    console.log('file: ', fileValue);
  }

}

export class Folder{
  name: string;
}

export class Report{
  name: string;
  id: number;
}