import React from 'react'

interface User {
	id: number
	name: string
}

interface ListboxProps {
	users: User[]
	onRemoveUser: (id: number) => void
}

const Listbox: React.FC<ListboxProps> = ({ users, onRemoveUser }) => {
	return (
		<div className='p-4'>
			<ul>
				{users.map(user => (
					<li
						key={user.id}
						className='flex justify-between items-center p-2 border-b'
					>
						<span>{user.name}</span>
						<button
							onClick={() => onRemoveUser(user.id)}
							className='text-red-500'
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Listbox
