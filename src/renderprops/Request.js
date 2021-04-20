import React from 'react';

import Loader from '../components/Loader/Loader.component';

class Request extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: []
        };
    }

    componentDidMount() {
        this.getData(this.props.url);
    }

    getData = (url) => {
        this.setState({
            ...this.state,
            isLoading: true
        });
        setTimeout(() => {
            fetch(this.props.url)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        isLoading: false,
                        data: data.slice(0, 5)
                    });
                });
        }, 500)
    }

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            this.getData(this.props.url);
        }
    }


    render() {
        var { render } = this.props;

        if (this.state.isLoading) return <Loader />

        return render(this.state.data);
    }
}

export default Request;
