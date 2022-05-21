import { Component, OnInit } from '@angular/core';
import * as Entity from "../../shared/entities";
import {TableData} from "../../shared/table-data";
import * as MockData from "../../shared/mock-data";

@Component({
  selector: 'app-crud-table-examples',
  templateUrl: './crud-table-examples.component.html',
  styleUrls: ['./crud-table-examples.component.css']
})
export class CrudTableExamplesComponent implements OnInit {
  artists: TableData<Entity.Artist> = MockData.ArtistTableData;
  products: TableData<Entity.Product> = MockData.ProductTableData;

  constructor() { }

  ngOnInit(): void {
  }

}
