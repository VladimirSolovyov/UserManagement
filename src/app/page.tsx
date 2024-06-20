'use client'

import Card from '@/components/Card'
import Listbox from '@/components/Listbox'
import ThemeSwitch from '@/components/ThemeSwitch'
import React, { useEffect, useState } from 'react'

interface User {
	id: number
	name: string
	email: string
	phone: string
}

const Home: React.FC = () => {
	const [users, setUsers] = useState<User[]>([])
	const [selectedUser, setSelectedUser] = useState<User | null>(null)
	const [theme, setTheme] = useState<string>('light')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				setUsers(data)
				setSelectedUser(data[0])
			})
	}, [])

	const handleRemoveUser = (id: number) => {
		const newUsers = users.filter(user => user.id !== id)
		setUsers(newUsers)
		if (selectedUser && selectedUser.id === id) {
			setSelectedUser(newUsers[0] || null)
		}
	}

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	return (
		<div
			className={`min-h-screen ${
				theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
			}`}
		>
			<header className='p-4 flex justify-between items-center shadow-md'>
				<h1 className='text-2xl'>User Management</h1>
				<ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
			</header>
			<main className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
				<Listbox users={users} onRemoveUser={handleRemoveUser} />
				<Card user={selectedUser} onRemove={handleRemoveUser} />
			</main>
		</div>
	)
}

export default Home
