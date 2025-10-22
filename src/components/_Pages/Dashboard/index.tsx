"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Eye,
  FileText,
  MessageSquare,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

interface DashboardData {
  totalPosts: number;
  totalDrafts: number;
  totalPublished: number;
  postsThisMonth: number;
  postsLastMonth: number;
  draftsThisMonth: number;
  draftsLastMonth: number;
  publishedThisMonth: number;
  publishedLastMonth: number;
}

interface DashboardProps {
  data: DashboardData;
}

export default function Dashboard({ data }: DashboardProps) {
  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
  };

  const postsGrowth = calculateGrowth(data.postsThisMonth, data.postsLastMonth);
  const draftsGrowth = calculateGrowth(
    data.draftsThisMonth,
    data.draftsLastMonth
  );
  const publishedGrowth = calculateGrowth(
    data.publishedThisMonth,
    data.publishedLastMonth
  );

  return (
    <div className="p-6 space-y-6 container mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-100 shadow-lg border-2 border-gray-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Artigos
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalPosts}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {postsGrowth >= 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span
                className={postsGrowth >= 0 ? "text-green-500" : "text-red-500"}
              >
                {Math.abs(postsGrowth).toFixed(1)}% vs mês anterior
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-100 shadow-lg border-2 border-gray-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Publicados</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalPublished}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {publishedGrowth >= 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span
                className={
                  publishedGrowth >= 0 ? "text-green-500" : "text-red-500"
                }
              >
                {Math.abs(publishedGrowth).toFixed(1)}% vs mês anterior
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-100 shadow-lg border-2 border-gray-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rascunhos</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.totalDrafts}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {draftsGrowth >= 0 ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span
                className={
                  draftsGrowth >= 0 ? "text-green-500" : "text-red-500"
                }
              >
                {Math.abs(draftsGrowth).toFixed(1)}% vs mês anterior
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
