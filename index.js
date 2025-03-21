// 1-misol
let elSearch = document.querySelector(".search");

elSearch.addEventListener("input", function (evt) {
    evt.preventDefault();
    let elField = document.querySelector(".field");
    let elResult = document.querySelector(".result");
    let value = elSearch.value;
    let fieldValue = elField.value;

    elResult.innerHTML = `${fieldValue.indexOf(value) > 0 ? fieldValue.lastIndexOf(value) : ""}`;
});

// 2-misol
let elSearch2 = document.querySelector(".search2");

elSearch2.addEventListener("input", function (evt) {
    evt.preventDefault();
    let elField = document.querySelector(".field2").value;
    let elResult = document.querySelector(".result2");

    let start = elField.indexOf(elSearch2.value)
    let end = start + elSearch2.value.length;
    elResult.innerHTML = elField.slice(start, end);

    if (elSearch2.value === "") {
        elResult.innerHTML = "";
    }
});

// 3-misol
let elInput1 = document.querySelector(".input1");
let elInput2 = document.querySelector(".input2");

elInput2.addEventListener("input", function (evt) {
    evt.preventDefault();
    let value1 = elInput1.value;
    let value2 = elInput2.value;
    let elResult = document.querySelector(".result3");
    if (value1 && value2) {
        let elField = document.querySelector(".field3").value;
        let start = elField.indexOf(value1.at(-1)) + 1;
        let end = elField.indexOf(value2);
        console.log(start);
        elResult.innerHTML = elField.slice(start, end);

    } else {
        elResult.innerHTML = "";
    }
});

// 4-misol
let elBtn = document.querySelector(".btn");

elBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    let elField = document.querySelector(".field4").value;
    let elResult = document.querySelector(".result4");

    elResult.innerHTML = elField.split(" ").length;
    if (elField == "") elResult.innerHTML = "";
});

// 5-misol
let elBtn2 = document.querySelector(".btn2");

elBtn2.addEventListener("click", function (evt) {
    evt.preventDefault();
    let elField = document.querySelector(".field5").value;
    let elResult = document.querySelector(".result5");

    let arr = elField.split(" ");
    let max = arr[0].trim();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].trim().length > max.length) max = arr[i].trim();
    }
    elResult.innerHTML = max;
    if (elField == "") elResult.innerHTML = "";
});

// 6-misol
let elBtn3 = document.querySelector(".btn3");

function clear(word = "") {
    let seen = "";
    for (let i = 0; i < word.length; i++) {
        if (seen.indexOf(word[i]) == -1) seen += word[i];
    }
    return seen;
}

elBtn3.addEventListener("click", function (evt) {
    evt.preventDefault();
    let elField = document.querySelector(".field6").value;
    let elResult = document.querySelector(".result6");

    let arr = elField.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = clear(arr[i].trim());
    }
    elResult.innerHTML = arr.join(" ");
    if (elField == "") elResult.innerHTML = "";
});

// 7-misol
let elBtn4 = document.querySelector(".btn4");

elBtn4.addEventListener("click", function (evt) {
    evt.preventDefault();
    let elField = document.querySelector(".field7").value;
    let elResult = document.querySelector(".result7");

    elResult.innerHTML = elField.toUpperCase();
    if (elField == "") elResult.innerHTML = "";
});

// 8-misol
let elBtn5 = document.querySelector(".btn5");

elBtn5.addEventListener("click", function (evt) {
    let elField = document.querySelector(".field8").value;
    let elResult = document.querySelector(".result8");
    let elInput = document.querySelector(".input3").value;

    let arr = elField.split(" ");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(elInput.trim())) count++;
    }
    elResult.innerHTML = count;
    if (elField == "" || elInput == "") elResult.innerHTML = "";

});