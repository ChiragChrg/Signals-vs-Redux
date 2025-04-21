import React, { useRef } from 'react'
import { widgetSignal } from '../../../store/signal'
import { effect } from '@preact/signals-react';

const Widget: React.FC = () => {
    const barRef = useRef<HTMLDivElement>(null)
    const valueRef = useRef<HTMLSpanElement>(null)
    console.log("Render Widget")

    effect(() => {
        const value = widgetSignal.value

        // console.log("Widget effect", value)
        if (barRef.current) {
            barRef.current.style.width = `${value}%`
        }
        if (valueRef.current) {
            valueRef.current.textContent = `${value}%`
        }
    })

    return <div className="flex gap-1 w-full h-fit bg-slate-700">
        <div className="w-full bg-slate-500">
            <div
                ref={barRef}
                className="h-full bg-amber-400"
                style={{ width: '0%' }}
            ></div>
        </div>

        <span ref={valueRef} className="w-[6ch] text-white text-center">0</span>
    </div>
}

export default Widget