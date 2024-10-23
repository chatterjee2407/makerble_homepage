'use client'
import React from "react";

const boards = [
  { id: 1, title: "All HUbs",  },
  { id: 2, title: "Bermingham -Attendance Record",  },
  { id: 3, title: "Bermingham Outcoems Star",  },

];

export default function Boards() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Boards</h2>
      <div className="">
        {boards.map((board) => (
          <div
            key={board.id}
            className=" shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm mb-2">{board.title}</h3>
            <p className="text-gray-600">{board.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
