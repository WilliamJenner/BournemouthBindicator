export interface Bin {
  Previous: Date;
  Next: Date;
  PdfLink: string;
  Communal: boolean;
}

export interface BinLookup {
  rubbish: Bin;
  recycling: Bin;
  foodWaste: Bin;
}
