import React, { useEffect } from 'react'
import CounterDisplay from './CounterDisplay'
import ThemeToggle from './ThemeButton'
import { useDispatch } from 'react-redux'
import { mouseActions } from '../../../store/redux'
import MousePosition from './MousePosition'

const Header: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            dispatch(mouseActions.setMousePos({ x: event.clientX, y: event.clientY }))
        }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [dispatch])

    return (
        <header className="w-full flex justify-between items-center">
            <h1 className='text-6xl font-black'>Redux</h1>

            <CounterDisplay />
            <MousePosition />
            <ThemeToggle />
        </header>
    )
}

export default Header