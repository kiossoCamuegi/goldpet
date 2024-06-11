import React from 'react'
import NewsLetter from '../../PagesComponents/Components/NewsLetter'
import Footer from '../../PagesComponents/Components/Footer'
import Navbar from '../../PagesComponents/Main/Navbar'

function ForgotPassword() {
    return (
        <div>
            <Navbar Active={null} />

            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ForgotPassword