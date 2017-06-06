import { Component } from '@angular/core';
import { UserComponent } from './user.component';
import { ChildComponent } from './child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  msg = " this is a msg from app ";
  NameArray = ['foo','koo','','moo','too',''];//array expression 
  count : number = 10; 
  pop: number = 20;

  nextCount(){
    this.count = this.getRandomIntInclusive(this.count,this.count+1000);
    console.log("hahahah" + this.count);  
  }
  changePop(){
    return this.pop +=10;
  }

  getRandomIntInclusive(min :number, max: number) {
    // min = Math.ceil(min);
    //max = Math.floor(max);
    //return Math.floor(Math.random() * (max - min + 1)) + min;
    this.count +=100;
    return this.count ;
  }

}
