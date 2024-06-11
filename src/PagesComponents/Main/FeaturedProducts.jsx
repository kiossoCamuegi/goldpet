import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductComponents/ProductCard';
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ServerUrl from '../../Pages/ServerUrl';
import Loader from '../Loader';

function FeaturedProducts() {
    const [LoadedProducts, setLoadedProducts] = useState([]);

    async function loadData() {
        try {
            const [products] = await Promise.all([
                axios.get(ServerUrl() + "htmarketgetallproducts")
            ]);
            setLoadedProducts(products.data);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        loadData();
    }, []);



    return (
        <div>
            <aside className="featured-products">
                <h1 className="title">Produtos em destaque</h1>
                <div className="products-container">
                    <div className="products-custom">
                        <div className="products-content">
                            {LoadedProducts.length <= 0 ?
                                <div className="center col">
                                    <div>
                                        <br /><br />
                                        <Loader />
                                    </div>
                                </div>
                                :
                                <>
                                    {LoadedProducts.slice(0, 10).map((item, index) => (
                                        <ProductCard data={item} key={index} />
                                    ))}
                                </>
                            }
                        </div>
                        <div className="block announce-block">
                            <section className="announce">
                                <a href="#"><ImageLazyLoading source="https://i.pinimg.com/736x/29/b1/46/29b1461bbf32d557068d7835dfd67dfb.jpg" alt="#" /></a>
                            </section>
                            <section className="announce-extra">
                                <a href="#"><ImageLazyLoading source="https://cdn.create.vista.com/downloads/fccc8999-f631-4624-9488-f0b1891d81b9_640.jpeg" alt="#" /></a>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="post-banner">
                    <div className="item">
                        <Link>
                            <ImageLazyLoading source="https://singpetclub.com/media/catalog/tmp/category/For-Singpet-Store-purchase-only.jpg"  />
                        </Link>
                    </div>
                </div>
                <br />
                <div className="products-content">
                    {LoadedProducts.length <= 0 ?
                        <div className="center col">
                            <div>
                                <br /><br />
                                <Loader />
                            </div>
                        </div>
                        :
                        <>
                            {LoadedProducts.slice(0, 6).map((item, index) => (
                                <ProductCard data={item} key={index} />
                            ))}
                        </>
                    }
                </div>
            </aside>
        </div>
    )
}

export default FeaturedProducts