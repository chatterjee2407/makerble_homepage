import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export default function ActivityFeed() {
  // Sample activities to display in the feed
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "created a new post",
      time: "2 hours ago",
      content: "Check out my latest blog post on React best practices!",
    },
  ];

  const [comment, setComment] = useState("");
  const [post, setPost] = useState("");

  // Handlers for comments
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert(`Comment Submitted: ${comment}`);
    setComment("");
  };

  // Handle new post submission
  const handlePost = () => {
    if (post.trim()) {
      console.log('Posted:', post);
      alert(`Post Submitted: ${post}`);
      setPost(''); // Reset the post field after submission
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4"></h2>
      <div className="space-y-6">
        {/* Activity feed items */}
        {activities.map((activity) => (
          <div key={activity.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div className="font-bold text-gray-900">{activity.user}</div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
            <div className="text-sm text-gray-600">
              {activity.action}: {activity.content}
            </div>
          </div>
        ))}
      </div>

      {/* Post input box at the bottom */}
      <Card className="p-4 mt-6">
        <div className="flex gap-4 items-start">
          <Textarea
            placeholder="Write a comment"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="min-h-[60px] max-h-[100px] flex-1 resize-none"
          />
          <Button 
            onClick={handlePost}
            className="h-10 whitespace-nowrap"
            disabled={!post.trim()} // Disable button if post is empty
          >
            <Send className="h-4 w-4 mr-2" />
            Post
          </Button>
        </div>
      </Card>
    </div>
  );
}
