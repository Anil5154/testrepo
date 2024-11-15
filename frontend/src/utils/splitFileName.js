export function splitFileName(fileName) {
    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1) {
      // No extension found
      return [fileName, ''];
    } else {
      const baseName = fileName.slice(0, lastDotIndex);
      const extension = fileName.slice(lastDotIndex + 1);
      return [baseName, extension];
    }
  }