import { client } from "../../../lib/sanity";
const saveTrips = async (request, res) => {
  const req = JSON.parse(request.body);
  console.log(req.service);
  const tripDoc = {
    _type: "trips",
    _id: `${req.userWalletAddress}-${Date.now()}`,
    pickup: req.pickupLocation,
    dropoff: req.dropoffLocation,
    rideTimestamp: new Date(Date.now()).toISOString(),
    price: parseFloat(req.price),
    rideCategory: req.service,
    passenger: {
      _key: `passenger-${req.userWalletAddress}  - ${new Date(
        Date.now()
      ).toISOString()}`,
      _ref: req.userWalletAddress,
      _type: "reference",
    },
  };
  try {
    await client.createIfNotExists(tripDoc);
    res.status(200).send({ message: "success" });
  } catch (e) {
    console.log(e);
  }
};
export default saveTrips;
