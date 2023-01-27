type Combinal = string | number;
type ConversionDescriptor = 'ADMIN' | 'USER' | 'SUPER_ADMIN'
const person: {
    name: Combinal,
    age: Combinal,
    role: ConversionDescriptor
} = {
    name: 'Nitesh',
    age: 27,
    role: 'ADMIN'
}