const fs = require('fs/promises');
const path = require('path');

const targetDir = path.resolve(__dirname, "/Users/wood/workspace/funblocks-docs/thinking-matters/classic-mental-models/"); // 替换为你的目标文件夹

async function processMarkdownFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    if(!content || content.includes('[AIFlow](/index)')) return;

    await fs.writeFile(filePath, `${content}\n\n---\n\nThink better with **AI + Mental Models** – Try **[AIFlow](/)**`, 'utf-8');
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
