export const CapitaliseIndex = (str: string, index: number): string => {
  if (index > 0) {
    return str.slice(0, index - 1) + str.charAt(index).toUpperCase() + str.slice(index + 1);
  } else {
    return str.charAt(index).toUpperCase() + str.slice(index + 1);
  }
};

export const CapitaliseFirst = (str: string): string => {
    return CapitaliseIndex(str, 0);
}