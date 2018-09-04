import React, { Component } from 'react';

import HeaderExterno from '../Componentes/Home/HeaderExterno.js';
import HomeRegister from '../Componentes/Home/HomeRegister.js';
import HomeLogin from '../Componentes/Home/HomeLogin.js';   

class Home extends Component {
    render() {
        return (<div>
                    <HeaderExterno/>
                    <div id="lp-register">
                        <div class="container wrapper">
                            <div class="row">
                                <div class="col-sm-5">
                                    <div class="intro-texts">
                                        <h1 class="text-white">Make Cool Friends !!!</h1>
                                        <p>Friend Finder is a social network template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more. <br /> <br />Why are you waiting for? Buy it now.</p>
                                        <button class="btn btn-primary">Learn More</button>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-sm-offset-1">
                                    <div class="reg-form-container"> 
                                        <div class="reg-options">
                                            <ul class="nav nav-tabs">
                                                <li class="active">
                                                    <a href="#register" data-toggle="tab">Register</a>
                                                </li>
                                                <li>
                                                    <a href="#login" data-toggle="tab">Login</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <HomeRegister/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-6">
                                    <ul class="list-inline social-icons">
                                    <li><a href="#"><i class="icon ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="icon ion-social-twitter"></i></a></li>
                                    <li><a href="#"><i class="icon ion-social-googleplus"></i></a></li>
                                    <li><a href="#"><i class="icon ion-social-pinterest"></i></a></li>
                                    <li><a href="#"><i class="icon ion-social-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Home;