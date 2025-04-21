import React, { useEffect } from 'react'
import CounterDisplay from './CounterDisplay';
import ThemeToggle from './ThemeButton';
import { setMousePositionSignal } from '../../../store/signal';
import MousePosition from './MousePosition';
import { Link } from 'react-router-dom';

const ThemeAndLink = () => {
    return (
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/" className='bg-slate-700 w-[100px] h-12 flex justify-center items-center rounded'>Home</Link>
        </div>
    );
};

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

            <ThemeAndLink />
        </header>
    );
};
export default Header