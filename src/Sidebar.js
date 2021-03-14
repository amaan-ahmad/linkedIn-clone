import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'

function Sidebar() {
	// JSX function to render output based on given arguments without ceating a component.
	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'># </span>
			<p>{topic}</p>
		</div>
	)

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1504991893677-b93b8a6367a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80'
					alt=''
				/>
				<Avatar className='sidebar__avatar' />
				<h2>Mohak Sharma</h2>
				<h4>mohak327@gmail.com</h4>
			</div>

			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who Viewed You</p>
					<p className='sidebar__statNumber'>2,341</p>
				</div>

				<div className='sidebar__stat'>
					<p>Views on posts</p>
					<p className='sidebar__statNumber'>1,846</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('design')}
				{recentItem('softwareengineering')}
				{recentItem('opensource')}
			</div>
		</div>
	)
}

export default Sidebar
