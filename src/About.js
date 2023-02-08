import './About.css'
import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Colors } from './utils/constants'

export class About extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
        <Header title="Significant reading has more info number"/>
       </header>
       
       <div className='center-image'>
        <img src={require('../src/images/Biryani.jpg')}></img>
        <h3 style={{color:Colors.primary}}>October 6,2021/Classic</h3>
        <p>There are many variations of passages of lorem ipsum available,but the majorithave suffered alteration in some form.by injected humour,or randomised words whicdon't look even slightly believable. if you are going to use a passage of lorem ipsum,need to be sure there isn't anything embarrassing hidden in the middle of text.all the loem ipsum genereators on the interner tend.</p>
        
        <div className='divtwo'>
          <h3 style={{color:Colors.primary}}>The perfect book for all</h3>
          <p>It is a long established face that a render will be distracted by the readable content of a page when looking at its layout.The point of using lorem ipsum is that it has less normal distribution of letters,as opposed</p>
          <ul>
              <li>It has roots in a piece of classical latin literature from 45 BC,</li>
              <li>To generate lorem ipsum which looks reasonable</li>
              <li>Thw first line of lorem ipsum,"Lorem ipsum"dolor sit amet</li>
          </ul>
        </div>

        <div className='centerdiv'>
          <p>"Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channel."</p>
        </div>

        <div className='divtwo'>
          <h3 style={{color:Colors.primary}}>The perfect book for all</h3>
          <p>It is a long established face that a render will be distracted by the readable content of a page when looking at its layout.The point of using lorem ipsum is that it has less normal distribution of letters,as opposed</p>
          <ol >
              <li value="1">It has roots in a piece of classical latin literature from 45 BC,</li>
              <li>To generate lorem ipsum which looks reasonable</li>
              <li >The first line of lorem ipsum,"Lorem ipsum"dolor sit amet</li>
          </ol>
        </div>

      </div>
      
  

       <footer className='footer'>
        <Footer/>
       </footer>
      </div>
    )
  }
}

export default About