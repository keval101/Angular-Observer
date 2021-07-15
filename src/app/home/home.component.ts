import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  // private firstInterval:Subscription ;
  private firstCustomeObs:Subscription ;
  constructor() { }

  ngOnInit(): void {
    // this.firstInterval = interval(1000).subscribe(
    //   count => {
    //     console.log(count)
    //   }
    // )

    const customeIntervelObeserver = Observable.create(
      observer => {
        let count = 0;
          setInterval( () => {
            observer.next(count)
            if(count === 2){
              observer.complete()
            }
            if(count > 3){
              observer.error(new Error("Count is Greater Then 3 !"))
            }
            count++;
          },1000)
      }
    );

    this.firstCustomeObs = customeIntervelObeserver.subscribe(
    data => {
      console.log(data)
    },
    error => {
      console.log(error)
      alert(error.message)
    },
    () =>{
      console.log('Completed !'  )
    }
    )
  }
  ngOnDestroy(){
    // this.firstInterval.unsubscribe();
    this.firstCustomeObs.unsubscribe();
  }
}
