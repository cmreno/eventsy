import * as MODEL from "../app/model.js";

function init() {
  $("nav a").click(function (e) {
    //you can use e to represent event
    let btnId = e.currentTarget.id;
    let contentID = "MODEL." + btnId + "Content";
    console.log("clicked ", btnId);

    $("#app").html(eval(contentID));
    init();
  });

  $(".gallery-images a").click(function (e) {
    let btnId = e.currentTarget.id;
    let contentID = "MODEL." + btnId + "Content";
    console.log("clicked ", btnId);

    $("#app").html(eval(contentID));
    init();
  });
  $(".blog-post a").click(function (e) {
    let btnId = e.currentTarget.id;
    let contentID = "MODEL." + btnId + "Content";
    console.log("clicked ", btnId);

    $("#app").html(eval(contentID));
    init();
  });
}

//checks for all elements to be read by browser
$(document).ready(function () {
  init();
});
