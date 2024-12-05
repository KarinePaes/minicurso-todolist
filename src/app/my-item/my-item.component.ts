import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-item',
  imports: [],
  templateUrl: './my-item.component.html',
  styleUrl: './my-item.component.css'
})
export class MyItemComponent {
  @Input() text: string = ''; 
  @Input() completed: boolean = false; 
  @Input() id: number = 0; 

  @Output() statusChange = new EventEmitter<boolean>(); 
  @Output() removeItem = new EventEmitter(); 

  toggleComplete() {
    this.completed = !this.completed; 
    this.statusChange.emit(this.completed); 
  }

  onRemoveItem(){
    this.removeItem.emit();
  }
}
