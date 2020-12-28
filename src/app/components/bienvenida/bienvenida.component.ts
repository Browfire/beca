import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [this.customValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private apiService: ApiService,
    private sessionService: SessionService,
    private router: Router) { }

  customValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value === '' || control.value.length < 5) {
      return { 'customValidator': true }
    }
    return null;
  };

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.form.valid) {
      alert('Debe rellenar todos los campos, con mínimo 5 caracteres');
      return;
    }

    alert('Inicio de sesión exitoso');
    const username = this.username.value;
    const password = this.form.controls.password.value;

    this.apiService.login(username, password).subscribe((response) => {
      console.log(response);
      this.sessionService.user = response;
      this.router.navigateByUrl('uno');
    })

  };

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

}