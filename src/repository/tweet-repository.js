import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(tweetId) {
    try {
      // along with the tweet do also populate the comment. So, comment attached will also get displayed with the tweet.
      // populate --> works for association .
      const tweet = Tweet.findById(tweetId)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  // PAGINATION Example ->
  //getAll based on some offset
  async getAll(offset, limit) {
    try {
      // skip(offset) - skipped the first two tweet
      // limit(limit)
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "likes" });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
