// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {get} from '@loopback/rest';

export class TestController {
  constructor() {}
  @get('/hello')
  hello(): string {
    return 'Hello world 6!';
  }
}
