export const isPositiveInteger = (value: number) =>
  Number.isInteger(value) && value > 0;

export const getTextWidth =
  typeof window !== "undefined"
    ? require("get-text-width").getTextWidth
    : () => 0;
