import fs from 'fs';

const html = fs.readFileSync('old_index.html', 'utf-8');

// Extract CSS
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const cssContent = styleMatch ? styleMatch[1] : '';
fs.writeFileSync('src/index.css', cssContent.trim());

// Extract JS
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
const jsContent = scriptMatch ? scriptMatch[1] : '';

// Extract Body
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<script>/); // assuming script is at the very end of body
let bodyContent = bodyMatch ? bodyMatch[1] : '';
if (!bodyContent) {
    const backupMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
    bodyContent = backupMatch ? backupMatch[1] : '';
}

// Convert HTML to JSX
let jsx = bodyContent;
jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/for=/g, 'htmlFor=');

// Close unclosed tags
jsx = jsx.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
jsx = jsx.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
jsx = jsx.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');
jsx = jsx.replace(/<source([^>]*?)(?<!\/)>/g, '<source$1 />');

// Remove comments
jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

// Convert inline styles like style="color: red; margin-top: 10px;" to style={{color: 'red', marginTop: '10px'}}
// (Simplistic approach: we might just remove them or try to convert. Let's try basic conversion)
jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').filter(Boolean);
    const reactStyle = rules.map(rule => {
        const [key, value] = rule.split(':');
        if (!key || !value) return '';
        const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelKey}: '${value.trim().replace(/'/g, "\\'")}'`;
    }).filter(Boolean).join(', ');
    return `style={{${reactStyle}}}`;
});

// SVG fixes (common ones)
const svgAttrs = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'clip-path', 'fill-opacity'];
svgAttrs.forEach(attr => {
    const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
    const regex = new RegExp(attr + '=', 'g');
    jsx = jsx.replace(regex, camel + '=');
});

// Build App.jsx
const appJsxCode = `import { useEffect } from 'react';
import './index.css';

export default function App() {
  useEffect(() => {
    // Run the original JS
    try {
      ${jsContent}
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('src/App.jsx', appJsxCode);
console.log('Conversion done!');
