import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" to="/expenses">Expenses</Link>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Hooks
								</a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to="/useeffect">UseEffect Hook</Link></li>
									<li><Link className="dropdown-item" to="/useparams/sushanta/patra">UseParams Hook</Link></li>
									<li><Link className="dropdown-item" to="/uselocation">UseLocation Hook</Link></li>
									<li><Link className="dropdown-item" to="/useref">UseRef Hook</Link></li>
									<li><Link className="dropdown-item" to="/usereducer">UseReducer Hook</Link></li>
									<li><Link className="dropdown-item" to="/usecontext">UseContext Hook</Link></li>

									<hr />
									<li><Link className="dropdown-item" to="/shortcoreva">Short Circuit Evalutaion</Link></li>


									<li><Link className="dropdown-item" to="/useeffect">UseEffect Hook</Link></li>
									<li><Link className="dropdown-item" to="/useeffect">UseEffect Hook</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Students
								</a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to="/student">Student Lists</Link></li>
									<li><Link className="dropdown-item" to="/studentadd">Student Add</Link></li>
									<li><Link className="dropdown-item" to="/useeffect">Student Edit</Link></li>

								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" to="/api">API Calling</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" to="/redux">React-Redux</Link>
							</li>
						</ul>

					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header