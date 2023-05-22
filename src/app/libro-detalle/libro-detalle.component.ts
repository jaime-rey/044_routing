import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Libro } from '../libro.model';
import { LIBROS } from '../mock';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css'],
})
export class LibroDetalleComponent implements OnInit {
  libro!: Libro;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    /*este código tiene varios problemas a la hora de comparar tipos indefinidos,
     que se solucionan con el operador "!" que al parecer obliga a ser del tipo
     que se define, y una vez solventado esto, el id que trae params es tipo string
     y hay que convertirlo a número para hacer la búsqueda en el array
    */
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.libro = LIBROS.find(item => item.id == parseFloat(id!))!;
    });
  }
}
