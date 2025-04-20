import React from 'react'
import Header from './components/Header'
import WidgetContainer from './components/WidgetContainer'

const Signal: React.FC = () => {
    return <div className="main_component w-full h-screen !p-10 flex flex-col gap-8">
        <Header />
        <WidgetContainer />
    </div>
}

export default Signal