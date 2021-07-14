import React from "react";
import TweetItem from "./TweetItem";

function TweetList({ handleTweetLike, user}) {
  return (
    <div className="ui segment">
      <div className="ui feed">
        {user.tweets.map((tweet) => (
          <TweetItem
            key={tweet.id}
            handleTweetLike={handleTweetLike}
            handle={user.handle}
            photo={user.photo}
            tweet={tweet}
          />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
