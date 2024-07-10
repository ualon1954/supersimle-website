class Video {
  thumbnail;
  title;
  author;
  stats;
  time;
  profile;

  constructor(videoDetails) {
    this.thumbnail = videoDetails.thumbnail;
    this.title = videoDetails.title;
    this.author = videoDetails.author;
    this.stats = videoDetails.stats;
    this.time = videoDetails.time;
    this.profile = videoDetails.profile;
  }
 }

 export const videos = [
  {
    thumbnail: "thumbnails/bensimon.jpg",
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    author: "Marques Brownlee" ,
    stats: "3.4M views &#183; 6 months ago",
    time: "14:20",
    profile: "channel-pictures/channel-1.jpeg"
    
  },
  {
    thumbnail: "thumbnails/thumbnail-2.webp",
    title: "Try Not To Laugh Challenge #9",
    author: "Markiplier" ,
    stats: "19M views &#183; 4 years ago",
    time: "8:22",
    profile: "channel-pictures/channel-2.jpeg"
    
  },
  {
    thumbnail: "thumbnails/thumbnail-3.webp",
    title: "Crazy Tik Toks Taken Moments Before DISASTER",
    author: "SSSniperWolf" ,
    stats: "12M views &#183; 1 year ago",
    time: "9:13",
    profile: "channel-pictures/channel-3.jpeg"
  },
  {
      thumbnail: "thumbnails/thumbnail-4.webp",
      title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
      author: "Veritasium" ,
      stats: "18M views &#183; 4 months ago",
      time: "22:09",
      profile: "channel-pictures/channel-4.jpeg"
  }, 
  {
      thumbnail: "thumbnails/thumbnail-5.webp",
      title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
      author: "CS Dojo" ,
      stats: "519K views &#183; 5 years ago",
      time: "11:17",
      profile: "channel-pictures/channel-5.jpeg"
  }, 
  {
      thumbnail: "thumbnails/thumbnail-6.webp",
      title: "Anything You Can Fit In The Circle I’ll Pay For",
      author: "MrBeast" ,
      stats: "141M views &#183; 1 year ago",
      time: "19:59",
      profile: "channel-pictures/channel-6.jpeg"
  }, 
  {
    thumbnail: "thumbnails/thumbnail-7.webp",
    title: "Why Planes Don't Fly Over Tibet",
    author: "RealLifeLore",
    stats: "6.6M views &#183; 1 year ago",
    time: "10:13",
    profile: "channel-pictures/channel-7.jpeg"
  }, 
  {
    thumbnail: "thumbnails/thumbnail-8.webp",
    title: "Inside The World's Biggest Passenger Plane",
    author: "Tech Vision",
    stats: "3.7M views &#183; 10 months ago",
    time: "7:12",
    profile: "channel-pictures/channel-8.jpeg"
  }, 
  {
    thumbnail: "thumbnails/thumbnail-9.webp",
    title: "The SECRET to Super Human STRENGTH",
    author: "ThenX",
    stats: "20M views &#183; 3 years ago",
    time: "13:17",
    profile: "channel-pictures/channel-9.jpeg"
  }, 
  {
    thumbnail: "thumbnails/thumbnail-10.webp",
    title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    author: "Business Insider",
    stats: "14M views &#183; 1 year ago",
    time: "7:53",
    profile: "channel-pictures/channel-10.jpeg"
  }, 
  {
    thumbnail: "thumbnails/thumbnail-11.webp",
    title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
    author: "Destination Tips",
    stats: "3M views &#183; 1 year ago",
    time: "4:10",
    profile: "channel-pictures/channel-11.jpeg"
  }, 
  {
    thumbnail: "thumbnails/thumbnail-12.webp",
    title: "What would happen if you didn’t drink water? - Mia Nacamulli",
    author: "TED-Ed",
    stats: "12M views &#183; 5 years ago",
    time: "4:51",
    profile: "channel-pictures/channel-12.jpeg"
  } 
].map((videoDetails) => {
  return new Video(videoDetails);
});










 