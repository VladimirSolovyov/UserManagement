import React from 'react'

interface ThemeSwitchProps {
	theme: string
	toggleTheme: () => void
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, toggleTheme }) => {
	return (
		<div className='flex items-center'>
			<label className='relative inline-flex items-center cursor-pointer'>
				<input
					type='checkbox'
					className='sr-only'
					checked={theme === 'dark'}
					onChange={toggleTheme}
				/>
				<div className='w-11 h-5 bg-gray-300 rounded-full dark:bg-gray-700 peer'>
					<div
						className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
							theme === 'dark' ? 'translate-x-6' : ''
						}`}
					></div>
				</div>
			</label>
			<span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'></span>
		</div>
	)
}

export default ThemeSwitch
