import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
 // inputs:['isFavorite']
 encapsulation:ViewEncapsulation.Emulated   //default is emulated
})
export class ApisComponent implements OnInit {
@Input() item:string;
@Input() isSelected:boolean;
@Output() change=new EventEmitter();
  constructor() { }

  onClick(){
   // this.isFavorite=!this.isFavorite;
    // this.change.emit(this.isFavorite);
   // this.change.emit({newValue: this.isFavorite});
  }
  ngOnInit() {
  }

}

// how to use Input
// 1. first, import input form@angular/core
// 2. decorate the property with @Input()
// 3. in child component template use the variable in parent component