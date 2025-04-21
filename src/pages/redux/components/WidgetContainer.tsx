import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { widgetActions } from '../../../store/redux'
import _ from 'lodash';
import Widget from './Widget'

const WidgetContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(widgetActions.updateWidget());
    }, 100);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <div className="w-full grid grid-cols-10 gap-8 !p-4">
    {_.range(0, 1000).map((_, index) => (
      <Widget key={index} />
    ))}
  </div>
}

export default WidgetContainer