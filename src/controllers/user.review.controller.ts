import expressJWT from "../utils/jwt";
import { ResSkeleton, ReviewList } from "../utils/global.interface";
import { UserReview } from "../models/user.review.model";
import { Sequelize } from "sequelize-typescript";

/* Define UserReviewController Interface */
interface UserReviewControllerInterface {
  successMsg: ResSkeleton;
  getAllReviews(): Promise<ReviewList[]>;
  getLastReviews(): Promise<ReviewList[]>;
  createReview(token: string): Promise<ResSkeleton>;
  updateReview(token: string): Promise<ResSkeleton>;
  deleteReview(token: string): Promise<ResSkeleton>;
}

class UserReviewController implements UserReviewControllerInterface {
  public successMsg: ResSkeleton;

  /* Setting Default successMsg from constructor */
  public constructor() {
    this.successMsg = { status: 200, msg: "success" };
  }

  /* Get All Reviews */
  public getAllReviews(): Promise<ReviewList[]> {
    /* Get userId, review, reviewScore, reviewNumber, hostIdx */
    return new Promise((resolve, reject) => {});
  }

  /* Get Last Reviews */
  public getLastReviews(): Promise<ReviewList[]> {
    return new Promise((resolve, reject) => {});
  }

  /* Create New Review */
  public createReview(token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  /* Update Review */
  public updateReview(token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  /* Delete Review */
  public deleteReview(token: string): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}

export default new UserReviewController();
