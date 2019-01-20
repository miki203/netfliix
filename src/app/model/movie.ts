export class Movie {
  id: Number;
  category: String;
  description: String;
  movieUrl: String;
  thumbnailUrl: String;
  timestamp: number;
  title: String;


  constructor(id?, category?: String, description?: String,
              movieUrl?: String, thumbnailUrl?: String,
              timestamp?: number, title?: String) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.movieUrl = movieUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.timestamp = timestamp;
    this.title = title;
  }
}
