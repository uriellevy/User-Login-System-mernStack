export interface IUserAuth {
    email: string
    password: string
}

export interface IUser extends Document {
    _id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    // createDate?: Date
    // updateDate?: Date
}

export interface IJWTPayload {
    userId: number
    isAdmin: boolean
}

// export type Role = 'isAdmin' | 'isSuperUser';