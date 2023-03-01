import Like from "../models/like.js";
import CrudRepository from "../repository/crud-repository.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      console.log(error);
    }
  }
}

export default LikeRepository;
