import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    return <div className="flex justify-center items-center h-screen bg-slate-950 text-white">
        <div className="w-full max-w-[500px] flex flex-col items-center gap-8">
            <h1 className='text-2xl font-black'>Redux vs Signals</h1>

            <div className="flex justify-between items-center gap-8">
                <Link to="/redux" className='bg-slate-700 w-[100px] h-10 flex justify-center items-center rounded'>Redux</Link>
                <Link to="/signal" className='bg-slate-700 w-[100px] h-10 flex justify-center items-center rounded'>Signals</Link>
            </div>
        </div>
    </div>
}

export default Home