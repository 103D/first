const name=$("<h1></h1>").text("О сайте")
const description=$("<p></p>").text("Вас привествует создатель сайта выпускник школы Morrison Дияр Муллахимов. Что я могу сказать об этом сайте. Этот сайт был создан на подобе кинопоиска. Правда совсем на него не похоже. Но его можно использовать как кинопоиск и просматривать известные фильмы. Футер взят из верстки. У меня не знал какой сайт писать и решил перевести и слегка усовершенствовать его. Хочу сказать что это был большой труд ,но я справился и дожил до этого момента и закончил этот проэкт. Чем отличаеться этот сайт от того. Во-первых этот сайт не на React. Во-вторых здесь усовершенствован хэдер и ему добавленна особая анимация правда бывает гонит. В-третьих это описание. В-четвертых можно менять страницу. В-пятых анимация у каждой карточки. И в итоге я могу сказать что я постарался на славу и это конец описание")

$(".header").mouseover(function () {
  $(".header").css("opacity","1")
  $(".header__inner").slideDown('600');

});
$(".header").mouseleave(function () {
 
    $(".header__inner").slideUp('300');
setTimeout(function(){
  $("header__inner").css("opacity","0")
},301)

});
$(document).ready(function(){
  $(".about__us").click(function(){
    $(".main__inner").remove()
    $(".about__us").css("display","none")
    $('.container').append("<h1>О сайте</h1><p>Вас приветствует создатель сайта выпускник школы Morrison Дияр Муллахимов. Что я могу сказать об этом сайте. Этот сайт был создан на основе кинопоиска. Правда, совсем на него не похож. Но его можно использовать как кинопоиск и просматривать известные фильмы. Футер взят из верстки. Я не знал какой сайт писать ,и решил перевести и слегка усовершенствовать его. Хочу сказать ,что это был титанический труд ,но я справился и дошел до этого момента и закончил этот проект:<br> Чем отличается этот сайт от другого: <br>Во-первых этот сайт не на React.<br> Во-вторых здесь усовершенствован хедер и ему добавлена особая анимация правда бывает глючит.<br> В-третьих это описание.<br> В-четвертых можно менять страницу.<br> В-пятых анимация у каждой карточки. <br>И в итоге я могу сказать , что я постарался на славу , и это конец описания. И ещё над видом описания я мало старался</p>")
    $('h1').prepend('')
  $('h1').css('color','white')
  $('p').css('color','white')
  $('p').css('font-size','20px')
  $('.container').css('padding','25px')
  $('.container').css('margin','-25px')
  $('.container').css('background-color','black')
  })
// $(".film-list__card").click(function(){
//   $("button").css("display","none")
//   alert('sdfds')
// })
})
