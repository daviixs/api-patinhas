import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Só Patinhas de Rua')
    .setDescription(
      'API para gerenciar animais, adotantes e voluntários do projeto Só Patinhas de Rua. ' +
      'Esta API permite realizar operações CRUD completas para cada entidade.'
    )
    .setVersion('1.0')
    .addTag('animal', 'Operações relacionadas aos animais')
    .addTag('adotante', 'Operações relacionadas aos adotantes')
    .addTag('voluntario', 'Operações relacionadas aos voluntários')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Aplicação rodando em: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📚 Documentação Swagger: http://localhost:${process.env.PORT ?? 3000}/api`);
}
bootstrap();
