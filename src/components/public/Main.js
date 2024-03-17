import React, { Component } from 'react'
import { Cards } from './Cards'


export class Main extends Component {

  constructor (props) {

  super(props);
 this.state= {products : []}

  }

  componentDidMount() {
    
  }

  render(){

return (

<main>
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold">Ropero Virtual</h1>
      <h3 className="fw-normal text-muted mb-3">LLevando mas de 3 prendas, rebajamos un 20%</h3>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
        <a className="icon-link" href="/">
          Learn more
          <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
        </a>
        <a className="icon-link" href="/">
          Buy
          <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
        </a>
      </div>
    </div>
  </div>
  
  <Cards/>
  
  </main>
  )
 } 
}

export default Main;

