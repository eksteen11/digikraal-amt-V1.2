"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, ExternalLink, Play, TrendingUp, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Artistic Background Component
const ArtisticBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden">
    {/* Main gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />

    {/* Pricing pattern overlay */}
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Grid pattern */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#EF4444" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Artistic price charts */}
      <g opacity="0.15">
        {/* Chart 1 - Top left */}
        <path
          d="M50,150 Q150,100 250,120 T450,80 T650,60"
          stroke="url(#priceGradient)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M50,180 Q120,130 200,150 T400,110 T600,90"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* Chart 2 - Center */}
        <path
          d="M300,400 Q400,350 500,370 T700,330 T900,310"
          stroke="#EF4444"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M300,430 Q380,380 480,400 T680,360 T880,340"
          stroke="#F97316"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* Chart 3 - Bottom right */}
        <path
          d="M700,600 Q800,550 900,570 T1100,530 T1150,510"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </g>

      {/* Floating data points */}
      {[
        { x: 150, y: 120, color: "#3B82F6", delay: "0s" },
        { x: 250, y: 120, color: "#EF4444", delay: "0.5s" },
        { x: 450, y: 80, color: "#F97316", delay: "1s" },
        { x: 500, y: 370, color: "#3B82F6", delay: "1.5s" },
        { x: 700, y: 330, color: "#EF4444", delay: "2s" },
        { x: 900, y: 570, color: "#F97316", delay: "2.5s" },
      ].map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="4"
          fill={point.color}
          className="animate-pulse"
          style={{ animationDelay: point.delay }}
        />
      ))}

      {/* Price indicators */}
      <g opacity="0.1">
        <text x="100" y="100" fill="#3B82F6" fontSize="12" fontFamily="monospace">
          R38.50
        </text>
        <text x="300" y="200" fill="#EF4444" fontSize="12" fontFamily="monospace">
          R85.20
        </text>
        <text x="500" y="150" fill="#F97316" fontSize="12" fontFamily="monospace">
          R3,250
        </text>
        <text x="700" y="300" fill="#3B82F6" fontSize="12" fontFamily="monospace">
          R149
        </text>
        <text x="900" y="250" fill="#EF4444" fontSize="12" fontFamily="monospace">
          +2.4%
        </text>
        <text x="1000" y="400" fill="#F97316" fontSize="12" fontFamily="monospace">
          -1.2%
        </text>
      </g>
    </svg>

    {/* Floating orbs */}
    <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl opacity-20 animate-pulse bg-blue-500" />
    <div className="absolute top-40 right-20 w-24 h-24 rounded-full blur-lg opacity-30 animate-bounce bg-red-500" />
    <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full blur-2xl opacity-15 animate-pulse bg-orange-500" />
    <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full blur-md opacity-25 animate-bounce bg-blue-600" />
    <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full blur-lg opacity-20 animate-pulse bg-red-600" />
  </div>
)

export default function MarketInsightsPage() {
  const [activeTab, setActiveTab] = useState("livestock")

  return (
    <div className="font-sans min-h-screen bg-gray-900 text-white relative">
      {/* Artistic Background */}
      <ArtisticBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-700">
                    <Image src="/images/digikraal-logo.png" alt="Digikraal Logo" width={150} height={50} />
                  </div>
                  <span className="text-2xl font-bold text-gray-400">×</span>
                  <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-700">
                    <Image src="/images/amt-logo.png" alt="AMT Logo" width={100} height={50} />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-700">
                  <Badge className="bg-[#DC2626] hover:bg-[#DC2626]/90 text-white">NEW</Badge>
                  <span className="text-sm font-medium text-gray-300">Powered by AMT</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B82F6]">
                  Market Pricing, Delivered Weekly
                </h1>

                <p className="text-xl md:text-2xl text-gray-300">
                  Expert market insights from AMT — now available to Digikraal members.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#2876BC] hover:bg-[#2876BC]/90 text-white uppercase font-bold shadow-md transition-transform hover:scale-105"
                    size="lg"
                  >
                    Subscribe to Live Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-[#FF8410] text-[#FF8410] hover:bg-[#FF8410]/10 uppercase font-bold transition-transform hover:scale-105 bg-gray-800/50 backdrop-blur-sm"
                    size="lg"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Latest Report
                  </Button>
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
                  <Image
                    src="/images/live-market-data.png"
                    alt="Live Market Data - Real-time Agricultural Insights"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get Every Week Section */}
        <section className="bg-gray-800/50 backdrop-blur-sm py-16 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What You'll Get Every Week</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#2876BC]/20 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-[#2876BC]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Livestock Prices</h3>
                  <p className="text-gray-300">Track weekly auction and private sale averages</p>
                </CardContent>
              </Card>

              <Card className="border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#2876BC]/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-[#2876BC]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Grain Prices</h3>
                  <p className="text-gray-300">View local maize and wheat trends</p>
                </CardContent>
              </Card>

              <Card className="border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#2876BC]/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-[#2876BC]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Vegetable Index</h3>
                  <p className="text-gray-300">Monitor shifts in demand & supply</p>
                </CardContent>
              </Card>

              <Card className="border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#2876BC]/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-[#2876BC]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Expert Video Reports</h3>
                  <p className="text-gray-300">Weekly video summaries by Johnny</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why We Partnered with AMT Section */}
        <section className="py-16 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why We Partnered with AMT</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-700">
                  <div className="mb-4 flex justify-center">
                    <div className="h-16 w-48 relative bg-gray-800 p-3 rounded border border-gray-600">
                      <Image src="/images/amt-logo.png" alt="AMT Logo" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-700">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="AMT Report Screenshot"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#DC2626]/90 rounded-full p-4 cursor-pointer hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <blockquote className="text-lg md:text-xl text-gray-300">
                  "AMT is South Africa's most trusted agri-forecasting platform. Their insights help farmers and
                  agri-investors make smart, data-driven decisions. With Digikraal, this information is now one click
                  away."
                </blockquote>

                <Button
                  variant="outline"
                  className="border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]/10 bg-gray-800/50 backdrop-blur-sm"
                  asChild
                >
                  <Link href="https://amtrends.co.za" target="_blank" rel="noopener noreferrer">
                    Visit AMT Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Weekly Prices Section */}
        <section className="bg-gray-800/50 backdrop-blur-sm py-16 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Live Weekly Prices</h2>
            <p className="text-center text-gray-400 mb-12">Preview our latest market insights</p>

            <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-600">
              <Tabs defaultValue="livestock" className="w-full" onValueChange={(value) => setActiveTab(value)}>
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-600">
                  <TabsTrigger value="livestock" className={`text-lg ${activeTab === "livestock" ? "text-white" : ""}`}>
                    Livestock
                  </TabsTrigger>
                  <TabsTrigger value="grain" className={`text-lg ${activeTab === "grain" ? "text-white" : ""}`}>
                    Grain
                  </TabsTrigger>
                  <TabsTrigger
                    value="vegetables"
                    className={`text-lg ${activeTab === "vegetables" ? "text-white" : ""}`}
                  >
                    Vegetables
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="livestock" className="space-y-4">
                  <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow border border-gray-600">
                    <h3 className="text-xl font-bold mb-4 text-white">Weekly Livestock Price Index</h3>
                    <div className="aspect-[2/1] relative mb-4 bg-gray-700/50 rounded-lg p-4">
                      <svg className="w-full h-full" viewBox="0 0 800 400">
                        <path
                          d="M50,350 L150,280 L250,300 L350,220 L450,250 L550,180 L650,200 L750,150"
                          fill="none"
                          stroke="#2876BC"
                          strokeWidth="3"
                        />
                        <circle cx="150" cy="280" r="5" fill="#2876BC" />
                        <circle cx="250" cy="300" r="5" fill="#2876BC" />
                        <circle cx="350" cy="220" r="5" fill="#2876BC" />
                        <circle cx="450" cy="250" r="5" fill="#2876BC" />
                        <circle cx="550" cy="180" r="5" fill="#2876BC" />
                        <circle cx="650" cy="200" r="5" fill="#2876BC" />
                        <circle cx="750" cy="150" r="5" fill="#2876BC" />

                        <line x1="50" y1="350" x2="750" y2="350" stroke="#4B5563" strokeWidth="1" />
                        <text x="50" y="370" fontSize="12" fill="#9CA3AF">
                          Jan
                        </text>
                        <text x="150" y="370" fontSize="12" fill="#9CA3AF">
                          Feb
                        </text>
                        <text x="250" y="370" fontSize="12" fill="#9CA3AF">
                          Mar
                        </text>
                        <text x="350" y="370" fontSize="12" fill="#9CA3AF">
                          Apr
                        </text>
                        <text x="450" y="370" fontSize="12" fill="#9CA3AF">
                          May
                        </text>
                        <text x="550" y="370" fontSize="12" fill="#9CA3AF">
                          Jun
                        </text>
                        <text x="650" y="370" fontSize="12" fill="#9CA3AF">
                          Jul
                        </text>
                        <text x="750" y="370" fontSize="12" fill="#9CA3AF">
                          Aug
                        </text>
                      </svg>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Beef Average</p>
                        <p className="text-xl font-bold text-white">R38.50/kg</p>
                        <p className="text-sm text-green-400 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          +2.4%
                        </p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Lamb Average</p>
                        <p className="text-xl font-bold text-white">R85.20/kg</p>
                        <p className="text-sm text-red-400">-1.2%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Goat Average</p>
                        <p className="text-xl font-bold text-white">R72.40/kg</p>
                        <p className="text-sm text-green-400">+0.8%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Auction Volume</p>
                        <p className="text-xl font-bold text-white">12,450</p>
                        <p className="text-sm text-green-400">+5.3%</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="grain" className="space-y-4">
                  <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow border border-gray-600">
                    <h3 className="text-xl font-bold mb-4 text-white">Weekly Grain Price Index</h3>
                    <div className="aspect-[2/1] relative mb-4 bg-gray-700/50 rounded-lg p-4">
                      <svg className="w-full h-full" viewBox="0 0 800 400">
                        <path
                          d="M50,300 L150,320 L250,280 L350,260 L450,220 L550,240 L650,200 L750,180"
                          fill="none"
                          stroke="#2876BC"
                          strokeWidth="3"
                        />
                        <circle cx="150" cy="320" r="5" fill="#2876BC" />
                        <circle cx="250" cy="280" r="5" fill="#2876BC" />
                        <circle cx="350" cy="260" r="5" fill="#2876BC" />
                        <circle cx="450" cy="220" r="5" fill="#2876BC" />
                        <circle cx="550" cy="240" r="5" fill="#2876BC" />
                        <circle cx="650" cy="200" r="5" fill="#2876BC" />
                        <circle cx="750" cy="180" r="5" fill="#2876BC" />

                        <line x1="50" y1="350" x2="750" y2="350" stroke="#4B5563" strokeWidth="1" />
                        <text x="50" y="370" fontSize="12" fill="#9CA3AF">
                          Jan
                        </text>
                        <text x="150" y="370" fontSize="12" fill="#9CA3AF">
                          Feb
                        </text>
                        <text x="250" y="370" fontSize="12" fill="#9CA3AF">
                          Mar
                        </text>
                        <text x="350" y="370" fontSize="12" fill="#9CA3AF">
                          Apr
                        </text>
                        <text x="450" y="370" fontSize="12" fill="#9CA3AF">
                          May
                        </text>
                        <text x="550" y="370" fontSize="12" fill="#9CA3AF">
                          Jun
                        </text>
                        <text x="650" y="370" fontSize="12" fill="#9CA3AF">
                          Jul
                        </text>
                        <text x="750" y="370" fontSize="12" fill="#9CA3AF">
                          Aug
                        </text>
                      </svg>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">White Maize</p>
                        <p className="text-xl font-bold text-white">R3,250/ton</p>
                        <p className="text-sm text-green-400">+1.8%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Yellow Maize</p>
                        <p className="text-xl font-bold text-white">R3,180/ton</p>
                        <p className="text-sm text-green-400">+2.1%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Wheat</p>
                        <p className="text-xl font-bold text-white">R4,850/ton</p>
                        <p className="text-sm text-red-400">-0.5%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Soybean</p>
                        <p className="text-xl font-bold text-white">R7,120/ton</p>
                        <p className="text-sm text-red-400">-1.2%</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="vegetables" className="space-y-4">
                  <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow border border-gray-600">
                    <h3 className="text-xl font-bold mb-4 text-white">Weekly Vegetable Price Index</h3>
                    <div className="aspect-[2/1] relative mb-4 bg-gray-700/50 rounded-lg p-4">
                      <svg className="w-full h-full" viewBox="0 0 800 400">
                        <path
                          d="M50,250 L150,270 L250,220 L350,300 L450,180 L550,220 L650,170 L750,200"
                          fill="none"
                          stroke="#2876BC"
                          strokeWidth="3"
                        />
                        <circle cx="150" cy="270" r="5" fill="#2876BC" />
                        <circle cx="250" cy="220" r="5" fill="#2876BC" />
                        <circle cx="350" cy="300" r="5" fill="#2876BC" />
                        <circle cx="450" cy="180" r="5" fill="#2876BC" />
                        <circle cx="550" cy="220" r="5" fill="#2876BC" />
                        <circle cx="650" cy="170" r="5" fill="#2876BC" />
                        <circle cx="750" cy="200" r="5" fill="#2876BC" />

                        <line x1="50" y1="350" x2="750" y2="350" stroke="#4B5563" strokeWidth="1" />
                        <text x="50" y="370" fontSize="12" fill="#9CA3AF">
                          Jan
                        </text>
                        <text x="150" y="370" fontSize="12" fill="#9CA3AF">
                          Feb
                        </text>
                        <text x="250" y="370" fontSize="12" fill="#9CA3AF">
                          Mar
                        </text>
                        <text x="350" y="370" fontSize="12" fill="#9CA3AF">
                          Apr
                        </text>
                        <text x="450" y="370" fontSize="12" fill="#9CA3AF">
                          May
                        </text>
                        <text x="550" y="370" fontSize="12" fill="#9CA3AF">
                          Jun
                        </text>
                        <text x="650" y="370" fontSize="12" fill="#9CA3AF">
                          Jul
                        </text>
                        <text x="750" y="370" fontSize="12" fill="#9CA3AF">
                          Aug
                        </text>
                      </svg>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Potatoes</p>
                        <p className="text-xl font-bold text-white">R85.50/10kg</p>
                        <p className="text-sm text-green-400">+3.2%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Onions</p>
                        <p className="text-xl font-bold text-white">R65.20/10kg</p>
                        <p className="text-sm text-red-400">-2.5%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Tomatoes</p>
                        <p className="text-xl font-bold text-white">R120.40/box</p>
                        <p className="text-sm text-green-400">+8.3%</p>
                      </div>
                      <div className="bg-[#2876BC]/20 p-4 rounded-lg border border-gray-600">
                        <p className="text-sm text-gray-400">Cabbage</p>
                        <p className="text-xl font-bold text-white">R45.60/bag</p>
                        <p className="text-sm text-red-400">-1.8%</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 italic flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Subscribers get full access every Monday morning.
                </p>
                <Button
                  variant="outline"
                  className="border-[#FF8410] text-[#FF8410] hover:bg-[#FF8410]/10 bg-gray-800/50 backdrop-blur-sm"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Sample Report (PDF)
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">What Farmers Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-700">
                      <svg
                        className="absolute inset-0 h-full w-full text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Johan Pretorius</h3>
                      <p className="text-sm text-gray-400">Livestock Farmer, Mpumalanga</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "Thanks to AMT, I sold at the peak of the week. The insights helped me time my sales perfectly."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-700">
                      <svg
                        className="absolute inset-0 h-full w-full text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Thabo Molefe</h3>
                      <p className="text-sm text-gray-400">Grain Producer, Free State</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "The grain reports help me plan input costs better. I've improved my margins by 15% since
                    subscribing."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-700">
                      <svg
                        className="absolute inset-0 h-full w-full text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Sarah van Wyk</h3>
                      <p className="text-sm text-gray-400">Mixed Farmer, Western Cape</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "Johnny's weekly videos are gold. Clear, concise market analysis that helps me make better
                    decisions."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="bg-gray-800/50 backdrop-blur-sm py-16 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Free</h3>
                    <div className="text-3xl font-bold text-white">
                      R0<span className="text-lg font-normal text-gray-400">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Basic access to Digikraal
                    </li>
                    <li className="flex items-center text-gray-500">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      No AMT reports
                    </li>
                    <li className="flex items-center text-gray-500">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      No price charts
                    </li>
                    <li className="flex items-center text-gray-500">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      No video analysis
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-[#2876BC] text-[#2876BC] hover:bg-[#2876BC]/10 uppercase font-bold bg-gray-800/50 backdrop-blur-sm"
                  >
                    Current Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-600 shadow-xl relative transform scale-105 bg-gray-800/70 backdrop-blur-sm">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-[#FF8410] text-white px-4 py-1">First Month Free</Badge>
                </div>
                <CardContent className="p-6 border-t-4 border-[#2876BC]">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Market Watcher</h3>
                    <div className="text-3xl font-bold text-white">
                      R149<span className="text-lg font-normal text-gray-400">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Full access to Digikraal
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      AMT weekly price reports
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Interactive price charts
                    </li>
                    <li className="flex items-center text-gray-500">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      No video analysis
                    </li>
                  </ul>
                  <Button className="w-full bg-[#2876BC] hover:bg-[#2876BC]/90 text-white uppercase font-bold shadow-md transition-transform hover:scale-105">
                    Upgrade Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Pro Trader</h3>
                    <div className="text-3xl font-bold text-white">
                      R249<span className="text-lg font-normal text-gray-400">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Full access to Digikraal
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Full AMT reports
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Video analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Future forecasting alerts
                    </li>
                  </ul>
                  <Button className="w-full bg-[#FF8410] hover:bg-[#FF8410]/90 text-white uppercase font-bold shadow-md transition-transform hover:scale-105">
                    Upgrade Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="relative py-16 bg-gray-900 border-t border-gray-700">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/agricultural-background.png"
              alt="Agricultural market data visualization with livestock and crops"
              fill
              className="object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[1px]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Access South Africa's best pricing intelligence — every week.
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of farmers making smarter decisions with AMT's market insights, now available exclusively
              through Digikraal.
            </p>
            <Button
              size="lg"
              className="bg-[#2876BC] hover:bg-[#2876BC]/90 text-white uppercase font-bold shadow-md text-lg px-8 py-6 transition-transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
