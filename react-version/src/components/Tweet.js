import React from 'react'; //optional

function TweetList() {

  const tweet = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
  };

  return (

    <div className="">

      <section className="tweets">
        <article className="tweet">
          <header className="tweet--header">
            <img className="tweet--avatar" src={tweet.avatar} alt="" />
            <h2 className="tweet--name">{tweet.firstName}</h2>
            <small className="tweet--handle">{tweet.handle}</small>
          </header>

          <div className="tweet--body">
            <p>{tweet.body}</p>
          </div>

          <footer className="tweet--footer">
            <small className="footer--age">{tweet.age}<small>
              <span className="footer--actions">
                {/* eslint-disable-next-line */}
                <a href="#"><i className="fa fa-flag"></i></a>
                {/* eslint-disable-next-line */}
                <a href="#"><i className="fa fa-retweet"></i></a>
                {/* eslint-disable-next-line */}
                <a href="#"><i className="fa fa-heart"></i></a>
              </span>
            </small></small></footer>
        </article>

      </section>

      <div className="round-btn">
        <i className="round-btn__icon fas fa-angle-double-up"></i>
      </div>

    </div>
  );
}

export default TweetList;