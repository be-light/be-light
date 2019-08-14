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

export { ResSkeleton, ResponseUser };
