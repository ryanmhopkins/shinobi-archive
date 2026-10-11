import {mkdir,cp,readFile} from 'node:fs/promises';
const data=JSON.parse(await readFile('public/cards.json','utf8'));
if(data.cards.length!==880||new Set(data.cards.map(c=>c.id)).size!==880)throw Error('Card catalog count or uniqueness check failed');
for(const card of data.cards){if(!data.sets.some(s=>s.id===card.set))throw Error('Unknown set');for(const link of [card.image,card.back]){if(link&&!new URL(link).hostname.endsWith('.kayouofficial.com'))throw Error('Unexpected image origin');}}
await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});console.log(`Built ${data.cards.length} cards in ${data.sets.length} series.`);
