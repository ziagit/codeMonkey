import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/shared/sevices/security/login.service';
import { SigninComponent } from 'src/app/shared/components/signin/signin.component';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.scss']
})
export class HomeSlideComponent implements OnInit {
  myForm:FormGroup;
  constructor(private dialog: MatDialog, private loginService: LoginService) { }

  ngOnInit() {
  }
login(){
  let dialogRef = this.dialog.open(SigninComponent, {
    width: '600px',
  });
}
}
