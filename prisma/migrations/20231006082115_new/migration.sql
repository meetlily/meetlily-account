/*
  Warnings:

  - You are about to drop the column `userId` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `tweetId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `BasicInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EducationInformation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Listing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserApp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserProfile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Applications` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Note` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Page` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Tags` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `Applications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `slug` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Page` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BasicInformation" DROP CONSTRAINT "BasicInformation_userId_fkey";

-- DropForeignKey
ALTER TABLE "ContactInformation" DROP CONSTRAINT "ContactInformation_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "EducationInformation" DROP CONSTRAINT "EducationInformation_userProfileId_fkey";

-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_userId_fkey";

-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_userId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_listingId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserApp" DROP CONSTRAINT "UserApp_applicationsId_fkey";

-- DropForeignKey
ALTER TABLE "UserProfile" DROP CONSTRAINT "UserProfile_userId_fkey";

-- AlterTable
ALTER TABLE "Applications" ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "createId" TEXT,
ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "userId",
ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "global" BOOLEAN DEFAULT true,
ADD COLUMN     "organizationId" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "tweetId",
ADD COLUMN     "global" BOOLEAN DEFAULT true,
ADD COLUMN     "organizationId" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tags" ADD COLUMN     "organizationId" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- DropTable
DROP TABLE "BasicInformation";

-- DropTable
DROP TABLE "ContactInformation";

-- DropTable
DROP TABLE "EducationInformation";

-- DropTable
DROP TABLE "Listing";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Reservation";

-- DropTable
DROP TABLE "UserApp";

-- DropTable
DROP TABLE "UserProfile";

-- CreateTable
CREATE TABLE "Module" (
    "_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enabled" BOOLEAN DEFAULT false,
    "installed" BOOLEAN DEFAULT false,
    "global" BOOLEAN DEFAULT true,
    "private" BOOLEAN DEFAULT false,
    "icon_name" TEXT,
    "externalLink" TEXT,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Newsletter" (
    "_id" VARCHAR(36) NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "_id" VARCHAR(36) NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Configuration" (
    "_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB,
    "global" BOOLEAN DEFAULT true,
    "createdId" TEXT,
    "organizationId" TEXT NOT NULL,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Variable" (
    "_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "global" BOOLEAN DEFAULT true,
    "type" TEXT,
    "message" TEXT,
    "createdId" TEXT,

    CONSTRAINT "Variable_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Default" (
    "_id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "json" JSONB,
    "type" TEXT NOT NULL,

    CONSTRAINT "Default_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "_id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "json" JSONB,
    "status" TEXT,
    "type" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Device" (
    "_id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "json" JSONB,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "experience" TEXT NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "_id" VARCHAR(36) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Formfield" (
    "_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "data" JSONB,

    CONSTRAINT "Formfield_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Formdata" (
    "_id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "data" JSONB,
    "formfieldId" VARCHAR(36),

    CONSTRAINT "Formdata_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "_ApplicationsToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_ApplicationsToOrganization" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_ModuleToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_ModuleToOrganization" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_ModuleToSubscription" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToOrganization" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_OrganizationToRole" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_OrganizationToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_NotificationToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_NotificationToOrganization" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_DeviceToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_SubscriptionToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_FormfieldToModule" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_FormfieldToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_FormdataToModule" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateTable
CREATE TABLE "_FormdataToUser" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_email_key" ON "Newsletter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Variable_code_key" ON "Variable"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_ApplicationsToUser_AB_unique" ON "_ApplicationsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ApplicationsToUser_B_index" ON "_ApplicationsToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ApplicationsToOrganization_AB_unique" ON "_ApplicationsToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_ApplicationsToOrganization_B_index" ON "_ApplicationsToOrganization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModuleToUser_AB_unique" ON "_ModuleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuleToUser_B_index" ON "_ModuleToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModuleToOrganization_AB_unique" ON "_ModuleToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuleToOrganization_B_index" ON "_ModuleToOrganization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModuleToSubscription_AB_unique" ON "_ModuleToSubscription"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuleToSubscription_B_index" ON "_ModuleToSubscription"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToOrganization_AB_unique" ON "_CategoryToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToOrganization_B_index" ON "_CategoryToOrganization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrganizationToRole_AB_unique" ON "_OrganizationToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_OrganizationToRole_B_index" ON "_OrganizationToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrganizationToUser_AB_unique" ON "_OrganizationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_OrganizationToUser_B_index" ON "_OrganizationToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NotificationToUser_AB_unique" ON "_NotificationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_NotificationToUser_B_index" ON "_NotificationToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NotificationToOrganization_AB_unique" ON "_NotificationToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_NotificationToOrganization_B_index" ON "_NotificationToOrganization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DeviceToUser_AB_unique" ON "_DeviceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DeviceToUser_B_index" ON "_DeviceToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SubscriptionToUser_AB_unique" ON "_SubscriptionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SubscriptionToUser_B_index" ON "_SubscriptionToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FormfieldToModule_AB_unique" ON "_FormfieldToModule"("A", "B");

-- CreateIndex
CREATE INDEX "_FormfieldToModule_B_index" ON "_FormfieldToModule"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FormfieldToUser_AB_unique" ON "_FormfieldToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FormfieldToUser_B_index" ON "_FormfieldToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FormdataToModule_AB_unique" ON "_FormdataToModule"("A", "B");

-- CreateIndex
CREATE INDEX "_FormdataToModule_B_index" ON "_FormdataToModule"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FormdataToUser_AB_unique" ON "_FormdataToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FormdataToUser_B_index" ON "_FormdataToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Applications_slug_key" ON "Applications"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Note_slug_key" ON "Note"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_slug_key" ON "Tags"("slug");

-- AddForeignKey
ALTER TABLE "Configuration" ADD CONSTRAINT "Configuration_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formdata" ADD CONSTRAINT "Formdata_formfieldId_fkey" FOREIGN KEY ("formfieldId") REFERENCES "Formfield"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationsToUser" ADD CONSTRAINT "_ApplicationsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Applications"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationsToUser" ADD CONSTRAINT "_ApplicationsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationsToOrganization" ADD CONSTRAINT "_ApplicationsToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "Applications"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationsToOrganization" ADD CONSTRAINT "_ApplicationsToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToUser" ADD CONSTRAINT "_ModuleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Module"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToUser" ADD CONSTRAINT "_ModuleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToOrganization" ADD CONSTRAINT "_ModuleToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "Module"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToOrganization" ADD CONSTRAINT "_ModuleToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToSubscription" ADD CONSTRAINT "_ModuleToSubscription_A_fkey" FOREIGN KEY ("A") REFERENCES "Module"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToSubscription" ADD CONSTRAINT "_ModuleToSubscription_B_fkey" FOREIGN KEY ("B") REFERENCES "Subscription"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToOrganization" ADD CONSTRAINT "_CategoryToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToOrganization" ADD CONSTRAINT "_CategoryToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrganizationToRole" ADD CONSTRAINT "_OrganizationToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Organization"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrganizationToRole" ADD CONSTRAINT "_OrganizationToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrganizationToUser" ADD CONSTRAINT "_OrganizationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Organization"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrganizationToUser" ADD CONSTRAINT "_OrganizationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToUser" ADD CONSTRAINT "_NotificationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Notification"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToUser" ADD CONSTRAINT "_NotificationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToOrganization" ADD CONSTRAINT "_NotificationToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "Notification"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToOrganization" ADD CONSTRAINT "_NotificationToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeviceToUser" ADD CONSTRAINT "_DeviceToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Device"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeviceToUser" ADD CONSTRAINT "_DeviceToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubscriptionToUser" ADD CONSTRAINT "_SubscriptionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Subscription"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubscriptionToUser" ADD CONSTRAINT "_SubscriptionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormfieldToModule" ADD CONSTRAINT "_FormfieldToModule_A_fkey" FOREIGN KEY ("A") REFERENCES "Formfield"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormfieldToModule" ADD CONSTRAINT "_FormfieldToModule_B_fkey" FOREIGN KEY ("B") REFERENCES "Module"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormfieldToUser" ADD CONSTRAINT "_FormfieldToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Formfield"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormfieldToUser" ADD CONSTRAINT "_FormfieldToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormdataToModule" ADD CONSTRAINT "_FormdataToModule_A_fkey" FOREIGN KEY ("A") REFERENCES "Formdata"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormdataToModule" ADD CONSTRAINT "_FormdataToModule_B_fkey" FOREIGN KEY ("B") REFERENCES "Module"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormdataToUser" ADD CONSTRAINT "_FormdataToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Formdata"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormdataToUser" ADD CONSTRAINT "_FormdataToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
