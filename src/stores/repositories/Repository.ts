import * as SecureStore from 'expo-secure-store';

class Repository<T> {
  private cache: T;

  constructor(
    private readonly key: string,
    private readonly defaultValue: T = null
  ) {}

  async get(): Promise<T | null> {
    if (this.cache) return this.cache;
    const data = await SecureStore.getItemAsync(this.key);
    this.cache = data ? JSON.parse(data) : this.defaultValue;
    return this.cache;
  }

  set(data: T): void {
    SecureStore.setItemAsync(this.key, JSON.stringify(data));
    this.cache = data;
  }
}

export default Repository;
