import { readdirSync, readFileSync } from 'fs';
import { parse } from 'path';

const FIXTURES_PATH = 'fixtures';

const creatorFn = (fileName: string) => (meta: object) => ({
  meta: { ...meta },
  ...readFileSync(fileName),
});

export const messageCreators: Map<string, (meta: object) => object> = new Map(
  readdirSync(FIXTURES_PATH).map((file) => [parse(file).name, creatorFn(file)])
);
