import React from 'react'
import s from "./Comments.module.css";
import ava from '../.././img/avatar.png';
import ava1 from '../.././img/avatar.png';
import time from '../.././img/icons/time.png';
import edit from '../.././img/icons/edit.png';
import del from '../.././img/icons/delete.png';
import left from '../.././img/icons/left.png';
import right from '../.././img/icons/right.png';
import del1 from '../.././img/icons/delete.png';
import ava3 from '../.././img/avatar3.png';
import right2 from '../.././img/icons/right.png';
import time2 from '../.././img/icons/time.png';
import ava4 from '../.././img/avatar4.png';
import right3 from '../.././img/icons/right.png';
import time3 from '../.././img/icons/time.png';
import ava5 from '../.././img/avatar6.png';
import right4 from '../.././img/icons/right.png';
import time4 from '../.././img/icons/time.png';
import ava6 from '../.././img/avatar.png';
import time5 from '../.././img/icons/time.png';
import edit2 from '../.././img/icons/edit.png';
import del2 from '../.././img/icons/delete.png';
import left2 from '../.././img/icons/left.png';
import ava7 from '../.././img/avatar6.png';
import time6 from '../.././img/icons/time.png';
import time7 from '../.././img/icons/time.png';
import ava8 from '../.././img/avatar4.png';
import time8 from '../.././img/icons/time.png';
import left3 from '../.././img/icons/left.png';
import ava9 from '../.././img/avatar6.png';
import time9 from '../.././img/icons/time.png';
import left4 from '../.././img/icons/left.png';



const Comments = () => {
  return (
    <div className={s.comments}>
        <div className={s.container}>
          <h4 className={s.title}>Leave comment:</h4>
          <div className={s.first}>
            <div className={s.item}>
              <img src={ava} alt="avatar" className={s.ava}/>
            </div>
            <div className={s.txt}>
              <textarea name placeholder="You message" rows="4" cols="81"></textarea>
            </div>
          </div>
          <div className={s.btn0}>
            <button className={s.btn}>
              <a href="#" className={s.btn1}>Send</a>
            </button>
          </div>
          <div className={s.second}>
            <div className={s.inf}>
              <div className={s.item}>
                <img src={ava1} alt="" className={s.ava}/>
              </div>
              <div className={s.post}>
                <div className={s.info}>
                  <h5 className={s.subtitle}>Kurt Thompson</h5>
                  <img src={time} alt="" className={s.time}/>
                  <p className={s.text}>2019-04-14 at  23:57</p>
                </div>
                <p className={s.quest}>If not everyone makes money blogging, why is blogging so popular?</p>
                <div className={s.details}>

                  <div className={s.edit}>
                    <img src={edit} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Edit</a>
                  </div>
                  <div className={s.edit}>
                    <img src={del} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Delete</a>
                  </div>
                  <div className={s.edit}>
                    <img src={left} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.third}>
            <div className={s.item}>
              <div className={s.answer}>
                <img src={right} alt="" className={s.icon}/>
                <a href="#" className={s._ans}>Kurt Thompson</a>
              </div>
              <div className={s.answer}>
                <img src={del1} alt="" className={s.icon}/>
                <a href="#" className={s.ans}> Cancel</a>
              </div>
            </div>
            <div className={s.txt}>
              <textarea name="message" rows="4" cols="80"></textarea>
            </div>
            <div className={s.btn0}>
              <button className={s.btn}>
                <a href="#" className={s.btn1}>Send</a>
              </button>
            </div>
          </div>
          <div className={s.fourth}>
            <div className={s.item}>
              <img src={ava3} alt="" className={s.ava4}/>
            </div>
            <div className={s.post}>
              <div className={s.info}>
                <h5 className={s.subtitle}>Sarah Fleming</h5>
                <img src={right2} alt="" className={s.icon}/>
                <a href="#" className={s.ans}> Kurt Thompson </a>
                <img src={time2} alt="" className={s.time}/>
                <p className={s.text}> 2019-04-14 at  23:57 </p>
              </div>
              <p className={s.quest}>A WordPress blog will stand out!</p>
            </div>
          </div>
          <div className={s.fifth}>
            <div className={s.item}>
              <img src={ava4} alt="" className={s.ava4}/>
            </div>
            <div className={s.post}>
              <div className={s.info}>
                <h5 className={s.subtitle}>Purificacion Rojas</h5>
                <img src={right3} alt="" className={s.icon}/>
                <a href="#" className={s.ans}> Kurt Thompson </a>
                <img src={time3} alt="" className={s.time}/>
                <p className={s.text}> 2019-04-14 at  23:58 </p>
              </div>
              <p className={s.quest}>The possibilities of designing a site with WordPress are immense indeed.</p>
            </div>
          </div>
          <div className={s.sixth}>
            <div className={s.item}>
              <img src={ava5} alt="" className={s.ava4}/>
            </div>
            <div className={s.post}>
              <div className={s.info}>
                <h5 className={s.subtitle}>Phillip Lynch</h5>
                <img src={right4} alt="" className={s.icon}/>
                <a href="#" className={s.ans}> Kurt Thompson </a>
                <img src={time4} alt="" className={s.time}/>
                <p className={s.text}> 2019-04-14 at  23:59 </p>
              </div>
              <p className={s.quest}>Anyone can blog but it takes a WordPress user to be awesome!</p>
            </div>
          </div>
          <div className={s.seventh}>
            <div className={s.inf}>
              <div className={s.item}>
                <img src={ava6} alt="" className={s.ava}/>
              </div>
              <div className={s.post}>
                <div className={s.info}>
                  <h5 className={s.subtitle}>Kurt Thompson</h5>
                  <img src={time5} alt="" className={s.time}/>
                  <p className={s.text}>2019-04-14 at  23:57</p>
                </div>
                <p className={s.quest}>Each day I love you more my blog Today more than yesterday and less than tomorrow...</p>
                <div className={s.details}>

                  <div className={s.edit}>
                    <img src={edit2} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Edit</a>
                  </div>
                  <div className={s.edit}>
                    <img src={del2} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Delete</a>
                  </div>
                  <div className={s.edit}>
                    <img src={left2} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.eighth}>
            <div className={s.item}>
              <img src={ava7} alt="" className={s.ava4}/>
            </div>
            <div className={s.post}>
              <div className={s.info}>
                <h5 className={s.subtitle}>Phillip Lynch</h5>
                <img src={time6} alt="" className={s.icon}/>
                <a href="#" className={s.ans}> Kurt Thompson </a>
                <img src={time7} alt="" className={s.time}/>
                <p className={s.text}> 2019-04-14 at  23:59 </p>
              </div>
              <p className={s.quest}>claim there ain’t another software for blogging As great as WordPress.</p>
            </div>
          </div>
          <div className={s.ninth}>
            <div className={s.inf}>
              <div className={s.item}>
                <img src={ava8} alt="" className={s.ava}/>
              </div>
              <div className={s.post}>
                <div className={s.info}>
                  <h5 className={s.subtitle}>Purificacion Rojas</h5>
                  <img src={time8} alt="" className={s.time}/>
                  <p className={s.text}>2019-04-15 at  00:57</p>
                </div>
                <p className={s.quest}>WordPress is not responsible for people falling in love with blogging!</p>
                <div className={s.details}>
                  <div className={s.edit}>
                    <img src={left3} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.tenth}>
            <div className={s.inf}>
              <div className={s.item}>
                <img src={ava9} alt="" className={s.ava}/>
              </div>
              <div className={s.post}>
                <div className={s.info}>
                  <h5 className={s.subtitle}>Phillip Lynch</h5>
                  <img src={time9} alt="" className={s.time}/>
                  <p className={s.text}>2019-04-14 at  23:57</p>
                </div>
                <p className={s.quest}>It is hard to defeat WordPress as a blogging tool.</p>
                <div className={s.details}>


                  <div className={s.edit}>
                    <img src={left4} alt="" className={s.icon}/>
                    <a href="#" className={s.ed}>Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.comments}>
            <div className={s.load}></div>
            <div className={s.comment}>
              <a href="#" className={s.btn2}>load more comments</a>
            </div>
            <div className={s.load}></div>
          </div>
        </div>
      </div>
  )
}

export default Comments;
