import { create } from "zustand";
import { IUser } from "@/types/user-account";

interface IUserState {
  data: IUser | null;
  setUser: (data: IUser) => void;
}

const useGetUserdetails = create<IUserState>((set) => ({
  setUser: (data: IUser) => set({ data }),
  data: null,
}));
export default useGetUserdetails;
