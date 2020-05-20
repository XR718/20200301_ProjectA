// 移動函式
function moveFunc(obj){
  var sec = 1

  $('html, body').animate({
    scrollTop: $($.attr(obj.that, 'data-href')).offset().top
}, sec * 1000);
}