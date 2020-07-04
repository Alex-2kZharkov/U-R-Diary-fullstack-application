import React, { Component } from 'react';
import PersonalRoomHeader from '../PersonalRoomHeader';
import css from './Comments.module.css';
import Comment from './Comment';
import MyComment from './MyComment';
import axios from 'axios';
class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideUsercomments: [],
      myComments: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/personalRoom/${this.props.match.params.id}/comments/my-comments`
      )
      .then((response) => {
        this.setState(
          {
            myComments: response.data,
          },
          () => console.log(this.state.myComments)
        );
      });
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
          {/* <div className={`${css.entry_message} ${css.modification}`}>
            Looks like you haven't got any comments. Go to <span>friends</span>{' '}
            section, fing some good friends, and we sure they will share their
            thoughts about your diary
          </div> */}
          <div className={`${css.entry_message} ${css.modification}`}>
            Uh, your friends left comments for you. Here they come!
          </div>
          <Comment
            image='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
            nickname='Alex'
            date={new Date()}
            content='My comment'
          />
          <MyComment
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
