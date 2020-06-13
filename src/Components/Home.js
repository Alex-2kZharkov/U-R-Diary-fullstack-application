import React, { Component } from 'react';
import st from './Home.module.css';
import Autenticattion from './Autenticattion';
import Reason from './Reason';
import TransitionButton from './TransitionButton';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAutenFormOpen: false,
    };
  }
  showAutenForm = () => {
    this.setState({ isAutenFormOpen: true });
  };
  hideAutenForm = () => {
    this.setState({ isAutenFormOpen: false });
  };

  render() {
    let activeComponent;
    if (this.state.isAutenFormOpen) {
      activeComponent = <Autenticattion act={this.hideAutenForm} />;
    } else {
      activeComponent = (
        <div className={st.wrapper}>
          <TransitionButton
            act={this.showAutenForm}
            label='Login'
            icon='fas fa-laptop-house'
          />
          <div className={st.title}>
            <i className={`${st.logos} fas fa-book`}></i>
            <i className={`${st.logos} fas fa-pen-alt`}></i>
            <h1>
              Electronic Diary <br></br> <span>U'R Diary</span>
            </h1>
          </div>

          <div className={st.about_product}>
            <h2 className={`${st.write_n_share} ${st.write}`}>
              A place to write and share
            </h2>
            <h2 className={`${st.just_write} ${st.write}`}>Or just write</h2>
            <h3 className={st.reasons_title}>
              There are a million reasons why you should try it
            </h3>
            <div className={st.reasons}>
              <Reason
                img='https://blog.aboutmybrain.com/hs-fs/hubfs/New_Blog_Images/hero-images/The-Importance-Of-Imagination.jpg?width=750&name=The-Importance-Of-Imagination.jpg'
                title='Emotions'
                content='One of the ways to deal with any overwhelming emotion is to find a healthy way to express yourself. This makes a diary a helpful tool in managing your mental health'
              />
              <Reason
                img='https://miradornacional.files.wordpress.com/2016/11/meditar-quiero-ser-feliz-como-aprender-a-meditar-pasos-y-tc3a9cnicas-de-meditacion-guiada-para-principiantes.jpg?w=640'
                title='Healthy lifestyle'
                content='Keep in mind that journaling is just one aspect of a healthy lifestyle for better managing stress, anxiety, and mental health conditions'
              />
              <Reason
                img='https://iranterritory.files.wordpress.com/2016/04/1913623.jpg'
                title='Nature protection'
                content="By using this electronic diary you guarantee that at least one plant woun't suffer due to human consumption"
              />
              <Reason
                img='https://www.casiola.com/wp-content/uploads/2019/06/worldofanimation.jpg'
                title=' Inspire creativity'
                content='Writing a journal is a great way to unleash your creativity. Everyone has the potential to be creative, just that most of us haven’t discovered it yet. Your diary is the best place to start exploring your inner creativity.'
              />
              <Reason
                img='https://junkmailimages.blob.core.windows.net/large/1a7e640c74ab4e7b81a0268bb53901d3.jpg'
                title='Flexibility'
                content={
                  "The primary benefit of electronic diaries allows users to go back and change information, update entries or make additional notes at a later time. So throw away eraser and correctional pen, you woun't need them anytime soon"
                }
              />
              <Reason
                img='https://img.pixers.pics/pho_wat(s3:700/FO/24/37/95/81/700_FO24379581_710e273e09648f86673b334f33830dda.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/fototapeter-spion.jpg.jpg'
                title='Access'
                content={
                  "There is no need to lock or hide diary. Only you can access it, 24/7, as long as you have stable internet connection. In taxi and car, at mall queu, whatever. U'R Diary is your best friend"
                }
              />
            </div>
          </div>

          <div className={st.footer}>
            <div className={st.copyright}>
              <div className={st.copyright_product}>
                <i className={`far fa-copyright ${st.copyright_logo}`}> </i>
                <span> 2020 </span>
                <span className={st.copyright_product_name}>U'R Diary</span>
              </div>
              <div className={st.developer}>
                Developed by
                <span className={st.developer_name}> Alex 2kZharkov</span>
              </div>
            </div>
            <div className={st.social_links}>
              <a
                href='https://github.com/Alex-2kZharkov'
                className={st.social_links_logo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fab fa-github-alt'></i>
              </a>
              <a
                href='https://www.instagram.com/aleksis.zharkov/'
                className={st.social_links_logo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'></i>
              </a>

              <a
                href='https://twitter.com/DeanWin12789068'
                className={st.social_links_logo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='https://vk.com/s.zharkov2015'
                className={st.social_links_logo}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-vk'></i>
              </a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={st.App}>
          <main className={st.App_intro}>{activeComponent}</main>
        </div>
      </div>
    );
  }
}

export default Home;
