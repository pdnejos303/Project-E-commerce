// src/components/common/ErrorBoundary.js
import React from 'react';

// ErrorBoundary ดักจับข้อผิดพลาดในลูกหลาน
// ErrorBoundary catches errors in child components

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // อัปเดต state ให้รู้ว่ามี error
    // Update state to know there's an error
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
    // สามารถเรียก API เพื่อแจ้งทีมพัฒนาได้ที่นี่
    // Could call an API to log error to a logging service
  }

  handleRefresh = () => {
    window.location.reload();
  }

  handleGoHome = () => {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h1>Oops! Something went wrong.</h1>
          <p>We’re sorry for the inconvenience. Please try one of the following options:</p>
          <div className="error-actions">
            <button onClick={this.handleRefresh}>Refresh Page</button>
            <button onClick={this.handleGoHome}>Go to Homepage</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
