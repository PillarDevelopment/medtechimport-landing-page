#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Конфигурация
const config = {
  inputDir: './public/images/originals',
  outputDir: './public/images/products',
  thumbnailDir: './public/images/thumbnails',
  sizes: {
    catalog: { width: 400, height: 300, quality: 85 },
    product: { width: 600, height: 600, quality: 90 },
    thumbnail: { width: 150, height: 150, quality: 80 }
  }
};

// Создать папки если не существуют
function createDirectories() {
  [config.outputDir, config.thumbnailDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Оптимизировать изображение
function optimizeImage(inputPath, outputPath, size, quality) {
  try {
    const command = `magick "${inputPath}" -resize ${size.width}x${size.height}^ -gravity center -extent ${size.width}x${size.height} -quality ${quality} -format webp "${outputPath}"`;
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Оптимизировано: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Ошибка при оптимизации ${inputPath}:`, error.message);
  }
}

// Обработать все изображения
function processImages() {
  if (!fs.existsSync(config.inputDir)) {
    console.log(`❌ Папка ${config.inputDir} не найдена`);
    return;
  }

  const files = fs.readdirSync(config.inputDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  console.log(`📁 Найдено ${files.length} изображений для обработки`);

  files.forEach(file => {
    const inputPath = path.join(config.inputDir, file);
    const baseName = path.parse(file).name;

    // Создать версии для каталога
    const catalogPath = path.join(config.outputDir, `${baseName}-catalog.webp`);
    optimizeImage(inputPath, catalogPath, config.sizes.catalog, config.sizes.catalog.quality);

    // Создать версии для страницы товара
    const productPath = path.join(config.outputDir, `${baseName}-product.webp`);
    optimizeImage(inputPath, productPath, config.sizes.product, config.sizes.product.quality);

    // Создать миниатюры
    const thumbnailPath = path.join(config.thumbnailDir, `${baseName}-thumb.webp`);
    optimizeImage(inputPath, thumbnailPath, config.sizes.thumbnail, config.sizes.thumbnail.quality);
  });

  console.log('🎉 Обработка завершена!');
}

// Основная функция
function main() {
  console.log('🚀 Начинаем оптимизацию изображений...');
  createDirectories();
  processImages();
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, processImages };
