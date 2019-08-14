interface ResSkeleton {
  status: number;
  msg: string;
}

interface ResponseUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export { ResSkeleton, ResponseUser };
