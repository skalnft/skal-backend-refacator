-- AlterTable
ALTER TABLE "users" ADD COLUMN     "banner" TEXT,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profile" TEXT;
