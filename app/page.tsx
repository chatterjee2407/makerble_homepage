'use client'
import ActivityFeed from '@/components/ActivityFeed';
import TaskList from '@/components/TaskList';
import NavigatioBAr from '@/components/NavigatioBAr';
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/app_sidebar';
import Boards from '@/components/Boards';
import PostInput from '@/components/PostButton';
import PersonalProgress from '@/components/PersonalProgress';
import NewsFeed from '@/components/newsfeed';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavigatioBAr />
            <SidebarProvider>
                <div className="flex">
                    {/* Sidebar */}
                    <AppSidebar />  

                    {/* Main content */}
                    <main className="flex-grow flex justify-between p-6 gap-6">
                        {/* Left section with Activity Feed */}
                        <div className="flex-grow max-w-4xl">
                            {/* Top bar with trigger and post input */}
                            <div className="flex items-center gap-4 mb-6">
                                <SidebarTrigger className="flex-shrink-0" />
                                <div className="flex-grow">
                                    <PostInput />
                                </div>
                            </div>
                            
                            {/* Activity feeds with spacing */}
                            <div className="space-y-6">
                                <NewsFeed/>
                                <ActivityFeed />
                                <ActivityFeed />
                                <ActivityFeed />
                            </div>
                        </div>

                        {/* Right sidebar with fixed width */}
                        <div className="w-80 flex-shrink-0 space-y-6">
                            <Boards />
                            <PersonalProgress />
                            <TaskList />
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </div>
    );
}