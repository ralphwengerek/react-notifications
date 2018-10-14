import React from 'react';
import './Notification.css';
import Avatar from './Avatar';

const Notification = (notification) => {

    const isLike = notification.type === "Like";
    
    return (
            isLike
                ? <LikeNotification {...notification}></LikeNotification>
                : <CommentNotification {...notification}></CommentNotification>
    );
}

const LikeNotification = ({ post, likes }) => {

    let [first] = likes;
    const users = getUsers(likes);

    return (
        <div className="notification">
            <Avatar image={first.id}></Avatar>
            <span><a href={post.id} >{users}</a> liked <strong>your post</strong> : "{post.title}"</span>
        </div>
    );

}

const CommentNotification = ({ post, comments }) => {

    let [first] = comments;
    const users = getUsers(comments);

    return (
        <div className="notification">
            <Avatar image={first.id}></Avatar>
            <span><a href={post.id} >{users}</a> commented on <strong>your post</strong> : {comments.length > 1 ? post.text : first.commentText}</span>
        </div>
    );

}

const getUsers = (items) => {
    let [first] = items;
    const likeCount = items.length;
    let users = `${first.name || 'User'}`;

    if (likeCount === 2)
        users = `${first.name} and ${items[1].name}`;
    else if (likeCount > 2)
        users = `${first.name}, ${items[1].name} and ${items.length - 2} others `;

    return users;
}

export default Notification;