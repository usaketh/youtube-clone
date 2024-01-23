import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from '@/components/VideoCard';
const inter = Inter({ subsets: ["latin"] });
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
export default function Home() {
  return (
    <div>
      <AppBar/>
      <VideoGrid/>
    </div>
  );
}
