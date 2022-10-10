import { client } from "../../../lib/sanity";
const query = `*[_type=="ride" ]{
  "service":title,
   "url":icon.asset->url,
   priceMultiplier,
   orderById
 }|order(orderById asc)`;

const getridesTypes = async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query);

    res.status(200).json({ message: "success", data: sanityResponse });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", data: error.data });
  }
};

export default getridesTypes;
