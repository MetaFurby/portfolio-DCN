
const importItem = async (path: string) => {
	try {
	  // Attempt to import the file using a dynamic import
	  const file = await import(path);
	  // Return the file's default export
	  return file.default;
	} catch (error) {
	  // Handle any errors such as the image not existing
	  console.error('Error importing file:', error);
	  // Return a fallback image or null
	  return null;
	}
  };
  
  export default importItem;