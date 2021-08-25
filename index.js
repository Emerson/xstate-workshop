import { inspect } from '@xstate/inspect';
import { interpret } from 'xstate';
import makeServer from './server';
import trafficLightMachine from './src/traffic-light';

makeServer();
inspect();
window.trafficLightMachine = interpret(trafficLightMachine, {devTools: true}).start();
