document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.querySelector("#input-text");
  let textPara = document.querySelector("#text-displayer");

  const myDisplayText = () => {
    inputText.addEventListener("input", (e) => {
      let dataPara = e.target.value;
      console.log(e.target.value);
      textPara.textContent = dataPara;
    });
  };

  const myTurnBold = () => {
    const btnBold = document.querySelector("#turn-text-bold");
    btnBold.addEventListener("click", () => {
      textPara.style.fontWeight = "900";
    });
  };

  const myTurnItalic = () => {
    const btnItalice = document.querySelector("#turn-text-italic");
    btnItalice.addEventListener("click", () => {
      textPara.style.fontStyle = "italic";
    });
  };

  const myClearText = () => {
    const btnClear = document.querySelector("#clear-text");
    btnClear.addEventListener("click", () => {
      textPara.textContent = "";
      inputText.value = '';
    });
  };

  myDisplayText();
  myTurnBold();
  myTurnItalic();
  myClearText();
});
