import { InMemoryDbService } from '../angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boards = [
      { id: 1, name: 'Mock Board 1' },
      { id: 2, name: 'Mock Board 2' }
    ];
    return {boards};
  }
}
