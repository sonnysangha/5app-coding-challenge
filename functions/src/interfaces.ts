export interface Logo {
  size: string;
  url: string;
}

export interface Item {
  name: string;
  count: number;
  logos: Logo[];
  thumbnail?: string;
}
