import { createMachine } from 'xstate';

export default createMachine({
 id: 'traffic-light',
 initial: 'red',
 states: {
   red: {},
   yellow: {},
   green: {}
 }
});