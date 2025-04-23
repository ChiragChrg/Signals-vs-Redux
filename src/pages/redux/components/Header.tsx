// import React, { useEffect } from 'react'
import CounterDisplay from './CounterDisplay'
import ThemeToggle from './ThemeButton'
// import { useDispatch } from 'react-redux'
// import { mouseActions } from '../../../store/redux'
// import MousePosition from './MousePosition'
import { Link } from 'react-router-dom'

type Props = {
    title?: string;
}

const ThemeAndLink = () => {
    return (
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/" className='bg-slate-700 w-[100px] h-12 flex justify-center items-center rounded'>Home</Link>
        </div>
    );
};

const Header: React.FC<Props> = ({ title = "Redux" }) => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     const handleMouseMove = (event: MouseEvent) => {
    //         dispatch(mouseActions.setMousePos({ x: event.clientX, y: event.clientY }))
    //     }
    //     window.addEventListener('mousemove', handleMouseMove)

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove)
    //     }
    // }, [dispatch])

    return (
        <header className="w-full flex justify-between items-center">
            <h1 className='text-6xl font-black'>{title}</h1>

            <CounterDisplay />
            {/* <MousePosition /> */}

            <ThemeAndLink />
        </header>
    )
}

export default Header