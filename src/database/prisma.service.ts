import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Conectado ao banco de dados com sucesso!');
    } catch (error) {
      this.logger.error('❌ Erro ao conectar ao banco de dados:', error.message);
      this.logger.warn('⚠️ Verifique se:');
      this.logger.warn('   1. O banco de dados está rodando');
      this.logger.warn('   2. As credenciais no .env estão corretas');
      this.logger.warn('   3. A rede permite conexão ao servidor');
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}