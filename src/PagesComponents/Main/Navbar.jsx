import React from 'react'
import { SearchOutline, HeartOutline } from 'react-ionicons'
import { MdBalance } from "react-icons/md";
import { TbBasketMinus } from "react-icons/tb";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from '../Components/Logo';
import ShoppingCartCanvas from '../Components/MenusAndDropdowns/ShoppingCartCanvas';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RiSearchLine } from "react-icons/ri";
import { Offcanvas } from "react-bootstrap";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios"
import ServerUrl from '../../Pages/ServerUrl';


function Navbar({ Active }) {
  const [IsFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showMenu, setShowMenu] = useState(false);
  const [LoadedCategories, setLoadedCategories] = useState([]); 
  const [SearchCategorie, SetSearchCategorie] = useState(null);
  const [SearchKeyWord, SetSearchKeyWord] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const KeySearch = searchParams.get('key');
  const CatSearch = searchParams.get('cat');
  const [LoadedProducts, setLoadedProducts]  = useState([]); 
 
 
  async function loadData() {
    try { 
      const  [products] = await Promise.all([ 
        axios.get(ServerUrl()+"htmarketgetallproducts")
      ]);  
      let Data = [];
      products.data.map((item)=>{
          Data.push({
            id:item.content._id,
            name:item.content.product_name,
            product_price:item.content.product_price,
            product_oldprice:item.content.product_oldprice,
            product_description:item.content.product_description,
            product_categorie:item.content.product_categorie,
            product_subcategorie:item.content.product_subcategorie,
            product_visitors:item.content.product_visitors,  
            images:item.images
          });
      });
      setLoadedProducts(Data); 
      console.log(Data);
    } catch (error) { 
       console.log(error)
    }
 }
  
  const checkWindowHeight = () => {
    document.addEventListener("scroll", (e) => {
      setIsFixed(window.scrollY > 270 ? true : false);
    });
  }
 

  const handleOnSearch = (string, result) => { 
      SetSearchKeyWord(string)
      console.clear()
      console.log(result)
  }

  const handleSearchData = () => { 
      navigate("/products?key="+SearchKeyWord+"&cat="+SearchCategorie);
  }

  const handleOnHover = (result) => { 
    console.clear()
    console.log(result)
  }
 


  const handleOnSelect = (item) => {
    navigate("/product_details?item=" + item.id); 
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <div className="search-item">
        <div className="image">
          <ImageLazyLoading source={item.images.length > 0 ? item.images[0].file_name : "https://img.freepik.com/premium-vector/modern-flat-icon-landscape_203633-11062.jpg"} />
        </div>
        <div className="block">
          <h5 className="name">{item.name}</h5>
          <div className="d-flex"> <p>{item.category}</p><div className="line"></div><div className="price">{item.product_price}</div></div>
        </div>
      </div>
    )
  }
 

  async function loadCategories() {
    try {
      const response = await axios.get(ServerUrl() + "htmarketgetallcategories");
      let result = []
      for (let i = 0; i < response.data.length; i++) {
        result.push({ name: response.data[i].info.categorie_title, id: response.data[i].info._id })
      }
      setLoadedCategories(result);
      console.log(response.data)
    } catch (error) {
      console.log(ServerUrl() + "htmarketgetallcategories")
      console.log(error)
    }
  }



  useEffect(() => {
    checkWindowHeight();
    loadCategories(); 
    loadData(); 
  }, []);

  return (
    <div className='wo-navbar'>
      <div className="header">
        <div className="top bg-grey">
          <div><p >WELCOME TO Goldpet online store  !</p></div>
          <div className="d-flex">
            <div className="lang">
              <li className="active"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/640px-Flag_of_Portugal.svg.png" alt="" />
                <ul className='d-none'>
                  <li className="flex"><img src="../images/flags/us.svg" alt="" />English</li>
                  <li className="flex"><img src="../images/flags/fr.svg" alt="" />France</li>
                  <li className="flex"><img src="../images/flags/pt.svg" alt="" />Portuguese</li>
                  <li className="flex"><img src="../images/flags/ru.svg" alt="" />Russian</li>
                </ul>
              </li>
            </div>
            <div className="br"></div>
            <ul className="d-flex">
              <li><Link to="/">Goldpet</Link></li>
              <li><Link to="/contact">contatos</Link></li>
              <li><Link to="/useraccount">Minha conta</Link></li>
              <li className="ac"> <li><Link to="/signin">Login</Link></li> / <li>
                <Link to="/signup">Registrar</Link></li></li>
            </ul>
          </div>
        </div>
        <nav className={IsFixed ? "fixed" : ""}>
          <div className={"wks-navbar-classic"}>
            <div>
              <Logo />
            </div>
            <div className="links a1">
              <ul className="flex">
                <li className={Active === 1 ? "active" : ""}><Link to="/">Inicio</Link></li>
                <li className={Active === 2 ? "active" : ""} ><Link to="/products">Produtos</Link></li>
                <li className={Active === 3 ? "active" : ""} ><Link to="#">Ofertas</Link></li>
                <li className={Active === 4 ? "active" : ""} ><Link to="/">Gaiolas</Link></li>
                <li className={Active === 5 ? "active" : ""} ><a target='_blank' href="#">Serviços</a></li>
                <li className={Active === 6 ? "active" : ""} ><Link to="/contacts">Contatos</Link></li>
              </ul>
            </div>
            <div className="button-links a2">
              <Link to="#" className="btn bg-white text-dark">Minha conta cliente</Link>
            </div>
            <section className="responsive-menu">
              <div className="d-flex">
                <div className="search-icon" onClick={handleShow}><RiSearchLine /></div>
                <div className="toggle-menu" onClick={() => setShowMenu(showMenu === true ? false : true)}><TiThMenu /></div>
              </div>
              <menu className={showMenu === true ? "show" : ""}>
                <div className="links">
                  <ul className="flex">
                    <br />
                    <div className="toggle-menu" onClick={() => setShowMenu(showMenu === true ? false : true)}><MdOutlineClose /></div>
                    <br />
                    <li className={Active === 1 ? "active" : ""}><Link to="/">Inicio</Link></li>
                    <li className={Active === 2 ? "active" : ""} ><Link to="/products">Produtos</Link></li>
                    <li className={Active === 3 ? "active" : ""} ><Link to="#">Ofertas</Link></li>
                    <li className={Active === 4 ? "active" : ""} ><Link to="/">Gaiolas</Link></li>
                    <li className={Active === 5 ? "active" : ""} ><a target='_blank' href="#">Serviços</a></li>
                    <li className={Active === 6 ? "active" : ""} ><Link to="/contacts">Contatos</Link></li>
                  </ul>
                </div>
                <br />
                <div className="button-links col">
                  <Link to="#" className="btn bg-white text-dark">Minha conta cliente</Link>
                  <Link to="/signin" className="btn bg-main mt-2">Login</Link>
                  <Link to="/signup" className="btn bg-main mt-2">Registrar</Link>
                </div>
              </menu>
            </section>
          </div>
          <div className="wks-navbar">
            <div className="box box-content">
              <div className="departments-dropdwon">
                <CgMenuRightAlt />
                <span>Ver Marcas</span>
                <ul className="d-none">

                </ul>
              </div>
            </div>
            <div className="box col center">
              <div className="search-box col">
                <div className="form" action="/products" method="POST">
                  <select className="form-control" onChange={(e)=>SetSearchCategorie(e.target.value)} 
                  name="filter" id="categoryselector">
                    <option selected disabled>Categorias</option>
                    <option value="1">Todas</option>
                    {LoadedCategories.map((item, index) => (
                      <option key={index} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                  <input type="text" className="form-control d-none" name="search" placeholder="pesquisar..." />
                  <section className="form-autocomplete bg-dange">
                    <ReactSearchAutocomplete
                      items={LoadedProducts}
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      autoFocus
                      placeholder='Pesquisar...'
                      formatResult={formatResult}
                    />
                  </section>
                   <button type="submit"  onClick={()=>handleSearchData()} ><SearchOutline /></button> 
                </div>
              </div>
            </div>
            <div className="box">
              <div className="links">
                <li><Link to="#"><MdBalance /> <span className='txt'>Comparar</span></Link></li>
                <li ><Link to="#"><HeartOutline /> <span className='txt'> Lista de desejos</span></Link></li>
                <ShoppingCartCanvas />
              </div>
              <div className="custom-control custom-switch">
                <div className="d-none">
                  <input type="checkbox" className="custom-control-input" id="changetheme" />
                  <label className="custom-control-label" for="changetheme"></label>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bold-title">Pesquisar produtos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className='space-search' action="#">
            <aside>
              <select className="form-control" name="filter" id="categoryselector">
                <option value="">Categorias</option>
                <option value="1">Todas</option>
                <option value="2">Compressores</option>
                <option value="3">Tratamento de ar</option>
                <option value="4">Transporte</option>
                <option value="5">Acessórios</option>
                <option value="6">Armazenamento de ar</option>
              </select>
              <input type="text" className="form-control d-none" name="search" placeholder="pesquisar..." />
              <section className="form-autocomplete mt-2">
                <ReactSearchAutocomplete
                  items={LoadedProducts}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  placeholder='Pesquisar...'
                  formatResult={formatResult}
                />
              </section>
            </aside>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Navbar