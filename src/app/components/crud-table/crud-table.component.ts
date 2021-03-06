import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Field } from "./field";
import { Item } from "./entities";
import {Sort} from "@angular/material/sort";
import {ThemePalette} from "@angular/material/core";
import {TableData} from "./table-data";

export interface Message {
  type: string;
  item: Item;
}

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {
  items: Array<Item> = [];

  columns: Array<Field> = [];

  displayedColumns: Array<string> = [];

  @Input()
  data: TableData<any> = {items: [], columns: []};

  @Input()
  headerColor: string = '#00BFFFFF';

  @Input()
  headerTextColor: string = '#000000';

  @Input()
  formFieldColor: ThemePalette = "primary";

  tableData: Array<Item> = [];

  filter: string = "";

  editing: any = {};

  adding: boolean = false;

  @Output()
  change = new EventEmitter<Message>();

  constructor() {}

  ngOnInit(): void {
    this.items = this.data.items;
    this.columns = this.data.columns;
    this.columns.map((col) => this.displayedColumns.push(col.key));
    this.items.map((item) => {this.editing[item.id] = false;});
    this.tableData = this.items;
    this.displayedColumns.push("edit");
    this.displayedColumns.push("delete");
  }

  addItem() {
    this.adding = true;
    var item: Item = {
      id: -1,
      fields: {}
    };
    this.columns.map((col) => {
      if(col.type === 'number') item.fields[col.key] = -1;
      else if(col.type === 'text') item.fields[col.key] = "";
    });
    this.items.push(item);
    this.items = this.items.slice();
    this.tableData = this.items;
  }

  saveAddItem(item: Item) {
    let last_id = -1;
    this.items.map((i) => {
      if(i.id !== item.id) last_id = i.id;
    });
    item.id = last_id + 1;
    this.items[-1] = item;
    this.editing[item.id] = false;
    this.tableData = this.items;
    this.adding = false;
    this.change.emit({type: 'add', item: item});
  }

  cancelAddItem() {
    this.items.pop();
    this.items = this.items.slice();
    this.tableData = this.items;
    this.adding = false;
  }

  editItem(item: Item) {
    this.editing[item.id] = true;
  }

  saveEditItem(item: Item) {
    this.editing[item.id] = false;
    this.items.map((i) => {if(i.id === item.id) i = item;});
    this.change.emit({type: 'update', item: item});
  }

  cancelEditItem(item: Item) {
    this.editing[item.id] = false;
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.tableData = this.items;
    this.change.emit({type: 'delete', item: item});
  }

  applyFilter() {
    this.tableData = this.items.filter(item => this.columns.map((col) => item.fields[col.key].toString().includes(this.filter)).includes(true));
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
