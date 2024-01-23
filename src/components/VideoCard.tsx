function VideoCard(props: any) {
    return (
      <div className="p-3">
        <img src={props.image} className="rounded-xl"/>
        <div className="grid grid-cols-12">
          <div className="col-span-1 pt-1">
            <img className="rounded-full w-10 h-10" src={props.thumbImage} />
          </div>
          <div className="col-span-11">
            <div>{props.title}</div>
            <div className="text-gray-400 text-base">{props.author}</div>
            <div className="text-gray-400 text-base"> {props.views} | {props.timestamp}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default VideoCard;
  