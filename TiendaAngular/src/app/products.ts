export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number,
    caracteristicas?: string[],
    garantia?: {
      periodo: string;
      tipo: string;
    };
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      stock: 10,
      caracteristicas: ["5G", "Pantalla OLED", "Almacenamiento de 512GB"],
      garantia: {
        periodo: "3 años",
        tipo: "Fabricante"
      }
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      stock: 3,
      caracteristicas: ["4G", "Pantalla normal", "Almacenamiento de 256GB"],
      garantia: {
        periodo: "2 años",
        tipo: "Fabricante"
      }
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      stock: 0,
      caracteristicas: ["3G", "Pantalla barata", "Almacenamiento de 128GB"],
      garantia: {
        periodo: "1 años",
        tipo: "Fabricante"
      }
    },
    {
      id: 4,
      name: 'Sin caracteristicas, stock 5, con periodo en garantia',
      price: 299,
      description: 'TEXTO DESCRIPCION',
      stock: 5,
      garantia: {
        periodo: "1 años",
        tipo: "Fabricante"
      }
    },
    {
      id: 5,
      name: 'Con caracteristicas, stock 4, sin periodo en garantia',
      price: 299,
      description: 'TEXTO DESCRIPCION',
      stock: 4,
      caracteristicas: ["Caracteristica1", "Caracteristica2"]
    }
  ];