export type Reservation = {
  userName?: string;
  dateStart: Date;
  dateEnd: Date;
  comments: string;
};

export type UserRole = "customer" | "staff" | "admin";

export type User = {
  id: string;
  name: string;
  password: string;
  role: UserRole;
};

export type Room = {
  id: number;
  name: string;
  description: string;
  reservations?: Reservation[];
};
