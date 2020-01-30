import React from 'react'
import {connect} from 'react-redux'
import {FetchPost} from '../actions'

class PostList extends React.Component{

 componentDidMount()
 {
     this.props.FetchPost()

 }

render(){
    return(
        <div>
            PostList
            </div>
    )
}

}
export default connect(null,{FetchPost}) (PostList)