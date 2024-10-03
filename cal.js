let cow = document.querySelector(".cow");
let chicken = document.querySelector(".chicken");
let btn = document.querySelector("button");
let show = document.querySelector(".checked");
let output = document.querySelector(".index");
let button = document.querySelector(".none");
let savings = 0;
let show1 = document.querySelector(".chickenchecked");
let show2 = document.querySelector(".cowchecked");

btn.addEventListener("click", () => {
  btn.disabled = true;
  if (cow.checked && chicken.checked) {
    console.log("checking");
    show.style.display = "block";
    show1.style.display = "block";
    show2.style.display = "block";
    totalSavings();
  } else if (cow.checked) {
    console.log(cow.value);
    let show1 = document.querySelector(".cowchecked,.none");
    show1.style.display = "block";
    show.style.display = "block";
    cowcow();
  } else if (chicken.checked) {
    console.log(chicken.value);
    let show1 = document.querySelector(".chickenchecked");
    show1.style.display = "block";
    show.style.display = "block";
    chickenchicken();
  }
});
let cowSavings;
function cowcow() {
  const selection = document.querySelectorAll(".cowvalue");
  selection.forEach((sele) => {
    button.addEventListener("click", () => {
      let val = sele.options[sele.selectedIndex].value;
      console.log(val);
      if (val == "1" || val == "2") {
        cowSavings = val * 5000;
        savings = cowSavings;
        console.log("Your savings is :", savings + " tk");
        output.innerHTML = "Your savigns is : " + `${savings}` + " tk";
      }
      if (val >= 3) {
        cowSavings = 15000;
        console.log(cowSavings);
        output.innerHTML = "Your savigns is : " + `${cowSavings}` + " tk";
      }
    });
  });
}
let chickenSavings;
function chickenchicken() {
  const selection1 = document.querySelectorAll(".chickenvalue");
  selection1.forEach((sele) => {
    button.addEventListener("click", () => {
      let val = sele.options[sele.selectedIndex].value;
      console.log(val);
      if (val == "1" || val == "2") {
        chickenSavings = val * 100;
        savings = chickenSavings;
        console.log("Your savings is :", savings + " tk");
        output.innerHTML = "Your savigns is : " + `${savings}` + " tk";
      }
      if (val >= 3) {
        chickenSavings = 300;
        console.log(chickenSavings);
        output.innerHTML = "Your savigns is : " + `${chickenSavings}` + " tk";
      }
    });
  });
}

let Totalsavings;
function totalSavings() {
  const selection = document.querySelectorAll(".cowvalue");
  selection.forEach((sele) => {
    button.addEventListener("click", () => {
      let val = sele.options[sele.selectedIndex].value;
      if (val == "1" || val == "2") {
        cowSavings = val * 5000;
        Totalsavings = cowSavings + chickenSavings;
      }
      if (val >= 3) {
        cowSavings = 15000;
        Totalsavings = cowSavings + chickenSavings;
        console.log(cowSavings);
      }
    });

    const selection1 = document.querySelectorAll(".chickenvalue");
    selection1.forEach((sele1) => {
      button.addEventListener("click", () => {
        let val = sele1.options[sele1.selectedIndex].value;
        if (val == "1" || val == "2") {
          chickenSavings = val * 100;
          Totalsavings = cowSavings + chickenSavings;
          console.log(Totalsavings);
          output.innerHTML = "Your savigns is : " + `${Totalsavings}` + " tk";
        }
        if (val >= 3) {
          chickenSavings = 300;
          Totalsavings = cowSavings + chickenSavings;
          console.log(Totalsavings);
          output.innerHTML = "Your savigns is : " + `${Totalsavings}` + " tk";
        }
      });
    });
  });
}
