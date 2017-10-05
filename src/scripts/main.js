import React from 'react';
import ReactDOM from 'react-dom';
import style from '../styles/style.scss';

const footerLink1 = {
  text: 'Bhargav Gandhi',
  link: 'http://www.bhargavgandhi.com'
}
const placeholder = {
  imgMed: 'http://placehold.it/800x500'
}

class Header extends React.Component {
  render() {
    return (
      <header className="row">
        <nav id="mainNav" className="navbar navbar-default homePageNav" role="navigation">
          <div id="logo" className="navbar-header">
            <div id="nav-icon3" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a className="navbar-brand leftBrand">
              Base Layout
            </a>
          </div>
          <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1" aria-expanded="false">
            <ul className="nav navbar-nav">
              <li id="" className="active">
                <a className="active">Menu 1</a>
              </li>
              <li id="">
                <a>Menu 2</a>
              </li>
              <li id="">
                <a>Menu 3</a>
              </li>
              <li id="">
                <a>Menu 4</a>
              </li>
              <li id="">
                <a>Menu 5</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

class Maincontent extends React.Component {
  render() {
    return (
      <div>
        <section className="row fullWidth homeRow1 textAlignCenter" id="mainHero">
          <div className="col-xs-12 col-md-12 imgAnims">
            <h2>
              Image
            </h2>
            <img src={'http://placehold.it/700x450&text=slide1'} width="100%"/>
          </div>
        </section>
        <section className="row FullWidth textAlignCenter" id="homeRow2">
          <div className="col-xs-12 col-md-12">
            <div className="col-xs-12 col-md-10 mainCopy">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="row homepage">
        <div className="col-xs-12">
          <div className="ftAddress col-xs-12 col-sm-4 col-md-7">
            <p>Base Layout</p>
          </div>
          <div className="ftLinks col-xs-12 col-sm-4 col-md-5">
            <ul>
              <li>
                <a target="_blank">
                  Footer Link 1
                </a>
              </li>
              <li>
                <a target="_blank">
                  Footer Link 2
                </a>
              </li>
              <li>
                <a href={footerLink1.link} target="_blank">
                  Developed by BG
                </a>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    );
  }
}

ReactDOM.render(
  <Header/>, document.getElementById('header'));

ReactDOM.render(
  <Maincontent/>, document.getElementById('mainContainer'));

ReactDOM.render(
  <Footer/>, document.getElementById('footer'));
