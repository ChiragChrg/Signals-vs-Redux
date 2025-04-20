import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { widgetActions } from '../../../store/redux'
import _ from 'lodash'
import Widget from './Widget'

const WidgetContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Math.floor(Math.random() * 100);
      dispatch(widgetActions.setValue(newValue))
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <div className="w-full grid grid-cols-10 gap-8 !p-4">
    {_.range(0, 60).map((_, index) => (
      <Widget key={index} />
    ))}
  </div>
}

export default WidgetContainer