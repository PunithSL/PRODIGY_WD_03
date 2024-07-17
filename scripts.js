let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let mesContainer = document.querySelector(".message");
let mes = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!box.classList.contains("disabled")) {
      box.textContent = turnO ? "O" : "X";
      turnO = !turnO;
      box.classList.add("disabled");
      checkWinner();
    }
  });
});

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinnwer(pos1);
      }
    }
  }
};

const showWinnwer = (winner) => {
  mes.textContent = `Congratulations , Winner is  ${winner} 🎉🎊🎈🥳!`;
  mesContainer.classList.remove("hide");
  disabledBox();
};

const resetGame = () => {
  turnO = true;
  enableBox();
  mesContainer.classList.add("hide");
};

const disabledBox = () => {
  for (let box of boxes) {
    if (!box.classList.contains("disabled")) {
      box.classList.add("disabled");
    }
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.classList.remove("disabled");
    box.innerHTML = "";
  }
};

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
