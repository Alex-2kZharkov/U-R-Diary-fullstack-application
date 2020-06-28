import React, { Component } from 'react'
import PersonalRoomHeader from './PersonalRoomHeader'

export class Friends extends Component {
    
    componentDidMount() {
        this.props.setUserNickname(this.props.match.params.id);
      }
    render() {
        return (
            <div>
            <PersonalRoomHeader user={this.props.userNickname} id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default Friends
