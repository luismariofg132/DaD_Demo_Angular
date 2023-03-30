import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragEnter, CdkDragSortEvent, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as data from '../../data/data.json';

@Component({
  selector: 'app-da-d',
  templateUrl: './da-d.component.html',
  styleUrls: ['./da-d.component.css']
})
export class DaDComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  atributos = ["Inicial", "En proceso", "En espera", "En revision", "Finalizado"]

  tbodyPrevisualization = ["Reporte 1"]

  tableElements: any = [{ "id": 1, "name": "Reporte 1", "status": "Inicial" }]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // aquí se puede agregar código para manejar la transferencia de elementos entre las listas
      moveItemInArray(this.tableElements, event.previousIndex, event.currentIndex);
      // console.log(event)
      this.tbodyPrevisualization.push(this.atributos[event.previousIndex])
      this.atributos.splice(event.previousIndex, 1)
    }
  }

  dropEntered(event: CdkDragSortEvent<string[], string[]>) {
    moveItemInArray(this.tableElements, event.previousIndex, event.currentIndex);

  }

}
