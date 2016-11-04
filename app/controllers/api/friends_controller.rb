class Api::FriendsController < ApplicationController

  def index
    @friends = current_user.friends
    @pending = current_user.pending
    @requesting = current_user.requesting
    @users = User.all - @friends - @pending - @requesting - [current_user]
  end

end
