const fs = require('fs');
const file = '/app/server/dist/routes/ai-connections.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'openai: "https://api.openai.com/v1/models",',
  'openai: (process.env.OPENAI_BASE_URL ? process.env.OPENAI_BASE_URL.replace(/\\/+$/, "") + "/models" : "https://api.openai.com/v1/models"),'
);
content = content.replace(
  'anthropic: "https://api.anthropic.com/v1/models?limit=1",',
  'anthropic: (process.env.ANTHROPIC_BASE_URL ? process.env.ANTHROPIC_BASE_URL.replace(/\\/+$/, "") + "/v1/models?limit=1" : "https://api.anthropic.com/v1/models?limit=1"),'
);
fs.writeFileSync(file, content, 'utf8');
console.log('Successfully patched ai-connections.js');
