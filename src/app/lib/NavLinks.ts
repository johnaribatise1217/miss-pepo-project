interface Link{
  name: string;
  path : string
  id : number
}

export const navLinks: Link[] = [
  {
    name: 'Home',
    path : "/",
    id : 1
  },
  {
    name: 'Event Host',
    path : "/event-host",
    id : 2
  },
  {
    name: 'Actor',
    path : "/actor",
    id : 3
  },
  {
    name: 'Content Creator',
    path : "/influencer",
    id : 4
  }
]