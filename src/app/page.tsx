/*
 * FLINT CONTEXT:
 * This is boilerplate showcase code to demonstrate available UI components.
 * DO NOT keep this code when implementing user requests.
 * Replace this entire page with whatever the user specifically asks for.
 * Focus on building exactly what the user wants, not maintaining this showcase.
 */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Bot,
  MessageCircle,
  Zap,
  AlertCircle,
  Bold,
  Italic,
  ChevronDown,
  Bell,
} from "lucide-react";

export default function Home() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <Bot className="h-4 w-4 mr-2" />
                Build with Flint
              </Badge>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Your App
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Boilerplate
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A complete boilerplate with modern components, beautiful design,
                and everything you need to start building.
              </p>
            </div>
          </div>

          {/* Main Message Card */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-white border-2 border-blue-100 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    This is Your Starting Point
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                  This boilerplate includes everything you need, but it's just
                  the beginning.
                  <strong className="text-gray-800">
                    {" "}
                    Chat with Flint to customize it for your specific needs.
                  </strong>
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-600 text-white rounded-full">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Tell Flint what you want:
                      </h3>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>"Add a contact form to the homepage"</li>
                        <li>"Change the colors to match my brand"</li>
                        <li>"Create a dashboard with charts and tables"</li>
                        <li>"Add user authentication and login"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Here</h3>
                <p className="text-sm text-gray-600">
                  This boilerplate is your foundation with all the essential
                  components
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Chat with Flint
                </h3>
                <p className="text-sm text-gray-600">
                  Describe what you want to build or change in natural language
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Watch It Build
                </h3>
                <p className="text-sm text-gray-600">
                  Flint updates your app instantly with exactly what you
                  requested
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Library Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Available Components
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These are all the components available in your boilerplate.
                <strong className="text-gray-800">
                  {" "}
                  Chat with Flint to use any of these in your app.
                </strong>
              </p>
            </div>

            {/* Flint Message */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-blue-50 border-2 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-600 text-white rounded-full">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Tell Flint which components to use:
                      </h3>
                      <div className="text-blue-800 text-sm space-y-1">
                        <p>
                          "Add a contact form with input fields and a submit
                          button"
                        </p>
                        <p>"Create a data table to show user information"</p>
                        <p>
                          "Add a calendar component for booking appointments"
                        </p>
                        <p>"Include progress bars to show completion status"</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Components Grid */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Buttons */}
                <Card>
                  <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                    <CardDescription>
                      Interactive button components
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Button disabled>Disabled</Button>
                  </CardContent>
                </Card>

                {/* Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle>Badges</CardTitle>
                    <CardDescription>
                      Status and category indicators
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-x-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Error</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Avatar */}
                <Card>
                  <CardHeader>
                    <CardTitle>Avatars</CardTitle>
                    <CardDescription>User profile pictures</CardDescription>
                  </CardHeader>
                  <CardContent className="flex space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>XY</AvatarFallback>
                    </Avatar>
                  </CardContent>
                </Card>

                {/* Input Components */}
                <Card>
                  <CardHeader>
                    <CardTitle>Input & Form</CardTitle>
                    <CardDescription>Form controls and inputs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message..."
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" />
                      <Label htmlFor="notifications">Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">I agree</Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Select & Radio */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select & Radio</CardTitle>
                    <CardDescription>Selection components</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Choose option</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Radio Group</Label>
                      <RadioGroup defaultValue="option1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option1" id="r1" />
                          <Label htmlFor="r1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option2" id="r2" />
                          <Label htmlFor="r2">Option 2</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>

                {/* Progress & Slider */}
                <Card>
                  <CardHeader>
                    <CardTitle>Progress & Slider</CardTitle>
                    <CardDescription>
                      Value indicators and controls
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Progress</Label>
                      <Progress value={33} />
                      <Progress value={66} />
                      <Progress value={90} />
                    </div>
                    <div className="space-y-2">
                      <Label>Slider: {sliderValue[0]}</Label>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Toggle Components */}
                <Card>
                  <CardHeader>
                    <CardTitle>Toggle Components</CardTitle>
                    <CardDescription>Toggle states and groups</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Single Toggle</Label>
                      <Toggle aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                      </Toggle>
                    </div>
                    <div className="space-y-2">
                      <Label>Toggle Group</Label>
                      <ToggleGroup type="multiple">
                        <ToggleGroupItem value="bold">
                          <Bold className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic">
                          <Italic className="h-4 w-4" />
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Alerts</CardTitle>
                    <CardDescription>Important messages</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Info</AlertTitle>
                      <AlertDescription>
                        This is an informational alert.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>Something went wrong!</AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                {/* Dialog Components */}
                <Card>
                  <CardHeader>
                    <CardTitle>Dialog & Modal</CardTitle>
                    <CardDescription>Overlay components</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Dialog Title</DialogTitle>
                          <DialogDescription>
                            This is a dialog description.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Item</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Open Sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Sheet Title</SheetTitle>
                          <SheetDescription>
                            Sheet description goes here.
                          </SheetDescription>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>

                {/* Popover & Tooltip */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popover & Tooltip</CardTitle>
                    <CardDescription>Contextual information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">Open Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <p>This is popover content.</p>
                      </PopoverContent>
                    </Popover>

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="link">Hover me</Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <p>This appears on hover!</p>
                      </HoverCardContent>
                    </HoverCard>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Tooltip</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </CardContent>
                </Card>

                {/* Accordion */}
                <Card>
                  <CardHeader>
                    <CardTitle>Accordion</CardTitle>
                    <CardDescription>
                      Collapsible content sections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Section 1</AccordionTrigger>
                        <AccordionContent>
                          Content for section 1 goes here.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Section 2</AccordionTrigger>
                        <AccordionContent>
                          Content for section 2 goes here.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Collapsible */}
                <Card>
                  <CardHeader>
                    <CardTitle>Collapsible</CardTitle>
                    <CardDescription>Show/hide content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Collapsible
                      open={isCollapsibleOpen}
                      onOpenChange={setIsCollapsibleOpen}
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center">
                          <ChevronDown className="h-4 w-4" />
                          Toggle Content
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2">
                        <p>This content can be collapsed!</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                {/* Skeleton Loading */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton</CardTitle>
                    <CardDescription>Loading placeholders</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[150px]" />
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[120px]" />
                        <Skeleton className="h-4 w-[80px]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Scroll Area */}
                <Card>
                  <CardHeader>
                    <CardTitle>Scroll Area</CardTitle>
                    <CardDescription>Custom scrollable content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[100px] w-full rounded-md border p-4">
                      <p>This is a scrollable area.</p>
                      <p>With multiple lines of content.</p>
                      <p>You can scroll to see more.</p>
                      <p>Line 4</p>
                      <p>Line 5</p>
                      <p>Line 6</p>
                      <p>Line 7</p>
                      <p>Line 8</p>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Aspect Ratio */}
                <Card>
                  <CardHeader>
                    <CardTitle>Aspect Ratio</CardTitle>
                    <CardDescription>Maintain proportions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                      <div className="flex items-center justify-center h-full">
                        <p>16:9 Aspect Ratio</p>
                      </div>
                    </AspectRatio>
                  </CardContent>
                </Card>

                {/* Input OTP */}
                <Card>
                  <CardHeader>
                    <CardTitle>Input OTP</CardTitle>
                    <CardDescription>One-time password input</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <InputOTP maxLength={6}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Full Width Components */}
              <div className="space-y-6 mt-12">
                {/* Tabs */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tabs</CardTitle>
                    <CardDescription>
                      Organize content into sections
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="account" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                        <TabsTrigger value="notifications">
                          Notifications
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="account" className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" placeholder="@username" />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="password" className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="settings" className="mt-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Email notifications</Label>
                              <p className="text-sm text-gray-500">
                                Receive emails about your account
                              </p>
                            </div>
                            <Switch />
                          </div>
                          <Separator />
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Marketing emails</Label>
                              <p className="text-sm text-gray-500">
                                Receive emails about new features
                              </p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="notifications" className="mt-4">
                        <Alert>
                          <Bell className="h-4 w-4" />
                          <AlertTitle>Notification Settings</AlertTitle>
                          <AlertDescription>
                            Configure how you receive notifications from the
                            app.
                          </AlertDescription>
                        </Alert>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Table</CardTitle>
                    <CardDescription>
                      Display data in rows and columns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableCaption>A list of recent transactions</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Invoice</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">INV001</TableCell>
                          <TableCell>
                            <Badge>Paid</Badge>
                          </TableCell>
                          <TableCell>Credit Card</TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">INV002</TableCell>
                          <TableCell>
                            <Badge variant="outline">Pending</Badge>
                          </TableCell>
                          <TableCell>PayPal</TableCell>
                          <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">INV003</TableCell>
                          <TableCell>
                            <Badge variant="destructive">Unpaid</Badge>
                          </TableCell>
                          <TableCell>Bank Transfer</TableCell>
                          <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Pagination */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pagination</CardTitle>
                    <CardDescription>
                      Navigate through multiple pages
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Separator className="my-8" />
            <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Bot className="h-5 w-5 text-gray-600" />
                  <p className="font-medium text-gray-800">
                    Ready to Customize
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  All these components are available for Flint to use when
                  building your custom app. Just describe what you want and
                  Flint will choose the right components.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
