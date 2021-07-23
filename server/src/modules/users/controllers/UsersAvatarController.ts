import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const avatarFilename = request.file?.filename as string;

    console.log(avatarFilename);
    const updateAvatar = new UpdateUserAvatarService();
    const user = await updateAvatar.execute({ user_id, avatarFilename });

    return response.json(user);
  }
}
