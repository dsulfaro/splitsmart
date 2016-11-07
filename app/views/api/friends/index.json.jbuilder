json.friends do json.array! @friends, :username, :id end
json.pending do json.array! @pending, :username, :id end
json.requesting do json.array! @requesting, :username end
json.users do json.array! @users, :username, :id end
