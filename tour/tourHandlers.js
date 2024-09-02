const { getAll, getOneById, createOne, updateOneById, deleteOneById } = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = getAll();
  res.json(tours);
};

const getTourById = (req, res) => {
  const tour = getOneById(req.params.tourId);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ error: "Tour not found" });
  }
};

const createTour = (req, res) => {
  const newTour = createOne(req.body);
  res.status(201).json(newTour);
};

const updateTour = (req, res) => {
  const updatedTour = updateOneById(req.params.tourId, req.body);
  if (updatedTour) {
    res.json(updatedTour);
  } else {
    res.status(404).json({ error: "Tour not found" });
  }
};

const deleteTour = (req, res) => {
  const deletedTour = deleteOneById(req.params.tourId);
  if (deletedTour) {
    res.json(deletedTour);
  } else {
    res.status(404).json({ error: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour
};
