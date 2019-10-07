import expressJWT from "../utils/jwt";
import {
  ResSkeleton,
  ReviewList,
  ReviewObject
} from "../utils/global.interface";
import { UserReview } from "../models/user.review.model";
import { Sequelize } from "sequelize-typescript";
import * as dateFormat from "dateformat";

/* Define UserReviewController Interface */
interface UserReviewControllerInterface {
  successMsg: ResSkeleton;
  getAllReviews(hostIdx: number): Promise<ReviewList[]>;
  getLastReviews(): Promise<ReviewList[]>;
  createReview(token: string, revObj: object): Promise<ResSkeleton>;
  updateReview(token: string, revObj: object): Promise<ResSkeleton>;
  deleteReview(token: string, revObj: object): Promise<ResSkeleton>;
}

class UserReviewController implements UserReviewControllerInterface {
  public successMsg: ResSkeleton;
  public LAST_REVIEW_COUNT: number;

  /* Setting Default successMsg from constructor */
  public constructor() {
    this.successMsg = { status: 200, msg: "success" };
    this.LAST_REVIEW_COUNT = 5;
  }

  /* Get All Reviews */
  public getAllReviews(hostIdx: number): Promise<ReviewList[]> {
    /* Get userId, review, reviewScore, reviewNumber, hostIdx */
    return new Promise((resolve, reject) => {
      UserReview.findAll({
        where: {
          hostIdx
        }
      }).then(reviews => {
        resolve(reviews);
      });
    });
  }

  /* Get Last Reviews */
  public getLastReviews(): Promise<ReviewList[]> {
    return new Promise((resolve, reject) => {
      UserReview.findAll({
        limit: this.LAST_REVIEW_COUNT,
        order: [["reviewNumber", "DESC"]]
      }).then(lastReview => {
        resolve(lastReview);
      });
    });
  }

  /* Create New Review */
  public createReview(
    token: string,
    revObj: ReviewObject
  ): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {
      let userId: string = expressJWT.verifyToken(token).userId;
      const now: string = dateFormat(new Date(), "yyyy-mm-dd HH:MM");
      if (userId) {
        UserReview.create({
          userId,
          review: revObj["review"],
          reviewScore: revObj["reviewScore"],
          hostIdx: revObj["hostIdx"],
          reviewDate: now
        }).then(result => {
          resolve(this.successMsg);
        });
      } else {
        reject("Your Token is not valid. or Expired.");
      }
    });
  }

  /* Update Review */
  public updateReview(
    token: string,
    revObj: ReviewObject
  ): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }

  /* Delete Review */
  public deleteReview(
    token: string,
    revObj: ReviewObject
  ): Promise<ResSkeleton> {
    return new Promise((resolve, reject) => {});
  }
}

export default new UserReviewController();
