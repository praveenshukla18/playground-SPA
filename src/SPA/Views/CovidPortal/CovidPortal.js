import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Button from '@material-ui/core/Button';

import StateSelectDialog from './Components/StateSelectDialog';

const options =  {
    chart: {
        height: 800,
        type: 'bar'
    },
    title: {
        text: 'Covid cases summary by states'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        //valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    }
};

class CovidPortal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            chartOptions: options,
            openStateSelect: false
        }
    }

    componentDidMount(){
        this.getCaseSummary();
    }

    getCaseSummary = () => {
        fetch('https://blooming-dusk-79442.herokuapp.com/covidSummary/total/')
            .then(response => response.json())
            .then(caseSummary => this._onResponse(caseSummary));
    }

    _onResponse(caseSummary){
        this.setState({
            caseSummary: caseSummary
        });
        this._setStateList(caseSummary, true);
        this._updateChartOptions(caseSummary);
    }

    _setStateList(caseSummary, checked){
        let stateList = Object.keys(caseSummary).map(stateName => {
            return {
                name: stateName,
                checked: checked
            };
        });
        this.setState({
            stateList: stateList
        });
    }

    _updateChartOptions(caseSummary){
        this.setState({
            chartOptions: this._getChartOptions(caseSummary)
        });
    }

    _getChartOptions(caseSummary){
        let states = this.state.stateList.filter(state => state.checked).map(state => state.name);
        return {
            xAxis: {
                categories: states
            },
            series: this._createSeriesData(caseSummary, states)
        };
    }

    _createSeriesData(caseSummary, states){
        let series = {
            active: [],
            deceased: [],
            recovered: [],
            confirmed: [],
        };
        states.forEach(key => {
            series.active.push(caseSummary[key].active);
            series.deceased.push(caseSummary[key].deceased);
            series.recovered.push(caseSummary[key].recovered);
            series.confirmed.push(caseSummary[key].confirmed);
        });

        return [
            {
                name: "Active",
                data: series.active
            },
            {
                name: 'Confirmed',
                data: series.confirmed
            },
            {
                name: 'Deceased',
                data: series.deceased
            },
            {
                name: 'Recovered',
                data: series.recovered
            }
        ];
    }

    _getStateListFromSummaryData(caseSummary){
        return Object.keys(caseSummary).map(stateName => {
            return {
                name: stateName,
                checked: false
            };
        });
    }

    openStateSelectDialog = () => {
        this.setState({
            openStateSelect: true
        });
    }

    updateSeletecStates(selectedStates){
        this.setState({
            stateList: selectedStates,
            openStateSelect: false
        });
        this._updateChartOptions(this.state.caseSummary);
    }

    afterChartCreated(chart){
        this.chart = chart;
    }

    render(){
        return (
            <div className="case-summary">
                <div className="case-summary-options">
                    <Button variant="outlined" color="primary" onClick={this.openStateSelectDialog}>
                        Select states
                    </Button>
                    <StateSelectDialog 
                        open={this.state.openStateSelect}
                        stateList={this.state.stateList}
                        onDone={this.updateSeletecStates.bind(this)}
                    />
                </div>
                <div className="chart-container">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={this.state.chartOptions}
                        updateArgs={[true, true, true]}
                        callback={this.afterChartCreated}
                    />
                </div>
            </div>
        );
    }
}

export {CovidPortal};
export default CovidPortal;