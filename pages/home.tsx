// components/Layout.js
import React from 'react';
import ActivityFeed from '@/components/ActivityFeed';
import TaskList from '@/components/TaskList'
import StoryOverview from '@/components/StoryOverview';



export default function Home({ tasks, stories }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-2">
        <ActivityFeed />
      </div>
      <div>
      <TaskList tasks={tasks} />
      <StoryOverview stories={stories} />
      </div>
    </div>
  );
}
