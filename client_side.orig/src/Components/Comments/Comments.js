import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Comments.module.css';
import Comment from './Comment';
class Comments extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comments: []
    }
  }
  
  componentDidMount() {
    this.props.setUserNickname('comments', this.props.match.params.id);
    
  }
  render() {
    return (
      <div className={css.intro}>
        <PersonalRoomHeader
          user={this.props.userNickname}
          id={this.props.match.params.id}
        />
        <div className={css.comments_container}>
          <div className={`${css.icon} ${css.left}`}>
            <i className='fas fa-comments'></i>
          </div>
          <div className={`${css.icon} ${css.right}`}>
            <i className='fas fa-comments'></i>
          </div>
          <div className={`${css.entry_message} ${css.modification}`}>
            Looks like you haven't got any comments. Go to <span>friends</span>{' '}
            section, fing some good friends, and we sure they will share their
            thoughts about your diary
          </div>
          <Comment
            image='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
            nickname='Alex'
            date={new Date()}
            content='My comment'
          />
          <Comment
            image='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
            nickname='Alex'
            date={new Date()}
            content='My comment'
          />
          <Comment
            image='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
            nickname='Alex'
            date={new Date()}
            content='My comment'
          />
          <Comment
            image='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
            nickname='Alex'
            date={new Date()}
            content='My comment'
          />
        </div>
      </div>
    );
  }
}

export default Comments;
