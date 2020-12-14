import { MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import UserEntity from '@persistence/user/user.entity';
import { Job } from 'bull';
import { plainToClass } from 'class-transformer';

@Processor('Send mail')
export class MailProcessor {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly _mailer: MailerService,
    private readonly _config: ConfigService,
  ) {}

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(
        job.data,
      )}`,
    );
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.debug(
      `Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(
        result,
      )}`,
    );
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(
      `Failed job ${job.id} of type ${job.name}: ${error.message}`,
      error.stack,
    );
  }

  @Process('welcome')
  async sendWelcomeEmail(job: Job<{ user; code: string }>): Promise<any> {
    this.logger.log(`Sending email to '${job.data.user.email}'`);

    const url = `${this._config.get('server.origin')}/auth/${
      job.data.code
    }/confirm`;

    if (this._config.get<boolean>('mail.live')) {
      return 'SENT MOCK EMAIL';
    }

    try {
      const result = await this._mailer.sendMail({
        template: 'welcome',
        context: {
          ...plainToClass(UserEntity, job.data.user),
          url: url,
        },
        subject: `Welcome to ${this._config.get(
          'APP_NAME',
        )}! Welcome to Companies API`,
        to: job.data.user.email,
      });
      return result;
    } catch (error) {
      this.logger.error(
        `Failed to send confirmation email to '${job.data.user.email}'`,
        error.stack,
      );
      throw error;
    }
  }
}
