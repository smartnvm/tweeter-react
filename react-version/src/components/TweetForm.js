import React from 'react'; //optional

function TweetForm() {
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={submit}>

        <textarea className="form__textarea" name="text" placeholder="What are you humming about?" onChange={showTxt}></textarea>
        <input type="submit" value="Tweet" className="form__input"   >



        </input>

        <span className="form__counter">140</span>
      </form>
    </section >



  );
}

function submit(e) {
  e.preventDefault();
  console.log(`The mouse coordinates of this click e are: x: ${e.screenX} and y: ${e.screenY}`);
}

function showTxt(e) {
  // e.preventDefault();
  console.log(e);
}

export default TweetForm;;;