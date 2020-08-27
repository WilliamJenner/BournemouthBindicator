export interface Bin {
  Previous: Date;
  Next: Date;
  PdfLink: string;
  Communal: boolean;
}

export interface BinLookup {
  Rubbish: Bin;
  Recycling: Bin;
  FoodWaste: Bin;
}
