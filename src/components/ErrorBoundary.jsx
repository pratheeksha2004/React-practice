import React,{Component} from 'react';
class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={hasError:false,error:null,errorInfo:null};

    }
    static getDerivedState(error){
        return {hasError:true};
    }
    componentDidCatch(error,errorInfo){
        console.error("errorboundary coughtg",error,errorInfo);
        this.setState({error:error,errorInfo:errorInfo});
    }
    render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return (
            <div>
              <h2>Something went wrong.</h2>
              <p>We're sorry, an error occurred in this part of the application.</p>
              {/* Optional: Display more details for debugging (in development) */}
              {/*
              process.env.NODE_ENV === 'development' && this.state.error && (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              )
              */}
              <button onClick={() => window.location.reload()}>Try Reloading</button>
            </div>
          );
        }
    
        // Normally, just render children
        return this.props.children;
      }
}
export default ErrorBoundary;