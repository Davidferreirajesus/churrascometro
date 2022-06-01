//Nome do aluno + nota 1 + nota 2 + média + aprovação

var nomes = ['Igor', 'José', 'Maria']
var notasA = [7.0, 6.5, 9.5]
var notasB = [8.0, 7.0, 8.5]

function media(n1, n2) {
  return (n1 + n2) / 2
}

function passou(media) {
  if (media > 7) return 'Aprovado'
  else {
    return 'Reprovado'
  }
}

for (var index in nomes) {
  let nota1 = notasA[index]
  let nota2 = notasB[index]

  let m = media(nota1, nota2)

  console.log(
    nomes[index] + ' - ' + nota1 + ' - ' + nota2 + ' - ' + m + ' - ' + passou(m)
  )
}
