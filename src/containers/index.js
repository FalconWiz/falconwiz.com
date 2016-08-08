import { Component } from 'jumpsuit'

import Footer from './../components/footer'
import Navbar from './../components/navbar'
import Home from './home'
const Index = Component({
  render () {
    return (
      <div>
        <div>
          <div id="content">
            <Navbar/>
            <div>
              { this.props.children }
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
})

export default Index
