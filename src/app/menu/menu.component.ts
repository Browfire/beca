import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Folder, Report } from '../dos/dos.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  formMenu = new FormGroup({
    selectCategories: new FormControl(),
    selectReports: new FormControl()
  });

  categories: Folder[] = [];
  reports: Report[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFolders().subscribe((response) => {
      console.log(response);
      this.categories = response;
    })

    this.apiService.getReports().subscribe((response) => {
      console.log(response);
      this.reports = response;
    })
  }

  onSubmit(){
    const selectedCategory = this.formMenu.controls.selectCategories.value;
    const selectedReport = this.formMenu.controls.selectReports.value;
    console.log('Categoría seleccionada: ', selectedCategory);
    console.log('Reporte seleccionado: ', selectedReport);
  }

}
