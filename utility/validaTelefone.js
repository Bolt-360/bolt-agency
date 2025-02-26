export const validatePhone = (phone) => {
    // Accepts formats like: (84)99999-9999 or 84999999999
    const regex = /^(?:\(?([0-9]{2})\)?[-. ]?)?([0-9]{5})[-. ]?([0-9]{4})$/;
    return regex.test(phone.replace(/\D/g, ''));
  };