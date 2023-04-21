const pj1 ={
    nombre:"pj1",
    vidamaxima:40,
    vidaactual:40,
    daño:10
};
const pj2 ={
    nombre:"pj2",
    vidamaxima:40,
    vidaactual:40,
    daño:10
};
function ataque(pj1, pj2) {
    pj2.vidaactual=pj2.vidaactual-pj1.daño;
  }
  
while(pj1.vidaactual>0 && pj2.vidaactual>0) {

    ataque(pj1,pj2);
  }
  console.log(pj2.vidaactual);
