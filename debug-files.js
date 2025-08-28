const fs = require('fs').promises;
const path = require('path');

async function debugFiles() {
    console.log('Current working directory:', process.cwd());
    console.log('__dirname:', __dirname);
    
    // Check test-data directory
    const testDataDir = path.join(__dirname, 'test-data');
    try {
        const files = await fs.readdir(testDataDir);
        console.log('Files in test-data directory:', files);
    } catch (error) {
        console.log('test-data directory error:', error.message);
    }
    
    // Check specific file
    const credentialsPath = path.join(__dirname, 'test-data', 'credentials.json');
    console.log('Credentials file path:', credentialsPath);
    
    try {
        const exists = await fs.access(credentialsPath).then(() => true).catch(() => false);
        console.log('File exists:', exists);
        
        if (exists) {
            const content = await fs.readFile(credentialsPath, 'utf8');
            console.log('File content:', content);
            try {
                const parsed = JSON.parse(content);
                console.log('Parsed JSON:', parsed);
                console.log('Is array:', Array.isArray(parsed));
                console.log('Array length:', parsed.length);
            } catch (parseError) {
                console.log('JSON parse error:', parseError.message);
            }
        }
    } catch (error) {
        console.log('File access error:', error.message);
    }
}

debugFiles();