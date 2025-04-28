import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Menu,
  Package,
  Users,
  BarChart,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState("tables");
  const [activeTable, setActiveTable] = useState("users");
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-light-grey">
      {/* Mobile left sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
      >
        <Menu className="h-5 w-5 text-base" />
      </Button>
      {/* Left Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          leftSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex h-16 items-center border-b border-cool-grey px-6">
            <h1 className="text-xl font-semibold text-base">Dashboard</h1>
          </div>

          {/* Sidebar modules */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            <button
              onClick={() => setActiveModule("tables")}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                activeModule === "tables"
                  ? "bg-primary text-base"
                  : "text-bedrock hover:bg-mist hover:text-base"
              )}
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              <span>Tables Module</span>
            </button>

            <button
              onClick={() => setActiveModule("empty")}
              className={cn(
                "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                activeModule === "empty"
                  ? "bg-primary text-base"
                  : "text-bedrock hover:bg-mist hover:text-base"
              )}
            >
              <FileText className="mr-3 h-5 w-5" />
              <span>Empty Module</span>
            </button>
          </nav>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-cool-grey bg-white px-6">
          <h2 className="text-lg font-medium text-base">
            {activeModule === "tables"
              ? `${
                  activeTable.charAt(0).toUpperCase() + activeTable.slice(1)
                } Table`
              : "Empty Module"}
          </h2>
          <div className="flex items-center gap-2">
            {activeModule === "tables" && (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
              >
                {rightSidebarOpen ? (
                  <ChevronRight className="h-5 w-5" />
                ) : (
                  <ChevronLeft className="h-5 w-5" />
                )}
              </Button>
            )}
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-bedrock" />
            </Button>
          </div>
        </header>

        {/* Table container */}
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-auto p-6">
            {activeModule === "tables" ? (
              <>
                {activeTable === "users" && <UsersTable />}
                {activeTable === "products" && <ProductsTable />}
                {activeTable === "orders" && <OrdersTable />}
                {activeTable === "analytics" && <AnalyticsTable />}
              </>
            ) : (
              <EmptyView />
            )}
          </main>

          {/* Right Sidebar - Table Options */}
          {activeModule === "tables" && (
            <div
              className={cn(
                "fixed inset-y-0 right-0 z-30 w-64 transform border-l border-cool-grey bg-white transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
                rightSidebarOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="flex h-full flex-col">
                <div className="border-b border-cool-grey px-6 py-4">
                  <h3 className="text-sm font-semibold uppercase text-bedrock">
                    Available Tables
                  </h3>
                </div>
                <div className="flex-1 space-y-1 px-3 py-4">
                  <button
                    onClick={() => setActiveTable("users")}
                    className={cn(
                      "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                      activeTable === "users"
                        ? "bg-primary text-base"
                        : "text-bedrock hover:bg-mist hover:text-base"
                    )}
                  >
                    <Users className="mr-3 h-4 w-4" />
                    <span>Users</span>
                  </button>

                  <button
                    onClick={() => setActiveTable("products")}
                    className={cn(
                      "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                      activeTable === "products"
                        ? "bg-primary text-base"
                        : "text-bedrock hover:bg-mist hover:text-base"
                    )}
                  >
                    <Package className="mr-3 h-4 w-4" />
                    <span>Products</span>
                  </button>

                  <button
                    onClick={() => setActiveTable("orders")}
                    className={cn(
                      "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                      activeTable === "orders"
                        ? "bg-primary text-base"
                        : "text-bedrock hover:bg-mist hover:text-base"
                    )}
                  >
                    <FileText className="mr-3 h-4 w-4" />
                    <span>Orders</span>
                  </button>

                  <button
                    onClick={() => setActiveTable("analytics")}
                    className={cn(
                      "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium",
                      activeTable === "analytics"
                        ? "bg-primary text-base"
                        : "text-bedrock hover:bg-mist hover:text-base"
                    )}
                  >
                    <BarChart className="mr-3 h-4 w-4" />
                    <span>Analytics</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UsersTable() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 6,
      name: "Sarah Brown",
      email: "sarah@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 7,
      name: "David Miller",
      email: "david@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 8,
      name: "Jennifer Taylor",
      email: "jennifer@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 9,
      name: "James Anderson",
      email: "james@example.com",
      role: "Manager",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Lisa Thomas",
      email: "lisa@example.com",
      role: "User",
      status: "Active",
    },
  ];

  return (
    <div className="rounded-lg border border-cool-grey bg-white">
      <Table>
        <TableHeader className="bg-mist">
          <TableRow>
            <TableHead className="text-base">ID</TableHead>
            <TableHead className="text-base">Name</TableHead>
            <TableHead className="text-base">Email</TableHead>
            <TableHead className="text-base">Role</TableHead>
            <TableHead className="text-base">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="hover:bg-light-grey">
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                    user.status === "Active"
                      ? "bg-primary text-base"
                      : "bg-cool-grey text-bedrock"
                  )}
                >
                  {user.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ProductsTable() {
  const products = [
    {
      id: 1,
      name: "Eco-friendly Water Bottle",
      category: "Kitchen",
      price: "$24.99",
      stock: 120,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      category: "Electronics",
      price: "$149.99",
      stock: 45,
    },
    {
      id: 3,
      name: "Organic Cotton T-shirt",
      category: "Clothing",
      price: "$29.99",
      stock: 78,
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Electronics",
      price: "$199.99",
      stock: 32,
    },
    {
      id: 5,
      name: "Yoga Mat",
      category: "Fitness",
      price: "$39.99",
      stock: 65,
    },
    {
      id: 6,
      name: "Stainless Steel Cookware Set",
      category: "Kitchen",
      price: "$129.99",
      stock: 18,
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: "$79.99",
      stock: 53,
    },
    {
      id: 8,
      name: "Leather Wallet",
      category: "Accessories",
      price: "$49.99",
      stock: 87,
    },
    {
      id: 9,
      name: "Portable Charger",
      category: "Electronics",
      price: "$34.99",
      stock: 94,
    },
    {
      id: 10,
      name: "Ceramic Coffee Mug",
      category: "Kitchen",
      price: "$14.99",
      stock: 112,
    },
  ];

  return (
    <div className="rounded-lg border border-cool-grey bg-white">
      <Table>
        <TableHeader className="bg-mist">
          <TableRow>
            <TableHead className="text-base">ID</TableHead>
            <TableHead className="text-base">Product Name</TableHead>
            <TableHead className="text-base">Category</TableHead>
            <TableHead className="text-base">Price</TableHead>
            <TableHead className="text-base">Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="hover:bg-light-grey">
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                    product.stock > 50
                      ? "bg-primary text-base"
                      : product.stock > 20
                      ? "bg-mist text-bedrock"
                      : "bg-cool-grey text-bedrock"
                  )}
                >
                  {product.stock}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function OrdersTable() {
  const orders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      date: "2023-04-15",
      total: "$124.99",
      status: "Delivered",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      date: "2023-04-16",
      total: "$89.99",
      status: "Processing",
    },
    {
      id: "#ORD-003",
      customer: "Robert Johnson",
      date: "2023-04-17",
      total: "$249.99",
      status: "Shipped",
    },
    {
      id: "#ORD-004",
      customer: "Emily Davis",
      date: "2023-04-18",
      total: "$34.99",
      status: "Delivered",
    },
    {
      id: "#ORD-005",
      customer: "Michael Wilson",
      date: "2023-04-19",
      total: "$199.99",
      status: "Processing",
    },
    {
      id: "#ORD-006",
      customer: "Sarah Brown",
      date: "2023-04-20",
      total: "$149.99",
      status: "Cancelled",
    },
    {
      id: "#ORD-007",
      customer: "David Miller",
      date: "2023-04-21",
      total: "$79.99",
      status: "Delivered",
    },
    {
      id: "#ORD-008",
      customer: "Jennifer Taylor",
      date: "2023-04-22",
      total: "$59.99",
      status: "Shipped",
    },
    {
      id: "#ORD-009",
      customer: "James Anderson",
      date: "2023-04-23",
      total: "$129.99",
      status: "Processing",
    },
    {
      id: "#ORD-010",
      customer: "Lisa Thomas",
      date: "2023-04-24",
      total: "$99.99",
      status: "Delivered",
    },
  ];

  return (
    <div className="rounded-lg border border-cool-grey bg-white">
      <Table>
        <TableHeader className="bg-mist">
          <TableRow>
            <TableHead className="text-base">Order ID</TableHead>
            <TableHead className="text-base">Customer</TableHead>
            <TableHead className="text-base">Date</TableHead>
            <TableHead className="text-base">Total</TableHead>
            <TableHead className="text-base">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="hover:bg-light-grey">
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                    order.status === "Delivered"
                      ? "bg-primary text-base"
                      : order.status === "Shipped"
                      ? "bg-mist text-bedrock"
                      : order.status === "Processing"
                      ? "bg-cool-grey text-bedrock"
                      : "bg-bedrock text-white"
                  )}
                >
                  {order.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function AnalyticsTable() {
  const analytics = [
    {
      id: 1,
      metric: "Page Views",
      yesterday: "1,245",
      today: "1,356",
      change: "+8.9%",
    },
    {
      id: 2,
      metric: "Unique Visitors",
      yesterday: "876",
      today: "954",
      change: "+8.9%",
    },
    {
      id: 3,
      metric: "Bounce Rate",
      yesterday: "34.2%",
      today: "32.1%",
      change: "-6.1%",
    },
    {
      id: 4,
      metric: "Average Session",
      yesterday: "2m 45s",
      today: "3m 12s",
      change: "+16.4%",
    },
    {
      id: 5,
      metric: "Conversion Rate",
      yesterday: "2.4%",
      today: "2.8%",
      change: "+16.7%",
    },
    {
      id: 6,
      metric: "Revenue",
      yesterday: "$3,452",
      today: "$4,120",
      change: "+19.4%",
    },
    { id: 7, metric: "Orders", yesterday: "43", today: "51", change: "+18.6%" },
    {
      id: 8,
      metric: "Average Order Value",
      yesterday: "$80.28",
      today: "$80.78",
      change: "+0.6%",
    },
    {
      id: 9,
      metric: "Cart Abandonment",
      yesterday: "68.3%",
      today: "65.7%",
      change: "-3.8%",
    },
    {
      id: 10,
      metric: "Mobile Traffic",
      yesterday: "64.2%",
      today: "67.8%",
      change: "+5.6%",
    },
  ];

  return (
    <div className="rounded-lg border border-cool-grey bg-white">
      <Table>
        <TableHeader className="bg-mist">
          <TableRow>
            <TableHead className="text-base">Metric</TableHead>
            <TableHead className="text-base">Yesterday</TableHead>
            <TableHead className="text-base">Today</TableHead>
            <TableHead className="text-base">Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {analytics.map((item) => (
            <TableRow key={item.id} className="hover:bg-light-grey">
              <TableCell className="font-medium">{item.metric}</TableCell>
              <TableCell>{item.yesterday}</TableCell>
              <TableCell>{item.today}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex rounded-full px-2 py-1 text-xs font-medium",
                    item.change.startsWith("+")
                      ? "bg-primary text-base"
                      : "bg-cool-grey text-bedrock"
                  )}
                >
                  {item.change}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
