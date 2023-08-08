-- CreateTable
CREATE TABLE "assets" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "name" VARCHAR NOT NULL,
    "modal_number" INTEGER NOT NULL,
    "purchase_date" TIMESTAMPTZ(6),
    "description" VARCHAR NOT NULL,
    "warranty" INTEGER NOT NULL DEFAULT 0,
    "billNumber" INTEGER,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeAsset" (
    "id" TEXT NOT NULL,
    "employee_id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,

    CONSTRAINT "EmployeeAsset_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmployeeAsset" ADD CONSTRAINT "EmployeeAsset_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeAsset" ADD CONSTRAINT "EmployeeAsset_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "assets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
