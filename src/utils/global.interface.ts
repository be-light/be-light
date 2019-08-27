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

export { ResSkeleton, ResponseUser, ResponseHostUser };
