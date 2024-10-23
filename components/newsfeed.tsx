'use client';
import React, { useState } from 'react';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

// Sample news data
const newsItems = [
  {
    id: 1,
    title: 'Breaking News: New React Version Released!',
    description:
      'The React team has announced the release of a new version with groundbreaking features.',
    time: '2 hours ago',
  },
  // {
  //   id: 2,
  //   title: 'Tech Giants Collaborate on Open Source Projects',
  //   description:
  //     'Leading tech companies are joining forces to support new open-source projects.',
  //   time: '5 hours ago',
  // },
  // {
  //   id: 3,
  //   title: 'Startups Gaining Momentum in 2024',
  //   description:
  //     'Many startups are gaining traction and setting new records in funding this year.',
  //   time: '1 day ago',
  // },
  // {
  //   id: 4,
  //   title: 'AI Innovations Changing Healthcare',
  //   description:
  //     'AI-driven innovations are making a significant impact on the healthcare industry.',
  //   time: '2 days ago',
  // },
];

export default function NewsFeed() {
  const [post, setPost] = useState('');

  const handlePost = () => {
    if (post.trim()) {
      console.log('Posted:', post);
      alert(`Post Submitted: ${post}`);
      setPost(''); // Reset the post field after submission
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-full">
      <h2 className="text-lg font-semibold mb-4">News feed</h2>
      <div className="space-y-6">
        {/* Adds vertical spacing between news items */}
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <p className="text-gray-500 text-sm mt-2">{item.time}</p>
          </div>
        ))}
      </div>
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
