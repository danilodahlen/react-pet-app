import React, { Component } from 'react';

class CaixaPublicacao extends Component {
    render() {
      return (<div class="create-post">
                    <div class="row">
                        <div class="col-md-1 col-sm-1 col-lg-1">
                        </div>
                        <div class="col-md-7 col-sm-6 col-lg-6">
                            <div class="form-group">
                                <img src={require('../images/users/user-1.jpg')} alt="" class="profile-photo-md"/>
                                <textarea name="texts" id="exampleTextarea" cols="30" rows="1" class="form-control" placeholder="Write what you wish"></textarea>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-5 col-lg-5">
                            <div class="tools">
                                <ul class="publishing-tools list-inline">
                                    <li><a href="#"><i class="ion-compose"></i></a></li>
                                    <li><a href="#"><i class="ion-images"></i></a></li>
                                    <li><a href="#"><i class="ion-ios-videocam"></i></a></li>
                                    <li><a href="#"><i class="ion-map"></i></a></li>
                                </ul>
                                <button class="btn btn-primary pull-right">Publish</button>
                            </div>
                        </div>
                    </div>
                </div>)
    }
}

export default CaixaPublicacao;