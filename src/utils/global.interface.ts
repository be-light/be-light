interface ResSkeleton {
  status: number;
  msg: string;
}

interface ResponseUser {
  userId: string;
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userAddress: string;
}

interface ResponseHostUser {
  hostUserId: string;
  hostUserName: string;
  hostUserEmail: string;
  hostUserPhoneNumber: string;
}

export { ResSkeleton, ResponseUser, ResponseHostUser };
