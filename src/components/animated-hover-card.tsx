import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link2Icon } from "lucide-react";
import Link from "next/link";

interface AnimatedHoverCardProps {
  title: string;
  description?: string;
  content: string;
}

export function AnimatedHoverCardComponent({
  title,
  description,
  content,
}: AnimatedHoverCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden group text-white">
      <div className="relative">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="font-semibold">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="font-semibold text-sm">
          <p>{content}</p>
        </CardContent>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
        <Link
          href="/showcase"
          className="absolute text-black flex items-center justify-center font-bold  inset-0 bg-white dark:bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        >
          <Link2Icon className="w-8 h-8" />
        </Link>
      </div>
    </Card>
  );
}
