export const evenList = [
  {
    id: 1,
    type: 'Seminar',
    nama: 'Oracle',
    tglMulai: new Date().setDate(new Date().getDate() + 1),
    tglAkhir: new Date().setDate(new Date().getDate() + 2),
    status: 1,
  },
  {
    id: 2,
    type: 'Seminar',
    nama: 'MongoDB',
    tglMulai: new Date().setDate(new Date().getDate() - 2),
    tglAkhir: new Date().setDate(new Date().getDate() - 1),
    status: 0,
  },
  {
    id: 3,
    type: 'Workshop',
    nama: 'Flutter',
    tglMulai: new Date().setDate(new Date().getDate() + 1),
    tglAkhir: new Date().setDate(new Date().getDate() + 2),
    status: 1,
  },
  {
    id: 5,
    type: 'Workshop',
    nama: 'FUllstack Developer',
    tglMulai: new Date().setDate(new Date().getDate() - 2),
    tglAkhir: new Date().setDate(new Date().getDate() - 1),
    status: 0,
  },
];
