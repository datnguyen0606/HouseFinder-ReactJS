import React, {Component} from 'react'

import {
  setLimitPrice
} from '../actions/search'

export default class PriceList extends Component {
  _onChange(e) {
    this.props.dispatch(setLimitPrice(
      this.props.label,
      parseInt(e.target.value)));
  }

  render() {
    return (
      <div className="col-sm-3">
        {this.props.label} Price
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-gbp"></i>
          </span>
          <select onChange={this._onChange.bind(this)} className="selectpicker form-control">
            <option value="">No {this.props.label}</option>
            <option value="100" data-condensed="100">£100</option>
            <option value="200" data-condensed="200">£200</option>
            <option value="300" data-condensed="300">£300</option>
            <option value="400" data-condensed="400">£400</option>
            <option value="500" data-condensed="500">£500</option>
            <option value="600" data-condensed="600">£600</option>
            <option value="700" data-condensed="700">£700</option>
            <option value="800" data-condensed="800">£800</option>
            <option value="900" data-condensed="900">£900</option>
            <option value="1000" data-condensed="1k">£1,000</option>
            <option value="1250" data-condensed="1.25k">£1,250</option>
            <option value="1500" data-condensed="1.5k">£1,500</option>
            <option value="1750" data-condensed="1.75k">£1,750</option>
            <option value="2000" data-condensed="2k">£2,000</option>
            <option value="2250" data-condensed="2.25k">£2,250</option>
            <option value="2500" data-condensed="2.5k">£2,500</option>
            <option value="2750" data-condensed="2.75k">£2,750</option>
            <option value="3000" data-condensed="3k">£3,000</option>
            <option value="3250" data-condensed="3.25k">£3,250</option>
            <option value="3500" data-condensed="3.5k">£3,500</option>
            <option value="3750" data-condensed="3.75k">£3,750</option>
            <option value="4000" data-condensed="4k">£4,000</option>
            <option value="4250" data-condensed="4.25k">£4,250</option>
            <option value="4500" data-condensed="4.5k">£4,500</option>
            <option value="4750" data-condensed="4.75k">£4,750</option>
            <option value="5000" data-condensed="5k">£5,000</option>
            <option value="5500" data-condensed="5.5k">£5,500</option>
            <option value="6000" data-condensed="6k">£6,000</option>
            <option value="6500" data-condensed="6.5k">£6,500</option>
            <option value="7000" data-condensed="7k">£7,000</option>
            <option value="7500" data-condensed="7.5k">£7,500</option>
            <option value="8000" data-condensed="8k">£8,000</option>
            <option value="8500" data-condensed="8.5k">£8,500</option>
            <option value="9000" data-condensed="9k">£9,000</option>
            <option value="9500" data-condensed="9.5k">£9,500</option>
            <option value="10000" data-condensed="10k">£10,000</option>
            <option value="20000" data-condensed="20k">£20,000</option>
            <option value="30000" data-condensed="30k">£30,000</option>
            <option value="40000" data-condensed="40k">£40,000</option>
            <option value="50000" data-condensed="50k">£50,000</option>
            <option value="60000" data-condensed="60k">£60,000</option>
            <option value="70000" data-condensed="70k">£70,000</option>
            <option value="80000" data-condensed="80k">£80,000</option>
            <option value="90000" data-condensed="90k">£90,000</option>
            <option value="100000" data-condensed="100k">£100,000</option>
            <option value="110000" data-condensed="110k">£110,000</option>
            <option value="120000" data-condensed="120k">£120,000</option>
            <option value="125000" data-condensed="125k">£125,000</option>
            <option value="130000" data-condensed="130k">£130,000</option>
            <option value="140000" data-condensed="140k">£140,000</option>
            <option value="150000" data-condensed="150k">£150,000</option>
            <option value="160000" data-condensed="160k">£160,000</option>
            <option value="170000" data-condensed="170k">£170,000</option>
            <option value="180000" data-condensed="180k">£180,000</option>
            <option value="190000" data-condensed="190k">£190,000</option>
            <option value="200000" data-condensed="200k">£200,000</option>
            <option value="210000" data-condensed="210k">£210,000</option>
            <option value="220000" data-condensed="220k">£220,000</option>
            <option value="230000" data-condensed="230k">£230,000</option>
            <option value="240000" data-condensed="240k">£240,000</option>
            <option value="250000" data-condensed="250k">£250,000</option>
            <option value="275000" data-condensed="275k">£275,000</option>
            <option value="300000" data-condensed="300k">£300,000</option>
            <option value="325000" data-condensed="325k">£325,000</option>
            <option value="350000" data-condensed="350k">£350,000</option>
            <option value="375000" data-condensed="375k">£375,000</option>
            <option value="400000" data-condensed="400k">£400,000</option>
            <option value="425000" data-condensed="425k">£425,000</option>
            <option value="450000" data-condensed="450k">£450,000</option>
            <option value="475000" data-condensed="475k">£475,000</option>
            <option value="500000" data-condensed="500k">£500,000</option>
            <option value="550000" data-condensed="550k">£550,000</option>
            <option value="600000" data-condensed="600k">£600,000</option>
            <option value="650000" data-condensed="650k">£650,000</option>
            <option value="700000" data-condensed="700k">£700,000</option>
            <option value="750000" data-condensed="750k">£750,000</option>
            <option value="800000" data-condensed="800k">£800,000</option>
            <option value="850000" data-condensed="850k">£850,000</option>
            <option value="900000" data-condensed="900k">£900,000</option>
            <option value="950000" data-condensed="950k">£950,000</option>
            <option value="1000000" data-condensed="1m">£1,000,000</option>
            <option value="1100000" data-condensed="1.1m">£1,100,000</option>
            <option value="1200000" data-condensed="1.2m">£1,200,000</option>
            <option value="1300000" data-condensed="1.3m">£1,300,000</option>
            <option value="1400000" data-condensed="1.4m">£1,400,000</option>
            <option value="1500000" data-condensed="1.5m">£1,500,000</option>
            <option value="1600000" data-condensed="1.6m">£1,600,000</option>
            <option value="1700000" data-condensed="1.7m">£1,700,000</option>
            <option value="1800000" data-condensed="1.8m">£1,800,000</option>
            <option value="1900000" data-condensed="1.9m">£1,900,000</option>
            <option value="2000000" data-condensed="2m">£2,000,000</option>
            <option value="2100000" data-condensed="2.1m">£2,100,000</option>
            <option value="2200000" data-condensed="2.2m">£2,200,000</option>
            <option value="2300000" data-condensed="2.3m">£2,300,000</option>
            <option value="2400000" data-condensed="2.4m">£2,400,000</option>
            <option value="2500000" data-condensed="2.5m">£2,500,000</option>
            <option value="2750000" data-condensed="2.75m">£2,750,000</option>
            <option value="3000000" data-condensed="3m">£3,000,000</option>
            <option value="3250000" data-condensed="3.25m">£3,250,000</option>
            <option value="3500000" data-condensed="3.5m">£3,500,000</option>
            <option value="3750000" data-condensed="3.75m">£3,750,000</option>
            <option value="4000000" data-condensed="4m">£4,000,000</option>
            <option value="4250000" data-condensed="4.25m">£4,250,000</option>
            <option value="4500000" data-condensed="4.5m">£4,500,000</option>
            <option value="4750000" data-condensed="4.75m">£4,750,000</option>
            <option value="5000000" data-condensed="5m">£5,000,000</option>
            <option value="5500000" data-condensed="5.5m">£5,500,000</option>
            <option value="6000000" data-condensed="6m">£6,000,000</option>
            <option value="6500000" data-condensed="6.5m">£6,500,000</option>
            <option value="7000000" data-condensed="7m">£7,000,000</option>
            <option value="7500000" data-condensed="7.5m">£7,500,000</option>
            <option value="8000000" data-condensed="8m">£8,000,000</option>
            <option value="8500000" data-condensed="8.5m">£8,500,000</option>
            <option value="9000000" data-condensed="9m">£9,000,000</option>
            <option value="9500000" data-condensed="9.5m">£9,500,000</option>
            <option value="10000000" data-condensed="10m">£10,000,000</option>
            <option value="12500000" data-condensed="12.5m">£12,500,000</option>
            <option value="15000000" data-condensed="15m">£15,000,000</option>
          </select>
        </div>
      </div>
    );
  }
}