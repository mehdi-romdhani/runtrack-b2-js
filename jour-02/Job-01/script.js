document.addEventListener("DOMContentLoaded", () => {
  const myChangeBackgroundColor = () => {
    const tagHtml = document.querySelector("html");

    window.addEventListener("resize", () => {
    //   console.log(window.outerWidth);
      if (window.outerWidth >= 1337) {
        tagHtml.style.backgroundColor = "#ffb703";
      } else if (window.outerWidth >= 505 && window.outerWidth <= 1336) {
        tagHtml.style.backgroundColor = "#d90429";
      } else if (window.outerWidth <= 504) {
        tagHtml.style.backgroundColor = "#003049";
      }
    });
  };

  myChangeBackgroundColor();
});
