export interface IAsset {
  id: number
  name: string
  date: Date
  size: string
  suffix: string
  GPSposition?: {
    x: number
    y: number
  },
  destination_url: string
  modified: string
  group_id: number  // the idea here is to display past modifications
  description?: string
}

export interface IGroups {
  id: number
  name: string
  date: Date
  description: string
}

////

export interface IEvent {
  id: number
  name: string
  date: Date
  time: string
  price: number
  group: string
  imageUrl: string
  location?: {
    address: string
    city: string
    country: string
  },
  onlineUrl?: string,
  sessions: ISession[]
}

export interface ISession {
  id: number
  name: string
  presenter: string
  duration: number
  level: string
  abstract: string
  voters: string[]
}

