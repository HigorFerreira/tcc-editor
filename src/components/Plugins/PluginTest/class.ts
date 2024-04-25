import BasePlugin from '@/components/Editor/BasePlugin';
import { v4 as uuidv4 } from 'uuid';

export default class PluginClass extends BasePlugin {
    getName(): string {
        return 'test-plugin'
    }

    getUuid(): string {
        return uuidv4();
    }
}