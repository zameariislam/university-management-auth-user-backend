import configure from '../../configure'

import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  if (!user?.password) {
    user.password = configure.university_student_password as string
  }

  const id = await generateUserId()
  user.id = id

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new Error('Failed to create User !')
  }

  return createdUser
}

export const UserService = {
  createUser,
}
