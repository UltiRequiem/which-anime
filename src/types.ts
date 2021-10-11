export type Anilist = {
  id: number;
  idMal: number;
  title: Title;
  synonym: string;
  isAdult: boolean;
};

export type Title = {
  native: string;
  romaji: string;
  english: string;
};

export type Result = {
  anilist: Anilist;
  filename: string;
  episode: number;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
};

export type Response = {
  frameCount: number;
  errors: string;
  result: Result[];
};
