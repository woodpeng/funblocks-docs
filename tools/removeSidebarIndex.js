const fs = require('fs/promises');
const path = require('path');

const targetDir = path.resolve(__dirname, "/Users/wood/workspace/funblocks-docs/docs/thinking-toolkit/classic-mental-models/"); // 替换为你的目标文件夹

async function processMarkdownFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');
    const filtered = lines.filter(line => !line.trim().startsWith('sidebar_position:'));
    await fs.writeFile(filePath, filtered.join('\n'), 'utf-8');
    console.log(`✅ Processed: ${filePath}`);
  } catch (err) {
    console.error(`❌ Error processing ${filePath}:`, err);
  }
}

async function walkDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      await processMarkdownFile(fullPath);
    }
  }
}

walkDir(targetDir).then(() => {
  console.log('🎉 All markdown files processed.');
});
