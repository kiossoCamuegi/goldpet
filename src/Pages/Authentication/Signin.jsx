import React from 'react'
import NewsLetter from '../../PagesComponents/Components/NewsLetter'
import Footer from '../../PagesComponents/Components/Footer'
import Navbar from '../../PagesComponents/Main/Navbar'
import { Link } from 'react-router-dom'

function Signin() {
    document.title = "Login"
    return (
      <div>
        <Navbar Active={null} />
        <div className="account">
          <div className="signin-box"> 
              <div className="signin-container">
                  <div className="box active">
                      <h2>Login</h2>
                        <form action="" id="signincustomer"> 
                            <div className="form-group">
                              <label for="formGroupExampleInput">Email</label>
                              <input type="email" className="form-control" name="emailc"   placeholder="EX: hightech-airer@gmail.com"/>
                            </div>
                            <div className="form-group">
                              <label for="formGroupExampleInput2">Password</label>
                              <input type="password" className="form-control" name="passwordc"  placeholder="EX: 123Hightech#"/>
                            </div>
                            <div className="d-block justify-content-space-between">
                              <div className="col-lg-8">
                                  <div className="custom-control custom-checkbox ml-0">
                                      <input type="checkbox" className="custom-control-input ml-0" name="" id="c2" value=""/>
                                      <label className="custom-control-label" for="c2"> <div className="ml-2">Lembrar sempre</div> </label>
                                  </div>
                                </div>
                                <div className='mt-2 d-flex'>
                                    <a href="#">Ainda não tem uma conta ?</a> 
                                    <span className="ml-2"><Link className='text-secondary' to={"/signup"}>Registrar</Link> </span>
                                </div>
                            </div>
                            <button className="btn btn-signin">Entrar</button>
                            <button className="btn btn-signin-with-google">
                                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="google"/>
                                   <span>Continuar com  google</span>
                            </button>
                            <div className="center mt-3 mb-2">
                            <div className='mt-2 d-flex'>
                                    <a href="#">esqueceu a sua senha ?</a> 
                                    <span className="ml-2"><Link className='text-secondary' to={"#"}>Recuperar</Link> </span>
                                </div>
                            </div>
                            <button className="btn btn-signin-with-facebook">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="facebook"/>
                              <span>Continuar com facebook</span>
                       </button>
                        </form>
                  </div> 
              </div>
          </div>
      </div> 
        <NewsLetter />
        <Footer />
      </div>
    )
}

export default Signin