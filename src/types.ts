export interface Anilist {
  id: number;
  idMal: number;
  title: Title;
  synonym: string;
  isAdult: boolean;
}

export interface Title {
  native: string;
  romaji: string;
  english: string;
}

export interface Result {
  anilist: Anilist;
  filename: string;
  episode: number;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}

export interface AnimeResponse {
  frameCount: number;
  errors: string;
  result: Result[];
}
