import React from 'react'
import { useSelector } from 'react-redux';
import { SEL_Widget } from '../../../store/redux';

const Widget: React.FC = () => {
    const value = useSelector(SEL_Widget);

    return <div className="flex flex-col gap-4 w-full h-fit shadow shadow-red-600">
        <div className="w-full bg-slate-600">
            <div className="w-full h-10 bg-amber-400" style={{ width: `${value}%` }}></div>
        </div>

        <span className="text-4xl text-white text-center">{value}</span>
    </div>
}

export default Widget