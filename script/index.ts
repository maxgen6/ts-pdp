// 1
enum UserEducationEnum {
  HIGHER = 'higher',
  MIDDLE = 'middle',
  DONT_HAVE = 'dontHave'
}

type TUser = {
  name: string,
  age: number
  hasJob: boolean,
  education: UserEducationEnum
  children: string[]
  experience: [number?, string?]
}

const userAlex: TUser = {
  name: 'Alex',
  age: 25,
  hasJob: true,
  education: UserEducationEnum.HIGHER,
  children: ['qwer', 'asdf'],
  experience: [5, 'Google']
}

const transformUserData = (user: TUser): string => {
  const { name, age, hasJob, education, children, experience: [years, job] } = user
  return `
    Name: ${name}
    Age: ${age}
    Has job: ${hasJob}
    Education: ${education}
    Children: ${!!children.length ? children.join(', ') : '-'}
    Experience: worked in ${job}, ${years} year(s)
  `
}

console.log(transformUserData(userAlex))

//2

const lastIndex = (str: string, char: string): number | null => {
  const index = str.lastIndexOf(char);
  return index === -1 ? null : index;
}

interface IUser {
  name: string,
  age: number,
  hasJob: boolean,
}

const getUsername = (user: IUser): string => {
  const { name } = user
  return name
}

//3
type TTransformToOption<T extends object> = {
  [P in keyof T]?: T[P]
}

type TPartUser = TTransformToOption<TUser>

type IfArray<T extends object, P> = T extends any[] ? T : P

type TArray = [number, string]

type TObj = {
  name: string
}

type Option = IfArray<TArray, TObj>

//4

function sealed(constructor: Function) {
  console.log("sealed decorator");
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

interface IVehicle {
  get: () => string
  set: (speed: number) => number
}

@sealed
abstract class Car implements IVehicle{
  constructor(
    protected brand: string,
    protected color: string,
    protected maxSpeed: number,
  ) {}

  get(): string {
    return this.brand
  }


  set(speed: number): number {
    return this.maxSpeed += speed
  }
}

class Audi extends Car{
  constructor(
    readonly type: string,
    protected color: string,
    protected maxSpeed: number
  ) {
    super('Audi', color, maxSpeed);
    this.type = type
  }

  getFullInfo(): string {
    return `
      Brand: ${this.brand},
      Type: ${this.type}
      Color: ${this.color}
      Max speed: ${this.maxSpeed}
    `
  }
}
