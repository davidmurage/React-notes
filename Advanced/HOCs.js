import React from 'react';

// HOCs 

const withLogging = (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            console.log('Component is mounted');
        }

        componentWillUnmount() {
            console.log('Component is unmounted');
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

// Define a simple component
const MyComponent = () => <div>Hello, World!</div>;

// Apply the higher-order component
const LoggedComponent = withLogging(MyComponent);

// Render the enhanced component
ReactDOM.render(<LoggedComponent />, document.getElementById('root'));