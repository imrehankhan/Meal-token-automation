document.getElementById('showHideBtn').addEventListener('click', function() {
    var element = document.getElementById('hiddenElement');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});

Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#interactive'),
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // or "user" for front camera
        },
    },
    decoder: {
        readers: ["ean_reader", "code_128_reader", "code_39_reader", "codabar_reader", "upc_reader"],
    },
}, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    Quagga.start();
});


Quagga.onDetected(function (result) {
    var code = result.codeResult.code;
    document.getElementById('target').value = code;
});

// // Firebase script1 
// const firebaseConfig = {
//     apiKey: "AIzaSyAWlYyG2NvnMwDZFCawb-KOM2chEzi_-Q4",
//     authDomain: "campus-automation-62ead.firebaseapp.com",
//     databaseURL: "https://campus-automation-62ead-default-rtdb.firebaseio.com",
//     projectId: "campus-automation-62ead",
//     storageBucket: "campus-automation-62ead.appspot.com",
//     messagingSenderId: "325021104122",
//     appId: "1:325021104122:web:b707ac0f01bde7fef81643"
//   };


// // initialize firebase
// firebase.initializeApp(firebaseConfig);

// // reference your database
// var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("contactForm").addEventListener("submit", submitForm);

// function submitForm(e) {
// e.preventDefault();

// var text = getElementVal("text");

// saveMessages(text);

// // //   enable alert
// // document.querySelector(".alert").style.display = "block";

// // //   remove the alert
// // setTimeout(() => {
// //   document.querySelector(".alert").style.display = "none";
// // }, 3000);

// // //   reset the form
// // document.getElementById("contactForm").reset();
//  }

// const saveMessages = (text) => {
// var newContactForm = contactFormDB.push();

// newContactForm.set({
//   text: text,
// });
// };

// const getElementVal = (id) => {
// return document.getElementById(id).value;
// };
// // Firebase script1 end 

// Searching js 
const searchForm = document.getElementById('search-form');
const targetInput = document.getElementById('target');
const resultEl = document.getElementById('result');

// Define your search list here
const list = ["23071A6932"];

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const target = targetInput.value.trim();

  // Perform linear search
  const index = linearSearch(list, target);

  // Update result message
  if (index >= 0) {
    resultEl.textContent = `Hosteller`;
  } else {
    resultEl.textContent = `Dayscholar`;
  }
});

// Linear search function
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === target.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

  

