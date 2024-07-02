import React, { Component } from 'react';
import axios from 'axios';
import '../components/Series.css';

export default class Series extends Component {
    state = {
        series: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/series')
            .then(res => {
                const series = res.data;
                this.setState({ series })
            })
    }

    render() {
        return (
            <div>
                {this.state.series.map((p, id )=>
                    <div className="CardSeries" key={id}>
                        <h3>{p.nome}</h3>
                        <p>{p.historia}</p>
                    </div>)}
            </div>
        );
    }
}