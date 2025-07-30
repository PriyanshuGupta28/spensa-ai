"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Brain,
  ArrowLeft,
  Zap,
  Shield,
  Clock,
  Target,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export default function AboutDetails() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen my-8">
      <main className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:px-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About ExpensaAi
            </Badge>
            <h1 className="text-5xl font-bold  mb-6">
              Your Personal Finance AI Assistant
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
              We&apos;re revolutionizing personal finance management with
              cutting-edge AI technology that understands your spending patterns
              and helps you make smarter financial decisions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <Card className="border border-dashed shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold ">How Our AI Works</h2>
                </div>
                <p className=" text-lg leading-relaxed">
                  Our smart AI analyzes your daily, weekly, or monthly expenses
                  and gives you clear insights about your spending habits. It
                  looks at your past expenses, detects unnecessary or excessive
                  spending, and highlights areas where you can save money. Just
                  ask:
                  <span className="font-semibold text-primary dark:text-blue-500">
                    {" "}
                    &quot;Where am I wasting money this month?&quot;
                  </span>
                  — and our AI will tell you!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold  text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Expense Analysis",
                  description:
                    "Deep dive into your spending patterns with AI-powered analytics that reveal hidden insights.",
                },
                {
                  icon: Lightbulb,
                  title: "Smart Insights",
                  description:
                    "Get personalized recommendations on where to cut costs and optimize your budget.",
                },
                {
                  icon: Target,
                  title: "Waste Detection",
                  description:
                    "Automatically identify unnecessary expenses and recurring charges you might have forgotten.",
                },
                {
                  icon: Clock,
                  title: "Real-time Monitoring",
                  description:
                    "Track your expenses in real-time with instant notifications and alerts.",
                },
                {
                  icon: Shield,
                  title: "Secure & Private",
                  description:
                    "Your financial data is encrypted and protected with bank-level security measures.",
                },
                {
                  icon: Zap,
                  title: "Instant Answers",
                  description:
                    "Ask questions in natural language and get immediate, actionable insights.",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-blue-500 mb-2" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-neutral-500">Users Saving Money</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-neutral-500">Total Savings Identified</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-neutral-500">User Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
