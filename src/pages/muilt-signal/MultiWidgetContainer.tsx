import { computed } from '@preact/signals-react'
import React from 'react'
import MultiWidgets from './MultiWidgets';
import { createWidgets, intervalTime, widgetCount, WidgetsMap } from '../../store/signal/widgetSignal';

const MultiWidgetContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="border-t border-slate-400">
        <div className="w-full flex justify-between items-end">
            <p className='text-center !py-4'>{widgetCount} widgets are updated every {intervalTime}ms with Signals resulting in ZERO re-renders by directly painting the DOM (Bypass Virtual DOM Reconciliation)</p>

            <div className="flex gap-4 items-end">
                <label>
                    <p>Set Update Interval <span className='text-slate-400 text-sm'> (Default: 17ms = 60FPS)</span></p>

                    <input
                        type='number'
                        value={intervalTime.value}
                        onChange={(e) => intervalTime.value = parseInt(e.target.value) || 0}
                        className='w-[250px] h-10 text-center text-2xl font-bold bg-slate-800 text-white' />
                </label>

                <label>
                    <p>Set Widget Count <span className='text-slate-400 text-sm'> (Default: 100)</span></p>

                    <input
                        type='number'
                        value={widgetCount.value}
                        onChange={(e) => widgetCount.value = parseInt(e.target.value) || 0}
                        className='w-[250px] h-10 text-center text-2xl font-bold bg-slate-800 text-white' />
                </label>

                <button
                    onClick={() => createWidgets()}
                    className='w-[120px] h-10 text-center text-2xl font-bold bg-slate-600 text-white cursor-pointer'>
                    Update
                </button>
            </div>
        </div>

        {children}

    </div >
}

export default MultiWidgetContainer

export const WidgetList: React.FC = () => {
    const widgetList = computed(() => Array.from(WidgetsMap.value.keys()));

    return <div className="w-full grid grid-cols-6 lg:grid-cols-10 gap-8 !p-4">
        {widgetList.value.map((widget) => (<MultiWidgets key={widget} id={widget} />))}
    </div>
}