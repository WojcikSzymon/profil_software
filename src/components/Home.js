import React, { Component } from 'react';
import fetchData from '../helpers/fetchData';
import transformData from '../helpers/transformData';
import BestArticleTitle from './BestArticleTitle';
import List from './List';
import JSONPreview from './JSONPreview';

class Home extends Component {
    state = {
        results: {},
        filteredResults: {},
        label: 'Results',
        loading: true,
    };

    componentDidMount() {
        fetchData()
            .then((data) => {
                const results = transformData(data);
                this.setState({
                    results,
                    filteredResults: {
                        ...results,
                        posts: [
                            ...results.posts,
                        ],
                    },
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    setFilter = ({
        getData,
        label,
    }) => {
        this.setState(({
            results,
        }) => ({
            filteredResults: getData(results),
            label: label,
        }));
    };

    render() {
        const {
            state: {
                results,
                filteredResults,
                label,
                loading,
            },
            setFilter,
        } = this;
        return (
            <div className="app">
                {
                    loading
                        ? 'Loading data...'
                        : (
                            <div>
                                <div>
                                    <BestArticleTitle data={results} />
                                    <List
                                        filteredResults={filteredResults}
                                        label={label}
                                        setFilter={setFilter}
                                    />
                                </div>
                                <JSONPreview data={filteredResults} />
                            </div>
                        )
                }
            </div>
        );
    }
};

export default Home;
