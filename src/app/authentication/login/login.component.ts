import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { MatDialogRef } from '@angular/material/dialog';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider;

  constructor(
    public auth: AuthService, 
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router
  ) {}

  ngOnInit() {
  }

  printUser(event) {
    this.dialogRef.close();
    this.router.navigate(['/news']);
  }

  printError(event) {
    console.error(event);
  }

}
