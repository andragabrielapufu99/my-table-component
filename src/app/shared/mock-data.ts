import {TableData} from "./table-data";
import * as Entity from "./entities";

export const ArtistTableData: TableData<Entity.Artist> = {
  items: [
    {
      id: "0",
      fields: {
        name: "Evanescence",
        origin: "Little Rock, Arkansas, U.S.",
        genres: ["Alternative metal", "Nu metal", "Gothic metal"],
        years_active: ["1995-present"]
      }
    },
    {
      id: "1",
      fields: {
        name: "Ed Sheeran",
        origin: "Halifax, West Yorkshire, England",
        genres: ["Pop", "Folk-pop", "Soft rock"],
        years_active: ["2004-present"]
      }
    },
    {
      id: "2",
      fields: {
        name: "Apocalyptica",
        origin: "Helsinki, Finland",
        genres: ["Symphonic metal", "Neoclassical metal", "Alternative metal", "Heavy metal"],
        years_active: ["1993-present"]
      }

    }
  ],
  columns: [
    { key: "name", type: "text", name: "Name", filter: true, sort: true },
    { key: "genres", type: "", name: "Genres", filter: true, sort: true  },
    { key: "origin", type: "text", name: "Origin", filter: true, sort: true  },
    { key: "years_active", type: "", name: "Years active", filter: true, sort: true  }
  ],
  displayed_columns: ["name", "genres", "origin", "years_active"]
}

export const ProductTableData : TableData<Entity.Product> = {
  items: [
    {
      id: "0",
      fields: {
        name: "p1",
        description: "d1",
        price: 20,
        currency: "RON"
      }
    },
    {
      id: "1",
      fields: {
        name: "p2",
        description: "d2",
        price: 5,
        currency: "EURO"
      }
    },
    {
      id: "2",
      fields: {
        name: "p3",
        description: "d3",
        price: 20,
        currency: "US Dollar"
      }
    }
  ],
  columns: [
    { key: "name", type: "text", name: "Name", filter: true, sort: true  },
    { key: "description", type: "text", name: "Description", filter: true, sort: true  },
    { key: "price", type: "number", name: "Price", filter: true, sort: true  },
    { key: "currency", type: "text", name: "Currency", filter: true, sort: true  }
  ],
  displayed_columns: ["name", "description", "price", "currency"]
}
