const data = [{
  quote: 'Acelerale pero despacito.',
  cite: 'Angie',
  date: 'Abril, 2018.'
}, {
  quote: 'Me dijeron que hiciera algo y me hice p.....a.',
  cite: 'Angie',
  date: 'March, 2018.'
}, {
  quote: 'Lastima que seas ajena.',
  cite: 'Vicente Fernandez',
  date: '80s.'
}, {
  quote: 'Si me voy yo se van todos conmigo.',
  cite: 'Mr R',
  date: 'March, 2018.'
}, {
  quote: 'Siempre esta la opcion de colgarse.',
  cite: 'Damian.',
  date: 'March, 2018.'
}, {
  quote: 'Cuando me enfermo no tengo soft skills.',
  cite: 'Mr R',
  date: 'March, 2018.'
}, {
  quote: 'Porque bajaste del Olimpo a ensenarnos codigo.',
  cite: 'Cesar',
  date: 'March, 2018.'
}, {
  quote: 'Pues los quiero mucho y todo pero me distraen.',
  cite: 'Maribel',
  date: 'March, 2018'
}, {
  quote: 'Pero cuando te naturalizas pierdes tu otra nacionalidad, no, solo pierdes el derecho de jugar con tu seleccion.',
  cite: 'Damian',
  date: 'March, 2018.'
}, {
  quote: 'Se han dado cuenta que a veces despues de dormir da sueno.',
  cite: 'Maribel',
  date: 'March, 2018.'
}, {
  quote: 'Hello friend?',
  cite: 'Mr R',
  date: 'February, 2018.'
}, {
  quote: 'Porque cuando uno es rey no baja a ser sirviente.',
  cite: 'Mr R',
  date: 'March, 2018.'
}, {
  quote: 'Como cuando el profesor te manda a comer pero la depre te quita el hambre.',
  cite: 'CIMI',
  date: 'April, 2018.'
}, {
  quote: 'Si nos falta, pues al final del dia nos falta.',
  cite: 'Damian',
  date: 'April, 2018.'
}, {
  quote: 'Es que si no peleo contigo no soy yo.',
  cite: 'Maribel',
  date: 'April, 2018.'
}, {
  quote: 'Si tomo cerveza me vuelvo gay.',
  cite: 'Cesar',
  date: 'April, 2018.'
}, {
  quote: 'Ya no me siento obligado a convivir.',
  cite: 'Cesar',
  date: 'April, 2018.'
}, {
  quote: 'No te caigo chido? pues tampoco es un concurso de chides.',
  cite: 'Damian. Visto en Twitter.',
  date: 'April, 2018.'
}, {
  quote: 'Hasta que el cuerpo aguante.',
  cite: 'Damian',
  date: 'April, 2018.'
}, {
  quote: 'Mi pa es amigo del dueno.',
  cite: 'Alejandro',
  date: 'April, 2018.'
}, {
  quote: 'Ando bien tieso.',
  cite: 'Damian',
  date: 'April, 2018.'
}, {
  quote: 'Ese proyecto viene de aqui <3.',
  cite: 'Kiks',
  date: 'April, 2018.'
}, {
  quote: 'Duro, duro pero suave...',
  cite: 'Cesar',
  date: 'March, 2018.'
}, {
  quote: 'Escribir codigo es lo mas cercano a tener superpoderes.',
  cite: 'Mr R',
  date: 'April, 2018.'
}]

exports.seed = function(knex, Promise) {
  return knex('quotes').del()
    .then(function() {
      return knex('quotes')
        .insert(data)
    });
}
