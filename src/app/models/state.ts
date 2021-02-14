export class Notifications {
  type: NotificationType;
  title: string;
  msg?: string;
}

export enum NotificationType {
  Error,
  Info,
  Success,
}
