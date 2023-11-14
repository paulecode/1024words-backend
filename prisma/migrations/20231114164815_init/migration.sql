-- CreateTable
CREATE TABLE "base_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unlock_points" INTEGER NOT NULL,

    CONSTRAINT "base_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base_words" (
    "id" SERIAL NOT NULL,
    "base_category_id" INTEGER NOT NULL,
    "base_word" TEXT NOT NULL,

    CONSTRAINT "base_words_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "base_words" ADD CONSTRAINT "base_words_base_category_id_fkey" FOREIGN KEY ("base_category_id") REFERENCES "base_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
