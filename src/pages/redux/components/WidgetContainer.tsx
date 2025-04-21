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

  return <div className="border-t border-slate-400">
    <p className='text-center !py-4'>1000 widgets are updated every 100ms with Redux which causes re-renders when accessing the updated state using useSelector() hook</p>
    <div className="w-full grid grid-cols-10 gap-8 !p-4">
      {_.range(0, 1000).map((_, index) => (
        <Widget key={index} />
      ))}
    </div>
  </div>
}

export default WidgetContainer