const handleTestimonialCreator = (data) => {
  const reviewData = data;

  // target the div where you want to show/create elements
  // const textContainer = document.querySelector("section");

  const reviewContainer = document.querySelector(".slider-review-container");
  const userContainer = document.querySelector(".slider-user-info");
  const profileImgContainer = document.querySelector(".slider-img-container");

  reviewData.map((user) => {
    // create review
    const review = document.createElement(`p`);
    review.textContent = user.review;

    reviewContainer.appendChild(review).classList.add("review");

    // create user info
    const userName = document.createElement(`p`);
    userName.textContent = user.userName;
    userContainer.appendChild(userName).classList.add("user-name");

    // create job title
    const jobTitle = document.createElement(`p`);
    jobTitle.textContent = user.jobTitle;
    userContainer.appendChild(jobTitle).classList.add("user-job-title");

    // create user image
    const profileImg = document.createElement(`img`);
    profileImg.setAttribute(`src`, user.userPhoto);
    profileImgContainer.appendChild(profileImg).classList.add("user-img");
  });
};

export default handleTestimonialCreator;
