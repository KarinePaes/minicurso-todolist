import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-input',
  imports: [],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css'
})
export class MyInputComponent {

  text: string = '';

  @Output() itemAdded = new EventEmitter<string>();

  getText(event: Event){
    this.text = (event.target as HTMLInputElement).value;
  }

  addItem(){
    this.itemAdded.emit(this.text);
  }
}
