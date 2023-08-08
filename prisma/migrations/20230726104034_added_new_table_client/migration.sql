-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "deleted_at" TIMESTAMPTZ(6),
    "name" VARCHAR NOT NULL,
    "alias" VARCHAR NOT NULL,
    "invoice_color" VARCHAR NOT NULL,
    "phone" VARCHAR NOT NULL,
    "email" TEXT NOT NULL,
    "address" VARCHAR NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_email_key" ON "client"("email");
