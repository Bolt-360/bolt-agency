export const validateURL = (url) => {
    // Aceita URLs com ou sem protocolo (http/https)
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
  
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };