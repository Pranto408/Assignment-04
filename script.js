


//job-count-mini handel
let jobCount = document.getElementById("job-count");
// Total Job handel

let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allCards = document.getElementById("all-cards");

function cardCount() {
  totalCount.innerText = allCards.children.length;
  jobCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
cardCount();

// Button Toggling
function toggleButton(id) {
  const allButton = document.getElementById("all-filter-btn");
  const interviewButton = document.getElementById("interview-filter-btn");
  const rejectedButton = document.getElementById("rejected-filter-btn");
  //All 3 Button
  allButton.style.backgroundColor = "white";
  allButton.style.color = "#64748B";
  interviewButton.style.backgroundColor = "white";
  interviewButton.style.color = "#64748B";
  rejectedButton.style.backgroundColor = "white";
  rejectedButton.style.color = "#64748B";
  // Active Button
  const btn = document.getElementById(id);
  btn.style.backgroundColor = "#3B82F6";
    btn.style.color = "white";
    
    if (id == "interview-filter-btn") {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
    } else if (id == "all-filter-btn") {
        allCards.classList.remove("hidden");
        filteredSection.classList.add("hidden");
    }
}

// Main event delegation
const mainContainer = document.querySelector("main");


mainContainer.addEventListener("click", function (event) {
    console.log(event.target.classList.contains("interview-btn"));
    // If click interview
    if (event.target.classList.contains("interview-btn")) {
        const parent = event.target.parentNode.parentNode;
        const companyName = parent.querySelector(".company-name").innerText;
        const jobPost = parent.querySelector(".job-post").innerText;
        const salary = parent.querySelector(".salary").innerText;
        parent.querySelector(".job-status").innerText = "interview";
        const jobStatus = parent.querySelector(".job-status").innerText;
        const description = parent.querySelector(".description").innerText;

        const cardInfo = {
          companyName,
          jobPost,
          salary,
          jobStatus,
          description,
        };
        console.log(cardInfo);
    
        const jobExist = interviewList.find(
          (item) => item.companyName == cardInfo.companyName,
        );

        if (!jobExist) {
          interviewList.push(cardInfo);
        }
        renderInterviewList();

}

})

// Renter interviewList
const filteredSection = document.getElementById("filtered-section");
function renderInterviewList() {
    filteredSection.innerHTML = "";
    for (let card of interviewList) {
        console.log(card)
        let div = document.createElement("div");
        div.className="card border-2 border-[#F1F2F4] p-6 bg-white rounded-lg"
        div.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="space-y-1">
              <h4 class="company-name text-[#002C5C] text-lg font-semibold leading-6">
                Mobile First Corp
              </h4>
              <p class="job-post text-[#64748B] leading-5">React Native Developer</p>
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
            Remote • Full-time • $130,000 - $175,000
          </p>
          <button
            class="job-status w-fit py-2 leading-5 mb-2 uppercase px-3 text-sm font-medium bg-[#EEF4FF] text-[#002C5C] rounded-sm"
          >
            ${card.jobStatus}
          </button>
          <p class="description text-[#323B49] leading-5 text-sm mb-5">
            Build cross-platform mobile applications using React Native. Work on
            products used by millions of users worldwide.
          </p>
          <div class="flex gap-2">
            <button
              class="uppercase bg-white btn text-sm font-semibold text-[#10B981] border-2 border-[#10B981] hover:shadow-lg"
            >
              interview
            </button>
            <button
              class="uppercase bg-white btn text-sm font-semibold text-[#EF4444] border-2 border-[#EF4444] hover:shadow-lg"
            >
              Rejected
            </button>
          </div>
        `;
        filteredSection.appendChild(div);
}
}
