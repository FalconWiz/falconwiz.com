import React from 'react'

class NavBar extends React.Component {
  render () {
    return (
       <nav className='navbar navbar-default navbar-fixed-top'>
         <div className='container-fluid'>
           <div className='navbar-header'>
             <a className='navbar-brand' href='http://falconwiz.com'>FalconWiz.com</a>
           </div>
           <div id='navbar' className='navbar-collapse collapse'>
             <ul className='nav navbar-nav navbar-right'>
               <li><a title='Email me!' href='mailto:andrew.hinett@gmail.com' target='_blank'><i className='fa fa-envelope-o fa-lg' aria-hidden='true'></i></a></li>
               <li><a title='Github' href='https://github.com/FalconWiz' target='_blank'><i className='fa fa-github fa-lg' aria-hidden='true'></i></a></li>
               <li><a title='Instagram' href='https://www.instagram.com/hinett.a' target='_blank'><i className='fa fa-instagram fa-lg' aria-hidden='true'></i></a></li>
               <li><a title='Linkedin' href='https://ca.linkedin.com/in/andrew-hinett' target='_blank'><i className='fa fa-linkedin fa-lg' aria-hidden='true'></i></a></li>
             </ul>
           </div>
         </div>
       </nav>
    )
  }
}

export default NavBar
