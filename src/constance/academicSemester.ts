export const semesterOptions = [
    { value: "01", label: "Autumn", },
    { value: "02", label: "Summer",  },
    { value: "03", label: "Fall",  }
]

const currentYear = new Date().getFullYear()
export const yearOptions = [0, 1, 2, 3, 4].map(number => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
    text: String(currentYear + number)
}))


const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

export const monthOptions = months.map((item) => ({
    value: item,
    label: item,
}));