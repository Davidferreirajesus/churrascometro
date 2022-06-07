let pessoas = [
  'Igor',
  'Jose',
  'Marcos',
  'Pamela',
  'Joana',
  'David',
  'Daniela',
  'Sarah',
  'Antônia',
  'Elizinaria'
]
function sortear() {
  let np = pessoas.length
  let ns = Math.floor(Math.random() * np)
  document.getElementById('d').innerHTML = pessoas[ns]
}
