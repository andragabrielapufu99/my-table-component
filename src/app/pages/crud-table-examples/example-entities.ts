import {Item} from "../../components/crud-table/entities";

export interface Artist extends Item {
  fields: {
    name: string;
    genres: string;
    origin: string;
    years_active: string;
  }
}

export interface Product extends Item {
  fields: {
    name: string;
    brand: string;
    category: string;
    description: string;
    price: number;
    currency: string;
    store: string;
    stock: string;
  }
}
