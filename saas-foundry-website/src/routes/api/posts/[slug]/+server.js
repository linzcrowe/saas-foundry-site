import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function GET({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), `src/routes/insights/${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = marked(content);

  return json({
    slug,
    title: data.title,
    date: data.date,
    content: htmlContent
  });
}
