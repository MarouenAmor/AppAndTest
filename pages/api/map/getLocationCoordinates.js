const getLocationCoordinates = async (req, res) => {
  let lok;
  try {
    lok = JSON.parse(req.body).location;
  } catch (e) {
    lok = req.body.location;
  }
  const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${lok}.json?access_token=${process.env.MAP_TOKEN}`;

  try {
    console.log("mapboxurl:", mapboxUrl);
    const response = await fetch(mapboxUrl);
    const data = await response.json();

    res.status(200).send({ message: "success", data: data.features[0].center });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getLocationCoordinates;
