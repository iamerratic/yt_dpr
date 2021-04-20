import React from 'react';

function withForm(Component) {

    return class FormComponent extends React.Component {

        constructor(props) {
            super(props);
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
            return <Component change={this.handleChange} {...this.state} />;
        }
    }
}



export default withForm;