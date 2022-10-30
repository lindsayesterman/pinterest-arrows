const leftArrow = document.createElement("button");
leftArrow.className = "leftArrow";
leftArrow.innerHTML = "<";

const rightArrow = document.createElement("button");
rightArrow.className = "rightArrow";
rightArrow.innerHTML = ">";

let arrayOfPinIds = [];
let count = 0;

const fetchPicIds = function () {
  let pins = document.querySelectorAll("div[data-test-pin-id]");
  pins.forEach(function (pin) {
    arrayOfPinIds.push(pin.dataset.testPinId);
  });
  console.log(arrayOfPinIds);
  //console.log(JSON.stringify(arrayOfPinIds));//localstorage
  return arrayOfPinIds;
};

const init = function () {
  document.body.appendChild(leftArrow);
  document.body.appendChild(rightArrow);
  fetchPicIds();
};

init();

rightArrow.addEventListener("click", function handleClick() {
  // let lastPart = window.location.pathname;
  // window.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
  // window.location = window.location.replace(
  //   lastPart,
  //   `/pin/${arrayOfPinIds[count + 1]}`
  // );

  if (count <= arrayOfPinIds.length) {
    window.location.href = `https://www.pinterest.com/pin/${
      arrayOfPinIds[count + 1]
    }`;
    count++;
  }
  // let last = window.location.hostname;
  // let url = last + `/pin/${arrayOfPinIds[count + 1]}`;
  // console.log(url);
});

// "matches": ["https://*.pinterest.com/pin*"],
