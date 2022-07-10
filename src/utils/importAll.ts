const importAll = (r: any): string[] => r.keys().map(r); // TODO add type to argument

// const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

export default importAll;