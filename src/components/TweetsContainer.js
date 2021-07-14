import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUserID, setSelectedUserID] = useState(users[0].id)

  function handleChangeUser(user) {
    setSelectedUserID(user.id)
  }

  function handleTweetLike(tweetID) {
      // increase favourite count
      // heart changes color using CSS magic
      const updateUser =  users.map((user) => {
        if (user.id === selectedUserID) {
          return {...user,
          tweets: user.tweets.map((tweet) => {
            if (tweet.id === tweetID) {
              return {...tweet,
              favorite_count: tweet.favorite_count + 1}
            } else return tweet
          })
        }} else return user
      })
      setUsers(updateUser)
        // iterate over user array to find specific user
        //  -> iterate over specific user tweets 
        //  -> update specific favourite count
  }

  const selectedUser = users.find((user) => user.id === selectedUserID)

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} onChangeUser={handleChangeUser}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={selectedUser} handleTweetLike={handleTweetLike} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
