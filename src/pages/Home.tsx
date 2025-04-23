import React from 'react'
import { Link } from 'react-router-dom'
import Screenshot from '../assets/settings_screenshot.webp'
import GithubIcon from '../assets/github.svg'

const Home: React.FC = () => {
    return <div className="flex justify-center items-center h-screen bg-slate-950 text-white">

        <a href='https://github.com/ChiragChrg/Signals-vs-Redux' target='_blank' className="absolute top-5 right-5">
            <img src={GithubIcon} alt="Settings Screenshot" className='w-10' />
        </a>

        <div className="w-full flex flex-col items-center gap-20">
            <h1 className='text-6xl font-black'>Signals vs Redux</h1>

            <div className="flex justify-between items-center gap-8">
                <Link to="/signal" className='bg-slate-700 w-[150px] h-12 flex justify-center items-center rounded text-2xl'>Signals</Link>
                <Link to="/multi-signal" className='bg-slate-700 w-[150px] h-12 flex justify-center items-center rounded text-2xl'>Multi Signals</Link>
                <Link to="/redux" className='bg-slate-700 w-[150px] h-12 flex justify-center items-center rounded text-2xl'>Redux</Link>
                <Link to="/multi-redux" className='bg-slate-700 w-[150px] h-12 flex justify-center items-center rounded text-2xl'>Multi Redux</Link>
            </div>

            <p className="">Use <a className='text-blue-500 font-black' href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">React Developer Tools</a> browser extension to check and visualize re-render counts.</p>

            <div className="max-w-[600px] flex flex-col items-center gap-4 border border-amber-400 !p-4 rounded-lg">
                <div className="flex flex-col gap-2 leading-7">
                    <div className="whitespace-nowrap text-amber-400 font-black">Tip : </div>
                    <p>Open the browser Inspect window &#8680; Profiler Tab &#8680; ⚙️ Icon &#8680; General Tab &#8680; Enable the <span className="bg-slate-700 !px-1 rounded-sm">✅ Highlight updates when components render</span> checkbox to visualize live re-renders.</p>
                </div>

                <img src={Screenshot} alt="Settings Screenshot" className='' />
            </div>
        </div>
    </div >
}

export default Home