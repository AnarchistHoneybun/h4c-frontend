import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from 'lucide-react';

interface ScrollCardListProps {
  onCardClick: (title: string) => void;
}

const ScrollCardList: React.FC<ScrollCardListProps> = ({ onCardClick }) => {
  const cardTitles = [
    "Project Alpha", "Task Beta", "Initiative Gamma",
  ];

  return (
    <ScrollArea className="h-[calc(100vh-12rem)] w-full rounded-md">
      <div className="pr-4 space-y-4">
        {cardTitles.map((title, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() => onCardClick(title)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
        {/* <Card className="cursor-pointer hover:bg-accent transition-colors border-dashed">
          <CardHeader className="flex flex-row items-center justify-center h-20">
            <Plus className="mr-2" />
            <CardTitle className="text-lg">Add New</CardTitle>
          </CardHeader>
        </Card> */}
        <Card 
  className="bg-foreground text-background cursor-pointer hover:bg-accent hover:border-dashed hover:text-foreground transition-colors border-dashed mx-auto mt-8"
  style={{ maxWidth: '50%'}}
>
  <CardHeader className="flex flex-row items-center justify-center h-20">
    <Plus className="mr-2" />
    <CardTitle className="text-lg">Add New</CardTitle>
  </CardHeader>
</Card>
      </div>
    </ScrollArea>
  );
};

export default ScrollCardList;