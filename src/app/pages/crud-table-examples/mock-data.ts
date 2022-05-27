import {TableData} from "../../components/crud-table/table-data";
import {Artist, Product} from "./example-entities";

export const ArtistTableData: TableData<Artist> = {
  items: [
    {
      id: 0,
      fields: {
        name: "Evanescence",
        origin: "Little Rock, Arkansas, U.S.",
        genres: "Alternative metal, Nu metal, Gothic metal",
        years_active: "1995-present"
      }
    },
    {
      id: 1,
      fields: {
        name: "Ed Sheeran",
        origin: "Halifax, West Yorkshire, England",
        genres: "Pop, Folk-pop, Soft rock",
        years_active: "2004-present"
      }
    },
    {
      id: 2,
      fields: {
        name: "Apocalyptica",
        origin: "Helsinki, Finland",
        genres: "Symphonic metal, Neoclassical metal, Alternative metal, Heavy metal",
        years_active: "1993-present"
      }

    }
  ],
  columns: [
    { key: "name", type: "text", name: "Name" },
    { key: "genres", type: "array", name: "Genres"},
    { key: "origin", type: "text", name: "Origin"},
    { key: "years_active", type: "array", name: "Years active"}
  ],
}

export const ProductTableData : TableData<Product> = {
  items: [
    {
      id: 0,
      fields: {
        name: "Dress",
        brand: "LOGENE",
        description: "LOGENE Women Short Sleeve, Crew Neck Smocked Elastic Waist, Tiered Maxi Dress, Summer Boho Solid Color, Sun Dresses",
        price: 38.99,
        currency: "US Dollar",
        category: "Clothing, Shoes & Jewelry - Women",
        store: "amazon",
        stock: "YES"
      }
    },
    {
      id: 1,
      fields: {
        name: "Fier de calcat",
        brand: "ALBATROS",
        description: "Fier de calcat Albatros JASMINE 1800 W, functie anticalcar, Mov",
        price: 89.99,
        currency: "RON",
        category: "Electrocasnice",
        store: "elefant.ro",
        stock: "YES"
      }
    },
    {
      id: 2,
      fields: {
        name: "Laptop Backpack",
        brand: "Paude",
        description: "Backpack for Men and Women,School Backpack for Teens,15.6 inch Laptop Backpack with USB Charging port for Business College Travel",
        price: 29.99,
        currency: "US Dollar",
        category: "Laptop Backpacks",
        store: "amazon",
        stock: "YES"
      }
    }
  ],
  columns: [
    { key: "name", type: "text", name: "Name"},
    { key: "brand", type: "text", name: "Brand"},
    { key: "description", type: "text", name: "Description"},
    { key: "price", type: "number", name: "Price"},
    { key: "currency", type: "text", name: "Currency"},
    { key: "category", type: "text", name: "Category"},
    { key: "store", type: "text", name: "Store"},
    { key: "stock", type: "text", name: "Stock"}
  ],
}
