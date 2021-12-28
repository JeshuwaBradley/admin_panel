import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './styles.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} dataKey='Active User' title='Sales Analytics'  grid  />
            <div className="homeWidgets">
                <WidgetSm /> 
                <WidgetLg />
            </div>
        </div>
    )
}
