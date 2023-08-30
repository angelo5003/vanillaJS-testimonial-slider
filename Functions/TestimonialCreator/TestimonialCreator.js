const container = document.querySelector("#app");

const handleTestimonialCreator = (data) => {
  const reviewData = data;

  reviewData.map((review) => {
    // create containers
    const testimonialOuterContainer = document.createElement(`section`);
    const testimonialInnerContainer = document.createElement(`div`);
    const reviewOuterContainer = document.createElement(`div`);
    const reviewContainer = document.createElement(`div`);
    const userContainer = document.createElement(`div`);
    const imageContainer = document.createElement(`div`);

    // create review elements
    const userReview = document.createElement(`p`);
    userReview.textContent = review.review;

    const userName = document.createElement(`p`);
    userName.textContent = review.userName;

    const jobTitle = document.createElement(`p`);
    jobTitle.textContent = review.jobTitle;

    const profileImg = document.createElement(`img`);
    profileImg.setAttribute(`src`, review.userPhoto);

    // add inner containers to the outer container
    testimonialOuterContainer
      .appendChild(testimonialInnerContainer)
      .classList.add("slider-inner-container");

    // add the reviewContainers to the inner testimonial container
    testimonialInnerContainer
      .appendChild(reviewOuterContainer)
      .classList.add("slider-review-outer-container");

    testimonialInnerContainer
      .appendChild(imageContainer)
      .classList.add("slider-img-container");

    reviewOuterContainer
      .appendChild(reviewContainer)
      .classList.add("slider-review-container");

    reviewOuterContainer
      .appendChild(userContainer)
      .classList.add("slider-user-info");

    imageContainer.appendChild(profileImg).classList.add("user-img");

    // add the review elements to the containers
    reviewContainer.appendChild(userReview).classList.add("review");

    userContainer.appendChild(userName).classList.add("user-name");
    userContainer.appendChild(jobTitle).classList.add("user-job-title");

    // add the containers to the DOM
    container
      .appendChild(testimonialOuterContainer)
      .classList.add("slider-outer-container");
  });
};

export default handleTestimonialCreator;
