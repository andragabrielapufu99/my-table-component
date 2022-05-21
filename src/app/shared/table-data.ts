import {Item} from "./entities";
import {Field} from "./field";

export interface TableData<T extends Item> {
  items: Array<T>,
  columns: Array<Field>,
  displayed_columns: Array<string>
}
