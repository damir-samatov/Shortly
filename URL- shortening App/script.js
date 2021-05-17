console.log("Hello World !!!");

function getTheLink() {
  var inputResults = document.getElementById("inputResults");
  var longLink = document.getElementById("inputLink").value;

  inputResults.innerHTML = "Your shortened link will appear within a minute!";
  console.log(longLink);

  fetch("https://api.shrtco.de/v2/shorten?url=" + longLink)
    .then((res) => res.json())
    .then((out) => {
      let theLink = out.result.short_link;
      inputResults.innerHTML = theLink;
    })
    .catch(function () {
      inputResults.innerHTML = "Error occured! Please, reenter your link";
    });
}

const mobileLinks = document.querySelector(".navigation_links");

const burger = document.querySelector(".burger");

burger.onclick = function () {
  mobileLinks.classList.toggle("links_open");
};
document.addEventListener("scroll", () => {
  mobileLinks.classList.remove("links_open");
});
