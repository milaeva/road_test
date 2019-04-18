'use strict';

$(document).ready(function () {
  var config = {
    currentOffset: 0,
    email: 'foo@foo.com',
    getCommentsList: {
      method: 'GET',
      url: 'http://frontend-test.pingbull.com/pages/YOUR E-MAIL/comments',
      count: 5
    },
    editComment: {
      method: 'GET',
      url: 'http://frontend-test.pingbull.com/pages/YOUR E-MAIL/comments'
    },
    addComment: {
      method: 'POST',
      url: 'http://frontend-test.pingbull.com/pages/YOUR E-MAIL/comments'
    },
    deleteComment: {
      method: 'DELETE',
      url: 'http://frontend-test.pingbull.com/pages/YOUR E-MAIL/comments/COMMENT ID'
    }

  }

  replaceAll = function (str, mapObj) {
    var re = new RegExp(Object.keys(mapObj).join("|"), "gi");

      return str.replace(re, function (matched) {
        return mapObj[matched];
      });
  },
  composeCommentDate = function (date) {
    var t = new Date(date);

    var dd = t.getDate();
    var mm = t.getMonth() + 1; //January is 0!
    var yyyy = t.getFullYear();
    var hh = t.getHours();
    var min = t.getMinutes()

    return yyyy + '-' + mm + '-' + dd + 'at ' + hh + ':' + min;
  },
  composeURL = function (url, email, commentID) {
    return replaceAll(url, {'YOUR E-MAIL': email, 'COMMENT ID': commentID});
  },
  incrementOffset = function (increment) {
    config.currentOffset += increment;

    return config.currentOffset;
  },
  decrementOffset = function (increment) {
    config.currentOffset -= increment;

    return config.currentOffset;
  },
  composeSubComments = function (subComments) {
    var subCommentsHTML = '';

    if (subComments) {
      subComments.length && subComments.forEach(function (subComment) {
          subCommentsHTML += composeSubComment(subComment);
      });
    }


      return subCommentsHTML;
  },
  composeSubComment = function (subComment) {
      var author = subComment.author;

      return (
        <div className={s.first}>
          <div className={s.item}>
            <img src={s.' + author.avatar + '} className={s.ava}/>
          </div>
          <div className={s.info}>
            <h5 className={s.subtitle}>' + author.name +'</h5>
            <img src={time} alt="" className={s.time}/>
            <p className={s.text}>' + composeCommentDate(author.updated_at) + '</p>
          </div>
          <p className={s.quest}>' + subComment.author.name + '</p>
        </div>
      )
  },
  composeComments = function (comments) {
      var html = '';

      comments.forEach(function (comment) {
          html += composeComment(comment);
      });

      return html;
  },
  composeCommentBox = function (commentID) {
      return (
        <div className={s.post}>
          <div className={s.info}>
            <h5 className={s.subtitle}>' + author.name + '</h5>
            <img src={time} alt="" className={s.time}/>
            <p className={s.text}>' + composeCommentDate(author.updated_at) + '</p>
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
      )
  },
  composeComment = function (comment) {
      var author = comment.author;

      return (
        <div className={s.post}>
          <div className={s.info}>
            <h5 className={s.subtitle}>' + author.name + '</h5>
            <img src={right} alt="" className={s.icon}/>
            <a href="#" className={s.ans}> Kurt Thompson </a>
            <img src={time} alt="" className={s.time}/>
            <p className={s.text}>"' + comment.id + '</p>
          </div>
          <p className={s.quest}> ' + composeCommentDate(author.updated_at) + '</p>
        </div>
      )
  },

  addCommentCallback = function () {
    addComment($(this));
  },
  replyCallback = function () {
    var $this = $(this),
      $commentsActions = $this.parents('.comments-actions');

      if (!$commentsActions.siblings('.comment-box').length) {
        var $commentBox = $(composeCommentBox($this.data('id')));

        $commentBox.insertAfter($commentsActions);

          $commentBox.find('.del').click(function () {
            $commentBox.remove();
          });

          $commentBox.find('.btn0').click(addCommentCallback);
      }
  },
  deleteCallback = function () {
    deleteComment($(this));
  },
  getCommentsList = function () {
    var getCommentsList = config.getCommentsList,
      count = getCommentsList.count;

    $.ajax({
      url: composeURL(getCommentsList.url, config.email),
      type: getCommentsList.method,
      data: {
      count: count,
      offset: getCommentsList.currentOffset
      },
      dataType: 'json'
    }).done(function (resp) {
      var commentsHtml = composeComments(resp);

      $(commentsHtml).appendTo($('.quest'));

      incrementOffset(count);

      $('.btn0').click(addCommentCallback);

      $('.del').click(deleteCallback);

      $('.left').click(replyCallback);
    });
  },
  addComment = function ($sendComment) {
    var content = $sendComment.parent().siblings('.comment-area').val(),
      parentID = $sendComment.data('id'),
      addComment = config.addComment,
      commentContainer = parentID
      ? $sendComment.parents('.user-comment')
      : $('.user-comments-container');


    $.ajax({
        url: composeURL(addComment.url, config.email),
        type: addComment.method,
        data: {
        content: content,
        parent: parentID
    }
    }).done(function (resp) {
        var $comment,
            html = '';

        if (parentID) {
          html = composeSubComment(resp);

          $(html).appendTo(commentContainer);

          commentContainer.find('.comment-area').val('');
        } else {
          $comment = $(composeComment(resp));

          $comment.prependTo(commentContainer);

          $comment.find('.del').click(deleteCallback);

          $comment.find('.left').click(replyCallback);
        }

      incrementOffset(getCommentsList.count);
    });
  },
  deleteComment = function ($deleteEL) {
    var deleteComment = config.deleteComment;

    $.ajax({
      url: composeURL(deleteComment.url, config.email, $deleteEL.data('id')),
      type: deleteComment.method
    }).done(function (resp) {
      $deleteEL.parents('.message').remove();

      decrementOffset(1);
    });
  },
  editComment = function () {
      editComment = config.editComment;

  },
  init = function () {
      $('.load-comments').click(function () {
        getCommentsList();
      });

    getCommentsList();
  };

init();
});
