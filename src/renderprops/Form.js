import React from 'react'

class FormComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        };
    }

    handleChange = (e) => {
        var id = e.target.id;
        this.setState({
            data: {
                ...this.state.data,
                [id]: e.target.value
            }
        });
    }

    render() {
        var { handleChange, state: { data } } = this;
        return this.props.render(data, handleChange);
    }
}

export default FormComponent
