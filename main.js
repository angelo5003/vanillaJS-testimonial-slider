import data from "./data/data.json";
import handleTestimonialCreator from "./Functions/TestimonialCreator/TestimonialCreator";

// function to run all the other functions
const showAll = (data) => {
  handleTestimonialCreator(data);
};

showAll(data);
