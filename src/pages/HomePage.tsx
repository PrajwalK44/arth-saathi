import { useState } from "react";
import { Card } from "../components/common/Card";
import { CTAButton } from "../components/common/CTAButton";
import PageLayout from "../components/layout/PageLayout";
import {
  Play,
  User,
  BarChart3,
  Shield,
  TrendingUp,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState<
    "demo" | "profile" | "portfolio"
  >("demo");
  return (
    <PageLayout className="relative overflow-hidden bg-gradient-mesh">
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse floating"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse floating-delayed"></div>
        <div
          className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Geometric shapes */}
        <div
          className="absolute top-20 right-20 w-32 h-32 border border-accent/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 border border-primary/20 rotate-12 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-bounce-gentle"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Star className="h-4 w-4 text-accent mr-2" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                AI-Powered Financial Coaching
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Personal Board of
              <span className="block gradient-text mt-2">
                AI Financial Agents
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Experience realistic financial scenarios through AI-powered
              simulations. Make better money decisions with personalized
              coaching tailored to your unique situation.
            </p>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-12 mb-12">
            <div className="flex flex-col items-center text-primary-foreground/70 group cursor-pointer">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 transition-smooth group-hover:scale-110">
                <Shield className="h-8 w-8" />
              </div>
              <span className="text-sm mt-3 font-medium">Secure & Private</span>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/70 group cursor-pointer">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 transition-smooth group-hover:scale-110">
                <TrendingUp className="h-8 w-8" />
              </div>
              <span className="text-sm mt-3 font-medium">Personalized</span>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/70 group cursor-pointer">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 transition-smooth group-hover:scale-110">
                <Zap className="h-8 w-8" />
              </div>
              <span className="text-sm mt-3 font-medium">Interactive</span>
            </div>
          </div>

          {/* Quick Start Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton
              to="/simulation/default"
              variant="accent"
              size="lg"
              className="group shadow-medium hover:shadow-lg"
            >
              <Play className="h-5 w-5 mr-2" />
              Try Instant Demo
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </CTAButton>
            <CTAButton
              to="/onboarding"
              variant="primary"
              size="lg"
              className="group shadow-medium hover:shadow-lg border border-white/20"
            >
              <User className="h-5 w-5 mr-2" />
              Get Started
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </CTAButton>
          </div>
        </div>

        {/* Interactive Features Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <Zap className="h-4 w-4 text-accent mr-2" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Choose Your Path
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Three ways to{" "}
              <span className="gradient-text">unlock your potential</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Whether you're starting fresh or have existing investments, we've
              got the perfect path for your financial journey
            </p>
          </div>

          {/* Interactive Features Layout */}
          <div className="max-w-6xl mx-auto">
            <Card className="bg-card/95 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Feature List - Left Side */}
                <div className="lg:col-span-2 border-r border-white/10 bg-card/50">
                  <div className="p-8 space-y-4">
                    {/* Demo Feature */}
                    <div
                      className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                        activeFeature === "demo"
                          ? "bg-accent/10 border-accent/30 shadow-lg"
                          : "bg-transparent border-white/10 hover:border-accent/30 hover:bg-accent/5"
                      }`}
                      onClick={() => setActiveFeature("demo")}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-xl border transition-transform group-hover:scale-110 ${
                            activeFeature === "demo"
                              ? "bg-accent/30 border-accent/40"
                              : "bg-accent/20 border-accent/30"
                          }`}
                        >
                          <Play className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary-foreground mb-1">
                            Try Demo
                          </h3>
                          <p className="text-text-secondary text-sm">
                            Quick 5-minute experience
                          </p>
                        </div>
                        <div
                          className={`text-accent transition-opacity ${
                            activeFeature === "demo"
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Profile Feature */}
                    <div
                      className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                        activeFeature === "profile"
                          ? "bg-primary/10 border-primary/30 shadow-lg"
                          : "bg-transparent border-white/10 hover:border-primary/30 hover:bg-primary/5"
                      }`}
                      onClick={() => setActiveFeature("profile")}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-xl border transition-transform group-hover:scale-110 ${
                            activeFeature === "profile"
                              ? "bg-primary/30 border-primary/40"
                              : "bg-primary/20 border-primary/30"
                          }`}
                        >
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary-foreground mb-1">
                            Create Profile
                          </h3>
                          <p className="text-text-secondary text-sm">
                            Personalized experience
                          </p>
                          <div className="inline-flex bg-primary/20 backdrop-blur-sm rounded-full px-2 py-1 mt-1">
                            <span className="text-xs font-medium text-primary">
                              Recommended
                            </span>
                          </div>
                        </div>
                        <div
                          className={`text-primary transition-opacity ${
                            activeFeature === "profile"
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Portfolio Feature */}
                    <div
                      className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                        activeFeature === "portfolio"
                          ? "bg-secondary/10 border-secondary/30 shadow-lg"
                          : "bg-transparent border-white/10 hover:border-secondary/30 hover:bg-secondary/5"
                      }`}
                      onClick={() => setActiveFeature("portfolio")}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-xl border transition-transform group-hover:scale-110 ${
                            activeFeature === "portfolio"
                              ? "bg-secondary/30 border-secondary/40"
                              : "bg-secondary/20 border-secondary/30"
                          }`}
                        >
                          <BarChart3 className="h-6 w-6 text-secondary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary-foreground mb-1">
                            Portfolio Check
                          </h3>
                          <p className="text-text-secondary text-sm">
                            For existing investors
                          </p>
                        </div>
                        <div
                          className={`text-secondary-foreground transition-opacity ${
                            activeFeature === "portfolio"
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Details - Right Side */}
                <div className="lg:col-span-3">
                  {/* Demo Content */}
                  {activeFeature === "demo" && (
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl border border-accent/30">
                            <Play className="h-8 w-8 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-primary-foreground">
                              Try Demo
                            </h3>
                            <p className="text-text-secondary">
                              Jump right in and experience the magic
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-accent">
                            5 min
                          </div>
                          <div className="text-xs text-text-secondary">
                            Duration
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-text-secondary text-lg leading-relaxed">
                          Experience a pre-built scenario as a freelance
                          designer. Navigate through 12 months of realistic
                          financial decisions with AI-powered coaching guiding
                          you every step of the way.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-accent">
                              ₹25,000
                            </div>
                            <div className="text-sm text-text-secondary">
                              Starting Net Worth
                            </div>
                          </div>
                          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-accent">
                              ₹4,500
                            </div>
                            <div className="text-sm text-text-secondary">
                              Monthly Income
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary-foreground">
                            What you'll experience:
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-text-secondary">
                                Realistic market scenarios and economic events
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-text-secondary">
                                AI-powered financial coaching and advice
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-text-secondary">
                                Instant results and insights
                              </span>
                            </div>
                          </div>
                        </div>

                        <CTAButton
                          to="/simulation/default"
                          variant="accent"
                          size="lg"
                          className="w-full group"
                        >
                          Start Instant Demo
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                        </CTAButton>
                      </div>
                    </div>
                  )}

                  {/* Profile Content */}
                  {activeFeature === "profile" && (
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl border border-primary/30">
                            <User className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-primary-foreground">
                              Create Your Profile
                            </h3>
                            <p className="text-text-secondary">
                              Get a simulation tailored to you
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            10 min
                          </div>
                          <div className="text-xs text-text-secondary">
                            Setup
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-text-secondary text-lg leading-relaxed">
                          Answer a few questions about your financial situation,
                          goals, and challenges. Our AI will create personalized
                          scenarios that match your unique circumstances.
                        </p>

                        {/* Process Steps */}
                        <div className="space-y-4">
                          <h4 className="font-semibold text-primary-foreground">
                            How it works:
                          </h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">
                                  1
                                </span>
                              </div>
                              <span className="text-text-secondary">
                                Answer 5 quick questions about your finances
                              </span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">
                                  2
                                </span>
                              </div>
                              <span className="text-text-secondary">
                                Get your personalized financial persona
                              </span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">
                                  3
                                </span>
                              </div>
                              <span className="text-text-secondary">
                                Start your customized simulation
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                          <div className="text-sm font-medium text-primary mb-3">
                            You'll get:
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm text-text-secondary">
                              • Scenarios based on your income and expenses
                            </div>
                            <div className="text-sm text-text-secondary">
                              • Personalized financial advice and coaching
                            </div>
                            <div className="text-sm text-text-secondary">
                              • Custom insights and recommendations
                            </div>
                            <div className="text-sm text-text-secondary">
                              • Progress tracking over time
                            </div>
                          </div>
                        </div>

                        <CTAButton
                          to="/onboarding"
                          variant="primary"
                          size="lg"
                          className="w-full group"
                        >
                          Get Started
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                        </CTAButton>
                      </div>
                    </div>
                  )}

                  {/* Portfolio Content */}
                  {activeFeature === "portfolio" && (
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl border border-secondary/30">
                            <BarChart3 className="h-8 w-8 text-secondary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-primary-foreground">
                              Portfolio Health Check
                            </h3>
                            <p className="text-text-secondary">
                              Optimize your existing investments
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-secondary-foreground">
                            Free
                          </div>
                          <div className="text-xs text-text-secondary">
                            Analysis
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-text-secondary text-lg leading-relaxed">
                          Already have investments? Upload your portfolio data
                          for a comprehensive analysis. Get personalized
                          recommendations from our AI financial advisors to
                          optimize your allocation and improve performance.
                        </p>

                        {/* Analysis Features */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 text-center">
                            <div className="text-lg font-bold text-secondary-foreground mb-1">
                              Analyze
                            </div>
                            <div className="text-sm text-text-secondary">
                              Portfolio performance & risk
                            </div>
                          </div>
                          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 text-center">
                            <div className="text-lg font-bold text-secondary-foreground mb-1">
                              Optimize
                            </div>
                            <div className="text-sm text-text-secondary">
                              Asset allocation strategy
                            </div>
                          </div>
                          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 text-center">
                            <div className="text-lg font-bold text-secondary-foreground mb-1">
                              Improve
                            </div>
                            <div className="text-sm text-text-secondary">
                              Risk management
                            </div>
                          </div>
                        </div>

                        {/* Supported Formats */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary-foreground">
                            Supported formats:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-secondary/10 text-secondary-foreground text-sm px-3 py-1 rounded-full border border-secondary/20">
                              CSV Files
                            </span>
                            <span className="bg-secondary/10 text-secondary-foreground text-sm px-3 py-1 rounded-full border border-secondary/20">
                              Excel Sheets
                            </span>
                            <span className="bg-secondary/10 text-secondary-foreground text-sm px-3 py-1 rounded-full border border-secondary/20">
                              PDF Reports
                            </span>
                          </div>
                        </div>

                        <CTAButton
                          to="/analyze"
                          variant="secondary"
                          size="lg"
                          className="w-full group"
                        >
                          Analyze My Portfolio
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                        </CTAButton>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">
            Powered by AI • Secure & Private • No Financial Advice
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
