import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
	Bell,
	Heart,
	Star,
	Shield,
	AlertCircle,
	CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function ComponentShowcase() {
	return (
		<div className="min-h-screen">
			<section className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-mono">
						Over Simplified And Flattened Components
					</h2>
					<p className="text-xl text-primary mb-8 max-w-2xl mx-auto">
						I hate rounded corners and shadows and un needed animations <br />{" "}
						but do you ?
					</p>
					<div className="flex items-center justify-center space-x-4">
						<Button variant="outline" size="lg" asChild>
							<Link href={"/components"}>View Components</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Component Showcase */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<Tabs defaultValue="buttons" className="w-full">
						<TabsList className="grid w-full grid-cols-5 mb-8">
							<TabsTrigger value="buttons">Buttons</TabsTrigger>
							<TabsTrigger value="forms">Forms</TabsTrigger>
							<TabsTrigger value="cards">Cards</TabsTrigger>
							<TabsTrigger value="feedback">Feedback</TabsTrigger>
							<TabsTrigger value="data">Data</TabsTrigger>
						</TabsList>

						{/* Buttons Tab */}
						<TabsContent value="buttons" className="space-y-8">
							<Card>
								<CardHeader>
									<CardTitle>Button Variants</CardTitle>
									<CardDescription>
										Different styles and sizes for every use case
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="flex flex-wrap gap-3">
										<Button>Default</Button>
										<Button variant="secondary">Secondary</Button>
										<Button variant="outline">Outline</Button>
										<Button variant="ghost">Ghost</Button>
										<Button variant="link">Link</Button>
										<Button variant="destructive">Destructive</Button>
									</div>
									<Separator />
									<div className="flex flex-wrap items-center gap-3">
										<Button size="sm">Small</Button>
										<Button>Default</Button>
										<Button size="lg">Large</Button>
										<Button size="icon">
											<Heart className="w-4 h-4" />
										</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Forms Tab */}
						<TabsContent value="forms" className="space-y-8">
							<div className="grid md:grid-cols-2 gap-6">
								<Card>
									<CardHeader>
										<CardTitle>Form Controls</CardTitle>
										<CardDescription>
											Input fields and form elements
										</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input id="email" placeholder="Enter your email" />
										</div>
										<div className="flex items-center space-x-2">
											<Switch id="notifications" />
											<Label htmlFor="notifications">
												Enable notifications
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<Checkbox id="terms" />
											<Label htmlFor="terms">Accept terms and conditions</Label>
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>Selection Controls</CardTitle>
										<CardDescription>Radio buttons and sliders</CardDescription>
									</CardHeader>
									<CardContent className="space-y-4">
										<RadioGroup defaultValue="option-one">
											<div className="flex items-center space-x-2">
												<RadioGroupItem value="option-one" id="option-one" />
												<Label htmlFor="option-one">Option One</Label>
											</div>
											<div className="flex items-center space-x-2">
												<RadioGroupItem value="option-two" id="option-two" />
												<Label htmlFor="option-two">Option Two</Label>
											</div>
										</RadioGroup>
										<div className="space-y-2">
											<Label>Volume</Label>
											<Slider defaultValue={[50]} max={100} step={1} />
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						{/* Cards Tab */}
						<TabsContent value="cards" className="space-y-8">
							<div className="grid md:grid-cols-3 gap-6">
								<Card>
									<CardHeader className="pb-3">
										<div className="flex items-center space-x-3">
											<Avatar>
												<AvatarImage src="/placeholder.svg?height=40&width=40" />
												<AvatarFallback>JD</AvatarFallback>
											</Avatar>
											<div>
												<CardTitle className="text-base">John Doe</CardTitle>
												<CardDescription>Software Engineer</CardDescription>
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<p className="text-sm">
											&quot;This component library has transformed our
											development workflow. Highly recommended!&quot;
										</p>
										<div className="flex items-center mt-3">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className="w-4 h-4 fill-yellow-400 text-yellow-400"
												/>
											))}
										</div>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>Feature Card</CardTitle>
										<CardDescription>
											Showcase your product features
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex items-center space-x-3 mb-3">
											<div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
												<Shield className="w-5 h-5 text-blue-600" />
											</div>
											<div>
												<h4 className="font-semibold">Secure by Default</h4>
												<p className="text-sm">Built with security in mind</p>
											</div>
										</div>
										<Button variant="outline" size="sm" className="w-full">
											Learn More
										</Button>
									</CardContent>
								</Card>

								<Card>
									<CardHeader>
										<CardTitle>Stats Card</CardTitle>
										<CardDescription>Display key metrics</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold mb-1">2,847</div>
										<p className="text-sm mb-3">Total Downloads</p>
										<Progress value={75} className="h-2" />
										<p className="text-xs mt-2">75% of monthly goal</p>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						{/* Feedback Tab */}
						<TabsContent value="feedback" className="space-y-8">
							<div className="grid md:grid-cols-2 gap-6">
								<Alert>
									<AlertCircle />
									<AlertTitle>Heads up!</AlertTitle>
									<AlertDescription>
										You can add components to your app using the cli.
									</AlertDescription>
								</Alert>

								<Alert variant={"success"}>
									<CheckCircle2 />
									<AlertTitle>Success!</AlertTitle>
									<AlertDescription>
										Your changes have been saved successfully.
									</AlertDescription>
								</Alert>
							</div>

							<Card>
								<CardHeader>
									<CardTitle>Progress Indicators</CardTitle>
									<CardDescription>
										Show progress and loading states
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="space-y-2">
										<div className="flex justify-between text-sm">
											<span>Upload Progress</span>
											<span>45%</span>
										</div>
										<Progress value={45} />
									</div>
									<div className="space-y-2">
										<div className="flex justify-between text-sm">
											<span>Installation</span>
											<span>80%</span>
										</div>
										<Progress value={80} className="h-3" />
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						{/* Data Tab */}
						<TabsContent value="data" className="space-y-8">
							<Card>
								<CardHeader>
									<CardTitle>Badges & Labels</CardTitle>
									<CardDescription>
										Highlight important information
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										<Badge>Default</Badge>
										<Badge variant="secondary">Secondary</Badge>
										<Badge variant="outline">Outline</Badge>
										<Badge variant="destructive">Destructive</Badge>
										<Badge variant={"info"}>
											<Bell />
											New
										</Badge>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Avatar Groups</CardTitle>
									<CardDescription>
										Display user profiles and teams
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex -space-x-2">
										<Avatar className="border-2 border-white">
											<AvatarImage src="/placeholder.svg?height=40&width=40" />
											<AvatarFallback>AB</AvatarFallback>
										</Avatar>
										<Avatar className="border-2 border-white">
											<AvatarImage src="/placeholder.svg?height=40&width=40" />
											<AvatarFallback>CD</AvatarFallback>
										</Avatar>
										<Avatar className="border-2 border-white">
											<AvatarImage src="/placeholder.svg?height=40&width=40" />
											<AvatarFallback>EF</AvatarFallback>
										</Avatar>
										<Avatar className="border-2 border-white bg-slate-100">
											<AvatarFallback className="text-xs">+5</AvatarFallback>
										</Avatar>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</section>
		</div>
	);
}
