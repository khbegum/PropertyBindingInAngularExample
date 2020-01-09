import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentValue:String;
  @Output() childChanged=new EventEmitter();
onChanged(value:String){
  this.childChanged.emit(value);
}
  constructor() { }

  ngOnInit() {
  }

}
