import { api } from "./http";
export var GetBins = function () {
    return api("https://localhost:44379/bindicator");
};
