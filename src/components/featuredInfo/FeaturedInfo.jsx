import React from 'react'
import './styles.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className='featuredInfo'>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2
                    </span>
                    <span className="featuredMoneyRate">
                        +11.4
                        <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $5
                    </span>
                    <span className="featuredMoneyRate">
                        -10.9
                        <ArrowDownward  className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $1
                    </span>
                    <span className="featuredMoneyRate">
                        -9.5
                        <ArrowDownward  className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
        </div>
    )
}
