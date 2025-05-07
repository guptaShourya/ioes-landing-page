"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import videos from "../data/youtube-videos.json";
import { DialogTitle } from "@radix-ui/react-dialog";

const VIDEO_DATA = videos["videos"];
type VideoItem = {
  id: string;
  title: string;
  description: string;
};

export default function VideoStoriesSection() {
  const [open, setOpen] = useState(false);

  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const handlePlay = (video: VideoItem) => {
    setActiveVideo(video);
    setOpen(true);
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-[#f0ebe6]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block font-nibpro rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-800">
              Video Stories
            </div>
            <h2 className="text-4xl font-normal tracking-tighter sm:text-6xl">
              Watch Our Student Journeys
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
              See and hear our students share their experiences in their own
              words.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {VIDEO_DATA.map((video, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div
                className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200 cursor-pointer group"
                onClick={() => handlePlay(video)}
              >
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-800 text-white">
                    ▶
                  </div>
                </div>
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`Thumbnail of ${video.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">{video.title}</h3>
              <p className="text-gray-500">{video.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="bg-rose-800 hover:bg-rose-900">
            <a
              href="https://www.youtube.com/@inspireoverseaaseducation"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Videos
            </a>
          </Button>
        </div>

        {/* Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTitle>
            <span className="hidden">Video Player</span>
          </DialogTitle>
          <DialogContent className="max-w-3xl p-0 overflow-hidden aspect-video">
            {activeVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
