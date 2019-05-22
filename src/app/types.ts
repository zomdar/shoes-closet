export interface Shoe {
    name: string;
    year: number;
    brand: number;
    sku: string;
    size: number;
    photo: string;
  }
  
  export interface Filter {
    category: string;
    displayName: string;
    options: Option[];
  }
  
  export type FilterState = Record<string, Option>;
  
  export type Option = string | number;
  