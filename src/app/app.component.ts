import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyItemComponent } from './my-item/my-item.component';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from './my-input/my-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MyItemComponent, MyInputComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itens = [
    { text: 'Estudar Angular', completed: false },
    { text: 'Praticar exercícios', completed: true },
    { text: 'Ler um livro', completed: false }
  ];

  onStatusChange(index: number, completed: boolean) {
    this.itens[index].completed = completed;
  }

  addItemOnList(value: string){
    this.itens.push({text: value, completed: false})
  }

  onItemRemove(index: number) {
    this.itens.splice(index,1)
  }
}
