import Hashtag from "../models/hastags.js";

class HashtagRepository {
  // creating hashtag in the db -
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      // using insertMany --> takes array of objects
      const tag = await Hashtag.insertMany(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  // get hashtag
  async get(id) {
    try {
      const tag = Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  // delete hashtag
  async destroy(id) {
    try {
      const response = await Hashtag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // find hashtags based on their titleLis  -> ["first","tweet","excited"]
  async FindByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      }); //extracting title
      return tags; // will return array of objects
    } catch (error) {
      console.log(error);
    }
  }
}
export default HashtagRepository;
