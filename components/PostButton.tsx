import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send } from 'lucide-react';

const PostInput = () => {
  const [post, setPost] = useState('');

  const handlePost = () => {
    if (post.trim()) {
      console.log('Posted:', post);
      setPost('');
    }
  };

  return (
    <div className="max-w-4xl w-full mx-auto px-4">
      <Card className="p-4 mb-6">
        <div className="flex gap-4 items-start">
          <Textarea
            placeholder="What's on your mind?"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="min-h-[60px] max-h-[100px] flex-1 resize-none"
          />
          <Button 
            onClick={handlePost}
            className="h-10 whitespace-nowrap"
            disabled={!post.trim()}
          >
            <Send className="h-4 w-4 mr-2" />
            Post
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PostInput;