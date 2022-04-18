import './global.css'
import './style.css'
import $ from "jquery";

interface Iperson { name: string, desc: string };
const gamers: Iperson[] = [
  {name: "John Murray", desc: "Professional Web Developer"},
  {name: "George Mullin", desc: "Film and Media | aka The G-man"},
  {name: "Christian Shorrock", desc: "CEO of ShozzaCo"},
  {name: "Mathew Wynne", desc: "Gamer | Sigma Male | Loves Tendies"},
  {name: "Jack Wright", desc: "Lord of The Squirrels and League"}
];

let index = 0;

$("#click").on('click', function() {
  let g = gamers[index]
  $("#app h1").text(g.name); $("#app h3").text(g.desc);
  (index < gamers.length - 1) ? index += 1 : index = 0;
});

$(".twitter").on('click', function() {
  window.open('https://twitter.com/jwtm_');
});

$('.meme').on('click', function() {
  $(this).hasClass('ss') ? $(this).removeClass('ss') : $(this).addClass('ss');
});