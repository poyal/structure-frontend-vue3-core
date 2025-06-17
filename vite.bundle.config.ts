export function manualChunks(id: string) {
  if (id.includes('node_modules/@js-joda')) {
    return 'vendor.js-joda';
  }

  if (id.includes('node_modules')) {
    return 'vendor';
  }
}
