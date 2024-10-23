import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PersonalProgress = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Frontend Development Course",
      progress: 60,
    },
    {
      id: 2,
      title: "Build 5 Personal Projects",
      progress: 40,
    },
    {
      id: 3,
      title: "Learn Backend Technologies",
      progress: 25,
    },
    {
      id: 4,
      title: "Master Data Structures & Algorithms",
      progress: 30,
    },
    {
      id: 5,
      title: "Contribute to Open Source Projects",
      progress: 15,
    },
  ]);

  const incrementProgress = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId && task.progress < 100) {
        return { ...task, progress: Math.min(task.progress + 10, 100) };
      }
      return task;
    }));
  };

  const getProgressColor = (progress) => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-semibold">Personal Progress</CardTitle>
        <Button variant="outline" className="flex items-center gap-2">
          Go to Board
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {tasks.map((task) => (
          <div key={task.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.progress === 100}
                  onChange={() => {}}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className={task.progress === 100 ? "line-through text-gray-500" : ""}>
                  {task.title}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => incrementProgress(task.id)}
                disabled={task.progress === 100}
                className="hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Progress 
                value={task.progress} 
                className="h-2"
                indicatorClassName={getProgressColor(task.progress)}
              />
              <span className="text-sm text-gray-500 w-12">
                {task.progress}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PersonalProgress;