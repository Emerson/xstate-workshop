import { interpret } from 'xstate';
import makeServer from "../server";
import TrafficLightMachine from '../src/traffic-light';

let server;

describe("TrafficLight", ()=> {

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  test("starts in the red state", async () => {
    let trafficLight = interpret(TrafficLightMachine).start();
    expect(trafficLight.state.matches('red')).toBeTruthy();
  });
});