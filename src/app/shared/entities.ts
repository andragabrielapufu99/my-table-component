export interface Item {
  id: string;
  fields?: any;
}

export interface Artist extends Item {
  fields: {
    name: string;
    genres: Array<String>;
    origin: string;
    years_active: Array<string>;
  }
}

export interface Product extends Item {
  fields: {
    name: string;
    description: string;
    price: number;
    currency: string;
  }
}
