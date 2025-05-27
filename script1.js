const loginBtn = document.getElementById("LoginButton");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Close modal if clicked outside the content
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

function validNum() {
  let mobile = document.getElementById("mobile");
  let input = mobile.value;
  let mobileError = document.getElementById("mobileError");

  if (input.length == 10) {
    mobile.style.border = "3px solid green";
    mobileError.innerHTML = " ";
  } else if (input.length == 0) {
    mobile.style.border = "2px solid #4b5166";
    // console.log(input.length);
  } else {
    mobile.style.border = "3px solid red";
    mobileError.innerHTML = "Please enter a valid number";
  }
}
