---
inject: true
prepend: true
to: src/<%= layer %>/<%= slice %>/index.ts
---
export { <%= h.changeCase.pascal(componentName) %> } from './ui/<%= h.changeCase.pascal(componentName) %>';
