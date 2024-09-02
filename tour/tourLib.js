let tours = [];
  
function getAll() {
    return tours;
}
  
function getOneById(id) {
    return tours.find(tour => tour.id === parseInt(id));
}
  
function createOne(newTour) {
    const newId = tours.length > 0 ? tours[tours.length - 1].id + 1 : 1;
    const tour = { id: newId, ...newTour };
    tours.push(tour);
    return tour;
}
  
function updateOneById(id, updatedData) {
    const tour = getOneById(id);
    if (tour) {
      if (updatedData.name) {
        tour.name = updatedData.name;
      }
      if (updatedData.info) {
        tour.info = updatedData.info;
      }
      if (updatedData.image) {
        tour.image = updatedData.image;
      }
      if (updatedData.price) {
        tour.price = updatedData.price;
      }
      return tour;
    }
    return false;
  }
  
function deleteOneById(id) {
    const index = tours.findIndex(tour => tour.id === parseInt(id));
    if (index !== -1) {
      return tours.splice(index, 1)[0];
    }
    return null;
}

if (require.main === module) {
    let result = createOne({name: "Explore the Wonders of Rome in 5 Days", info: "Experience the ancient history and vibrant culture of Rome in just 5 days.", image: "https://www.course-api.com/images/tours/tour-2.jpeg", price: 1795});
    console.log(result);
    result = createOne( {name: "Discover the Magic of London in 6 Days", info: "Uncover London's rich history and modern charm on a 6-day adventure.", image: "https://www.course-api.com/images/tours/tour-3.jpeg", price: 1850});
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("getOneByID called:", getOneById(1));

    console.log("updateOneByID called:", 
        updateOneById(1, {name: "Explore the Wonders of Rome in 5 Days", info: "Experience the ancient history and vibrant culture of Rome in just 5 days.", image: "https://www.course-api.com/images/tours/tour-2.jpeg", price: 1900})
    );
    console.log("getOneByID called after item updated:", getOneById(1));

    console.log("deleteOneByID called:", deleteOneById(1));
    console.log("getAll called after deleted:", getAll());
    console.log("getOneByID called:", getOneById(1));
}

module.exports = {
    getAll,
    getOneById,
    createOne,
    updateOneById,
    deleteOneById
};
  