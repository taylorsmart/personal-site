'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        )
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-[color:var(--color-bg)]">
          <div className="surface-card surface-card-emphasis w-full max-w-md border-t-4 border-t-[color:var(--color-pop)]">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-[color:var(--color-ink)]">
                Something went wrong
              </h2>
              <p className="mb-6 text-[color:var(--color-muted)]">
                We apologize for the inconvenience. Please try refreshing the
                page.
              </p>
              <span className="button-primary-shell button-bubble-error">
                <button onClick={this.resetError} className="button-primary">
                  Try Again
                </button>
              </span>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
