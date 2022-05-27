import {Component, OnInit, ViewChild} from '@angular/core';
import {TableData} from "../../components/crud-table/table-data";
import * as MockData from "./mock-data";
import {Artist, Product} from "./example-entities";
import {CrudTableComponent} from "../../components/crud-table/crud-table.component";

@Component({
  selector: 'app-crud-table-examples',
  templateUrl: './crud-table-examples.component.html',
  styleUrls: ['./crud-table-examples.component.css']
})
export class CrudTableExamplesComponent implements OnInit {
  artists: TableData<Artist> = MockData.ArtistTableData;
  products: TableData<Product> = MockData.ProductTableData;

  @ViewChild("artistCrud") artistCrud: CrudTableComponent | undefined;
  @ViewChild("productCrud") productCrud: CrudTableComponent | undefined;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.artistCrud?.change.subscribe(message => {
      if(message.type === 'add') console.log('add item', message.item);
      else if(message.type === 'update') console.log('update item', message.item);
      else if(message.type === 'delete') console.log('delete item', message.item);
    }
    );

    this.productCrud?.change.subscribe(message => {
        if(message.type === 'add') console.log('add item', message.item);
        else if(message.type === 'update') console.log('update item', message.item);
        else if(message.type === 'delete') console.log('delete item', message.item);
      }
    );
  }

}
