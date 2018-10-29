"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function helloWorld(_options) {
    return (tree, _context) => {
        tree.create(_options.name || 'hello', 'world');
        return tree;
    };
}
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map