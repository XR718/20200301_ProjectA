window.onscroll = function () {
  var bannerElement = $('#banner') 
  var bannerHeight = bannerElement.innerHeight() // banner高度
  var logoElement = bannerElement.find('.logo')[0] // logo element
  var lastScrollTop = $(this).scrollTop() // 捲動到的高度

  if (lastScrollTop > bannerHeight) logoElement.style.visibility = 'visible'
  else logoElement.style.visibility = 'hidden'
}



$('#navigationBar .navigation__link').click(function(e){
  var self = $(e.target)
  var btn = self.parents('#navigationBar').find('.navigation__button')
if (self && btn) {
  
}
  btn.click()
  moveFunc({
    that: this
  })
})