import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { LIBROS } from '../mock';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
libros!: Libro[];

ngOnInit(): void {
    this.libros=LIBROS;
}

}
