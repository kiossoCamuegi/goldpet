import React, { useState } from 'react'
import ProductCard from './ProductComponents/ProductCard';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, useLocation } from 'react-router-dom';
import { Offcanvas } from "react-bootstrap";
import { BsFilterCircle } from "react-icons/bs";
import axios from "axios"
import ServerUrl from '../../Pages/ServerUrl';
import { useEffect } from 'react';
import Loader from "../Loader"
import ReactPaginate from 'react-paginate';

function SearchComponents() {
    const [ActiveCategorie, SetActiveCategorie] = useState(null)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showMenu, setShowMenu] = useState(false);
    const [LoadedCategories, setLoadedCategories] = useState([]);
    const [LoadedProducts, setLoadedProducts] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const KeySearch = searchParams.get('key');
    const CatSearch = searchParams.get('cat');

 
    async function loadData() {
        setLoadedProducts([])
        try {
            const [response, products] = await Promise.all([
                axios.get(ServerUrl() + "htmarketgetallcategories"),
                axios.get(ServerUrl() + "htmarketgetallproducts")
            ]);

            setLoadedProducts(products.data);

            let result = []
            for (let i = 0; i < response.data.length; i++) {
                let subs = [];

                for (let a = 0; a < response.data[i].subcategories.length; a++) {
                    subs.push({ name: response.data[i].subcategories[a].subcategorie_name, id: response.data[i].subcategories[a]._id });
                }
                result.push({ name: response.data[i].info.categorie_title, id: response.data[i].info._id, subcategories: subs })
            }
            setLoadedCategories(result);
            console.log(result);
        } catch (error) {
            console.log(ServerUrl() + "htmarketgetallcategories")
            console.log(error)
        }
    }
 
    const FilteredProducts = (cat, price, brand, key) => {
        return LoadedProducts;
    } 

    useEffect(() => {
        loadData();
    }, []);

 
    const CategoriesTypes = [
        {
            name: "Compressores",
            code: 12,
        },
        {
            name: "Armazenamento de  ar",
            code: 13,
        },
        {
            name: "Transporte",
            code: 14,
        },
        {
            name: "Acessorios",
            code: 15,
        },
        {
            name: "secadores",
            code: 16,
        },
        {
            name: "Filtros",
            code: 17,
        },
        {
            name: "Reservatorios",
            code: 18,
        },

    ];
 

    function Items({ currentItems }) {
        return (
          <>
            {currentItems &&
              currentItems.map((item) => ( 
                 <ProductCard data={item} key={item.id} /> 
              ))}
          </>
        );
      }
      
      function PaginatedItems({ itemsPerPage }) { 
        const [itemOffset, setItemOffset] = useState(0); 
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = FilteredProducts().slice(itemOffset, endOffset);
        const pageCount = Math.ceil(FilteredProducts().length / itemsPerPage);
       
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % FilteredProducts().length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
        };
      
        return (
          <>
            <Items currentItems={currentItems} />
           <div className="pagination-area">
           <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
            />
           </div>
          </>
        );
      }

    return (
        <div>
            <div className="search">
                <div className="filters sr">
                    <div className="top-filter"><Link to="/" className='text-main'><span>Inicio</span></Link> / produtos</div>
                    <form action="" id="filtersearch">
                        <div className="space">
                            <h4>Filtros</h4>
                            <div><span className="clearallsearch">Limpar tudo</span></div>
                        </div>
                        <div  >
                            {(KeySearch !== null && KeySearch !== undefined && KeySearch !== "" && KeySearch !== "null") ? <div className="search-tag"><div className="text">{KeySearch}</div></div> : <></>}
                        </div>
                        <hr />
                        <br />
                        <h5 className="title">Marcas</h5>
                        <ul>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Alleva</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Profine</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Canagan</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Eukanuba </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for=""> Grandorf</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                <label className="custom-control-label ml-2" for="">Orijen</label>
                            </div>
                        </ul>
                        <hr />
                        <h5 className="title">Preços</h5>
                        <ul>
                            {[10, 50, 100, 200, 500, 1000, 2500, 5500, 11500, 23500].map((item, index) => (
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                    <label className="custom-control-label ml-2" for=""> € {Math.floor(item * 1)} - € {Math.floor(item * 2)}   </label>
                                </div>
                            ))}
                        </ul>
                        <hr />
                    </form>
                </div>
                <div className="pdl sr"></div>
                <div className="products-container"> 
                    {LoadedProducts.length <= 0 ?
                        <div className="center">
                           <div>
                            <br /><br />
                             <Loader />
                           </div>
                        </div>
                        :
                        <div> 
                            <div className="space ">
                                <div> <h3 className='bold'>Produtos encomtrados</h3></div>
                                <button onClick={handleShow} className='btn mb-4 mt-2 filter-btn bg-main'><BsFilterCircle /> Aplicar filtros</button>
                                <div className="flex">
                                    <span>{LoadedProducts.length} produtos encomtrados</span>
                                </div>
                            </div>
                            <div className="mt-2 mb-2 sr">
                                <div className="search-by-types">
                                    {LoadedCategories.map((item, index) => (
                                        <Dropdown key={index}>
                                            <Dropdown.Toggle className={(ActiveCategorie === item.id || item.id === CatSearch) ? "btn mt-2 active" : "btn mt-2"} id="dropdown-basic">{item.name}</Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <div onClick={() => SetActiveCategorie(item.id)}>
                                                    <Dropdown.Item href="#/action-1">Exibir tudo</Dropdown.Item>
                                                </div>
                                                {item.subcategories.map((Cat, Catindex) => (
                                                    <div onClick={() => SetActiveCategorie(Cat.id)}>
                                                        <Dropdown.Item href="#/action-1">{Cat.name}</Dropdown.Item>
                                                    </div>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    ))}
                                </div>
                            </div>
                            <div className="products-content">
                               <PaginatedItems itemsPerPage={20} />
                            </div> 
                        </div>
                    }
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="bold-title">Aplicar filtros</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form className='space-search' action="#">
                        <div className="filters scroll-view sr1">
                            <div className="top-filter"><Link to="/" className='text-main'><span>Inicio</span></Link> / produtos</div>
                            <form action="" id="filtersearch">
                                <div className="mt-2 mb-2 sr">
                                    <div className="search-by-types">
                                        {CategoriesTypes.map((item, index) => (
                                            <Dropdown key={index}>
                                                <Dropdown.Toggle className={ActiveCategorie === item.code ? "btn mt-2 active" : "btn mt-2"} id="dropdown-basic">{item.name}</Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <div onClick={() => SetActiveCategorie(item.code)}>
                                                        <Dropdown.Item href="#/action-1">#####</Dropdown.Item>
                                                    </div>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        ))}
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <h5 className="title">Marcas</h5>
                                <ul>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                        <label className="custom-control-label ml-2" for="">Comprag</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                        <label className="custom-control-label ml-2" for=""> Elgi</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                        <label className="custom-control-label ml-2" for="">Infinity</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                        <label className="custom-control-label ml-2" for="">Jork </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                        <label className="custom-control-label ml-2" for=""> Aignep</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                        <label className="custom-control-label ml-2" for="">Bigiessie</label>
                                    </div>
                                </ul>
                                <hr />
                                <h5 className="title">Preços</h5>
                                <ul>
                                    {[1, 345, 56, 7788, 8, 7, 8, 99, 9, 8].map((item, index) => (
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" name="" id="" value="" />
                                            <label className="custom-control-label ml-2" for=""> € {Math.floor(item * 1)}.00</label>
                                        </div>
                                    ))}
                                </ul>
                                <hr />
                            </form>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}


 

 

export default SearchComponents