---
to: src/<%= layer %>/<%= slice %>/index.ts
---
export { <%= h.changeCase.pascal(slice) %> } from './ui/<%= h.changeCase.pascal(slice) %>';
