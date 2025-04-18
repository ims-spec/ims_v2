import {IAdminMenuItem} from "@/types.ts";

export const menuItems: IAdminMenuItem[] = [
    {
        id: '1',
        liClassName: 'nav-item',
        link: {
            to: '/admin',
            className: 'nav-link text-dark gap-3',
        },
        inLink: {
            iconClassName: 'bi bi-person-circle p-2 g-col-6',
            spanClassName:
                'p-2 g-col-6',
            spanText:
                'Dashboard'
        }
    },
    {
        id: '2',
        liClassName: 'nav-item',
        link: {
            to: '/admin/users',
            className: 'nav-link text-dark gap-3',
        },
        inLink: {
            iconClassName: 'bi bi-person-circle p-2 g-col-6',
            spanClassName:
                'p-2 g-col-6',
            spanText:
                'Users'
        }
    },
    {
        id: '3',
        liClassName: 'nav-item',
        link: {
            to: '/admin/goals',
            className: 'nav-link text-dark gap-3'
        },
        inLink: {
            iconClassName: 'bi bi-person-circle p-2 g-col-6',
            spanClassName:
                'p-2 g-col-6',
            spanText:
                'Goals'
        }
    },
    {
        id: '4',
        liClassName: 'nav-item',
        link: {
            to: '/admin/divisions',
            className: 'nav-link text-dark gap-3'
        },
        inLink: {
            iconClassName: 'bi bi-person-circle p-2 g-col-6',
            spanClassName:
                'p-2 g-col-6',
            spanText:
                'Divisions'
        }
    },
    {
        id: '5',
        liClassName: 'nav-item',
        link: {
            to: '/admin/settings',
            className: 'nav-link text-dark gap-3'
        },
        inLink: {
            iconClassName: 'bi bi-person-circle p-2 g-col-6',
            spanClassName:
                'p-2 g-col-6',
            spanText:
                'Settings'
        }
    }
]