// Central place for all API endpoints
const API_BASE_URL = "http://localhost:8080";
const API_AUTH_LOGIN = `${API_BASE_URL}/api/auth/login`;
const API_AUTH_REGISTER = `${API_BASE_URL}/api/auth/register`;
const API_CUSTOMERS = `${API_BASE_URL}/api/customers`;
const API_ITEMS = `${API_BASE_URL}/api/items`;
const API_ORDERS = `${API_BASE_URL}/api/orders`;
const API_DASHBOARD_STATS = `${API_BASE_URL}/api/dashboard/stats`;
const API_DASHBOARD_ACTIVITY = `${API_BASE_URL}/api/dashboard/activity`;
const API_AUTH_LOGOUT = `${API_BASE_URL}/api/auth/logout`;


const Image_uri = `https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D`;
// Add more endpoints as needed


//comman functions

document.getElementById("image").src = Image_uri;

/**
 * Checks if all required inputs in a form are filled (not empty, not just whitespace).
 * @param {string} formId - The id of the form to check.
 * @returns {boolean} true if all required fields are filled, false otherwise.
 */
function checkFormFilled(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    for (let input of requiredInputs) {
        if (input.type === 'checkbox' || input.type === 'radio') {
            // At least one checked for group
            const group = form.querySelectorAll(`input[name='${input.name}'][required]`);
            if ([...group].filter(i => i.checked).length === 0) return false;
        } else if (input.value.trim() === '') {
            return false;
        }
    }
    return true;
}