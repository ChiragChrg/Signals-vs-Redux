import React, { useEffect } from 'react'
import _ from 'lodash'
import Widget from './Widget'
import { updateWidget } from '../../../store/signal'

const WidgetContainer: React.FC = () => {

  useEffect(() => {
    const interval = setInterval(updateWidget, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="w-full grid grid-cols-10 gap-8 !p-4">
    {_.range(0, 60).map((_, index) => (
      <Widget key={index} />
    ))}
  </div>
}

export default WidgetContainer