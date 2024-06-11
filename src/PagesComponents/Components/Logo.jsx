import React from 'react'
import { Link } from 'react-router-dom' ;
import ImageLazyLoading from "./ImageLazyLoading";

const Logos = [
  require("../../Assets/Images/logo_2.png"),
  require("../../Assets/Images/logo_1.png"),
]





function Logo({type}) {
  let t =  type*1;

  return (
    <div>
       <Link to="/"><div className="logo"><ImageLazyLoading height={60} source={"https://goldpet.pt/img/cms/logotipo-goldpet-versao-horizontal-digital.png"} /></div></Link>
    </div>
  )
}

export default Logo