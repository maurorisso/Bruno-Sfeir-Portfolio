export type Link = {
  name: string;
  href: string;
};

export type CollectionThumbnail = {
  name: string;
  url: string;
  thumbnail: ImageMetadata;
};

export type Painting = {
  name: string;
  imageUrl: ImageMetadata;
  year: number;
  size: string;
};
