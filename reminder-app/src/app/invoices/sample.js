const invoices = [
    {
        invoiceId: 'UI001',
        invoiceDate: new Date(),
        clientId: 'CL001',
        clientName: 'Pearson Hardman',
        amount: 100000.00,
        creditPeriod: 30,
        fullyPaid: true,
        reminderFlag: false,
        emailFlag: true,
        smsFlag: false,
        reminderDate: new Date(2019, 1, 23)
    },
    {
        invoiceId: 'UI002',
        invoiceDate: new Date(),
        clientId: 'CL002',
        clientName: 'Pearson Spector',
        amount: 50000.75,
        creditPeriod: 60,
        fullyPaid: false,
        reminderFlag: true,
        emailFlag: false,
        smsFlag: true,
        reminderDate: new Date(2019, 3, 23)
    },
    {
        invoiceId: 'UI003',
        invoiceDate: new Date(),
        clientId: 'CL001',
        clientName: 'Pearson Hardman',
        amount: 75000.00,
        creditPeriod: 90,
        fullyPaid: false,
        reminderFlag: false,
        emailFlag: true,
        smsFlag: true,
        reminderDate: new Date(2019, 6, 23)
    }
];
export default invoices;