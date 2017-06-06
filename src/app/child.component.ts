import { Component, OnInit, Input,SimpleChanges ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() counter1:number = 0;
  @Input() prop:number=0;
  changeLog : String[] = [];
  stringArray= [];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change1s: SimpleChanges){
        var str:string;
        for(let p in change1s){
           
            let c = change1s[p];
            
            console.log( ": log111"  + c.currentValue + ":"  + c.previousValue);
            str = ": log111"  + c.currentValue + ":"  + c.previousValue;
        }
        this.stringArray.push(str);
         /*let  log : string [] =[];
         var i  = 0;
        for(let p in change1s){
           i++;
           console.log(   i +  ": log111"  + p );
            let c = change1s[p];
            //c.previousValue = 0;
            console.log(c + "log22");
            //let from = JSON.stringify(c.previousValue||'0');
            let from = c.previousValue || 0; 
            //let to = JSON.stringify(c.currentValue);
            let to = c.currentValue;
             console.log("finally " + from);
              console.log("finally " + to);
            log.push(`${p} changed from ${from} to ${to}`);
           
        }
       
        this.changeLog.push(log.join(', '));
*/
  }
}
