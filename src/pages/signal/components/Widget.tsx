import React, { useRef } from 'react'
import { widgetSignal } from '../../../store/signal'
import { effect } from '@preact/signals-react';

const Widget: React.FC = () => {
    const barRef = useRef<HTMLDivElement>(null)
    const valueRef = useRef<HTMLSpanElement>(null)
    console.log("Render Widget")

    effect(() => {
        const value = widgetSignal.value
        if (barRef.current) {
            barRef.current.style.width = `${value}%`
        }
        if (valueRef.current) {
            valueRef.current.textContent = `${value}%`
        }
    })

    return <div className="flex gap-4 w-full h-fit shadow shadow-red-600">
        <div className="w-full bg-slate-600">
            <div
                ref={barRef}
                className="h-full bg-amber-400"
                style={{ width: '0%' }}
            ></div>
        </div>

        <span ref={valueRef} className="text-center px-2">0</span>
    </div>
}

export default Widget