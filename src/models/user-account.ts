import { Schema, model } from "mongoose";
import type {
  IUser,
  ISession,
  IAccount,
  IVerification,
} from "@/types/user-account";

// --- User ---
const UserSchema = new Schema<IUser>(
  {
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    emailVerified: { type: Boolean, required: true, default: false },
    image: String,
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    collection: "user",
  }
);
UserSchema.index({ emailVerified: 1 });
const User = model<IUser>("User", UserSchema);

// --- Session ---
const SessionSchema = new Schema<ISession>(
  {
    _id: { type: String, required: true, unique: true },
    userId: { type: String, ref: "User", required: true },
    token: { type: String, required: true, unique: true },
    expiresAt: { type: Date, required: true },
    ipAddress: String,
    userAgent: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
    collection: "session",
  }
);
SessionSchema.index({ token: 1 });
SessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
const Session = model<ISession>("Session", SessionSchema);

// --- Account ---
const AccountSchema = new Schema<IAccount>(
  {
    _id: { type: String, required: true, unique: true },
    userId: { type: String, ref: "User", required: true },
    accountId: { type: String, required: true },
    providerId: { type: String, required: true },
    accessToken: String,
    refreshToken: String,
    accessTokenExpiresAt: Date,
    refreshTokenExpiresAt: Date,
    scope: String,
    idToken: String,
    password: String,
  },
  {
    timestamps: true,
    collection: "account",
  }
);
AccountSchema.index(
  { userId: 1, providerId: 1, accountId: 1 },
  { unique: true }
);
const Account = model<IAccount>("Account", AccountSchema);

// --- Verification ---
const VerificationSchema = new Schema<IVerification>(
  {
    _id: { type: String, required: true, unique: true },
    identifier: { type: String, required: true },
    value: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  {
    timestamps: true,
    collection: "verification",
  }
);
VerificationSchema.index({ identifier: 1 });
VerificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
const Verification = model<IVerification>("Verification", VerificationSchema);

export { User, Session, Account, Verification };
