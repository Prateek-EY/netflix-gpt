import OpenAI from 'openai';
import { API_KEY } from './constant';

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
  // This is the default and can be omitted
});

export default openai;