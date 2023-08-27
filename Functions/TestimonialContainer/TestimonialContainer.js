const handleTestimonialCreator = (data) => {
  const reviewData = data;

  // target the div where you want to show/create elements
  const textContainer = document.querySelector("section");

  reviewData.map((user) => {
    // create username container
    const userContainer = document.createElement(`div`);
    // create dynamic img container
    const imageContainer = document.createElement(`div`);
    // create dynamic review container
    const reviewInfoContainer = document.createElement(`div`);
    // create a container for all new content that contains the other divs
    const reviewOuterContainer = document.createElement(`div`);
    // create the review paragraph
    const createReviewParagraph = document.createElement(`p`);
    createReviewParagraph.textContent = user.review;
    // create userName paragraph
    const createUserParagraph = document.createElement(`p`);
    createUserParagraph.textContent = user.personName;
    // create user job title
    const createUserJobTitle = document.createElement(`p`);
    createUserJobTitle.textContent = user.personTitle;
    // create the user img container
    const createUserImgContainer = document.createElement(`img`);
    // Set the src attribute
    createUserImgContainer.setAttribute(`src`, user.userPhoto);

    // add the created elements
    userContainer.appendChild(createUserParagraph).classList.add("user-info");

    userContainer.appendChild(createUserJobTitle).classList.add("user-info");

    imageContainer
      .appendChild(createUserImgContainer)
      .classList.add("image-inner-container");

    reviewInfoContainer
      .appendChild(createReviewParagraph)
      .classList.add("review-paragraph");

    // reviewInfoContainer
    //   .appendChild(createUserParagraph)
    //   .classList.add("user-info");

    // reviewInfoContainer
    //   .appendChild(createUserJobTitle)
    //   .classList.add("user-info");

    reviewOuterContainer
      .appendChild(reviewInfoContainer)
      .classList.add("review-info-container");

    reviewOuterContainer
      .appendChild(userContainer)
      .classList.add("review-info-container");

    reviewOuterContainer
      .appendChild(imageContainer)
      .classList.add("review-image-container");

    // add all the created elements to the dynamic created div
    textContainer
      .appendChild(reviewOuterContainer)
      .classList.add("review-outer-container");
  });
};

export default handleTestimonialCreator;
