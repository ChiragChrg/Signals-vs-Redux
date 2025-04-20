import React, { useEffect } from 'react'
import CounterDisplay from './CounterDisplay';
import ThemeToggle from './ThemeButton';
import { setMousePositionSignal } from '../../../store/signal';
import MousePosition from './MousePosition';

const Header: React.FC = () => {

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePositionSignal(event.clientX, event.clientY)
        }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    })

    return (
        <header className="w-full flex justify-between items-center">
            <h1 className='text-6xl font-black'>Signal</h1>

            <CounterDisplay />
            <MousePosition />
            <ThemeToggle />
        </header>
    );
};
export default Header