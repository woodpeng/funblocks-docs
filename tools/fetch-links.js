// fetch-links.js

const fs = require('fs');
const path = require('path');
const https = require('https');
const readline = require('readline');
const { URL } = require('url');

// 你可以修改这个目录路径
const OUTPUT_DIR = "/Users/wood/workspace/funblocks-docs/docs/ai-tools";

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 读取链接文件
const rl = readline.createInterface({
  input: fs.createReadStream('./links.txt'),
  crlfDelay: Infinity,
});

const processLine = async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  try {
    const rawUrl = new URL(trimmed);
    const slug = rawUrl.pathname.split('/').filter(Boolean).pop();

    if (!slug) {
      console.warn(`❌ 无法从 URL 中提取文件名: ${trimmed}`);
      return;
    }

    const fetchUrl = `https://r.jina.ai/${trimmed}`;
    const outputPath = path.join(OUTPUT_DIR, `${slug}.md`);

    return new Promise((resolve) => {
      https.get(fetchUrl, (res) => {
        if (res.statusCode !== 200) {
          console.error(`❌ 请求失败: ${fetchUrl}, 状态码: ${res.statusCode}`);
          res.resume();
          resolve();
          return;
        }

        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          fs.writeFileSync(outputPath, data, 'utf8');
          console.log(`✅ 保存成功: ${outputPath}`);
          resolve();
        });
      }).on('error', (err) => {
        console.error(`❌ 请求出错: ${fetchUrl}`, err.message);
        resolve();
      });
    });
} catch(err) {
    console.log(err)
};
}

const processLines = async () => {
  for await (const line of rl) {
    await processLine(line);
  }
};

processLines();

rl.on('close', () => {
  console.log('🚀 全部链接处理完毕。');
});
