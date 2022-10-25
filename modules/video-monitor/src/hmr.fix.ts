// @ts-nocheck
// https://github.com/vitejs/vite/blob/main/packages/plugin-react/src/fast-refresh.ts#L32-L36
import RefreshRuntime from '/video-monitor/@react-refresh'
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
