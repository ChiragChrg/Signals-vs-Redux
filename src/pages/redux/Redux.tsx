import React from 'react'
import ReduxProvider from '../../providers/ReduxProvider'
import Header from './components/Header'
import WidgetContainer from './components/WidgetContainer'

const Redux: React.FC = () => {
    return (
        <ReduxProvider>
            <div className="main_component w-full h-screen !p-10 flex flex-col gap-8">
                <Header />
                <WidgetContainer />
            </div>
        </ReduxProvider>
    )
}

export default Redux