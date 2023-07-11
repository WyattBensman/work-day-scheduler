// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

let currentDay = document.querySelector('#currentDay')

// Get Current Date
let currentDate = new Date();
// Get Day of Week
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayOfWeek = daysOfWeek[currentDate.getDay()];
// Get Month
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = months[currentDate.getMonth()];
// Get day of the month
let dayOfMonth = currentDate.getDate();

// Create & Add string
let formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;
currentDay.textContent = formattedDate;

// Get Time
let hour = currentDate.getHours();

// Time Block Selectors
let nine = document.querySelector('#hour-9')
let ten = document.querySelector('#hour-10')
let eleven = document.querySelector('#hour-11')
let twelve = document.querySelector('#hour-12')
let one = document.querySelector('#hour-1')
let two = document.querySelector('#hour-2')
let three = document.querySelector('#hour-3')
let four = document.querySelector('#hour-4')
let five = document.querySelector('#hour-5')

// 9AM Time Block
if (hour === 9) {
  nine.classList.add("present");
} else if (hour > 9) {
  nine.classList.add("past");
} else if (hour < 9) {
  nine.classList.add("future");
}

// 10AM Time Block
if (hour === 10) {
  ten.classList.add("present");
} else if (hour > 10) {
  ten.classList.add("past");
} else if (hour < 10) {
  ten.classList.add("future");
}

// 11AM Time Block
if (hour === 11) {
  eleven.classList.add("present");
} else if (hour > 11) {
  eleven.classList.add("past");
} else if (hour < 11) {
  eleven.classList.add("future");
}

// 12PM Time Block
if (hour === 12) {
  twelve.classList.add("present");
} else if (hour > 12) {
  twelve.classList.add("past");
} else if (hour < 12) {
  twelve.classList.add("future");
}

// 1PM Time Block
if (hour === 13) {
  one.classList.add("present");
} else if (hour > 13) {
  one.classList.add("past");
} else if (hour < 13) {
  one.classList.add("future");
}

// 2PM Time Block
if (hour === 14) {
  two.classList.add("present");
} else if (hour > 14) {
  two.classList.add("past");
} else if (hour < 14) {
  two.classList.add("future");
}

// 3PM Time Block
if (hour === 15) {
  three.classList.add("present");
} else if (hour > 15) {
  three.classList.add("past");
} else if (hour < 15) {
  three.classList.add("future");
}

// 4PM Time Block
if (hour === 16) {
  four.classList.add("present");
} else if (hour > 16) {
  four.classList.add("past");
} else if (hour < 16) {
  four.classList.add("future");
}

// 5PM Time Block
if (hour === 17) {
  five.classList.add("present");
} else if (hour > 17) {
  five.classList.add("past");
} else if (hour < 17) {
  five.classList.add("future");
}


// Event Listening
for (let i = 9; i <= 17; i++) {
  let textBox = document.querySelector(`#textBox-${i}`)
  let saveButton = document.querySelector(`#saveBtn-${i}`)


  window.addEventListener('load', () => {
    let savedText = localStorage.getItem(`savedText-${i}`);
    if (savedText) {
      textBox.value = savedText;
    }
  });

  saveButton.addEventListener('click', () => {
    let enteredText = textBox.value;

    localStorage.setItem(`savedText-${i}`, enteredText)
  });
}