import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // ✅ Importa CommonModule

@Component({
  selector: 'app-lista-tareas',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})

export class ListaTareasComponent {
  tarea: string = "";
  tareas: string[] = [];

  anyadirTareas(){
    if(this.tarea){
      this.tareas.push(this.tarea);
      this.tarea = "";
    }
  }

  eliminarTareas(indice: number){
    this.tareas.splice(indice, 1);
  }
}
