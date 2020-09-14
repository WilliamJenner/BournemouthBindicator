import { api } from "./http";
export const GetBins = () => {
    return api("https://localhost:44379/bindicator");
};
