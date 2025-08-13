export interface DiscoverCard {
  imgBg : string
  title : string
  path : string
  bgColor : string
  message : string
}

export const CardData: DiscoverCard[] = [
  {
    imgBg : "/images/event-host.svg",
    title : "Event Host",
    message : "The Voice , The Vibe",
    path : "/event-host",
    bgColor: "bg-pryPablo"
  },
  {
    imgBg : "/images/explore.svg",
    title : "Actor",
    message : "She doesn't just act, She embodies",
    path : "/actor",
    bgColor : "bg-pryBrown2"
  },
  {
    imgBg : "/images/don-baba.png",
    title : "Content Creator",
    message : "Her Charm captivates all",
    path : "/influencer",
    bgColor : "bg-secPablo"
  }
]