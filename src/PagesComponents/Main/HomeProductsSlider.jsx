import React from 'react'
import Carousel from "react-multi-carousel";
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';

function HomeProductsSlider() {

  const ProducstData = [
       "https://cdn.etailpet.com/media/salidadogs/pictures/turtle_xIPtuPC.png",
       "https://salsify-ecdn.com/images/86c12fe5af4984629719f6f44c9bb2ad.jpg",
       "https://www.sheba.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2656/files/2023-08/sheba-dry-hero-banner.jpg"
  ];

  const ProductsData2 = [
     "https://thefreshpackegypt.com/cdn/shop/products/4.jpg?v=1716514586&width=1445", 
     "https://m.media-amazon.com/images/I/61xubx3JSGL._AC_UF1000,1000_QL80_.jpg",
     "https://shop.petlife.com/cdn/shop/products/pure-dog-food-with-wholesome-grains-dry-dog-food-beef-and-barley-4-lbs-367723_1400x.jpg?v=1687487760"
  ]


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      

  return (
    <div className='wo-main-carousel'>
        <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4000}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={6000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProducstData.map((item, index)=>{
                return (
                 <Link to="#">
                   <div className='carousel-element' key={index+1}> 
                    <ImageLazyLoading source={item} height={500} /> 
                    <div className="over-info">
                          <div className="name">Comida de Gato de estimação Pacote Medio</div>
                           <div className="price-tag">746.61€ –  <s>7,970.40€ </s></div>
                      </div>
                   </div>
                 </Link>
                )
            })
          } 
       </Carousel>
        </div>
        <div className="carousel-vertical">
          <div className="carousel">
        <Carousel
        swipeable={true}  draggable={false} showDots={true}
        responsive={responsive}   ssr={true}
        infinite={true}  autoPlay={true}
        autoPlaySpeed={4500}    keyBoardControl={true}    customTransition="all .5"   transitionDuration={7000}
        containerclassName="carousel-container"  removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListclassName="custom-dot-list-style"  itemclassName="carousel-item-padding-40-px" >
          
          {ProductsData2.map((item, index)=>{
                return (
                  <Link to="#">
                    <div className='carousel-element' key={index+1}> 
                      <ImageLazyLoading source={item} height={500} /> 
                      <div className="over-info">
                          <div className="name">Comida de Cachorro Tipo grande Xl</div>
                           <div className="price-tag">746.61€ –  <s>7,970.40€ </s></div>
                      </div>
                   </div>
                </Link>
                )
            })
          } 
       </Carousel>
        </div>
        </div>
    </div>
  )
}

export default HomeProductsSlider