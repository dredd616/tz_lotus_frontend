export const ERROR_MSG = {
  invalid: 'Невалидные данные',
  required: (name: string) => `Поле "${name}" обязательно`,
  min: (count: number, name: string) => `Поле ${name}: минимум ${count}`,
};
