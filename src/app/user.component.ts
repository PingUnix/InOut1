import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  _msg:string;
  @Input() 
  
    set msg(message:string){
      this._msg = message||'default user' ;
    }
    get msg(){
      return this._msg;
    }

  constructor() { }

  ngOnInit() {
  }

}
