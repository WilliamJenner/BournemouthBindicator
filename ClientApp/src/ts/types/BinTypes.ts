export interface Bin {
  subsequent: Date;
  next: Date;
  pdfLink: string;
  communal: boolean;
}

export interface BinLookup {
  rubbish: Bin;
  recycling: Bin;
  foodWaste: Bin;
}

export interface NamedBin {
  bin: Bin,
  name: string
}