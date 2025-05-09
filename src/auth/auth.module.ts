import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailerModule } from 'src/mailer/mailer.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [MailerModule, DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
