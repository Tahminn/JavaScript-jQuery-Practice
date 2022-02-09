$(function () {
  
//   $(".btn-primary").click(function () {
//     $("ul").hide(2000);
//   });

//   $(".btn-primary").dblclick(function () {
//     $("ul").show(1000);
//   });

//   $(".nav").mouseleave(function () {
//     $(".nav li").addClass("d-none");
//   });

//   $(".nav").mouseenter(function () {
//     $(".nav li").removeClass("d-none");
//   });

//   $(".nav").mousedown(function () {
//     alert("Mouse down");
//   });

//   $(".nav li").hover(
//     function () {
//       alert("Entered");
//     },
//     function () {
//       alert("Leaved");
//     }
//   );

//   $(".nav li").on("click", function () {
//     $(".nav li").css("opacity", 0.5);
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").toggle(1000);
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").fadeIn(1000);
//   });

//   $(".btn-danger").on("click", function () {
//     $(".nav li").fadeOut(1000);
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").fadeToggle("slow");
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").fadeTo("slow", 0.2);
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").slideDown("slow");
//   });

//   $(".btn-danger").on("click", function () {
//     $(".nav li").SlideUp("slow");
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").slideToggle(1000);
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").fadeTo("slow");
//   });

//   $(".btn-primary").on("click", function () {
//     $(".nav li").animate({ 
//     left: "300px", 
//     height: '300', 
//     width: '300' });
//   });

//   $(".btn-danger").on("click", function () {
//     $(".nav li").animate({ 
//     right: "300px", 
//     height: '-=300', 
//     width: '-=300' });
//   });

//   $(".btn-danger").on("click", function () {
//     $(".nav li").stop();
//   });

  let btnPrm = $(".btn-primary");
  let btnDng = $(".btn-danger");
  let ul = $(".nav");
  let li = $(".nav li");

//   ul.text("MMM");
//   $("input").value("Test");

//   ul.attr("class");

//   li.append("<li>1</li>");
//   li.prepend("<li>2</li>");

//   $(".btn-danger").on("click", function () {
//     $(".nav li").remove();
//   });

//   $(".btn-danger").on("click", function () {
//     $("ul").empty();
//   });

  console.log(li.parent());
  console.log(li.parents());
  console.log(li.parentsUntil(".row"));
  console.log(ul.children());
  console.log($(".container").find(".row"));
  console.log(li.siblings());
  console.log(li.next());
  console.log(li.nextAll());
  console.log(btnPrm.nextUntil("btn-primary"));
  console.log(li.first());
  console.log(li.last());
  console.log($("btn").filter(".btn-primary"));
  console.log(li.eq(2));








});
