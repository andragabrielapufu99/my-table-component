import { Component, OnInit } from '@angular/core';
import {TableData} from "../../components/crud-table/table-data";
import * as MockData from "./mock-data";
import {Artist, Product} from "./example-entities";

@Component({
  selector: 'app-crud-table-examples',
  templateUrl: './crud-table-examples.component.html',
  styleUrls: ['./crud-table-examples.component.css']
})
export class CrudTableExamplesComponent implements OnInit {
  artists: TableData<Artist> = MockData.ArtistTableData;
  products: TableData<Product> = MockData.ProductTableData;

  constructor() { }

  ngOnInit(): void {
  }

}
