import React, { Component } from 'react'

export class ClassRef extends Component {
    constructor(props){
        this.myRef=React.createRef()
        }
        componentDidMount(){
            this.myRef.current.focus()
        }
    render() {
        return (
            <div>
                <input ref={this.myRef}/>
            </div>
        )
    }
}

export default ClassRef
