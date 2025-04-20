import React from 'react'
import { widgetSignal } from '../../../store/signal'

const Widget: React.FC = () => {
    return <div className="flex flex-col gap-4 w-full h-fit shadow shadow-red-600">
        <div className="w-full bg-slate-600">
            <div className="w-full h-10 bg-amber-400" style={{ width: `${widgetSignal.value}%` }}></div>
        </div>

        <span className="text-4xl text-center">{widgetSignal.value}</span>
    </div>
}

export default Widget