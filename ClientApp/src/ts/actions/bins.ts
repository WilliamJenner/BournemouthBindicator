import { BinLookup } from "../types/BinTypes";
import { api } from "./http";

export const GetBins = (): Promise<BinLookup> => {
  return api<BinLookup>("https://localhost:44379/bindicator");
};
