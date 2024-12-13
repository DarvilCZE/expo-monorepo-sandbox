import { registerWebModule, NativeModule } from 'expo';

import { TestPackageModuleEvents } from './TestPackage.types';

class TestPackageModule extends NativeModule<TestPackageModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(TestPackageModule);
