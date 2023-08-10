import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


const listMascotas: Mascota[] = [
 {nombre : 'Ciro', edad : 3, raza: 'Golden',color : 'Dorado',peso : 13},
 {nombre : 'Ciro2', edad : 2, raza: 'Golden2',color : 'Dorado2',peso : 13},
 {nombre : 'Ciro3', edad : 3, raza: 'Golden3',color : 'Dorado3',peso : 13},
 {nombre : 'Ciro4', edad : 4, raza: 'Golden4',color : 'Dorado4',peso : 13},
 {nombre : 'Ciro5', edad : 5, raza: 'Golden5',color : 'Dorado5',peso : 13},
 {nombre : 'Ciro6', edad : 6, raza: 'Golden6',color : 'Dorado6',peso : 13},
 {nombre : 'Ciro7', edad : 7, raza: 'Golden7',color : 'Dorad7',peso : 13},
 {nombre : 'Ciro8', edad : 8, raza: 'Golden8',color : 'Dorado8',peso : 13},
 {nombre : 'Ciro9', edad : 9, raza: 'Golden9',color : 'Dorado9',peso : 13},
 {nombre : 'Ciro10', edad : 10, raza: 'Golden10',color : 'Dorado10',peso : 13},
 {nombre : 'Ciro11', edad : 11, raza: 'Golden11',color : 'Dorado11',peso : 13},
 {nombre : 'Ciro12', edad : 12, raza: 'Golden12',color : 'Dorado',peso : 13},
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements AfterViewInit { 
  displayedColumns: string[] = ['nombre','edad','raza','color','peso' ,'acciones'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por paginad';

  }

  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
