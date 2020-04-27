import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Particles from "react-particles-js";
import Head from './components/head/Head';
import Main from './components/main/Main';

class App extends Component {
    render() {
        const particlesOptions={
            particles: {
                number:{
                    value:10,
                    density:{
                        enable:true,
                        value_area:80
                    }
                },
                color:{
                    value:'#000000'
                },
                shape:{
                    stroke:{
                        color:'#000000'
                    }
                },
                line_linked:{
                    color:'rgba(0,0,0,0.3)'
                }
            },
            interactivity:{
                detect:'on',
                events:{
                    onhover:{
                        enable:'true',
                        mode:'repulse'
                    }
                }
            }
        }
        return (
            <section className={'mainApp row'}>
                <Particles className='particles'
                           params={particlesOptions}/>
                <section className={'navBar col-sm-12'}>
                    <Navigation />
                </section>
                <section className={'mainSection col-sm-12 container'}>
                    {/*<Head />*/}
                    <Main />
                </section>
            </section>
        )
    }
}
export default App;
