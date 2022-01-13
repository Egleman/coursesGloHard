import { render } from './render';

export const filterUsers = () => {
    const isChildren = document.getElementById('btn-isChildren');
    const isPermissions = document.getElementById('btn-isPermissions');
    const isAll = document.getElementById('btn-isAll');

    isChildren.addEventListener('click', () => {
        userService.filterUsers('children').then(users => {
            render(users);
        });
    });

    isPermissions.addEventListener('click', () => {
        userService.filterUsers('permissions').then(users => {
            render(users);
        });
    });

    isAll.addEventListener('click', () => {
        userService.getUsers().then(users => {
            render(users);
        });
    });

};