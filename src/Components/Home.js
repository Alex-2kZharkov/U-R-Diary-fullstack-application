import React, { Component } from 'react';
import st from './Home.module.css';
import Autenticattion from './Autenticattion';
import Reason from './Reason';

class Home extends Component {
  render() {
    return (
      <div>
        <div className={st.App}>
          <div className={st.App_intro}>
            <div className={st.autenticate}>
              <button>
                Login <i class='fas fa-laptop-house'></i>
              </button>
            </div>
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
                  content='Writing a journal is a great way to unleash your creativity. Everyone has the potential to be creative, just that most of us haven’t discovered it yet. Your journal is the best place to start exploring your inner creativity.'
                />
                <Reason
                  img='https://iranterritory.files.wordpress.com/2016/04/1913623.jpg'
                  title='Flexibility'
                  content={
                    "The primary benefit of electronic diaries allows users to go back and change information, update entries or make additional notes at a later time. So throw away eraser and correctional pen, you woun't need them anytime soon"
                  }
                />
                <Reason
                  img='https://thumb.mp-farm.com/1918171/preview.jpg'
                  title='Access'
                  content={
                    "There is no need to lock or hide diary. Only you can access it, 24/7, as long as you have stable internet connection. In taxi and car, at mall queu, whatever. U'R Diary is your best friend"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
