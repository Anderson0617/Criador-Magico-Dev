
let webhook = "https://anderson090485.app.n8n.cloud/webhook/animacao-css"

async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value
  let codico = document.querySelector(".area-codico")
  let arearesultado = document.querySelector(".area-eesultado")
  let botao = document.querySelector(".botao-magica")
  botao.disabled = true;
  botao.textContent = "Criando..."
  botao.style.background = '#888888'

  let resposta = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pergunta: textoInput })
  })

  let resultado = await resposta.json()

  let info = JSON.parse(resultado.resposta)

  codico.innerHTML = info.code

  arearesultado.innerHTML = info.preview

  document.head.insertAdjacentHTML('beforeend', "<style>" + info.style + "</style>")

  botao.disabled = false;
  botao.textContent = "Criar Mágica✨"
  botao.style.background = '#37e359'
}