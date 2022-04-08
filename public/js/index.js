const searchValue = document.querySelector(".search-bar").value;

const search = () => {
  const targetUrl = `/forecast?address=${searchValue}`;
};

console.log(searchValue);

fetch("http://localhost:3000/forecast?address=" + searchValue).then((res) => {
  res.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      document.querySelector(".temp").innerHTML = data.forecast;
    }
  });
});
// document.querySelector("button").addEventListener("click", () => {
// });
// document.querySelector(".city").innerHTML = searchValue;
// document.querySelector(".temp").innerHTML = data.forecast
//   document.querySelector(".feels_like").innerHTML =
//   document.querySelector(".current_condition").innerHTML =
