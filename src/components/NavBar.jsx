import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="container">
		   <nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" 
                  data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" 
                  aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Sizes:</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li>
                       <p className="product">16 product(s) found</p>
			        </li>
			        <li>
                       <p className="order">Order by</p>
			        </li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
                   <div className="dropdown">
					  <button className="btn btn-default dropdown-toggle selectbutton"
                       type="button" id="dropdownMenu1" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
					    Select
					    <span className="caret"></span>
					  </button>
					  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					    <li><a href="#">Action</a></li>
					    <li><a href="#">Another action</a></li>
					    <li><a href="#">Something else here</a></li>
					    <li role="separator" className="divider"></li>
					    <li><a href="#">Separated link</a></li>
					  </ul>
				   </div>
			      </ul>
			    </div>
			  </div>
			</nav>
	</div>
        </div>
    );
}

export default NavBar;
