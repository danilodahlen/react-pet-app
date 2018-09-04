import React, { Component } from 'react';

class BoxDesaparecido extends Component {

    render() {
        return (
            <div class="suggestions" id="sticky-sidebar">
              <h4 class="grey">Desaparecidos</h4>   
              <div class="follow-user">
                <img src={require('../images/users/user-11.jpg')} alt="" class="profile-photo-sm pull-left"/>
                <div>
                  <h5><a href="timeline.html">Diana Amber</a></h5>
                  <a href="#" class="text-green">Add friend</a>
                </div>
              </div>
              <div class="follow-user">
                <img src={require('../images/users/user-12.jpg')} alt="" class="profile-photo-sm pull-left"/>
                <div>
                  <h5><a href="timeline.html">Cris Haris</a></h5>
                  <a href="#" class="text-green">Add friend</a>
                </div>
              </div>
              <div class="follow-user">
                <img src={require('../images/users/user-13.jpg')} alt="" class="profile-photo-sm pull-left"/>
                <div>
                  <h5><a href="timeline.html">Brian Walton</a></h5>
                  <a href="#" class="text-green">Add friend</a>
                </div>
              </div>
              <div class="follow-user">
                <img src={require('../images/users/user-14.jpg')} alt="" class="profile-photo-sm pull-left"/>
                <div>
                  <h5><a href="timeline.html">Olivia Steward</a></h5>
                  <a href="#" class="text-green">Add friend</a>
                </div>
              </div>
              <div class="follow-user">
                <img src={require('../images/users/user-15.jpg')} alt="" class="profile-photo-sm pull-left"/>
                <div>
                  <h5><a href="timeline.html">Sophia Page</a></h5>
                  <a href="#" class="text-green">Add friend</a>
                </div>
              </div>
            </div>)
    }
}

export default BoxDesaparecido;