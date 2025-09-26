export interface DiscoverCard {
  imgBg : string
  title : string
  path : string
  bgColor : string
  message : string
}

export const CardData: DiscoverCard[] = [
  {
    imgBg : "https://res.cloudinary.com/dfptoh5fz/image/upload/v1758843378/event-host_h0tua2.svg",
    title : "Event Host",
    message : "The Voice , The Vibe",
    path : "/event-host",
    bgColor: "bg-pryPablo"
  },
  {
    imgBg : "https://res.cloudinary.com/dfptoh5fz/image/upload/v1758843906/explore-new_o0kwkb.jpg",
    title : "Actor",
    message : "She doesn't just act, She embodies",
    path : "/actor",
    bgColor : "bg-pryBrown2"
  },
  {
    imgBg : "https://res.cloudinary.com/dfptoh5fz/image/upload/v1758844137/don-baba_fkoznh.png",
    title : "Content Creator",
    message : "Her Charm captivates all",
    path : "/influencer",
    bgColor : "bg-secPablo"
  },
]