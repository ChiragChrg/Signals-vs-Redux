import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { SEL_Widget } from '../../../store/redux';

const Widget: React.FC = () => {
    const barRef = useRef<HTMLDivElement>(null)
    const valueRef = useRef<HTMLSpanElement>(null)

    const value = useSelector(SEL_Widget); // This will cause re-render
    console.log("Render Widget")

    useEffect(() => {
        if (barRef.current) {
            barRef.current.style.width = `${value}%`
        }
        if (valueRef.current) {
            valueRef.current.textContent = `${value}%`
        }
    }, [value])

    return <div className="flex gap-1 w-full h-fit bg-slate-700">
        <div className="w-full bg-slate-500">
            <div
                ref={barRef}
                className="h-full bg-amber-400"
                style={{ width: `$0%` }}
            ></div>
        </div>

        <span ref={valueRef} className="w-[6ch] text-white text-center">0</span>
    </div>
}

export default Widget