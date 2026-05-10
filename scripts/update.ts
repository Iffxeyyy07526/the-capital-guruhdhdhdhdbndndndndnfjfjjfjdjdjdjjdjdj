import * as fs from 'fs';

const filePath = 'app/email-templates/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the CSS class
content = content.replace(
  /\.logo \{ color: #10b981; font-size: 24px; font-weight: 900; text-decoration: none; margin-bottom: 30px; display: inline-block; letter-spacing: -1px; \}/g,
  ''
);

content = content.replace(
  /\.logo \{ color: #10b981; font-size: 24px; font-weight: 900; text-decoration: none; margin-bottom: 30px; display: block; text-align: center; letter-spacing: -1px; \}/g,
  ''
);


// Replace the {{ .SiteURL }} occurrences
content = content.replace(
  /<a href="\{\{ \.SiteURL \}\}" class="logo">THE CAPITAL GURU<\/a>/g,
  `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="{{ .SiteURL }}" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>`
);

// Replace the plain URL ones
content = content.replace(
  /<a href="https:\/\/thecapitalguru\.net" class="logo">THE CAPITAL GURU<\/a>/g,
  `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px; text-align: center;"><tr><td align="center"><a href="https://thecapitalguru.net" style="text-decoration: none; display: inline-block;"><span style="display: block; font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">THE CAPITAL GURU</span><span style="display: block; font-size: 9px; font-weight: 600; color: #10b981; letter-spacing: 6px; text-transform: uppercase; margin-top: 4px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Wealth Operating System</span></a></td></tr></table>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacing logos');
