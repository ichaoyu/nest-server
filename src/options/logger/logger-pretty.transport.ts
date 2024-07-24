import { reset } from 'colorette';
import pretty from 'pino-pretty';

export default () => {
  return pretty({
    translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
    messageFormat: (log, messageKey) => {
      const message = [log.context ? `[${log.context}]` : '', log[messageKey]]
        .filter((v) => v)
        .join(' ');

      return reset(message);
    },
    singleLine: true,
    ignore: 'context,hostname',
  });
};
