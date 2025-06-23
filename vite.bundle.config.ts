export function manualChunks(id: string) {
  if (id.includes('node_modules')) {
    return 'vendor';
  }
}
