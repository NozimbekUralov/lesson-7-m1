let elBtn1 = document.querySelector(".btn1")

elBtn1.addEventListener("click", function (evt) {
    evt.preventDefault();
    let elInput = document.querySelector(".input1");
    elInput.value = elInput.value.toUpperCase();
});

let elBtn2 = document.querySelector(".btn2")

elBtn2.addEventListener("click", function (evt) {
    let sum = 0;
    let elInput = document.querySelector(".input2").value;
    elInput.split(",").forEach(element => {
        if (Number(element.trim())) sum += Number(element.trim())
    });
    alert("sum of numbers is " + sum);
});


const menu = document.getElementById("ul");

function createTask(taskName) {
    let listitem = document.createElement("li");
    listitem.textContent = taskName;
    let deleteButton = document.createElement("button")
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete')
    deleteButton.style.marginLeft = '5px';
    listitem.appendChild(deleteButton);
    return listitem;
}

let elList = document.querySelector(".list");

elList.addEventListener('click', function (evt) {
    const tgt = evt.target;
    if (tgt.classList.contains('delete')) tgt.closest('li').remove();
})

let elBtn3 = document.querySelector(".btn3");

elBtn3.addEventListener("click", function (evt) {
    let input = document.querySelector(".input3").value;
    let len = input.length

    if (len < 6) return alert("Juda zaif");
    if (len >= 6 && len <= 10) return alert("O‘rtacha");
    if (len > 10) return alert("Kuchli");
})

let elBtn4 = document.querySelector(".btn4");

elBtn4.addEventListener("click", function (evt) {
    let input = Number(document.querySelector(".input4").value);

    if (!isNaN(input)) {
        if (input % 15 == 0) return alert("FizzBuzz");
        if (input % 3 == 0) return alert("Fizz");
        if (input % 5 == 0) return alert("Buzz");
    } else {
        return alert("son kriting");
    }
})

elCount = document.querySelector(".count")
elCount.addEventListener("click", function (evt) {
    let timer = document.querySelector(".timer");
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => timer.innerHTML = i, 1000 * i)
    }
});

let elCalc = document.querySelector(".calc")
elCalc.addEventListener("click", function (evt) {
    let input = Number(document.querySelector(".input5").value);
    let elresult = document.querySelector(".result");
    let arr = []

    if (!isNaN(input)) {
        for (let i = 1; i <= 10; i++) arr.push(`${input} x ${i} = ${input * i}`);
        elresult.innerHTML = arr.join("<br>");
    } else {
        alert("son kriting")
    }

})