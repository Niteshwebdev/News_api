import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Update state to indicate error
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error UI here
      return <h1>Something went wrong.</h1>;
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
