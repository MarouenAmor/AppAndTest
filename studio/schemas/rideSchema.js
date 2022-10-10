export const rideSchema = {
  name: "ride",
  title: "Rides",
  type: "document",
  fields: [
    {
      name: "orderById",
      title: "Order By Id",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "priceMultiplier",
      type: "string",
      title: "Price Multiplier",
    },
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
  ],
};
