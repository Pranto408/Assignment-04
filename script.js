//job-count-mini handel
let jobCount = document.getElementById("job-count");
// Total Job handel

let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allCards = document.getElementById("all-cards");
const interviewCards = document.getElementById("filtered-section");

function cardCount() {
  jobCount.innerText = allCards.children.length;
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
cardCount();

// Button Toggling
function toggleButton(id) {
  const allButton = document.getElementById("all-filter-btn");
  const interviewButton = document.getElementById("interview-filter-btn");
  const rejectedButton = document.getElementById("rejected-filter-btn");
  const noJobSection = document.getElementById("no-job-section");

  //All 3 Button
  allButton.style.backgroundColor = "white";
  allButton.style.color = "#64748B";
  interviewButton.style.backgroundColor = "white";
  interviewButton.style.color = "#64748B";
  rejectedButton.style.backgroundColor = "white";
  rejectedButton.style.color = "#64748B";

  currentStatus = id;
  // Active Button
  const btn = document.getElementById(id);
  btn.style.backgroundColor = "#3B82F6";
  btn.style.color = "white";

  if (id == "interview-filter-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterviewList();
  } else if (id == "all-filter-btn") {
    allCards.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejectedList();
  }
}

// Main event delegation
const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
  // If click interview
  if (event.target.classList.contains("interview-btn")) {
    const parent = event.target.parentNode.parentNode;
    const companyName = parent.querySelector(".company-name").innerText;
    const jobPost = parent.querySelector(".job-post").innerText;
    const salary = parent.querySelector(".salary").innerText;
    parent.querySelector(".job-status").innerText = "interview";
    const jobStatus = parent.querySelector(".job-status").innerText;
    const description = parent.querySelector(".description").innerText;

    const statusDesign = parent.querySelector(".job-status");
    statusDesign.classList.remove("bg-red-400");
    statusDesign.classList.add("bg-green-400");
    console.log(statusDesign);

    const cardInfo = {
      companyName,
      jobPost,
      salary,
      jobStatus,
      description,
    };

    const jobExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    //Bujhi nai suru
    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterviewList();
    }
    if (currentStatus == "rejected-filter-btn") {
      renderRejectedList();
    }
    //Bujhi nai ses

    syncAllSection(companyName, "interview");
    cardCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parent = event.target.parentNode.parentNode;
    const companyName = parent.querySelector(".company-name").innerText;
    const jobPost = parent.querySelector(".job-post").innerText;
    const salary = parent.querySelector(".salary").innerText;
    parent.querySelector(".job-status").innerText = "rejected";
    const jobStatus = parent.querySelector(".job-status").innerText;
    const description = parent.querySelector(".description").innerText;

    const statusDesign = parent.querySelector(".job-status");
    statusDesign.classList.remove("bg-green-400");
    statusDesign.classList.add("bg-red-400");
    console.log(statusDesign);

    const cardInfo = {
      companyName,
      jobPost,
      salary,
      jobStatus,
      description,
    };

    const jobExist = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    //Bujhi nai suru
    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );
    if (currentStatus == "rejected-filter-btn") {
      renderRejectedList();
    }
    if (currentStatus == "interview-filter-btn") {
      renderInterviewList();
    }
    //Bujhi nai ses

    syncAllSection(companyName, "rejected");
    cardCount();
  }
});

// Render interviewList
const filteredSection = document.getElementById("filtered-section");
function renderInterviewList() {
  filteredSection.innerHTML = "";
  for (let card of interviewList) {
    let div = document.createElement("div");
    div.className = "card border-2 border-[#F1F2F4] p-6 bg-white rounded-lg";
    div.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="space-y-1">
              <h4 class="company-name text-[#002C5C] text-lg font-semibold leading-6">
                ${card.companyName}
              </h4>
              <p class="job-post text-[#64748B] leading-5">${card.jobPost}</p>
            </div>
            <div
              class="delete-btn border-2 btn border-[#F1F2F4] text-[#64748B] rounded-full px-2 py-1"
            >
              <button class="cursor-pointer">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
          <p class="salary text-[#64748B] leading-5 text-sm py-5">
            ${card.salary}
          </p>
          <button
            class="job-status w-fit py-2 leading-5 mb-2 uppercase px-3 text-sm font-medium text-[#002C5C] bg-green-400 rounded-sm"
          >
            ${card.jobStatus}
          </button>
          <p class="description text-[#323B49] leading-5 text-sm mb-5">
            ${card.description}
          </p>
          <div class="flex gap-2">
            <button
              class="interview-btn uppercase bg-white btn text-sm font-semibold text-[#10B981] border-2 border-[#10B981] hover:shadow-lg"
            >
              interview
            </button>
            <button
              class="rejected-btn uppercase bg-white btn text-sm font-semibold text-[#EF4444] border-2 border-[#EF4444] hover:shadow-lg"
            >
              Rejected
            </button>
          </div>
        `;
    filteredSection.appendChild(div);
  }
}

//Render rejectedList
function renderRejectedList() {
  filteredSection.innerHTML = "";
  for (let card of rejectedList) {
    let div = document.createElement("div");
    div.className = "card border-2 border-[#F1F2F4] p-6 bg-white rounded-lg";
    div.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="space-y-1">
              <h4 class="company-name text-[#002C5C] text-lg font-semibold leading-6">
                ${card.companyName}
              </h4>
              <p class="job-post text-[#64748B] leading-5">${card.jobPost}</p>
            </div>
            <div
              class="delete-btn border-2 btn border-[#F1F2F4] text-[#64748B] rounded-full px-2 py-1"
            >
              <button class="cursor-pointer">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
          <p class="salary text-[#64748B] leading-5 text-sm py-5">
            ${card.salary}
          </p>
          <button
            class="job-status w-fit py-2 leading-5 mb-2 uppercase px-3 text-sm font-medium  text-[#002C5C] bg-red-400 rounded-sm"
          >
            ${card.jobStatus}
          </button>
          <p class="description text-[#323B49] leading-5 text-sm mb-5">
            ${card.description}
          </p>
          <div class="flex gap-2">
            <button
              class="interview-btn uppercase bg-white btn text-sm font-semibold text-[#10B981] border-2 border-[#10B981] hover:shadow-lg"
            >
              interview
            </button>
            <button
              class="rejected-btn uppercase bg-white btn text-sm font-semibold text-[#EF4444] border-2 border-[#EF4444] hover:shadow-lg"
            >
              Rejected
            </button>
          </div>
        `;
    filteredSection.appendChild(div);
  }
}

function syncAllSection(companyName, status) {
  const allCardsList = document.querySelectorAll("#all-cards .card");

  allCardsList.forEach((card) => {
    const name = card.querySelector(".company-name").innerText.trim();

    if (name === companyName.trim()) {
      const statusEl = card.querySelector(".job-status");

      statusEl.innerText = status;

      statusEl.classList.remove("bg-green-400", "bg-red-400");
      statusEl.classList.add(
        status === "interview" ? "bg-green-400" : "bg-red-400",
      );
    }
  });
}
