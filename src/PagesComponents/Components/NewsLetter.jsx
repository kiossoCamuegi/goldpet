import React from 'react'

function NewsLetter() {
  return (
    <div>
    <div className="newsletter">
        <div className="over">
            <div className="flex box">
                <div className="icon fa fa-at"></div>
                <div className="block">
                    <h4>SUBSCREVA PARA MAIS NOTICIAS</h4>
                    <p>Obtenha todas as informações mais recentes sobre eventos, vendas e ofertas.</p>
                </div>
            </div>
            <div className="box">
                <form action="" className="flex" id="newsletter">
                    <input type="email" required className="form-control" placeholder="Escreva o seu email"/>
                    <button className="btn text-light">SUBSCREVA</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter