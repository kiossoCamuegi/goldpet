import React from 'react'; 
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TbBasketMinus } from "react-icons/tb";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ProductCartComponent from '../ProductComponents/ProductCartComponent';
import { Link } from 'react-router-dom';
import { IoInformationCircle } from "react-icons/io5";


function ShoppingCartCanvas(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Data  = [
        {Image:"https://www.thepetmarket.pt/images/thumbs/0004210_green-petfood-insectdog-hypoallergen-cao-adulto-10-kg_510.jpeg"},
        {Image:"https://aquiefresco.pt/wp-content/uploads/2021/12/Pet-Food-Seco-Cao-Racas-Pequenas-UP-Pets-15kg-2021-1.jpg"}, 
        {Image:"https://www.thepetmarket.pt/images/thumbs/0004210_green-petfood-insectdog-hypoallergen-cao-adulto-10-kg_510.jpeg"}, 
        {Image:"https://www.thepetmarket.pt/images/thumbs/0003151_green-petfood-racao-vegetariana-origin-veggiedog-com-lentilhas-10kg_510.jpeg"}, 
        {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHopXfwEXNR9tgzD27GCCxRVub2CYOKYyFkg&s"}, 
        {Image:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/rockcms/2024-04/Screenshot-2024-04-16-at-12-6370bb.png"},  
    ];

    const GetShoppingCartItems  = ()=>{
        try {
            
        } catch (error) {
            
        }
    }
  

  return (
    <>
      <div onClick={handleShow} >
         <li className="cartdrop">
            <Link to="#"><TbBasketMinus /><span className='txt' >Meu carrinho</span></Link><div className="count">+10</div>
        </li>
      </div>
      <Offcanvas show={show} onHide={handleClose}  placement={"end"} name={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bold-title">Carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <div className="cart-canvas">
                <ul>
                    {Data.map((item, index)=>(
                         <ProductCartComponent data={item} key={index} />
                    ))}
                </ul>
                <div className="shop-details">
                    <Form>
                        <Form.Control placeholder='Código promocional...' />
                        <button className="btn">Aplicar</button>
                    </Form>
                    <small>30% de desconto</small>
                    <div className="math-area">
                         <div className="space">
                             <div><h4>Subtotal</h4></div>
                             <div><h4>€564.20</h4></div>
                         </div>
                         <div className="space">
                             <div><h5>Disconto</h5></div>
                             <div><h5>(20%) -€1129.20</h5></div>
                         </div>
                         <div className="space">
                             <div><h5>Taxa <IoInformationCircle /></h5></div>
                             <div><h5>+ €225.86</h5></div>
                         </div>
                    </div>
                    <div className="mt-2 mb-2">
                       <div className="space">
                             <div><h4>Total</h4></div>
                             <div><h4 className='text-success'>€564.20</h4></div>
                         </div>
                    </div>
                     <Link to="#"><button className="btn col bg-black text-light">Confirmar pagamento</button></Link>
                     <Link to="#"><button className="btn col mt-2">Continuar a comprar</button></Link>
                </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default ShoppingCartCanvas