"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ScrollCardList from '@/components/ScrollCardList';

export default function Dash() {
  const [mainCardTitle, setMainCardTitle] = useState("Main Content Area");

  const handleCardClick = (title: string) => {
    setMainCardTitle(title);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-6">
        <div className="w-1/3">
          <ScrollCardList onCardClick={handleCardClick} />
        </div>
        <Separator orientation="vertical" className="h-[calc(100vh-12rem)]" />
        <div className="w-2/3">
          <Card className="h-[calc(100vh-12rem)]">
            <CardHeader>
              <CardTitle>{mainCardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is a placeholder for the main content. You can add more detailed information or components here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}