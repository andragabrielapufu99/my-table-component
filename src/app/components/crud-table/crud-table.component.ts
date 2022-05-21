import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Field } from "../../shared/field";
import { Item } from "../../shared/entities";
import {Sort} from "@angular/material/sort";
import {filter} from "rxjs";

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {
  @Input()
  items: Array<Item> = [];

  @Input()
  columns: Array<Field> = [];

  @Input()
  displayedColumns: Array<string> = [];

  tableData: Array<Item> = [];

  filter: string = "";

  constructor() {}

  ngOnInit(): void {
    this.tableData = this.items;
    this.displayedColumns.push("edit");
    this.displayedColumns.push("delete");
  }

  addItem() {

  }

  editItem(item: Item) {

  }

  deleteItem(id: string) {
    this.items = this.items.filter(item => item.id !== id);
    this.tableData = this.items;
  }

  applyFilter() {
    this.tableData = this.items.filter(item => this.columns.map((col) => item.fields[col.key].toString().includes(this.filter)).includes(true))
  }

  sortData(sort: Sort) {
    const data = this.items.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
      return;
    }

    this.tableData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      return this.compare(a.fields[sort.active], b.fields[sort.active], isAsc)
    });
  }

  compare(a: Item, b: Item, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
