import React from 'react'
import Img from 'gatsby-image'
import Title from '../Globals/Title.js'
export default class Menu extends React.Component {
	state = {
		items:this.props.items.edges,
		coffeeItems:this.props.items.edges
	}
	render() {

		if(this.state.items.length > 0){
			return (
				<div>
					<h1>munu item </h1>
				</div>
			)
		}
		else{
			return (
					<h1>munu item Not have </h1>
				
			)
		}
	}
}