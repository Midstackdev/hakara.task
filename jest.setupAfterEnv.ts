import { clearDB, closeDB, connectDB } from "./src/config";
// import { close } from "./tests/utils";

beforeAll(async () => {
  await connectDB();
});

// beforeEach(() => {
//   jest.resetModules();
//   jest.clearAllMocks();
// });

afterEach(async () => {
  //   await clearDB();
});

afterAll(async () => {
  await closeDB();
  //   close();
});
