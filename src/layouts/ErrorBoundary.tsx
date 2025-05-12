import { Component, type ReactNode, type ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className='bg-white shadow-lg rounded-lg p-6 max-w-md w-full'>
              <h2 className='text-2xl font-bold text-red-600 mb-4'>Something went wrong</h2>
              <p className='text-gray-700 mb-4'>The application encountered an unexpected error.</p>
              <pre className='bg-gray-100 p-3 rounded text-sm overflow-auto max-h-60'>
                {this.state.error?.toString()}
              </pre>
              <button
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                onClick={() => window.location.reload()}
              >
                Reload page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
