export type Schedule = {
  time?: string;
  days?: string[];
};

export type Rating = {
  average?: number;
};

export type Country = {
  name?: string;
  code?: string;
  timezone?: string;
};

export type Network = {
  id?: number;
  name?: string;
  country?: Country;
  officialSite?: string;
};

export type WebChannel = {
  id?: number;
  name?: string;
  country?: Country;
  officialSite?: string;
};

export type DvdCountry = {
  name?: string;
  code?: string;
  timezone?: string;
};

export type Externals = {
  tvrage?: number;
  thetvdb?: number;
  imdb?: string;
};

export type Image = {
  medium?: string;
  original?: string;
};

export type Self = {
  href?: string;
};

export type Previousepisode = {
  href?: string;
};

export type Nextepisode = {
  href?: string;
};

export type Links = {
  self?: Self;
  previousepisode?: Previousepisode;
  nextepisode?: Nextepisode;
};

export type SerieType = {
  id?: number;
  url?: string;
  name?: string;
  type?: string;
  language?: string;
  genres?: string[];
  status?: string;
  runtime?: number;
  averageRuntime?: number;
  premiered?: string;
  ended?: string;
  officialSite?: string;
  schedule?: Schedule;
  rating?: Rating;
  weight?: number;
  network?: Network;
  webChannel?: WebChannel;
  dvdCountry?: DvdCountry;
  externals?: Externals;
  image?: Image;
  summary?: string;
  updated?: number;
  _links?: Links;
};

export type SearchSerieType = {
  score?: number;
  show?: SerieType;
};

export type SerieEpisodeType = {
  id?: number;
  url?: string;
  name?: string;
  season?: number;
  number?: number;
  type?: string;
  airdate?: string;
  airtime?: string;
  airstamp?: Date;
  runtime?: number;
  rating?: Rating;
  image?: Image;
  summary?: string;
  _links?: Links;
};
