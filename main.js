// PROGRAM

document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let count = 0;

  let response1 = document.getElementById("search-in").value;
  if (response1 == "FIFA World Cup") {
    document.getElementById("search-in1").innerHTML = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct").innerHTM = "Incorrect";
  }

  let response2 = document.getElementById("search-in1").value;
  if (response2 == "Ronaldo vs Messi") {
    document.getElementById("is-correct").innerHTML = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct").innerHTML = "Incorrect";
  }

  let response3 = document.getElementById("search-in2").value;
  if (response3 == "UCL") {
    document.getElementById("is-correct").innerHTML = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct").innerHTML = "Incorrect";
  }

  let response4 = document.getElementById("search-in3").value;
  if (response4 == "Real Madrid") {
    document.getElementById("is-correct").innerHTML = "Correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct").innerHTML = "Incorrect";
  }

  document.getElementById("score").innerText = count;
}
