import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './styles.css'
import { data} from '../../../dummyData.js'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={data} title='Sales Analytics'  grid  />
            <div className="homeWidgets">
                <WidgetSm /> 
                <WidgetLg />
            </div>
        </div>
    )
}
