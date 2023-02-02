import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/services/authenticate/authenticate.service';
import { LocalService } from 'src/services/local-storage/local.service';
import jwtDecode from 'jwt-decode';
import { Payload } from 'src/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  token?: string;
  loginError: boolean;
  isLoading: boolean;
  className: string;

  constructor(private fb: FormBuilder,
    private authService: AuthenticateService,
    private localService: LocalService,
    private router: Router,
    private element: ElementRef) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.isLoading = false;
  }

  ngOnInit() {
    if (localStorage.length != 0) {
      this.router.navigate(['/']);
    }
  }

  public login(): void {
    if (!this.username.errors && !this.password.errors) {
      this.isLoading = true;
      const val = this.form.value;
      this.loginError = false;
      this.authService.login(val.username, val.password).subscribe(res => {
        // console.log(res);
        const token: string = res.token;
        const decoded = jwtDecode<Payload>(token);
        const decString: string[] = decoded.sub.split(',');

        this.localService.saveData('id', `${decString[0]}`);
        this.localService.saveData('username', `${decString[1]}`);
        this.localService.saveData('exp', `${decoded.exp}`);
        this.localService.saveData('roles', `${decoded.roles}`);
        this.localService.saveData('token', `${token}`);

        this.isLoading = false;
        this.router.navigate(['/']);
      }, error => {
        if (error.error.status = 400) {
          this.isLoading = false;
          this.loginError = true;
        }
        console.log(error.error);
      });
    }
  }

  get username() {
    return this.form.controls['username'];
  }

  get password() {
    return this.form.controls['password'];
  }
}
