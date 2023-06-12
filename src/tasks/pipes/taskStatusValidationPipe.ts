import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task.model';

@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowStatus = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];

  transform(value: any) {
    if (!this.checkStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`);
    }
    return value;
  }

  private checkStatusValid(status: any) {
    const idx = this.allowStatus.indexOf(status);
    return idx !== -1;
  }
}
