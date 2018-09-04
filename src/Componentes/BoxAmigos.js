import React, { Component } from 'react';

class BoxAmigos extends Component {
    render() {
        return(<div class="friend-list">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="friend-card">
                                <img src={require('../images/covers/1.jpg')} alt="profile-cover" class="img-responsive cover"/>
                                <div class="card-info">
                                    <img src={require('../images/users/user-3.jpg')} alt="user" class="profile-photo-lg"/>
                                    <div class="friend-info">
                                        <a href="#" class="pull-right text-green">My Friend</a>
                                        <h5><a href="timeline.html" class="profile-link">Sophia Lee</a></h5>
                                        <p>Student at Harvard</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="friend-card">
                                <img src={require('../images/covers/3.jpg')} alt="profile-cover" class="img-responsive cover"/>
                                <div class="card-info">
                                    <img src={require('../images/users/user-4.jpg')} alt="user" class="profile-photo-lg"/>
                                    <div class="friend-info">
                                        <a href="#" class="pull-right text-green">My Friend</a>
                                        <h5><a href="timeline.html" class="profile-link">John Doe</a></h5>
                                        <p>Traveler</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="friend-card">
                                <img src={require('../images/covers/4.jpg')} alt="profile-cover" class="img-responsive cover"/>
                                <div class="card-info">
                                    <img src={require('../images/users/user-10.jpg')} alt="user" class="profile-photo-lg"/>
                                    <div class="friend-info">
                                        <a href="timeline.html" class="pull-right text-green">My Friend</a>
                                        <h5><a href="#" class="profile-link">Julia Cox</a></h5>
                                        <p>Art Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="friend-card">
                                <img src={require('../images/covers/5.jpg')} alt="profile-cover" class="img-responsive cover"/>
                                <div class="card-info">
                                    <img src={require('../images/users/user-7.jpg')} alt="user" class="profile-photo-lg"/>
                                    <div class="friend-info">
                                        <a href="#" class="pull-right text-green">My Friend</a>
                                        <h5><a href="timelime.html" class="profile-link">Robert Cook</a></h5>
                                        <p>Photographer at Photography</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="friend-card">
                                <img src={require('../images/covers/6.jpg')} alt="profile-cover" class="img-responsive cover"/>
                                <div class="card-info">
                                    <img src={require('../images/users/user-8.jpg')} alt="user" class="profile-photo-lg"/>
                                    <div class="friend-info">
                                        <a href="#" class="pull-right text-green">My Friend</a>
                                        <h5><a href="timeline.html" class="profile-link">Richard Bell</a></h5>
                                        <p>Graphic Designer at Envato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}


export default BoxAmigos;