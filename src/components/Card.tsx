import React from 'react'
import Avatar from 'react-avatar'

interface User {
	id: number
	name: string
	email: string
	phone: string
}

interface CardProps {
	user: User | null
	onRemove: (id: number) => void
}

const Card: React.FC<CardProps> = ({ user, onRemove }) => {
	if (!user) return null

	return (
		<div className='p-4 border rounded shadow-md'>
			<Avatar name={user.name} round={true} size='100' />
			<h2 className='text-xl font-bold'>{user.name}</h2>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<button
				onClick={() => onRemove(user.id)}
				className='mt-4 text-white bg-red-500 p-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
			>
				Remove
			</button>
		</div>
	)
}

export default Card
