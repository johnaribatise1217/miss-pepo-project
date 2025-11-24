export interface DiscoverCard {
  imgBg : string
  title : string
  path : string
  bgColor : string
  message : string
}

export const CardData: DiscoverCard[] = [
  {
    // imgBg : "https://res.cloudinary.com/dfptoh5fz/image/upload/v1758843378/event-host_h0tua2.svg",
    imgBg : "https://lh3.googleusercontent.com/pw/AP1GczPibwpyxwpkLFJR1S5nC0lhc2ZEtzQ8lNNNzkgvckfls0WuyKRbkzmIifCNi_5tRVOiQoabjmMNsRguVcN0_GwqBDjoBCE0HZ6YUO1fl5Cpm5iKrWr25FDbD8dOs7FzHXlxIBJNXeTs6aUGuBW_N8kI=w661-h992-s-no-gm?authuser=0",
    title : "Event Host",
    message : "The Voice , The Vibe",
    path : "/event-host",
    bgColor: "bg-discover1"
  },
  {
    imgBg : "https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758843906/explore-new_o0kwkb.jpg",
    title : "Actor",
    message : "She doesn't just act, She embodies",
    path : "/actor",
    bgColor : "bg-discover2"
  },
  {
    imgBg : "https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758844137/don-baba_fkoznh.png",
    title : "Content Creator",
    message : "Her Charm captivates all",
    path : "/influencer",
    bgColor : "bg-discover3"
  },
]