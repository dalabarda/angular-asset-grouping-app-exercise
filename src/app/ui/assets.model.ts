export interface IAsset {
  id: number;
  name: string;
  date: Date;
  size: string;
  suffix: string;
  GPSposition?: { x: number, y: number};
  destination_url: string;
  modified: string;
  group_id: number;  // the idea here is to display past modifications
  description?: string;
}

export class Asset {
  public id: number;
  public name: string;
  public date: Date;
  public size: string;
  public suffix: string;
  public GPSposition?: { x: number, y: number };
  public destination_url: string;
  public modified: string;
  public group_id: number;
  public description: string;
}



export interface IGroups {
  id: number
  name: string
  date: Date
  description: string
}

export class Group {
  public id: number;
  public name: string;
  public date: Date;
  public description: string;
}

// TOFIX: it might not be necessary having all variables as public. 
// check later a more suitable way