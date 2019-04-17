import React from 'react'
import s from "./Post.module.css";
import img from '../.././img/Star.png';
import img0 from '../.././img/2_1.png';
import img1 from '../.././img/icons/person.png';
import img2 from '../.././img/icons/time.png';
import img3 from '../.././img/icons/message.png';
import Comments from '.././Comments/Comments.jsx'

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.container}>
        <div className={s.post0}>
          <img src={img} alt="star" className={s.logo} />
          <h1 className={s.title}>The road to home</h1>
          <div className={s.sub}>
            <span className={s.subtitle}>April 14, 2019</span>
          </div>
          <p className={s.context}>
            Made last it seen went no just when of by. Occasional entreaties
            comparison me difficulty so themselves. At brother inquiry of
            offices without do my service. As particular to companions at
            sentiments. Weather however luckily enquire so certain do. Aware did
            stood was day under ask. Dearest affixed enquire on explain opinion
            he. Reached who the mrs joy offices pleased. Towards did colonel
            article any parties.{" "}
          </p>
        </div>
        <div className={s.post1}>
          <div className={s.img}>
            <img src={img0} alt="road" className={s.image0}/>
          </div>
          <div className={s.txt}>
            <p className={s.context}>Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men. Few gay sir those green men timed downs widow chief. Prevailed remainder may propriety can and.  Now for manners use has company believe parlors. Least nor party who wrote while did. </p>
          </div>
        </div>
        <div className={s.post2}>
          <p className={s.context}>We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to. </p>
        </div>
        <div className={s.post3}>
          <p className={s.context}>Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing.</p>
        </div>
        <div className={s.post4}>
          <p className={s.context}>Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men. </p>
        </div>
        <div className={s.detail}>
          <div className={s.det}>
            <img src={img1} alt="person" className={s.img1}/>
            <span className={s.item}> Post by <strong> Will Smith</strong></span>
          </div>
          <div className={s.det}>
            <img src={img2} alt="time" className={s.img2}/>
            <span className={s.date}>Posted <strong> April 14, 2019</strong> at <strong>21:14</strong></span>
          </div>
          <div className={s.det}>
            <img src={img3} alt="message" className={s.img3}/>
            <span className={s.comments}><strong> 12 comments</strong></span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};
export default Post;
