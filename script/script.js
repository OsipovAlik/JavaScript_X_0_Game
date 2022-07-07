var xor0 = 0;
$(".xWin").hide();
$(".oWin").hide();
$(".reset").click(function () {
   location.reload();
})

$(".place").click(function () {

   if (xor0 === 0) {
      $(this).html("X");
      xor0++;
      $(this).off("click");

   } else if (xor0 === 1) {
      $(this).html("O");
      xor0 = 0;
      $(this).off("click");

   } else {
      console.log("No No No")
   }


   // For X.

   if ($(".place")[0].innerHTML === "X" && $(".place")[1].innerHTML === "X" && $(".place")[2].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }
   if ($(".place")[3].innerHTML === "X" && $(".place")[4].innerHTML === "X" && $(".place")[5].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }
   if ($(".place")[6].innerHTML === "X" && $(".place")[7].innerHTML === "X" && $(".place")[8].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }
   if ($(".place")[0].innerHTML === "X" && $(".place")[3].innerHTML === "X" && $(".place")[6].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }
   if ($(".place")[1].innerHTML === "X" && $(".place")[4].innerHTML === "X" && $(".place")[7].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }
   if ($(".place")[2].innerHTML === "X" && $(".place")[5].innerHTML === "X" && $(".place")[8].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }
   if ($(".place")[0].innerHTML === "X" && $(".place")[4].innerHTML === "X" && $(".place")[8].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }
   if ($(".place")[2].innerHTML === "X" && $(".place")[4].innerHTML === "X" && $(".place")[6].innerHTML === "X" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".xWin").show();
   }

   //For 0.

   if ($(".place")[0].innerHTML === "O" && $(".place")[1].innerHTML === "O" && $(".place")[2].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }
   if ($(".place")[3].innerHTML === "O" && $(".place")[4].innerHTML === "O" && $(".place")[5].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }
   if ($(".place")[6].innerHTML === "O" && $(".place")[7].innerHTML === "O" && $(".place")[8].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }
   if ($(".place")[0].innerHTML === "O" && $(".place")[3].innerHTML === "O" && $(".place")[6].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }
   if ($(".place")[1].innerHTML === "O" && $(".place")[4].innerHTML === "O" && $(".place")[7].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }
   if ($(".place")[2].innerHTML === "O" && $(".place")[5].innerHTML === "O" && $(".place")[8].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }
   if ($(".place")[0].innerHTML === "O" && $(".place")[4].innerHTML === "O" && $(".place")[8].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }
   if ($(".place")[2].innerHTML === "O" && $(".place")[4].innerHTML === "O" && $(".place")[6].innerHTML === "O" && $(".place").innerHTML != " ") {
      $(".place").off("click");
      $(".oWin").show();
   }

})

