-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "order_number" SERIAL NOT NULL,
    "order_id" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
