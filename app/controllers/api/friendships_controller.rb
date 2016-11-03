class Api::FriendshipsController < ApplicationController

  def create
    pending = Friendship.create({
      user_id: current_user.id,
      friend_id: params[:friend_id],
      status: "pending"
      })

    requesting = Friendship.create({
      user_id: params[:friend_id],
      friend_id: current_user.id,
      status: "requesting"
      })

    @friend = User.find_by_id(params[:friend_id])

    if pending.valid? && requesting.valid?
      pending.save
      requesting.save
      render 'api/friends/show'
    else
      render json: ["Invalid friend request"], status: 422
    end
  end # create

  def update
    pending = Friendship.find_by({
      user_id: current_user.id,
      friend_id: params[:friend_id]
      })
    accepting = Friendship.find_by({
      user_id: params[:friend_id],
      friend_id: current_user.id
      })

    @friend = User.find_by_id(params[:friend_id])

    if pending && accepting
      pending.status = "accepted"
      accepting.status = "accepted"
      pending.save
      accepting.save
      render 'api/friends/show'
    else
      render json: ["Invalid accept request"], status: 422
    end
  end # update

  def destroy
    friend1 = Friendship.find_by({
      user_id: current_user.id,
      friend_id: params[:friend_id]
      })
    friend2 = Friendship.find_by({
      user_id: params[:friend_id],
      friend_id: current_user.id
      })

    @friend = User.find_by_id(params[:friend_id])

    if friend1 && friend2
      Friendship.destroy(friend1)
      Friendship.destroy(friend2)
      render 'api/friends/show'
    else
      render json: ["cannot delete friend"], status: 422
    end
  end
end
