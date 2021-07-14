import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios';

class Home extends Component {
	constructor(){
		super()
		this.state = {
			course_topic: []
		}
	}

	componentDidMount(){
		axios.get('/topics.json')
		.then( data =>{
			let res = []
			data.data.data.map( (data) =>{
					res.push({id: data.id, title: data.title, description: data.description, url: data.url, active: false})
					this.setState({course_topic: res})
			})
		})
		.catch(data =>{
			debugger
		})
	}
	handleVideoChange(item, event){
	event.preventDefault()
	let course_topic = [...this.state.course_topic]
	course_topic.map( data =>{
		data.active = false 
	})

	item.active = !item.active 

	course_topic[item.id - 1] = item
	this.setState({course_topic})
	}
	render (){
		return (
			<div>
				<Jumbotron />
				<Table handleVideoChange={this.handleVideoChange.bind(this)} course_topic={this.state.course_topic}/>
			</div>
		)
	}
}





export default Home