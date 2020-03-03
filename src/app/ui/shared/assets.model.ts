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