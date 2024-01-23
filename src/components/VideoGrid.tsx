import VideoCard from "./VideoCard"

const VIDEOS = [{
       title:"How to learn coding in 30 days | 30 day plan",
       image:"thumbnail.png",
       thumbImage:"icon.jpg",
       author:"Harkirat Singh",
       views:"12M",
       timestamp:"10 days ago"
    },
    {
        title:"How to learn coding in 30 days | 30 day plan",
        image:"thumbnail.png",
        thumbImage:"icon.jpg",
        author:"Harkirat Singh",
        views:"12M",
        timestamp:"10 days ago"
     },
     {
        title:"How to learn coding in 30 days | 30 day plan",
        image:"thumbnail.png",
        thumbImage:"icon.jpg",
        author:"Harkirat Singh",
        views:"12M",
        timestamp:"10 days ago"
     },
     {
        title:"How to learn coding in 30 days | 30 day plan",
        image:"thumbnail.png",
        thumbImage:"icon.jpg",
        author:"Harkirat Singh",
        views:"12M",
        timestamp:"10 days ago"
     },
     {
        title:"How to learn coding in 30 days | 30 day plan",
        image:"thumbnail.png",
        thumbImage:"icon.jpg",
        author:"Harkirat Singh",
        views:"12M",
        timestamp:"10 days ago"
     },
]
export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map(video => <div>
        <VideoCard
          title={video.title}
          image={video.image}
          thumbImage={video.thumbImage}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}>
        </VideoCard>
      </div>)}
    </div>
}