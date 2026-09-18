import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const assetsDir = './public/assets';
const files = readdirSync(assetsDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  const filepath = join(assetsDir, file);
  const stat = statSync(filepath);
  const sizeBefore = Math.round(stat.size / 1024);

  if (ext === '.jpg' || ext === '.jpeg') {
    await sharp(filepath)
      .jpeg({ quality: 72, progressive: true, mozjpeg: true })
      .toFile(filepath + '.tmp.jpg');
    
    const { execSync } = await import('child_process');
    execSync(`mv "${filepath}.tmp.jpg" "${filepath}"`);
    
    const newSize = Math.round(statSync(filepath).size / 1024);
    console.log(`✅ ${file}: ${sizeBefore}KB → ${newSize}KB`);
  } else if (ext === '.webp') {
    await sharp(filepath)
      .webp({ quality: 75, effort: 4 })
      .toFile(filepath + '.tmp.webp');
    
    const { execSync } = await import('child_process');
    execSync(`mv "${filepath}.tmp.webp" "${filepath}"`);
    
    const newSize = Math.round(statSync(filepath).size / 1024);
    console.log(`✅ ${file}: ${sizeBefore}KB → ${newSize}KB`);
  }
}
console.log('\n🎉 All images compressed!');
