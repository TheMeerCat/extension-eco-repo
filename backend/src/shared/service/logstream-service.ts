import * as uuid from 'uuid';

import LogstreamRepository from '../persistence/logstream-repository';
import { LogstreamEntry } from '../models/logstream-entry';

export default class LogstreamService {
  logstreamRepository: LogstreamRepository;

  constructor(logstreamRepository: LogstreamRepository = new LogstreamRepository()) {
    this.logstreamRepository = logstreamRepository;
  }

  async getAllLogEntries(): Promise<LogstreamEntry[]> {
    return this.logstreamRepository.getAllLogs();
  }

  async createLogEntry(from: string, to: string): Promise<LogstreamEntry> {
    const id = uuid.v4();

    return await this.logstreamRepository.createLog({
      id,
      from,
      to,
      co2: Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
    });
  }
}
