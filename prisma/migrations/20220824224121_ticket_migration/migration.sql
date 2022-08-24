/*
  Warnings:

  - A unique constraint covering the columns `[event_id]` on the table `tickets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tickets_event_id_key" ON "tickets"("event_id");
