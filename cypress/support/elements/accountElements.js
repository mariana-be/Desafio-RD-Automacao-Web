//Elementos para cadastrar o Admin no site

class AccountElements {

    menuAdmin = () => ':nth-child(1) > .oxd-main-menu-item';

    buttonAddAdmin = () => '.orangehrm-header-container > .oxd-button';

    userRole = () => '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div';

    employeeName = () => '.oxd-autocomplete-text-input > input';

    status = () => ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text';

    userName = () => ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input';

    password = () => '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input';

    confirmPassword = () => ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';

    buttonSave = () => '.oxd-button--secondary';
}
export default AccountElements;