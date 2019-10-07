/* Response Skeleton Interface */
interface ResSkeleton {
  status: number;
  msg: string;
}

/* Response User Profile Interface */
interface ResponseUser {
  userId: string;
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userAddress: string;
}

/* Response HostUser Profile Interface */
interface ResponseHostUser {
  hostUserId: string;
  hostUserName: string;
  hostUserEmail: string;
  hostUserPhoneNumber: string;
}

/* Response Host Info Skeleton */
interface HostSkeleton {
  hostName: string;
  hostTel: string;
  hostAddress: string;
  hostPostalCode: string;
}

/* Response UserOrder List */
interface UserOrderList {
  userId: string;
  checkIn: Date;
  checkOut: Date;
  paid: number;
  reciptNumber: number;
  hostIdx: number;
  hostAddress: string;
  hostPostalCode: string;
  hostUserPhoneNumber: string;
}

/* Hosts Interface */
interface Hosts {
  hostName: string;
  hostPostalCode: string;
  hostAddress: string;
  hostTel: string;
  hostIdx: number;
  hostLatitude: number;
  hostLongitude: number;
  hostIntro: string;
}

/* Review Default Interface */
interface ReviewList {
  userId: string;
  review: string;
  reviewScore: number;
  reviewDate: Date;
  reviewNumber: number;
  hostIdx: number;
}

/* ReviewObject Interface */
interface ReviewObject {
  review: string;
  rewviewScore: number;
}

export {
  ResSkeleton,
  ResponseUser,
  ResponseHostUser,
  HostSkeleton,
  UserOrderList,
  Hosts,
  ReviewList,
  ReviewObject
};
