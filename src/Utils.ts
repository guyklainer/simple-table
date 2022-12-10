export const capitalize = (word: string) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`.replace(/([a-z])([A-Z])/g, '$1 $2');
}