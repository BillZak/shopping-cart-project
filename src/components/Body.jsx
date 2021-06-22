import image from '../shopimgs/img.png';
import pic0 from '../shopimgs/pic0.png'
import pic1 from '../shopimgs/pic1.png'
import pic2 from '../shopimgs/pic2.png'
import pic3 from '../shopimgs/pic3.png'
import pic4 from '../shopimgs/pic4.png'
import pic5 from '../shopimgs/pic5.png'
import pic6 from '../shopimgs/pic6.png'
import pic7 from '../shopimgs/pic7.png'
import pic8 from '../shopimgs/pic8.png'
import pic9 from '../shopimgs/pic9.png'
import pic10 from '../shopimgs/pic10.png'
import pic11 from '../shopimgs/pic11.png'


import React from 'react';

const Body = () => {
    return (
        <div>
            <div className="container">
		<div className="row">
			<div className="col-md-2">
			   <div className="col-md-3 button text-center">XS</div>
			   <div className="col-md-3 button text-center">S</div>
			   <div className="col-md-3 button text-center">M</div>
			   <div className="col-md-3 button text-center">ML</div>
			   <div className="col-md-3 button text-center">XL</div>
			   <div className="col-md-3 button text-center">L</div>			   
			   <p style={{color: 'silver', fontSize: '12px'}}>Leave a star at the Github if this repository was useful :)</p>
				<button type="button" className="btn btn-default btn-lg star">
				  <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
				</button>
				<button type="button" className="btn btn-default btn-lg numb">
				  <span  aria-hidden="true"></span> 848
				</button>
			</div>
			<div className="col-md-10">
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic0} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Cat Tee 'black' T-Shirt</h3>
				        <p>-----</p>
				         <p style={{color: 'grey'}}>$<span style={{color:'black',fontSize: '25px'}}>10</span>.90</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
					      <img src={pic1} alt="..."/>
					      <div className="caption">
					      	<h6 className="shipment">Free Shipping</h6>
					        <h3>Tie Dye Navy T-Shirt</h3>
					        <p>-----</p>
					         <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>16</span>.15</p>
					        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
					 </div>
					    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic2} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Skull T-Shirt</h3>
				        <p>-----</p>
				         <p style={{color: 'grey'}}>$<span style={{color: 'black', fontSize: '25px'}} >17</span>.50</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic3} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Red-Navy T-Shirt</h3>
				        <p>-----</p>
				        <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>30</span>.90</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
			</div>
		</div>
        <div className="row">
			<div className="col-md-2">
			   
			</div>
			<div className="col-md-10">
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic8} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Thug 'black' T-Shirt</h3>
				        <p>-----</p>
				         <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>11</span>.90</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
					      <img src={pic5} alt="..."/>
					      <div className="caption">
					      	<h6 className="shipment">Free Shipping</h6>
					        <h3>Whine Tie Dye T-Shirt</h3>
					        <p>-----</p>
					         <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>19</span>.45</p>
					        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
					 </div>
					    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic6} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Gay T-Shirt</h3>
				        <p>-----</p>
				         <p style={{color: 'grey'}}>$<span style={{color: 'black', fontSize: '25px'}}>32</span>.20</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic7} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Blue-Navy T-Shirt</h3>
				        <p>-----</p>
				        <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>14</span>.90</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-md-2">
			   
			</div>
			<div className="col-md-10">
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic9} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Neat 'black' T-Shirt</h3>
				        <p>-----</p>
				         <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>46</span>.90</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
					      <img src={pic0} alt="..."/>
					      <div className="caption">
					      	<h6 className="shipment">Free Shipping</h6>
					        <h3>Nice Tie Dye T-Shirt</h3>
					        <p>-----</p>
					         <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>32</span>.00</p>
					        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
					 </div>
					    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic10} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Bag T-Shirt</h3>
				        <p>-----</p>
				         <p style={{color: 'grey'}}>$<span style={{color: 'black', fontSize: '25px'}}>23</span>.20</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
				<div className="col-md-3">
					<div className="thumbnail">
				      <img src={pic11} alt="..."/>
				      <div className="caption">
				      	<h6 className="shipment">Free Shipping</h6>
				        <h3>Heat-Navy T-Shirt</h3>
				        <p>-----</p>
				        <p style={{color: 'grey'}}>$<span style={{color: 'black',fontSize: '25px'}}>31</span>.00</p>
				        <p><a href="#" className="btn btn-primary cartbutton" role="button">Add to cart</a></p>
				      </div>
				    </div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
}

export default Body;
