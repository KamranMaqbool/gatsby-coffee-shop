import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
	return (
		<footer>
			<div className="footer py-3">
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
							<h3>All Rights Reserved &copy; {new Date().getFullYear()}</h3>
						</div>	
					</div>		
				</div>
			</div>
		</footer>
	)
}

Footer.propTypes = {

}

export default Footer
