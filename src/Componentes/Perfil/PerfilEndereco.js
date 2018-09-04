import React, { Component } from 'react';

class PerfilEndereco extends Component {
    render(){
        return(<div class="edit-profile-container">
                    <div class="block-title">
                        <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Endereco</h4>
                        <div class="line"></div>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                        <div class="line"></div>
                    </div>
                    
                    <div class="edit-block">
                        <form name="basic-info" id="basic-info" class="form-inline">
                            <div class="row">
                                <div class="form-group col-xs-6">
                                    <label for="firstname">First name</label>
                                    <input id="firstname" class="form-control input-group-lg" type="text" name="firstname" title="Enter first name" placeholder="First name" value="John" />
                                </div>
                                <div class="form-group col-xs-6">
                                    <label for="lastname" class="">Last name</label>
                                    <input id="lastname" class="form-control input-group-lg" type="text" name="lastname" title="Enter last name" placeholder="Last name" value="Doe" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-xs-12">
                                    <label for="email">My email</label>
                                    <input id="email" class="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder="My Email" value="razor.venon@gmail.com" />
                                </div>
                            </div>
                            <div class="row">
                                <p class="custom-label"><strong>Date of Birth</strong></p>
                                <div class="form-group col-sm-3 col-xs-6">
                                    <label for="month" class="sr-only"></label>
                                    <select class="form-control" id="day">
                                    <option value="Day">Day</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option selected>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                    </select>
                                </div>
                                <div class="form-group col-sm-3 col-xs-6">
                                    <label for="month" class="sr-only"></label>
                                    <select class="form-control" id="month">
                                    <option value="month">Month</option>
                                    <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                    <option>Apr</option>
                                    <option>May</option>
                                    <option>Jun</option>
                                    <option>Jul</option>
                                    <option>Aug</option>
                                    <option>Sep</option>
                                    <option>Oct</option>
                                    <option>Nov</option>
                                    <option selected>Dec</option>
                                    </select>
                                </div>
                                <div class="form-group col-sm-6 col-xs-12">
                                    <label for="year" class="sr-only"></label>
                                    <select class="form-control" id="year">
                                        <option value="year">Year</option>
                                        <option selected>2000</option>
                                        <option>2001</option>
                                        <option>2002</option>
                                        <option>2004</option>
                                        <option>2005</option>
                                        <option>2006</option>
                                        <option>2007</option>
                                        <option>2008</option>
                                        <option>2009</option>
                                        <option>2010</option>
                                        <option>2011</option>
                                        <option>2012</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group gender">
                                <span class="custom-label"><strong>I am a: </strong></span>
                                <label class="radio-inline">
                                    <input type="radio" name="optradio" checked/>Male
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" name="optradio"/>Female
                                </label>
                            </div>
                            <div class="row">
                                <div class="form-group col-xs-12">
                                    <label for="my-info">About me</label>
                                    <textarea id="my-info" name="information" class="form-control" placeholder="Some texts about me" rows="4" cols="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</textarea>
                                </div>
                            </div>
                            <button class="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                </div>
                
        )
    }
}

export default PerfilEndereco;