let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

const newMembers = [
    {
        id: 1,
        username: 'Mohammad Amin',
        title: 'Web Developer',
        img:'./user.jpg'
    },
    {
        id: 2,
        username: 'ali esf',
        title: 'Seo Eng',
        img:'./user.jpg'
    },
    {
        id: 3,
        username: 'Zahra Agayi',
        title: 'Weblog',
        img:'./user.jpg'
    },
    {
        id: 4,
        username: 'mani zamani',
        title: 'Hacker',
        img:'./user.jpg'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'mehdi sharif',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: './user.jpg'
    },
    {
        id: 2,
        customer: 'payam kouchakzade',
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: './user.jpg'
    },
    {
        id: 3,
        customer: 'ali molae',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: './user.jpg'
    },
    {
        id: 4,
        customer: 'hossein ranjbar',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: './user.jpg'
    },
]


let userRows = [
    {
        id: 1,
        username: 'hossein alika',
        avatar: './user.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'hossi@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: './user.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan hasan',
        avatar: './user.jpg',
        status: 'active',
        transaction: '$98',
        email: 'sasi@gmail.com'
    },
    {
        id: 4,
        username: 'reza alik',
        avatar: './user.jpg',
        status: 'active',
        transaction: '$0',
        email: 'rezi@gmail.com'
    },
    {
        id: 5,
        username: 'mehdi barzig',
        avatar: './user.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'mehdi@gmail.com'
    }
]

export { xAxisData, newMembers, transactions, userRows }