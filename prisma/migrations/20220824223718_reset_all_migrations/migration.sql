-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "wallet" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "profile" TEXT,
    "banner" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enventcategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "enventcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "start_at" TEXT NOT NULL,
    "admin" TEXT NOT NULL,
    "banner" TEXT,
    "profile" TEXT,
    "category_id" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ipfsMint" (
    "id" TEXT NOT NULL,
    "ipnft" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isMinted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ipfsMint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER,
    "event_id" TEXT NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_wallet_key" ON "users"("wallet");

-- CreateIndex
CREATE UNIQUE INDEX "enventcategories_name_key" ON "enventcategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ipfsMint_ipnft_key" ON "ipfsMint"("ipnft");

-- CreateIndex
CREATE UNIQUE INDEX "ipfsMint_url_key" ON "ipfsMint"("url");

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_admin_fkey" FOREIGN KEY ("admin") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "enventcategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
