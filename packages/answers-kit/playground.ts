import { AnswersKit } from './src/index.js';

const kit = new AnswersKit();
const TOKEN =
  'Bareer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJwZXJraW5zb24iLCJyb2xlIjoic3VwZXJ2aXNvciIsImlhdCI6MTc0MzUxMDcxOX0.MVrBtWVg7I9Zg1p-X08qLfsjpg4VkZS0sOumS8-3CGE';

const data = await kit.questions.updateOne({
  data: {
    id: 1220,
    name: 'Які стратегії ефективні для боротьби з тривожними думками',
    answer:
      'Практики усвідомленості та медитації\nВправи для розслаблення тіла',
    isVerified: true,
    testId: 46,
  },
  headers: {
    authorization: TOKEN,
  },
});
console.log(data);
