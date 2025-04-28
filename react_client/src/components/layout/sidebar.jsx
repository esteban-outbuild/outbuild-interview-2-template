import { useState } from "react";
import { Button } from "../ui/button";
import { LayoutDashboard, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useMatch } from "react-router";

export default function Sidebar() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const { pathname } = useMatch(window.location.pathname);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
      >
        <Menu className="h-5 w-5 text-base" />
      </Button>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          leftSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-cool-grey px-6">
            <h1 className="text-xl font-semibold text-base">Dashboard</h1>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            <Link
              to={"/"}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                pathname === "/"
                  ? "bg-primary text-base"
                  : "text-bedrock hover:bg-mist hover:text-base"
              )}
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              <span>Tables Module</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
