import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  userActivate:boolean = false;
  private activatedSub:Subscription;
  constructor(private _userService: UserService){

  }

  ngOnInit(){
    this.activatedSub = this._userService.activateUser.subscribe(didActivate => {
      this.userActivate = true;
    })
  }

  ngOnDestroy(){
    this.activatedSub.unsubscribe();
  }
}
