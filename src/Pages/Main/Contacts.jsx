import React from 'react'
import ContactArea from '../../PagesComponents/Components/ContactArea'
import Navbar from '../../PagesComponents/Main/Navbar'
import Footer from '../../PagesComponents/Components/Footer'
import NewsLetter from '../../PagesComponents/Components/NewsLetter'

function Contacts() {
  return (
    <div>
     <Navbar  Active={6} />
       <ContactArea />
       <NewsLetter />
       <Footer/>
    </div>
  )
}

export default Contacts