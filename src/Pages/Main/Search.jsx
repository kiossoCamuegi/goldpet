import React from 'react'
import ContactArea from '../../PagesComponents/Components/ContactArea'
import Navbar from '../../PagesComponents/Main/Navbar'
import Footer from '../../PagesComponents/Components/Footer'
import NewsLetter from '../../PagesComponents/Components/NewsLetter'
import SearchComponents from '../../PagesComponents/Components/SearchComponents'

function Search() {
  document.title = "HTmarket - Produtos";
  return (
    <div>
     <Navbar Active={2} />
       <SearchComponents />
       <NewsLetter />
       <Footer/>
    </div>
  )
}

export default Search