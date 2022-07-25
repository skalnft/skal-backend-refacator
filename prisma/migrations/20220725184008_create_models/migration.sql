-- CreateTable
CREATE TABLE "enventcategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "enventcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ipfsMint" (
    "id" TEXT NOT NULL,
    "ipnft" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ipfsMint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "enventcategories_name_key" ON "enventcategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ipfsMint_ipnft_key" ON "ipfsMint"("ipnft");

-- CreateIndex
CREATE UNIQUE INDEX "ipfsMint_url_key" ON "ipfsMint"("url");
