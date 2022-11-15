import { useState } from 'react'
import './styles/index.css'

function Login() { //los componentes en React son funciones. Su nombre comienza en mayúscula. Retorna jsx
  return (
    <div className="Login">
      <div className="container my-auto">
      <div className="row">
        <div className="col-lg-4 col-md-8 col-12 mx-auto">
          <div className="card z-index-0 fadeIn3 fadeInBottom">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Iniciar sesión</h4>
                <div className="row mt-3">
                  <div className="col-2 text-center ms-auto">
                    <a className="btn btn-link px-3" href="javascript:;">
                      <i className="fa fa-facebook text-white text-lg"></i>
                    </a>
                  </div>
                  <div className="col-2 text-center px-1">
                    <a className="btn btn-link px-3" href="javascript:;">
                      <i className="fa fa-github text-white text-lg"></i>
                    </a>
                  </div>
                  <div className="col-2 text-center me-auto">
                    <a className="btn btn-link px-3" href="javascript:;">
                      <i className="fa fa-google text-white text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form role="form" className="text-start">
                <div className="input-group input-group-outline my-3">
                  <label className="form-label">Correo electrónico o usuario</label>
                  <input type="email" className="form-control"></input>
                </div>
                <div className="input-group input-group-outline mb-3">
                  <label className="form-label">Contraseña</label>
                  <input type="password" className="form-control"></input>
                </div>
                <div className="text-center">
                  <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">¡Ingresar!</button>
                </div>
                <p className="mt-4 text-sm text-center">
                  Olvidé mi usuario o contraseña. :(
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
