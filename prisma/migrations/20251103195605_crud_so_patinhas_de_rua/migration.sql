-- CreateTable
CREATE TABLE "animal" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER,
    "tipo" TEXT,
    "sexo" TEXT,
    "data_resgate" TIMESTAMP(3),
    "canil" TEXT,

    CONSTRAINT "animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adotante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT,
    "telefone" TEXT,
    "cep" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "adotante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "voluntario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "senha" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,

    CONSTRAINT "voluntario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adotante_email_key" ON "adotante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "voluntario_usuario_key" ON "voluntario"("usuario");
