-- CreateTable
CREATE TABLE "temp" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "temp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "temp_email_key" ON "temp"("email");
