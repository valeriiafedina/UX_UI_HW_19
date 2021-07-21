$(document).ready(function() {
  $(".fa-heart").on("click", function(){
    if($(this).hasClass("far")){
      $(this).removeClass("far").addClass("fas")
    }else{
      $(this).addClass("far").removeClass("fas")
    }
  })
})