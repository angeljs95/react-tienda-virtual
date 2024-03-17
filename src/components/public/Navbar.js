import React from 'react'

export const Navbar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand d-md-none" href="#">
      <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
      Aperture
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="#offcanvas" aria-labelledby="#offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 justify-content-between">


      <li className="nav-item"><a className="nav-link" href="#">
              <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
            </a></li>
          <li className="nav-item"><a className="nav-link" href="#"></a></li>
          <li className="nav-item"><a className="nav-link" href="/">Product</a></li>
          <li className="nav-item"><a className="nav-link" href="/products/categories">Categorias</a></li>
          <li className="nav-item"><a className="nav-link" href="/carts">Cartas</a></li>
          <li className="nav-item"><a className="nav-link" href="/ingreso-form">Ingresar</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
          <li className="nav-item"><a className="nav-link" href="#">
              <svg className="bi" width={24} height={24}><use xlinkHref="#cart" /></svg>
            </a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

      


    </div>
  )
}

