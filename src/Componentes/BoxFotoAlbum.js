import React, { Component } from 'react';

class BoxFotoAlbum extends Component {
    render() {
        return(<ul class="album-photos">
                    <li>
                        <div class="img-wrapper" data-toggle="modal" data-target=".photo-1">
                            <img src={require('../images/album/1.jpg')} alt="photo" />
                        </div>
                        <div class="modal fade photo-1" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <img src={require('../images/album/1.jpg')} alt="photo" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrapper" data-toggle="modal" data-target=".photo-2">
                            <img src={require('../images/album/2.jpg')} alt="photo" />
                        </div>
                        <div class="modal fade photo-2" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <img src={require('../images/album/2.jpg')} alt="photo" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="img-wrapper" data-toggle="modal" data-target=".photo-3">
                            <img src={require('../images/album/3.jpg')} alt="photo" />
                        </div>
                        <div class="modal fade photo-3" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <img src={require('../images/album/3.jpg')} alt="photo" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
        )
    }
}

export default BoxFotoAlbum;