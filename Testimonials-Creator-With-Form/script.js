const reviews = [
  {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: "Andy Herbert",
    job: "Web Developer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.",
  },
  {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: "Mike Wazowski",
    job: "Scare Factory",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.",
  },
  {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: "Sally Pearson",
    job: "Marketing Specialist",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: "Tom Richards",
    job: "Product Designer",
    review:
      "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  },
  {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: "Lucy Brown",
    job: "Software Engineer",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
  },
  {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: "David Kim",
    job: "Data Analyst",
    review:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: "Emma Green",
    job: "Fitness Instructor",
    review:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
  },
];

const nameEl = document.querySelector(".name");
const jobEl = document.querySelector(".job");
const reviewTextEl = document.querySelector(".review-text");
const imgEl = document.querySelector(".head-shot");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const randomBtn = document.querySelector(".random-btn");

let currentReview = 0;

function showReview(index) {
  const r = reviews[index];
  nameEl.innerHTML = r.name;
  jobEl.innerHTML = r.job;
  reviewTextEl.innerHTML = r.review;
  imgEl.style.backgroundImage = `url(${r.img})`;
}

showReview(currentReview);

leftBtn.addEventListener("click", () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showReview(currentReview);
});

rightBtn.addEventListener("click", () => {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showReview(currentReview);
});

randomBtn.addEventListener("click", () => {
  currentReview = getRandomDigit();
  showReview(currentReview);
});

function getRandomDigit() {
  return Math.floor(Math.random() * reviews.length);
}

// Add New Review Form Script
const form = document.querySelector(".review-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = form.name.value.trim();
  const jobValue = form.job.value.trim();
  const reviewValue = form.review.value.trim();

  const newReviewObject = {
    img: "https://www.clipartmax.com/png/small/443-4437996_pin-headshot-clipart-headshot-placeholder.png",
    name: nameValue,
    job: jobValue,
    review: reviewValue,
  };

  reviews.unshift(newReviewObject)
  console.log(reviews)

  currentReview = 0
  showReview(currentReview)

  form.reset()
});
