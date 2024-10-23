import React, { useState } from 'react';
import { Calendar, Home, Inbox, Search, Settings, ChevronDown, ChevronRight, Plus } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const items = [
  {
    title: "Events",
    icon: Home,
    subItems: ["Upcoming Events", "Past Events", "Create Event"]
  },
  {
    title: "21 contacts",
    icon: Inbox,
    subItems: ["All Contacts", "Favorites", "Blocked"]
  },
  {
    title: "Projects",
    icon: Calendar,
    subItems: ["Active Projects", "Archived Projects", "Project Templates"]
  },
  {
    title: "Albums",
    icon: Search,
    subItems: ["Photo Albums", "Shared Albums", "Create Album"]
  },
  {
    title: "Organizations",
    icon: Search,
    subItems: ["My Organizations", "Invitations", "Discover"]
  },
  {
    title: "People You Follow",
    icon: Settings,
    subItems: ["Following", "Followers", "Suggestions"]
  },
];

const CollapsibleMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAddOption, setShowAddOption] = useState(false);

  return (
    <SidebarMenuItem>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-lg">
          <div className="flex items-center gap-2">
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
            {isOpen ? <ChevronDown className="h-4 w-4 ml-2" /> : <ChevronRight className="h-4 w-4 ml-2" />}
          </div>
          <Plus 
            className="h-4 w-4 cursor-pointer hover:text-blue-500"
            onClick={(e) => {
              e.stopPropagation();
              setShowAddOption(!showAddOption);
            }}
          />
        </CollapsibleTrigger>
        
        <CollapsibleContent className="pl-6">
          {item.subItems.map((subItem, index) => (
            <div key={index} className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              {subItem}
            </div>
          ))}
          {showAddOption && (
            <div className="flex items-center gap-2 p-2 text-sm text-gray-600">
              <input 
                type="text" 
                placeholder="Add new option" 
                className="w-full p-1 border rounded"
              />
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  const [open, setOpen] = React.useState(true);
  
  return (
    <Sidebar className="top-14">
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel></SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <CollapsibleMenuItem key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarProvider>
    </Sidebar>
  );
}