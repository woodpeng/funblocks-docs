const fs = require('fs/promises');
const path = require('path');
const axios = require('axios');

// 配置项
const INPUT_FILE = 'mental_models.txt';  // 每行一个 mental model 名
// const OUTPUT_DIR = './output';           // 输出文件夹
const OUTPUT_DIR = "/Users/wood/workspace/funblocks-docs/docs/thinking-toolkit/classic-mental-models/";
const API_ENDPOINT = 'http://localhost:50058/ai/generateMentalModelPage'; // 替换为实际 API 地址

// const API_ENDPOINT = 'https://service.funblocks.net/ai/generateMentalModelPage'; // 替换为实际 API 地址


// 模板生成函数
function generateMarkdown(index, title, body) {
    return `---\nsidebar_position: ${index}\ntitle: ${title}\n---\n\n${body}`;
}

// 请求 Web API（可自定义 body、headers 等）
async function fetchContent(modelName) {
    try {
        const response = await axios.post(API_ENDPOINT, { data: {mental_model: modelName} });
        return response.data.data || '';  // 根据实际 API 响应结构修改
    } catch (err) {
        console.error(`❌ 请求失败: ${modelName}`);
        return '（请求失败，暂无内容）';
    }
}

// 主程序
async function main() {
    // 确保输出目录存在
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // 读取并处理 mental models
    const rawText = await fs.readFile(INPUT_FILE, 'utf-8');
    const models = [...new Set(rawText
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => line.split("（")[0])
    )];

    // console.log('models...........', models);
    models.map(m => console.log(m))

    const FILE_INIT_INDEX = 1;


    for (let i = 0; i < models.length; i++) {
        const model = models[i];
        let content = await fetchContent(model);

        if(content?.length < 100) {
            console.log('failed:', model)
            console.log('incomplete content: ', content)
            continue;
        }

        if (content.startsWith('```')) {
            content = content.split('\n').slice(1, -1).join('\n');
        }

        const markdown = generateMarkdown(i + FILE_INIT_INDEX, model, content);

        const filename = model.replace(/\s+/g, '-') + '.md';
        const outputPath = path.join(OUTPUT_DIR, filename);

        await fs.writeFile(outputPath, markdown, 'utf-8');
        console.log(`✅ 写入: ${outputPath}`);
    }
}

main().catch(console.error);
