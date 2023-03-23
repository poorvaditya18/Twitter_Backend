import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.HashtagRepository = new HashtagRepository();
  }

  async create(data) {
    console.log(data);
    // tweet content
    const content = data.content;
    // Form content fetch #
    let tags = content.match(/#[a-zA-Z0-9_]+/g); // regex is used to extract hashtags
    tags = tags.map((tag) => tag.substr(1)).map((tag) => tag.toLowerCase());
    // console.log(tags);

    const tweet = await this.tweetRepository.create(data); //create tweet

    // find the tags that are already present in the database;
    let alreadyPresentTags = await this.HashtagRepository.FindByName(tags);
    // console.log(alreadyPresentTags);

    let titlePresentTags = alreadyPresentTags.map((tag) => tag.title);

    // new tags which are not present in the databse , we need to create them .
    let newTags = tags.filter((tag) => !titlePresentTags.includes(tag));

    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });

    await this.HashtagRepository.bulkCreate(newTags);
    // console.log(response);

    // After creation of tweet --> we need to attach the tweet with alreadyPresentTags
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });

    // TODO -> create hashtags if they are not in the database
    /*
     * 1. Bulkcreate
     * 2. filter title of hashtag based on multiple tags
     * 3. how to add tweetId inside all the hashtags
     */
    return tweet;
  }

  async get(tweetId) {
    const tweet = await this.tweetRepository.getWithComments(tweetId);
    return tweet;
  }
}

export default TweetService;

/*
 * example Data : this is my #first #tweet. I am really #excited.
 *
 */
