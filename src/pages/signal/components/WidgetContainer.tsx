import React from 'react'
import Widget from './Widget'
import { updateWidget } from '../../../store/signal'
import { effect } from '@preact/signals-react';
import _ from 'lodash';

const WidgetContainer: React.FC = () => {
  effect(() => {
    const interval = setInterval(updateWidget, 100);
    return () => clearInterval(interval);
  });

  return <div className="border-t border-slate-400">
    <p className='text-center !py-4'>1000 widgets are updated every 100ms with Signals resulting in ZERO re-renders by directly painting the DOM using Refs</p>
    <div className="w-full grid grid-cols-10 gap-8 !p-4">
      {_.range(0, 1000).map((_, index) => (
        <Widget key={index} />
      ))}
    </div>
  </div>
}

export default WidgetContainer