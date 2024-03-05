"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const DummyCard = ({
  title,
  description,
  isLoading,
}: {
  title: string;
  description: string;
  isLoading: boolean;
}) => {
  return (
    <Card>
      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardDescription>
          {isLoading ? "Loading..." : description}
        </CardDescription>
        <CardFooter>
          <Button onClick={() => console.log("Close")}>Close</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
