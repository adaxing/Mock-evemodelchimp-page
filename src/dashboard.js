import React, {Component} from 'react';
import Navbar from './navbar';

export default class Dashboard extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="dashboard-page">
				<Navbar />
				<div className='container' style={{background: 'white'}}>
					<div className='row'>
						<div className="col-md-12">
							<h1>Sample Project <i className="icon ion-md-trash"></i></h1>
						</div>
						<div className="col-md-6">
							<p>Get a sense of the details captured by ModelChimp</p>
						</div>
						<div className="col-md-6 text-right">
							<button>Team 1</button>  {/* team component */}
						</div>
						<div className="col-md-12 text-left menu"> 
							<hr/>
							<button>Compare</button>  {/* compare component */}
							<button>EvaluationOverview</button> {/* overview component */}
							<button>Add Member</button> {/* add member component */}
							<hr/>
						</div>
						<div className="col-md-12">
							{/* search component */}
							<label value="Search">Search: 
								<input type="search"/>
							</label>
							{/*	table component */}
							<table className="table">
								<thead>
								<tr>
								  <th scope="col">SI No</th>
								  <th scope="col">Name</th>
								  <th scope="col">Model Type</th>
								  <th scope="col">Submitted On</th>
								  <th scope="col">Submitted By</th>
								  <th scope="col">Comments</th>
								</tr>
								</thead>
								<tbody>
								<tr>
								  <th scope="row">1</th>
								  <td><a href="#">Experiment 3</a></td>
								  <td>RandomForestClassifier</td>
								  <td>31st Oct 2018 22:27:52</td>
								  <td>ada</td>
								  <td>0 <i className="far fa-comment"></i></td>
								</tr>
								<tr>
								  <th scope="row">2</th>
								  <td><a href="#">Experiment 2</a></td>
								  <td>LogisticRegression</td>
								  <td>31st Oct 2018 22:27:52</td>
								  <td>ada</td>
								  <td>0 <i className="far fa-comment"></i></td>
								</tr>
								<tr>
								  <th scope="row">3</th>
								  <td><a href="#">Experiment 3</a></td>
								  <td>LogisticRegression</td>
								  <td>31st Oct 2018 22:27:52</td>
								  <td>ada</td>
								  <td>0 <i className="far fa-comment"></i></td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>					
			</div>
		)
	}
}