import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getAll } from "@/services/activities";
import { useEffect, useState } from "react";

const dummyGantt = [
  {
    id: 1,
    name: "Products",
    activities: [],
  },
];

export default function Gantts() {
  const [gantts, setGantts] = useState(dummyGantt);
  const [activeGantt, setActiveGantt] = useState(1);

  useEffect(() => {
    const fetchGantts = async () => {
      const gantts = await getAll();
      console.log(gantts);
      setGantts(gantts);
    };
    fetchGantts();
  }, []);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="flex h-16 items-center justify-between border-b border-cool-grey bg-white px-6">
        <h2 className="text-lg font-medium text-base">Gantt Module</h2>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-auto p-6">
          <div className="rounded-lg border border-cool-grey bg-white">
            <Table>
              <TableHeader className="bg-mist">
                <TableRow>
                  <TableHead className="text-base">ID</TableHead>
                  <TableHead className="text-base">Name</TableHead>
                  <TableHead className="text-base">Start</TableHead>
                  <TableHead className="text-base">End</TableHead>
                  <TableHead className="text-base">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gantts
                  .find(({ id }) => id === activeGantt)
                  .activities.map((activity) => (
                    <TableRow key={activity.id} className="hover:bg-light-grey">
                      <TableCell className="font-medium">
                        {activity.id}
                      </TableCell>
                      <TableCell>{activity.name}</TableCell>
                      <TableCell>{activity.start_date}</TableCell>
                      <TableCell>{activity.end_date}</TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                            activity.status === "Done"
                              ? "bg-primary text-base"
                              : "bg-cool-grey text-bedrock"
                          )}
                        >
                          {activity.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </main>

        <div
          className={cn(
            "fixed inset-y-0 right-0 z-30 w-64 transform border-l border-cool-grey bg-white transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
            "translate-x-0"
          )}
        >
          <div className="flex h-full flex-col">
            <div className="border-b border-cool-grey px-6 py-4">
              <h3 className="text-sm font-semibold uppercase text-bedrock">
                Available Gantts
              </h3>
            </div>
            <div className="flex-1 space-y-1 px-3 py-4">
              {gantts.map((gantt) => (
                <button
                  onClick={() => setActiveGantt(gantt.id)}
                  className={cn(
                    "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                    activeGantt.id === gantt.id
                      ? "bg-primary text-base"
                      : "text-bedrock hover:bg-mist hover:text-base"
                  )}
                >
                  <span>{gantt.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
