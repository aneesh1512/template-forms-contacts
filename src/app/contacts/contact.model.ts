export interface Contact {
  id: string,
  firstName: string,
  icon: string | null,
  lastName: string,
  dateOfBirth: Date | null,
  favoritesRanking: number | null,
  phone: Phone[],
  address: Address,
  notes: string
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}

export const phoneTypeValues = [{
  title: 'Mobile', value: 'mobile'
}, {
  title: 'Work', value: 'work'
}, {
  title: 'Other', value: 'other'
}]


export const addressTypeValues = [{
  title: 'Home', value: 'home'
}, {
  title: 'Work', value: 'work'
}, {
  title: 'Other', value: 'otherF'
}]