import { client } from "../../../lib/sanity";

const createUserInSanity = async (req, res) => {
  try {
    const userDoc = {
      _type: "users",
      _id: req.body.userWalletAddress,
      name: req.body.name,
      walletAddress: req.body.userWalletAddress,
    };

    await client.createIfNotExists(userDoc);
    res.status(200).send({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "eror", data: e.message });
  }
};

export default createUserInSanity;
