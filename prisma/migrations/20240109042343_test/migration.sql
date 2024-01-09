-- CreateTable
CREATE TABLE "temp" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "temp_email_key" ON "temp"("email");
