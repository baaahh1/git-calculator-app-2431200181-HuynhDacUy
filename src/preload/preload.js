const { contextBridge } = require('electron');
const { compute, formatNumber, symbolForOp } = require('.../shared/calculator');
contextBridge.exposeInIsolatedWorld('calc', {
    compute,
    formatNumber,
    symbolForOp,
});