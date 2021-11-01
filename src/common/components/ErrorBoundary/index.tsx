import * as React from 'react'

type ErrorProp = {
    errorprop: string
}
interface StateProp {
    error: boolean
}

interface PropsType {
    error: boolean
}
export default class Index extends React.Component<{}, StateProp> {
    state: StateProp = {
        error: false
    }
    getDerivedStateFromError(error){
        this.setState({error: true})
    }
    componentDidCatch(error){
        console.log(error);
    }
    render() {
        if(!this.state.error)
        return (
            <>
                {this.props.children}
            </>
        )
        else return(
            <>
                Error occured
            </>
        )
    }
}
